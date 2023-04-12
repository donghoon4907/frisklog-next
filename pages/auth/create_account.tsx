import type { NextPage } from 'next';
import { ChangeEvent, FocusEvent, FormEvent, MouseEvent } from 'react';
import Head from 'next/head';
import { useState, useRef } from 'react';
import styled from 'styled-components';
import { IoIosCloseCircle } from 'react-icons/io';

import { AuthLayout } from '../../components/layout/Auth';
import { Button } from '../../components/button';
import { useRoute } from '../../hooks/use-route';

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

const Request = styled.button`
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

const CreateAccount: NextPage = () => {
    const { move } = useRoute();

    const $email = useRef<HTMLInputElement>(null);

    // 이메일
    const [email, setEmail] = useState('');
    // 인증 코드
    const [passCode, setPassCode] = useState('');
    // 피드백 활성화 여부
    const [feedback, setFeedback] = useState('');
    // 이메일 입력창 포커싱 여부
    const [activeFocusEmail, setActiveFocusEmail] = useState(true);
    // 인증 코드 입력창 포커싱 여부
    const [activeFocusPassCode, setActiveFocusPassCode] = useState(false);
    // 이메일 인증 요청 여부
    const [isSendPassCode, setIsSendPassCode] = useState(false);

    const validateEmail = (value: string) => {
        let output = '';

        if (value === '') {
            output = '이메일을 입력해 주세요.';
        } else {
            const exp = /[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}/;

            const reg = new RegExp(exp);
            if (!reg.test(value)) {
                output = '이메일 형식이 올바르지 않습니다.';
            }
        }

        return output;
    };

    const validatePassCode = (value: string) => {
        let output = '';
        if (value.length != 4) {
            output = '이메일로 발송된 4자리 인증번호를 입력해 주세요.';
        }

        return output;
    };

    const handleChangeEmail = (evt: ChangeEvent<HTMLInputElement>) => {
        const { value } = evt.target;

        setEmail(value);
    };

    const handleChangePassCode = (evt: ChangeEvent<HTMLInputElement>) => {
        const { value } = evt.target;

        setPassCode(value);

        setFeedback(validatePassCode(value));
    };

    const handleFocusEmail = () => {
        setActiveFocusEmail(true);
    };

    const handleFocusPassCode = (evt: FocusEvent<HTMLInputElement>) => {
        const { value } = evt.target;

        setFeedback(validatePassCode(value));

        setActiveFocusEmail(true);
    };

    const handleClearEmail = (evt: MouseEvent<HTMLButtonElement>) => {
        evt.preventDefault();

        setEmail('');

        setFeedback('');

        if ($email.current) {
            $email.current.focus();
        }
    };

    const handleClearPassCode = () => {
        setPassCode('');

        setFeedback('');
    };

    const handleBlurEmail = () => {
        setFeedback(validateEmail(email));

        setActiveFocusEmail(false);
    };

    const handleBlurPassCode = () => {
        setFeedback(validatePassCode(passCode));

        setActiveFocusPassCode(false);
    };

    return (
        <>
            <Head>
                <title>Frisklog - 서비스 약관 동의</title>
            </Head>
            <AuthLayout>
                <Title>
                    Frisklog에서 사용할
                    <br />
                    이메일 주소를 입력해 주세요.
                </Title>
                <form>
                    <Verifiy
                        className={`first ${!!feedback ? 'error' : ''}`}
                        activeFocus={activeFocusEmail}
                    >
                        <label className="a11y-hidden" htmlFor="email">
                            이메일 입력
                        </label>
                        <Input
                            type="email"
                            id="email"
                            placeholder="이메일 주소 입력"
                            autoComplete="off"
                            value={email}
                            onChange={handleChangeEmail}
                            onFocus={handleFocusEmail}
                            onBlur={handleBlurEmail}
                            autoFocus
                            ref={$email}
                            disabled={isSendPassCode}
                        />

                        <More>
                            {email.length > 0 && (
                                <Clear type="button" onClick={handleClearEmail}>
                                    <IoIosCloseCircle />
                                </Clear>
                            )}

                            <Request type="button">인증요청</Request>
                        </More>
                    </Verifiy>
                    {isSendPassCode && (
                        <Verifiy
                            className={`${!!feedback ? 'error' : ''}`}
                            activeFocus={activeFocusPassCode}
                        >
                            <label className="a11y-hidden" htmlFor="passcode">
                                인증번호 입력
                            </label>
                            <Input
                                type="tel"
                                id="passcode"
                                placeholder="인증번호 입력"
                                autoComplete="off"
                                value={passCode}
                                onChange={handleChangePassCode}
                                onFocus={handleChangePassCode}
                                onBlur={handleBlurPassCode}
                            />
                            <More>
                                <Clear
                                    type="button"
                                    onClick={handleClearPassCode}
                                >
                                    <IoIosCloseCircle />
                                </Clear>
                            </More>
                        </Verifiy>
                    )}

                    <Feedback>{feedback}</Feedback>
                    <strong className="a11y-hidden">안내사항</strong>
                    <Info>
                        <Guide>
                            - 입력한 이메일 주소로 인증번호가 발송됩니다.
                        </Guide>
                        <Guide>
                            - 인증메일을 받을 수 있도록 자주 쓰는 이메일 주소를
                            입력해 주세요.
                        </Guide>
                    </Info>
                    <Submit>
                        <Button
                            type="submit"
                            colorType="primary"
                            disabled={false}
                        >
                            다음
                        </Button>
                    </Submit>
                </form>
            </AuthLayout>
        </>
    );
};

export default CreateAccount;
