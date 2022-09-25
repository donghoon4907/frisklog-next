import { FC, Dispatch, SetStateAction, FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useInput } from '../../hooks/use-input';
import { AuthMode, AuthModeType } from '../../types/mode';
import { FormInput } from '../FormInput';
import { Button } from '../button';
import { Form, FormColumn, FormUploadAvatarColumn } from './form.style';
import { AppState } from '../../reducers';
import { LoadingState } from '../../reducers/common/loading';
import { createUserRequest } from '../../actions/user/create-user.action';
import { UploadAvatar } from '../UploadAvatar';

interface Props {
    setMode: Dispatch<SetStateAction<AuthModeType>>;
}

export const SignUpForm: FC<Props> = ({ setMode }) => {
    const dispatch = useDispatch();

    const { loading } = useSelector<AppState, LoadingState>(
        (state) => state.loading,
    );
    const [uploadedFile, setUploadedFile] = useState<string>('');

    const nickname = useInput('');

    const email = useInput('');

    const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();

        if (loading) {
            return alert('요청 중입니다. 잠시만 기다려주세요.');
        }

        if (nickname.value.length > 9) {
            return alert('별명은 10자 미만으로 입력 해주세요.');
        }

        const tf = confirm('입력한 내용으로 회원가입 하시겠어요?');

        if (tf) {
            dispatch(
                createUserRequest({
                    email: email.value,
                    avatar: uploadedFile,
                    nickname: nickname.value,
                    callbackFunc: () => setMode(AuthMode.LOGIN),
                }),
            );
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <FormUploadAvatarColumn>
                <UploadAvatar
                    defaultPreview=""
                    setUploadedFile={setUploadedFile}
                />
            </FormUploadAvatarColumn>
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
