import { useState, FC } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'antd';

import { LoginModalAction } from '../../actions/switch/login-modal';
import { IState } from '../../reducers';
import { ICommonState } from '../../reducers/common';
import { SignUpForm } from '../form/SignUp';
import { AuthModeType } from '../../types/mode';
import { GithubLoginButton } from '../button/GithubLogin';
import { SignInForm } from '../form/SignIn';

const AnotherLoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const StateChanger = styled.div`
    text-align: center;
    padding: ${({ theme }) => theme.padding.xxxlg} 0;
`;

const StateChangerLink = styled.span`
    color: ${({ theme }) => theme.colors.blue};
    cursor: pointer;
`;

export const AuthModal: FC = () => {
    const dispatch = useDispatch();

    const { isShowLoginModal } = useSelector<IState, ICommonState>(
        state => state.common,
    );

    const [mode, setMode] = useState<AuthModeType>('로그인');

    const handleClose = () => {
        console.log('test');
        dispatch({
            type: LoginModalAction.HIDE,
        });
    };

    return (
        <Modal
            title={mode}
            visible={isShowLoginModal}
            onCancel={handleClose}
            destroyOnClose
            footer={null}
        >
            {mode === '로그인' && <SignInForm />}
            {mode === '회원가입' && <SignUpForm setMode={setMode} />}

            {mode === '로그인' && (
                <AnotherLoginContainer>
                    <hr />
                    <GithubLoginButton />
                </AnotherLoginContainer>
            )}

            <StateChanger>
                <div>
                    계정이 {mode === '로그인' ? '없다면' : '있다면'}&nbsp;
                    <StateChangerLink
                        onClick={() =>
                            setMode(mode === '로그인' ? '회원가입' : '로그인')
                        }
                    >
                        {mode === '로그인' ? '회원가입' : '로그인'}
                    </StateChangerLink>
                </div>
            </StateChanger>
        </Modal>
    );
};
