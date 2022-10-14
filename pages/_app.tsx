import 'antd/dist/antd.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import type { AppProps } from 'next/app';
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
import { AppState } from '../reducers';
import { LoadingState } from '../reducers/common/loading';
import { Loader } from '../components/Loader';
import { SetUserModal } from '../components/modal/SetUser';
import { ServerCookie } from '../lib/cookie/cookie.server';
import { loadUserRequest } from '../actions/user/load-user.action';
import { updateClientHeader } from '../graphql/client';
import { getNotificationsRequest } from '../actions/notification/get-notifications.action';

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
    ({ dispatch, getState }) =>
        async ({ Component, ctx }) => {
            const { req, res } = ctx;

            const isServer = !!req && !!res;

            if (isServer) {
                const state = getState();

                const cookies = new ServerCookie(req, res);
                // 테마 정보 불러오기
                let mode = cookies.getCookie(COOKIE_THEME_KEY);

                if (mode === null) {
                    mode = state.common.mode;

                    cookies.setCookie(COOKIE_THEME_KEY, mode);
                }

                if (mode === 'dark') {
                    dispatch(setDarkMode());
                }

                // 토큰 정보 불러오기
                let token = cookies.getCookie(COOKIE_TOKEN_KEY);

                // graphql-request client header update
                updateClientHeader({ token });

                if (token) {
                    dispatch(loadUserRequest());

                    dispatch(getNotificationsRequest({ limit: 10 }));
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
