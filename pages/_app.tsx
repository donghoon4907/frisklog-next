import 'antd/dist/antd.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'highlight.js/styles/atom-one-light.css';
import 'nprogress/nprogress.css';

import type { AppProps } from 'next/app';
import Router from 'next/router';
import { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import NProgress from 'nprogress';
import { END } from 'redux-saga';

import { wrapper } from '../store';
import { COOKIE_THEME_KEY, COOKIE_TOKEN_KEY } from '../lib/cookie/cookie.key';
import { Providers } from '../components/Provider';
import { setDarkMode } from '../actions/switch/theme-mode.action';
import { AppState } from '../reducers';
import { LoadingState } from '../reducers/common/loading';
import { Loader } from '../components/Loader';
import { ServerCookie } from '../lib/cookie/cookie.server';
import { loadUserRequest } from '../actions/user/load-user.action';
import { updateClientHeader } from '../graphql/client';
import { copyToClipboard } from '../lib/copy';
import { searchKeywordsRequest } from '../actions/search-keyword/search-keywords.action';

NProgress.configure({ showSpinner: false });

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    height: 100%;

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

    const handleClickGlobal = (evt: MouseEvent) => {
        const el = evt.target as HTMLElement;
        // 소스 보기 관련
        if (el.classList.contains('contraction-code')) {
            el.classList.remove('contraction-code');
            el.classList.add('expansion-code');
        }

        // 복사 관련
        if (el.classList.contains('copy-code-btn')) {
            const textarea = el.querySelector('textarea');

            if (textarea) {
                copyToClipboard(textarea);
            }
        }
        // photos 관련
        // if (el.classList.contains('photos-icon')) {
        //     dispatch(showPhotoPopup());
        // }
    };

    useEffect(() => {
        window.addEventListener('click', handleClickGlobal);

        return () => {
            window.removeEventListener('click', handleClickGlobal);
        };
    }, []);

    return (
        <Providers>
            <Container>
                <Component {...pageProps} />
                {loading && <Loader />}
            </Container>
        </Providers>
    );
}

MyApp.getInitialProps = wrapper.getInitialAppProps(
    ({ dispatch, getState, sagaTask }) =>
        async ({ Component, ctx, router }) => {
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
                // 인기 키워드 요청
                dispatch(searchKeywordsRequest({ limit: 5 }));

                if (token) {
                    dispatch(loadUserRequest());

                    if (router.route === '/404') {
                        dispatch(END);

                        await sagaTask?.toPromise();
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
