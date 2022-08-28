import type { AppProps } from 'next/app'
import jwt, { JwtPayload } from "jsonwebtoken";
import { ServerResponse } from 'http';
import Cookies from "cookies";

import { wrapper } from "../store"
import { COOKIE_THEME_KEY, COOKIE_TOKEN_KEY } from '../lib/cookie/cookie.key'
import { client } from '../graphql/client';
import Provider from '../components/Provider';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

MyApp.getInitialProps = wrapper.getInitialAppProps(store => async ({ Component, ctx }) => {
  const { req, res } = ctx;
  
  const isServer = !!req;

  if(isServer) {
    const state = store.getState();

    const cookies = new Cookies(req, res as ServerResponse);
    // 테마 정보 불러오기
    let mode = cookies.get(COOKIE_THEME_KEY) || null;

    if(mode === null) {
      mode = state.theme.mode;

      cookies.set(COOKIE_THEME_KEY, JSON.stringify(mode));
    } else {
      mode = JSON.parse(mode);
    }

    state.theme = {
      ...state.theme,
      mode
    };
    // 토큰 정보 불러오기
    let token = cookies.get(COOKIE_TOKEN_KEY) || null;

    if(token) {
      client.setHeader("authorization", `Bearer ${token}`)

      const jwtSecret = process.env.JWT_SECRET;

      if (jwtSecret) {
        try {
          const { iat, ...other } = jwt.verify(token, jwtSecret) as JwtPayload;
  
          
  
          state.user = {
            ...other,
            ...state.user,
          };
        } catch {
          console.error("[NEXT_APP] Failed to verify token.");
          // delete cookie
          cookies.set(COOKIE_TOKEN_KEY)
        }
      } else {
        console.error("[NEXT_APP] Failed to load jwt secret.");
      }
    }
  }

  let pageProps = {};
  if(Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps }
})

export default wrapper.withRedux(MyApp)
