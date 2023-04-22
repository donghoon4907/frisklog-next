import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import { CgDanger } from 'react-icons/cg';

import { Header } from '../../components/header';
import { AuthLayout } from '../../components/layout/Auth';
import { Button } from '../../components/button';
import { useRoute } from '../../hooks/use-route';

const Body = styled.div`
    padding-top: 21px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const IconWrapper = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;

    & > svg {
        width: 50px;
        height: 50px;
        fill: ${({ theme }) => theme.iconColor};
    }
`;

const SubTitle = styled.strong`
    display: block;
    margin-top: 30px;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
`;

const Content = styled.p`
    font-size: 14px;
    line-height: 22px;
    margin-top: 11px;
    color: #8e8e8e;
`;

const ButtonWrapper = styled.div`
    margin-top: 40px;
    width: 100%;
`;

const NotFound: NextPage = () => {
    const { move } = useRoute();

    const handleClick = () => {
        move('/');
    };

    return (
        <>
            <Head>
                <title>Frisklog - 404</title>
            </Head>
            <Header />
            <AuthLayout>
                <Body>
                    <IconWrapper>
                        <CgDanger />
                    </IconWrapper>
                    <SubTitle>Frisklog 서비스 오류 안내</SubTitle>
                    <Content>올바르지 않은 접근입니다.</Content>
                    <ButtonWrapper>
                        <Button
                            type="button"
                            colorType="primary"
                            onClick={handleClick}
                        >
                            홈으로 가기
                        </Button>
                    </ButtonWrapper>
                </Body>
            </AuthLayout>
        </>
    );
};

export default NotFound;
