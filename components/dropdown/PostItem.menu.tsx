import { Menu } from 'antd';
import { FC } from 'react';
import { useDispatch } from 'react-redux';

import { setActivePost } from '../../actions/post/active-post.action';
import { deletePostRequest } from '../../actions/post/delete-post.action';
import { showPostModal } from '../../actions/switch/post-modal.action';
import { useMutation } from '../../hooks/use-mutation';
import { PostVisibility } from '../../types/visibility';

interface Props {
    id: string;
    content: string;
    categories: string[];
    visibility: PostVisibility;
}

export const PostMenu: FC<Props> = ({
    id,
    content,
    categories,
    visibility,
}) => {
    const dispatch = useDispatch();

    const [deletePost] = useMutation(deletePostRequest, {
        useAuth: true,
        useReload: true,
    });

    const handleModify = () => {
        dispatch(
            setActivePost({
                id,
                content,
                categories,
                visibility,
            }),
        );

        dispatch(showPostModal());
    };

    const handleDelete = () => {
        const message = '포스트를 삭제하시겠습니까?';

        const tf = confirm(message);

        if (tf) {
            deletePost({ id });
        }
    };

    return (
        <Menu
            items={[
                {
                    key: '1',
                    label: <a onClick={() => handleModify()}>포스트 수정</a>,
                },
                {
                    key: '2',
                    label: <a onClick={() => handleDelete()}>포스트 삭제</a>,
                },
            ]}
        />
    );
};
