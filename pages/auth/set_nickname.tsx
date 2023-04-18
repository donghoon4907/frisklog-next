import type { NextPage } from 'next';
import type { ChangeEvent, FormEvent } from 'react';
import Head from 'next/head';
import { useState, useRef } from 'react';
import styled from 'styled-components';
import { IoIosCloseCircle } from 'react-icons/io';

import { AuthLayout } from '../../components/layout/Auth';
import { Button } from '../../components/button';
import { useRoute } from '../../hooks/use-route';
import { useMutation } from '../../hooks/use-mutation';

const Title = styled.h2`
    display: block;
    font-weight: 400;
    font-size: 24px;
    line-height: 34px;
    color: #191919;
`;

const Verifiy = styled.div<{ activeFocus: boolean }>`
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

const Input = styled.input`
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

const More = styled.div`
    position: absolute;
    right: 0;
    top: 2px;
    height: 43px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
`;

const Clear = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    & svg {
        width: 20px;
        height: 20px;
    }
`;

const Feedback = styled.p`
    padding-top: 8px;
    padding-bottom: 4px;
    color: #e65f3e;
    font-size: 13px;
    line-height: 20px;
`;

const Info = styled.ul`
    padding-top: 20px;
`;

const Guide = styled.li`
    position: relative;
    font-size: 12px;
    line-height: 15px;
    color: #999;

    & + & {
        margin-top: 6px;
    }
`;

const Submit = styled.div`
    padding-top: 45px;
`;

const SetNickname: NextPage = () => {
    const { move } = useRoute();

    const $nickname = useRef<HTMLInputElement>(null);

    // 닉네임
    const [nickname, setNickname] = useState('');
    // 피드백
    const [feedback, setFeedback] = useState('');
    // 닉네임 입력창 포커싱 여부
    const [activeFocusNickname, setActiveFocusNickname] = useState(true);

    const validateNickname = (value: string) => {
        let output = '';

        if (value.trim() === '') {
            output = '닉네임을 입력해 주세요.';
        }

        return output;
    };

    const handleChangeNickname = (evt: ChangeEvent<HTMLInputElement>) => {
        const { value } = evt.target;

        setNickname(value);
        // 입력 중에는 피드백 비활성화
        if (feedback !== '') {
            setFeedback('');
        }
    };

    const handleFocusNickname = () => {
        setActiveFocusNickname(true);
    };

    const handleClearNickname = () => {
        setNickname('');

        setFeedback('');

        $nickname.current?.focus();
    };

    const handleBlurNickname = () => {
        setFeedback(validateNickname(nickname));

        setActiveFocusNickname(false);
    };

    const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
    };

    return (
        <>
            <Head>
                <title>Frisklog - 계정 만들기</title>
            </Head>
            <AuthLayout>
                <Title>
                    Frisklog에서 사용할
                    <br />
                    닉네임를 입력해 주세요.
                </Title>
                <form onSubmit={handleSubmit}>
                    <Verifiy
                        className={`first ${!!feedback ? 'error' : ''}`}
                        activeFocus={activeFocusNickname}
                    >
                        <label className="a11y-hidden" htmlFor="nickname">
                            닉네임 입력
                        </label>
                        <Input
                            type="email"
                            id="nickname"
                            placeholder="닉네임 입력"
                            autoComplete="off"
                            value={nickname}
                            onChange={handleChangeNickname}
                            onFocus={handleFocusNickname}
                            onBlur={handleBlurNickname}
                            autoFocus
                            ref={$nickname}
                        />

                        <More>
                            {nickname.length > 0 && (
                                <Clear
                                    type="button"
                                    onClick={handleClearNickname}
                                >
                                    <IoIosCloseCircle />
                                </Clear>
                            )}
                        </More>
                    </Verifiy>
                    <Feedback>{feedback}</Feedback>
                    <strong className="a11y-hidden">안내사항</strong>
                    <Info>
                        <Guide>
                            - 닉네임은 1자리 이상의 영문 대소문자, 숫자,
                            특수문자를 조합하여 설정할 수 있습니다.
                        </Guide>
                    </Info>
                    <Submit>
                        <Button
                            type="submit"
                            colorType="primary"
                            disabled={nickname.length === 0}
                        >
                            회원가입
                        </Button>
                    </Submit>
                </form>
            </AuthLayout>
        </>
    );
};

export default SetNickname;
