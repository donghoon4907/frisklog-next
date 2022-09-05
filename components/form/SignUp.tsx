import { FC, Dispatch, SetStateAction, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useInput } from '../../hooks/use-input';
import { IState } from '../../reducers';
import { IUserState } from '../../reducers/user';
import { CreateUserAction } from '../../actions/user/create-user';
import { AuthModeType } from '../../types/mode';
import { FormInput } from '../FormInput';
import { Button } from '../button';
import { Form, FormColumn } from './form.style';

interface Props {
    setMode: Dispatch<SetStateAction<AuthModeType>>;
}

export const SignUpForm: FC<Props> = ({ setMode }) => {
    const dispatch = useDispatch();

    const { isAddUserLoading } = useSelector<IState, IUserState>(
        (state) => state.user,
    );

    const nickname = useInput('');

    const email = useInput('');

    const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();

        if (isAddUserLoading) {
            return alert('요청 중입니다. 잠시만 기다려주세요.');
        }

        if (nickname.value.length > 9) {
            return alert('별명은 10자 미만으로 입력 해주세요.');
        }

        const payload = {
            email: email.value,
            nickname: nickname.value,
            callbackFunc: () => setMode('로그인'),
        };

        // if (uploadedUrl) {
        //     variables.avatar = uploadedUrl;
        // }

        const tf = confirm('입력한 내용으로 회원가입 하시겠어요?');

        if (tf) {
            dispatch({
                type: CreateUserAction.REQUEST,
                payload,
            });
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            {/* <div className="fr-modal__upload">
                <UploadImage />
            </div> */}
            <FormColumn>
                <FormInput
                    id="email"
                    type="email"
                    placeholder="이메일을 입력하세요"
                    autoComplete="off"
                    label="이메일"
                    required
                    expanded
                    {...email}
                />
            </FormColumn>
            <FormColumn>
                <FormInput
                    id="nickname"
                    placeholder="닉네임을 입력하세요"
                    autoComplete="off"
                    label="닉네임"
                    required
                    expanded
                    {...nickname}
                />
            </FormColumn>

            <Button type="submit">회원가입</Button>
        </Form>
    );
};
