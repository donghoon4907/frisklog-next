import { FC, FormEvent } from 'react';

import { useInput } from '../../hooks/use-input';
import { Button } from '../button';
import { Form, FormColumn } from './form.style';
import { createCommentRequest } from '../../actions/comment/create-comment.action';
import { FormTextarea } from '../FormTextarea';
import { useMutation } from '../../hooks/use-mutation';

interface Props {
    postId: string;
}

export const CreateCommentForm: FC<Props> = ({ postId }) => {
    const [create] = useMutation(createCommentRequest, { useAuth: true });

    const comment = useInput('');

    const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();

        const content = comment.value;

        if (content.length > 100) {
            return alert('댓글은 100자 미만으로 입력 해주세요.');
        }

        const message = '댓글을 등록하시겠어요?';

        const tf = confirm(message);

        if (tf) {
            create({ postId, content }, () => {
                comment.setValue('');
            });
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
