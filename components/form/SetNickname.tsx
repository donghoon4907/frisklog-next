import type { FC, FormEvent } from 'react';
import { useRouter } from 'next/router';
import { IoIosCloseCircle } from 'react-icons/io';

import { Button } from '../button';
import { useMutation } from '../../hooks/use-mutation';
import { useFeedbackInput } from '../../hooks/use-input';
import * as CreateAccountPage from '../../pages/auth/create_account';
import { useRoute } from '../../hooks/use-route';
import { createUserRequest } from '../../actions/user/create-user.action';

export const SetNicknameForm: FC = () => {
    const router = useRouter();

    const { move } = useRoute();
    // 회원가입 요청
    const [create] = useMutation(createUserRequest);

    const nickname = useFeedbackInput('', (value: string) => {
        let output = '';

        const name = value.trim();
        if (name === '') {
            output = '닉네임을 입력해 주세요.';
        } else if (name.length < 2) {
            output = '닉네임은 2 글자 이상 입력해 주세요.';
        } else if (name.length > 10) {
            output = '닉네임은 10 글자 이하로 입력해 주세요.';
        }

        return output;
    });

    const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();

        const comment = nickname.validator(nickname.value);
        // 인증번호 검증 실패 시 피드백 업데이트
        if (comment !== '') {
            nickname.focusOnInput();

            return;
        }

        const message = '입력한 내용으로 회원가입 하시겠어요?';

        const tf = confirm(message);

        if (tf) {
            create(
                {
                    email: router.query.email,
                    nickname: nickname.value,
                },
                () => {
                    alert('회원가입 성공, 로그인 화면으로 이동합니다.');

                    move('/auth/login');
                },
            );
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CreateAccountPage.Verifiy
                className={`first ${!!nickname.feedback ? 'error' : ''}`}
                activeFocus={nickname.activeFocus}
            >
                <label className="a11y-hidden" htmlFor="nickname">
                    닉네임 입력
                </label>
                <CreateAccountPage.Input
                    type="text"
                    id="nickname"
                    placeholder="닉네임 입력"
                    autoComplete="off"
                    value={nickname.value}
                    onChange={nickname.onChange}
                    onFocus={nickname.onFocus}
                    onBlur={nickname.onBlur}
                    autoFocus
                    ref={nickname.inputRef}
                />

                <CreateAccountPage.More>
                    {nickname.value.length > 0 && (
                        <CreateAccountPage.Clear
                            type="button"
                            onClick={nickname.onClear}
                        >
                            <IoIosCloseCircle />
                        </CreateAccountPage.Clear>
                    )}
                </CreateAccountPage.More>
            </CreateAccountPage.Verifiy>
            {!!nickname.feedback && (
                <CreateAccountPage.Feedback>
                    {nickname.feedback}
                </CreateAccountPage.Feedback>
            )}
            <strong className="a11y-hidden">안내사항</strong>
            <CreateAccountPage.Info>
                <CreateAccountPage.Guide>
                    - 닉네임은 2자리 이상, 10자리 이하의 영문 대소문자, 숫자,
                    특수문자를 조합하여 설정할 수 있습니다.
                </CreateAccountPage.Guide>
            </CreateAccountPage.Info>
            <CreateAccountPage.Submit>
                <Button
                    type="submit"
                    colorType="primary"
                    disabled={nickname.value.trim().length === 0}
                >
                    회원가입
                </Button>
            </CreateAccountPage.Submit>
        </form>
    );
};
