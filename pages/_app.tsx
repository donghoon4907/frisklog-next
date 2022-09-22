import 'antd/dist/antd.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import type { AppProps } from 'next/app';
import jwt, { JwtPayload } from 'jsonwebtoken';
import Cookies from 'cookies';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { wrapper } from '../store';
import { COOKIE_THEME_KEY, COOKIE_TOKEN_KEY } from '../lib/cookie/cookie.key';
import { Providers } from '../components/Provider';
import { Layout } from '../components/layout';
import { setDarkMode } from '../actions/switch/theme-mode.action';
import { Header } from '../components/header';
import { AuthModal } from '../components/modal/Auth';
import { SetPostModal } from '../components/modal/SetPost';
import { setUser } from '../actions/user/user.action';
import { AppState } from '../reducers';
import { LoadingState } from '../reducers/common/loading';
import { Loader } from '../components/Loader';
import { SetUserModal } from '../components/modal/SetUser';

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
`;

function MyApp({ Component, pageProps }: AppProps) {
    const { loading } = useSelector<AppState, LoadingState>(
        (state) => state.loading,
    );

    return (
        <Providers>
            <AppContainer>
                <Header />
                <Layout>
                    <Component {...pageProps} />
                </Layout>
                <AuthModal />
                <SetPostModal />
                <SetUserModal />
                {loading && <Loader />}
            </AppContainer>
        </Providers>
    );
}

MyApp.getInitialProps = wrapper.getInitialAppProps(
    (store) =>
        async ({ Component, ctx }) => {
            const { req, res } = ctx;

            const isServer = !!req && !!res;

            if (isServer) {
                const state = store.getState();

                const cookies = new Cookies(req, res);
                // 테마 정보 불러오기
                let mode = cookies.get(COOKIE_THEME_KEY) || null;

                if (mode === null) {
                    mode = state.common.mode;

                    cookies.set(COOKIE_THEME_KEY, mode, { httpOnly: false });
                }

                if (mode === 'dark') {
                    store.dispatch(setDarkMode());
                }

                // 토큰 정보 불러오기
                let token = cookies.get(COOKIE_TOKEN_KEY) || null;

                if (token) {
                    const jwtSecret = process.env.JWT_SECRET;

                    if (jwtSecret) {
                        try {
                            const { id, nickname, avatar, isMaster } =
                                jwt.verify(token, jwtSecret) as JwtPayload;

                            store.dispatch(
                                setUser({
                                    id,
                                    nickname,
                                    avatar,
                                    isMaster,
                                }),
                            );
                        } catch {
                            console.error('[NEXT_APP] Failed to verify token.');
                            // delete cookie
                            cookies.set(COOKIE_TOKEN_KEY);
                        }
                    } else {
                        console.error('[NEXT_APP] Failed to load jwt secret.');
                    }
                }
            }

            let pageProps = {};
            if (Component.getInitialProps) {
                pageProps = await Component.getInitialProps(ctx);
            }

            return { pageProps };
        },
);

export default wrapper.withRedux(MyApp);
