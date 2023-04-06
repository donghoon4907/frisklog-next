import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';

import { SignInForm } from '../../components/form/SignIn';
import { GithubLoginButton } from '../../components/button/GithubLogin';
import { NaverLoginButton } from '../../components/button/NaverLogin';

const Container = styled.div`
    height: 100%;

    &:before {
        display: inline-block;
        height: 100%;
        vertical-align: middle;
        content: '';
    }
`;

const InnerContainer = styled.div`
    display: inline-block;
    overflow-x: hidden;
    width: 100%;
    vertical-align: middle;
`;

const TitleWrapper = styled.div`
    padding-top: 50px;
`;

const Title = styled.h1`
    display: block;

    & > span {
        display: block;
        width: 88px;
        height: 27px;
        margin: 0 auto;
        font-size: 32px;
        line-height: 27px;
        text-align: center;
        vertical-align: top;
    }
`;

const Article = styled.div`
    width: 550px;
    height: 100%;
    margin: 20px auto 42px;
    padding: 50px 40px;
    border: 1px solid ${({ theme }) => theme.dividerColor};
    font-size: 12px;
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.white_base};
`;

const LineOr = styled.span`
    position: relative;
    display: block;
    width: 100%;
    padding: 15px 0;

    &:before,
    &:after {
        display: inline-block;
        width: calc(50% - 20px);
        height: 1px;
        background: ${({ theme }) => theme.dividerColor};
        vertical-align: top;
        content: '';
        margin: 8px 0;
    }

    & > span {
        font-size: 12px;
        line-height: 18px;
        display: inline-block;
        width: 40px;
        text-align: center;
        color: #828282;
    }
`;

const AnotherLogin = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
`;

const Info = styled.div`
    text-align: center;
    padding: ${({ theme }) => theme.padding.xxxlg} 0;
`;

const Link = styled.span`
    color: ${({ theme }) => theme.colors.blue};
    cursor: pointer;
`;

const Login: NextPage = () => {
    return (
        <>
            <Head>
                <title>로그인</title>
            </Head>
            <Container>
                <InnerContainer>
                    <main>
                        <TitleWrapper>
                            <Title>
                                <span>Frisklog</span>
                            </Title>
                        </TitleWrapper>
                        <Article>
                            <SignInForm />
                            <LineOr>
                                <span>또는</span>
                            </LineOr>
                            <AnotherLogin>
                                <GithubLoginButton />
                                <NaverLoginButton />
                            </AnotherLogin>
                            <Info>
                                계정이 없다면 &nbsp;
                                <Link>회원가입</Link>
                            </Info>
                        </Article>
                    </main>
                    <footer></footer>
                </InnerContainer>
            </Container>
        </>
    );
};

export default Login;
