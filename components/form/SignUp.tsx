import { FC, Dispatch, SetStateAction, FormEvent } from 'react';

import { useInput } from '../../hooks/use-input';
import { AuthMode, AuthModeType } from '../../types/mode';
import { FormInput } from '../FormInput';
import { Button } from '../button';
import { Form, FormColumn } from './form.style';
import { createUserRequest } from '../../actions/user/create-user.action';
import { useMutation } from '../../hooks/use-mutation';

interface Props {
    setMode: Dispatch<SetStateAction<AuthModeType>>;
}

export const SignUpForm: FC<Props> = ({ setMode }) => {
    const [create] = useMutation(createUserRequest);

    //const [uploadedFile, setUploadedFile] = useState<string>('');

    const nickname = useInput('');

    const email = useInput('');

    const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();

        if (nickname.value.length > 9) {
            return alert('별명은 10자 미만으로 입력 해주세요.');
        }

        const message = '입력한 내용으로 회원가입 하시겠어요?';

        const tf = confirm(message);

        if (tf) {
            create(
                {
                    email: email.value,
                    //avatar: uploadedFile,
                    nickname: nickname.value,
                },
                () => setMode(AuthMode.LOGIN),
            );
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
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
