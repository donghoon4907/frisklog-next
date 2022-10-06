import { FC } from 'react';
import { BsTrash } from 'react-icons/bs';

import { IconWrapper } from './IconWrapper';
import { deletePostRequest } from '../../actions/post/delete-post.action';
import { useMutation } from '../../hooks/use-mutation';

interface Props {
    id: string;
}

export const RemovePostButton: FC<Props> = ({ id }) => {
    const [deletePost] = useMutation(deletePostRequest, {
        useAuth: true,
        useReload: true,
    });

    const handleClick = () => {
        const message = '포스트를 삭제하시겠습니까?';

        const tf = confirm(message);

        if (tf) {
            deletePost({ id });
        }
    };

    return (
        <IconWrapper ariaLabel="포스트 삭제" onClick={handleClick}>
            <BsTrash />
        </IconWrapper>
    );
};
