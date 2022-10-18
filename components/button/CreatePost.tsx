import { FC } from 'react';
import { BsFillPencilFill } from 'react-icons/bs';

import { showPostModal } from '../../actions/switch/post-modal.action';
import { useMutation } from '../../hooks/use-mutation';
import { IconWrapper } from './IconWrapper';

export const CreatePostButton: FC = () => {
    const [showModal] = useMutation(showPostModal, { useAuth: true });

    const handleClick = () => {
        showModal();
    };

    return (
        <IconWrapper ariaLabel="포스트 작성" onClick={handleClick}>
            <BsFillPencilFill />
        </IconWrapper>
    );
};
