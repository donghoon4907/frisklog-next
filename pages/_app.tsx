import type { AppProps } from 'next/app'
import jwt, { JwtPayload } from "jsonwebtoken";
import { ServerResponse } from 'http';
import Cookies from "cookies";
import { ThemeProvider, DefaultTheme} from "styled-components"

import { wrapper } from "../store"
import { COOKIE_TOKEN_KEY } from '../lib/cookie/cookie.key'
import { client } from '../graphql/client';

const light = {
  
}

const dark = {

}

const theme: DefaultTheme = {
  colors: {
    primary: "#111",
    secondary: "#0070f3"
  }
}


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

MyApp.getInitialProps = wrapper.getInitialAppProps(store => async ({ Component, ctx }) => {
  const { req, res } = ctx;
  
  const isServer = !!req;

  if(isServer) {
    const cookies = new Cookies(req, res as ServerResponse);

    let token = cookies.get(COOKIE_TOKEN_KEY) || null;

    if(token) {
      client.setHeader("authorization", `Bearer ${token}`)

      const jwtSecret = process.env.JWT_SECRET;

      if (jwtSecret) {
        try {
          const { iat, ...other } = jwt.verify(token, jwtSecret) as JwtPayload;
  
          const state = store.getState();
  
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
