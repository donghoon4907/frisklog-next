import { useState, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'antd';

import { CommonState } from '../../reducers/common';
import { SignUpForm } from '../form/SignUp';
import { AuthMode, AuthModeType } from '../../types/mode';
import { GithubLoginButton } from '../button/GithubLogin';
import { SignInForm } from '../form/SignIn';
import {
    AnotherLoginContainer,
    StateChanger,
    StateChangerLink,
} from './Auth.style';
import { AppState } from '../../reducers';
import { hideLoginModal } from '../../actions/switch/login-modal.action';

export const AuthModal: FC = () => {
    const dispatch = useDispatch();

    const { isShowLoginModal } = useSelector<AppState, CommonState>(
        (state) => state.common,
    );

    const [mode, setMode] = useState<AuthModeType>(AuthMode.LOGIN);

    const handleClose = () => {
        dispatch(hideLoginModal());
    };

    const isLoginMode = mode === AuthMode.LOGIN;

    const isSignUpMode = mode === AuthMode.SIGNUP;

    return (
        <Modal
            title={mode}
            visible={isShowLoginModal}
            onCancel={handleClose}
            destroyOnClose
            centered
            footer={null}
        >
            {isLoginMode && <SignInForm />}
            {isSignUpMode && <SignUpForm setMode={setMode} />}

            {isLoginMode && (
                <AnotherLoginContainer>
                    <hr />
                    <GithubLoginButton />
                </AnotherLoginContainer>
            )}

            <StateChanger>
                <div>
                    계정이 {isLoginMode ? '없다면' : '있다면'}&nbsp;
                    <StateChangerLink
                        onClick={() =>
                            setMode(
                                isLoginMode ? AuthMode.SIGNUP : AuthMode.LOGIN,
                            )
                        }
                    >
                        {isLoginMode ? AuthMode.SIGNUP : AuthMode.LOGIN}
                    </StateChangerLink>
                </div>
            </StateChanger>
        </Modal>
    );
};
