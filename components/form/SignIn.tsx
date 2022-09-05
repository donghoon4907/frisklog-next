import { useState, FC, ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { useInput } from '../../hooks/use-input';
import { IState } from '../../reducers';
import { IUserState } from '../../reducers/user';
import { AuthModeType } from '../../types/mode';
import { Button } from '../button';
import { FormCheckbox } from '../FormCheckbox';
import { FormInput } from '../FormInput';
import { Form, FormColumn } from './form.style';
import { LoginUserAction } from '../../actions/user/login-user';
import { VerifyUserAction } from '../../actions/user/verify-user';

const FormCheckboxWrapper = styled.div`
    width: 85px;
`;

export const SignInForm: FC = () => {
    const dispatch = useDispatch();

    const { isLoginUserLoading, isVerifyUserLoading } = useSelector<
        IState,
        IUserState
    >((state) => state.user);

    const [mode, setMode] = useState<AuthModeType>('로그인');

    const email = useInput('');

    const captcha = useInput('');
    // 로그인 유지 여부
    const [isKeep, setIsKeep] = useState(true);
    // 로그인 유지 변경 핸들러
    const handleChangeIsKeep = (evt: ChangeEvent<HTMLInputElement>) =>
        setIsKeep(evt.target.checked);
    // 로그인 요청 핸들러
    const handleLogin = async (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();

        if (isLoginUserLoading) {
            return alert('요청 중입니다. 잠시만 기다려주세요.');
        }

        dispatch({
            type: LoginUserAction.REQUEST,
            payload: {
                email: email.value,
                callbackFunc: () => setMode('인증'),
            },
        });
    };
    // 인증 요청 핸들러
    const handleVerify = async (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();

        if (isVerifyUserLoading) {
            return alert('요청 중입니다. 잠시만 기다려주세요.');
        }

        dispatch({
            type: VerifyUserAction.REQUEST,
            payload: {
                email: email.value,
                isKeep,
                captcha: captcha.value,
            },
        });
    };

    return (
        <Form onSubmit={mode === '로그인' ? handleLogin : handleVerify}>
            <FormColumn>
                <FormInput
                    type={mode === '로그인' ? 'email' : 'password'}
                    placeholder={`${
                        mode === '로그인' ? '이메일을' : '인증코드를'
                    } 입력하세요`}
                    id="auth"
                    autoComplete="off"
                    required
                    label={mode === '로그인' ? '이메일' : '인증코드'}
                    expanded
                    value={mode === '로그인' ? email.value : captcha.value}
                    onChange={
                        mode === '로그인' ? email.onChange : captcha.onChange
                    }
                />
            </FormColumn>

            {mode === '로그인' && (
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
