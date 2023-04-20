import type { FC, FormEvent } from 'react';
import { useState } from 'react';
import { IoIosCloseCircle } from 'react-icons/io';
import CryptoJS from 'crypto-js';

import { Button } from '../button';
import { useMutation } from '../../hooks/use-mutation';
import { sendEmailRequest } from '../../actions/user/send-email.action';
import { useFeedbackInput } from '../../hooks/use-input';
import * as CreateAccountPage from '../../pages/auth/create_account';
import { useRoute } from '../../hooks/use-route';

export const VerifyEmailForm: FC = () => {
    const { move } = useRoute();
    // 인증 코드
    const [token, setToken] = useState('');
    // 인증 요청
    const [sendEmail] = useMutation(sendEmailRequest);

    const email = useFeedbackInput('', (value: string) => {
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
    });

    const passCode = useFeedbackInput('', (value: string) => {
        let output = '';

        if (value === '') {
            output = '인증번호를 입력해 주세요.';
        } else if (value.length != 4) {
            output = '이메일로 발송된 4자리 인증번호를 입력해 주세요.';
        } else if (value !== token) {
            output = '입력하신 인증번호가 올바르지 않습니다.';
        }

        return output;
    });

    const handleSendEmail = () => {
        const comment = email.validator(email.value);
        // 이메일 검증 실패 시 피드백 업데이트
        if (comment !== '') {
            email.focusOnInput();

            return;
        }
        // 네 자리 숫자 토큰 발급
        const token = Math.floor(Math.random() * 9000 + 1000).toString();

        // 복호화 키 정보가 있는 경우
        if (process.env.CRYPTO_SECRET) {
            // 토큰 암호화
            const captcha = CryptoJS.AES.encrypt(
                token,
                process.env.CRYPTO_SECRET,
            ).toString();

            sendEmail({ email: email.value, captcha }, (errMsg) => {
                if (errMsg === '') {
                    // 인증 요청 상태 업데이트
                    // setIsSendEmail(true);
                    // 토큰 상태 업데이트
                    setToken(token);
                    // 이메일 입력창 포커싱 해제
                    email.afterBlur();
                } else {
                    email.setFeedback(errMsg);
                }
            });
        } else {
            alert('인증 요청 중 오류가 발생했습니다. 잠시 후 시도해 주세요.');

            console.error(
                '[create_account:handleSendEmail - CRYPTO_SECRET not found]',
            );
        }
    };

    const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();

        // 인증 요청을 하지 않은 경우
        if (token === '') {
            handleSendEmail();

            return;
        }

        const comment = passCode.validator(passCode.value);
        // 인증번호 검증 실패 시 피드백 업데이트
        if (comment !== '') {
            passCode.focusOnInput();

            return;
        }
        // 이메일 인증 성공
        move(`${location.href}?email=${email.value}`);
    };

    const isSendEmail = token !== '';

    return (
        <form onSubmit={handleSubmit}>
            <CreateAccountPage.Verifiy
                className={`first ${!!email.feedback ? 'error' : ''}`}
                activeFocus={email.activeFocus}
            >
                <label className="a11y-hidden" htmlFor="email">
                    이메일 입력
                </label>
                <CreateAccountPage.Input
                    type="email"
                    id="email"
                    placeholder="이메일 주소 입력"
                    autoComplete="off"
                    value={email.value}
                    onChange={email.onChange}
                    onFocus={email.onFocus}
                    onBlur={email.onBlur}
                    autoFocus
                    ref={email.inputRef}
                    disabled={isSendEmail}
                />

                <CreateAccountPage.More>
                    {email.value.length > 0 && !isSendEmail && (
                        <CreateAccountPage.Clear
                            type="button"
                            onClick={email.onClear}
                        >
                            <IoIosCloseCircle />
                        </CreateAccountPage.Clear>
                    )}

                    <CreateAccountPage.Request
                        type="button"
                        onClick={handleSendEmail}
                        disabled={isSendEmail}
                    >
                        인증요청
                    </CreateAccountPage.Request>
                </CreateAccountPage.More>
            </CreateAccountPage.Verifiy>
            {isSendEmail && (
                <CreateAccountPage.Verifiy
                    className={`${!!passCode.feedback ? 'error' : ''}`}
                    activeFocus={passCode.activeFocus}
                >
                    <label className="a11y-hidden" htmlFor="passcode">
                        인증번호 입력
                    </label>
                    <CreateAccountPage.Input
                        type="tel"
                        id="passcode"
                        placeholder="인증번호 입력"
                        autoComplete="off"
                        value={passCode.value}
                        onChange={passCode.onChange}
                        onFocus={passCode.onFocus}
                        onBlur={passCode.onBlur}
                        ref={passCode.inputRef}
                    />
                    <CreateAccountPage.More>
                        <CreateAccountPage.Clear
                            type="button"
                            onClick={passCode.onClear}
                        >
                            <IoIosCloseCircle />
                        </CreateAccountPage.Clear>
                    </CreateAccountPage.More>
                </CreateAccountPage.Verifiy>
            )}

            {!!email.feedback && (
                <CreateAccountPage.Feedback>
                    {email.feedback}
                </CreateAccountPage.Feedback>
            )}
            {!!passCode.feedback && (
                <CreateAccountPage.Feedback>
                    {passCode.feedback}
                </CreateAccountPage.Feedback>
            )}
            <strong className="a11y-hidden">안내사항</strong>
            <CreateAccountPage.Info>
                <CreateAccountPage.Guide>
                    - 입력한 이메일 주소로 인증번호가 발송됩니다.
                </CreateAccountPage.Guide>
                <CreateAccountPage.Guide>
                    - 인증메일을 받을 수 있도록 자주 쓰는 이메일 주소를 입력해
                    주세요.
                </CreateAccountPage.Guide>
            </CreateAccountPage.Info>
            <CreateAccountPage.Submit>
                <Button
                    type="submit"
                    colorType="primary"
                    disabled={passCode.value.length !== 4}
                >
                    다음
                </Button>
            </CreateAccountPage.Submit>
        </form>
    );
};
