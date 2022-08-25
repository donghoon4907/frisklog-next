import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Cookies from "cookies";
import jwt, { JwtPayload } from "jsonwebtoken";

import { wrapper } from "../store"
import { STORAGE_TOKEN_KEY } from '../lib/cookie'
import { ServerResponse } from 'http';
import { client } from '../graphql/client';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

MyApp.getInitialProps = wrapper.getInitialAppProps(store => async ({ Component, ctx }) => {
  const { req, res } = ctx;
  
  const isServer = !!req;

  if(isServer) {
    const cookies = new Cookies(req, res as ServerResponse);

    let token = cookies.get(STORAGE_TOKEN_KEY) || null;

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
          console.error("Failed to verify token.");
  
          cookies.set(STORAGE_TOKEN_KEY)
        }
      } else {
        console.error("Failed to load jwt secret.");
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
