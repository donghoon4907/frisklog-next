import { FC, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useInput } from '../../hooks/use-input';
import { Button } from '../button';
import { Form, FormColumn } from './form.style';
import { AppState } from '../../reducers';
import { LoadingState } from '../../reducers/common/loading';
import { useAuthenticate } from '../../hooks/use-authenticate';
import { createCommentRequest } from '../../actions/comment/create-comment.action';
import { FormTextarea } from '../FormTextarea';

interface Props {
    postId: string;
}

export const CreateCommentForm: FC<Props> = ({ postId }) => {
    const dispatch = useDispatch();

    const { loading } = useSelector<AppState, LoadingState>(
        (state) => state.loading,
    );

    const { validateToken } = useAuthenticate();

    const comment = useInput('');

    const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();

        // 로그인 체크
        const token = validateToken();

        if (!token) {
            return null;
        }

        if (loading) {
            return alert('요청 중입니다. 잠시만 기다려주세요.');
        }

        const content = comment.value;

        if (content.length > 100) {
            return alert('댓글은 100자 미만으로 입력 해주세요.');
        }

        const tf = confirm('댓글을 등록하시겠어요?');

        if (tf) {
            dispatch(
                createCommentRequest({
                    postId,
                    content,
                    callbackFunc: () => {
                        comment.setValue('');

                        alert('댓글이 등록되었습니다.');
                    },
                }),
            );
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <FormColumn>
                <FormTextarea
                    placeholder="댓글을 입력하세요."
                    id="comment"
                    {...comment}
                    required
                    label="댓글"
                />
            </FormColumn>

            <Button type="submit" colorType="primary">
                댓글 작성
            </Button>
        </Form>
    );
};
