import type { NextPage } from 'next';
import Head from 'next/head';
import { END } from 'redux-saga';

import { wrapper } from '../../store';

const Error: NextPage = () => (
    <>
        <Head>
            <title>404 - Not found page</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>페이지를 찾을 수 없습니다.</div>
    </>
);

export default Error;
