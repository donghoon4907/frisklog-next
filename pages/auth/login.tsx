import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';

import { AuthLayout } from '../../components/layout/Auth';
import { SignInForm } from '../../components/form/SignIn';
import { GithubLoginButton } from '../../components/button/GithubLogin';
import { NaverLoginButton } from '../../components/button/NaverLogin';
import { ActiveLink } from '../../components/ActiveLink';
import { GoogleLoginButton } from '../../components/button/GoogleLogin';

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

const LoginOr = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
`;

const Helper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
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
            <AuthLayout>
                <SignInForm />
                <LineOr>
                    <span>또는</span>
                </LineOr>
                <LoginOr>
                    <GithubLoginButton />
                    <NaverLoginButton />
                    <GoogleLoginButton />
                </LoginOr>
                <Helper>
                    <span>계정이 없다면 &nbsp;</span>
                    <Link>
                        <ActiveLink href="/auth/terms">회원가입</ActiveLink>
                    </Link>
                </Helper>
            </AuthLayout>
        </>
    );
};

export default Login;
