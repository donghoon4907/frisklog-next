import type { NextPage } from 'next';
import type { ChangeEvent, FormEvent } from 'react';
import Head from 'next/head';
import { useState, useRef } from 'react';
import styled from 'styled-components';
import { IoIosCloseCircle } from 'react-icons/io';
import CryptoJS from 'crypto-js';

import { AuthLayout } from '../../components/layout/Auth';
import { Button } from '../../components/button';
import { useRoute } from '../../hooks/use-route';
import { useMutation } from '../../hooks/use-mutation';
import { sendEmailRequest } from '../../actions/user/send-email.action';
import { createUserRequest } from '../../actions/user/create-user.action';
import { useFeedbackInput } from '../../hooks/use-input';
import { VerifyEmailForm } from '../../components/form/VerifyEmail';
import { SetNicknameForm } from '../../components/form/SetNickname';
import { useRouter } from 'next/router';

export const Title = styled.h2`
    display: block;
    font-weight: 400;
    font-size: 24px;
    line-height: 34px;
    color: #191919;
`;

export const Verifiy = styled.div<{ activeFocus: boolean }>`
    border-bottom: 2px solid
        ${({ activeFocus }) => (activeFocus ? '#191919' : '#ccc')};
    margin-bottom: 3px;
    position: relative;
    padding-right: 120px;

    &.first {
        margin-top: 47px;
    }

    &.error {
        border-color: #e65f3e !important;
    }
`;

export const Input = styled.input`
    position: relative;
    z-index: 1;
    width: 100%;
    height: 45px;
    padding: 10px 0 8px;
    border: 0;
    font-size: 18px;
    line-height: 25px;
    color: #191919;
    background-color: transparent;
    outline: 0 none;
    caret-color: #191919;
`;

export const More = styled.div`
    position: absolute;
    right: 0;
    top: 2px;
    height: 43px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
`;

export const Clear = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    & svg {
        width: 20px;
        height: 20px;
    }
`;

export const Request = styled.button`
    padding-bottom: 1px;
    display: inline-block;
    height: 30px;
    padding: 0 13px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 32px;
    font-size: 14px;
    line-height: 29px;
    color: #191919;
`;

export const Feedback = styled.p`
    padding-top: 8px;
    padding-bottom: 4px;
    color: #e65f3e;
    font-size: 13px;
    line-height: 20px;
`;

export const Info = styled.ul`
    padding-top: 20px;
`;

export const Guide = styled.li`
    position: relative;
    font-size: 12px;
    line-height: 15px;
    color: #999;

    & + & {
        margin-top: 6px;
    }
`;

export const Submit = styled.div`
    padding-top: 45px;
`;

const CreateAccount: NextPage = () => {
    const router = useRouter();

    const isVerifyEmail = !!router.query.email;

    return (
        <>
            <Head>
                <title>Frisklog - 계정 만들기</title>
            </Head>
            <AuthLayout>
                <Title>
                    Frisklog에서 사용할
                    <br />
                    {isVerifyEmail ? '닉네임을' : '이메일 주소를'} 입력해
                    주세요.
                </Title>
                {isVerifyEmail ? <SetNicknameForm /> : <VerifyEmailForm />}
            </AuthLayout>
        </>
    );
};

export default CreateAccount;
