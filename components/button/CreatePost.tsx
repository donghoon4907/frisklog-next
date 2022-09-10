import { FC } from 'react';
import { BsFillPencilFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';

import { showPostModal } from '../../actions/switch/post-modal.action';
import { useAuthenticate } from '../../hooks/use-authenticate';
import { IconWrapper } from './IconWrapper';

export const CreatePostButton: FC = () => {
    const dispatch = useDispatch();

    const { validateToken } = useAuthenticate();

    const handleClick = () => {
        const token = validateToken();

        if (token !== null) {
            dispatch(showPostModal());
        }
    };

    return (
        <IconWrapper ariaLabel="포스트 작성" onClick={handleClick}>
            <BsFillPencilFill />
        </IconWrapper>
    );
};
