import { Menu } from 'antd';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { setActivePost } from '../../actions/post/active-post.action';
import { deletePostRequest } from '../../actions/post/delete-post.action';
import { showPostModal } from '../../actions/switch/post-modal.action';

interface Props {
    postId: string;
    content: string;
    categories: string[];
}

export const PostMenu: FC<Props> = ({ postId, content, categories }) => {
    const dispatch = useDispatch();

    const handleModify = () => {
        dispatch(
            setActivePost({
                id: postId,
                content,
                categories,
            }),
        );

        dispatch(showPostModal());
    };

    const handleDelete = () => {
        dispatch(
            deletePostRequest({
                id: postId,
            }),
        );
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
