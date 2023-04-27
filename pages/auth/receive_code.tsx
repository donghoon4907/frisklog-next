import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { COOKIE_TOKEN_KEY } from '../../lib/cookie/cookie.key';
import { setCookie } from '../../lib/cookie/cookie.client';
import { loginNaverRequest } from '../../actions/user/login-naver.action';
import { loginGithubRequest } from '../../actions/user/login-github.action';
import { loginGoogleRequest } from '../../actions/user/login-google.action';

const ReceiveCode: NextPage = () => {
    const router = useRouter();

    const dispatch = useDispatch();

    useEffect(() => {
        const { code, state } = router.query;

        // Github, Naver
        if (typeof code === 'string') {
            // Naver
            if (state === 'naver') {
                dispatch(
                    loginNaverRequest({
                        code,
                        callbackFunc: (token: string) => {
                            setCookie(COOKIE_TOKEN_KEY, token);

                            router.replace('/');
                        },
                    }),
                );
                // Github
            } else if (state === 'github') {
                dispatch(
                    loginGithubRequest({
                        code,
                        callbackFunc: (token: string) => {
                            setCookie(COOKIE_TOKEN_KEY, token);

                            router.replace('/');
                        },
                    }),
                );
            }
        } else {
            const parsedHash = new URLSearchParams(
                window.location.hash.substring(1),
            );

            const token = parsedHash.get('access_token');

            // Google
            if (token) {
                dispatch(
                    loginGoogleRequest({
                        token,
                        callbackFunc: (token: string) => {
                            setCookie(COOKIE_TOKEN_KEY, token);

                            router.replace('/');
                        },
                    }),
                );
            }
        }
    }, []);

    return (
        <>
            <Head>
                <title>코드 발급</title>
            </Head>
        </>
    );
};

export default ReceiveCode;
