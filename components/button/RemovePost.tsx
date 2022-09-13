import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { BsTrash } from 'react-icons/bs';

import { IconWrapper } from './IconWrapper';
import { deletePostRequest } from '../../actions/post/delete-post.action';

interface Props {
    postId: string;
}

export const RemovePostButton: FC<Props> = ({ postId }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(
            deletePostRequest({
                id: postId,
            }),
        );
    };

    return (
        <IconWrapper ariaLabel="포스트 삭제" onClick={handleClick}>
            <BsTrash />
        </IconWrapper>
    );
};
