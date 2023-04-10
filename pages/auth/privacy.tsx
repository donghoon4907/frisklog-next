import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';

import { AuthLayout } from '../../components/layout/Auth';

const Title = styled.h2`
    display: block;
    font-weight: 600;
    font-size: 24px;
    line-height: 34px;
`;

const Privacy: NextPage = () => {
    return (
        <>
            <Head>
                <title>Frisklog - 개인정보 수집 및 이용 동의 전문</title>
            </Head>
            <AuthLayout>
                <Title>서비스 약관에 동의해 주세요.</Title>
            </AuthLayout>
        </>
    );
};

export default Privacy;
