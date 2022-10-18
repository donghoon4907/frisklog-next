import { FC } from 'react';
import { AiTwotoneSetting } from 'react-icons/ai';

import { setActivePost } from '../../actions/post/active-post.action';
import { showPostModal } from '../../actions/switch/post-modal.action';
import { IconWrapper } from './IconWrapper';
import { useDispatch } from 'react-redux';

interface Props {
    postId: string;
    content: string;
    categories: string[];
}

export const ModifyPostButton: FC<Props> = ({
    postId,
    content,
    categories,
}) => {
    const dispatch = useDispatch();

    // 클릭 핸들러
    const handleClick = () => {
        dispatch(
            setActivePost({
                id: postId,
                content,
                categories,
            }),
        );

        dispatch(showPostModal());
    };

    return (
        <IconWrapper ariaLabel="포스트 수정" onClick={handleClick}>
            <AiTwotoneSetting />
        </IconWrapper>
    );
};
