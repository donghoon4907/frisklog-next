import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { AiTwotoneSetting } from 'react-icons/ai';

import { setActivePost } from '../../actions/post/active-post.action';
import { showPostModal } from '../../actions/switch/post-modal.action';
import { IconWrapper } from './IconWrapper';
import { PostVisibility } from '../../types/visibility';

interface Props {
    postId: string;
    content: string;
    categories: string[];
    visibility: PostVisibility;
}

export const ModifyPostButton: FC<Props> = ({
    postId,
    content,
    categories,
    visibility,
}) => {
    const dispatch = useDispatch();

    // 클릭 핸들러
    const handleClick = () => {
        dispatch(
            setActivePost({
                id: postId,
                content,
                categories,
                visibility,
            }),
        );

        dispatch(showPostModal());
    };

    return (
        <IconWrapper aria-label="포스트 수정" onClick={handleClick}>
            <AiTwotoneSetting />
        </IconWrapper>
    );
};
