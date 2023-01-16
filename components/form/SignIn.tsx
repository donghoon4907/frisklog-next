import { useState, FC, ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';

import { useInput } from '../../hooks/use-input';
import { AuthMode, AuthModeType } from '../../types/mode';
import { Button } from '../button';
import { FormCheckbox } from '../FormCheckbox';
import { FormInput } from '../FormInput';
import { Form, FormColumn } from './form.style';
import { loginUserRequest } from '../../actions/user/login-user.action';
import { verifyUserRequest } from '../../actions/user/verify-user.action';
import { useMutation } from '../../hooks/use-mutation';

const FormCheckboxWrapper = styled.div`
    width: 95px;
`;

export const SignInForm: FC = () => {
    const [login] = useMutation(loginUserRequest);

    const [verify] = useMutation(verifyUserRequest);

    const [mode, setMode] = useState<AuthModeType>(AuthMode.LOGIN);

    const email = useInput('');

    const captcha = useInput('');

    const [isKeep, setIsKeep] = useState(true);

    const handleChangeIsKeep = (evt: ChangeEvent<HTMLInputElement>) => {
        setIsKeep(evt.target.checked);
    };

    const handleLogin = async (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();

        login({ email: email.value }, () => setMode(AuthMode.AUTH));
    };
    // 인증 요청 핸들러
    const handleVerify = async (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();

        verify({
            email: email.value,
            isKeep,
            captcha: captcha.value,
        });
    };

    const isLoginMode = mode === AuthMode.LOGIN;

    return (
        <Form onSubmit={isLoginMode ? handleLogin : handleVerify}>
            <FormColumn>
                <FormInput
                    type={isLoginMode ? 'email' : 'password'}
                    placeholder={`${
                        isLoginMode ? '이메일을' : '인증코드를'
                    } 입력하세요`}
                    id="auth"
                    autoComplete="off"
                    required
                    label={isLoginMode ? '이메일' : '인증코드'}
                    expanded
                    value={isLoginMode ? email.value : captcha.value}
                    onChange={isLoginMode ? email.onChange : captcha.onChange}
                />
            </FormColumn>

            {isLoginMode && (
                <FormCheckboxWrapper>
                    <FormCheckbox
                        label="로그인 유지"
                        id="keep"
                        checked={isKeep}
                        onChange={handleChangeIsKeep}
                    />
                </FormCheckboxWrapper>
            )}

            <Button type="submit">{mode}</Button>
        </Form>
    );
};
