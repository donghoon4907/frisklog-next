import { Menu } from 'antd';
import { FC } from 'react';

interface Props {
    onUpdate: () => void;
    onDelete: () => void;
}

export const CommentItemMenu: FC<Props> = ({ onUpdate, onDelete }) => (
    <Menu
        items={[
            {
                key: '1',
                label: <a onClick={onUpdate}>댓글 수정</a>,
            },
            {
                key: '2',
                label: <a onClick={onDelete}>댓글 삭제</a>,
            },
        ]}
    />
);
