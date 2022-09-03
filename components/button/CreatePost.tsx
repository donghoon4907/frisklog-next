import { FC } from 'react';
import { BsFillPencilFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';

import { PostModalAction } from '../../actions/switch/post-modal';
import { useAuthenticate } from '../../hooks/use-authenticate';
import { IconWrapper } from './IconWrapper';

export const CreatePostButton: FC = () => {
    const dispatch = useDispatch();

    const { validateToken } = useAuthenticate();

    const handleClick = () => {
        const token = validateToken();

        if (token !== null) {
            dispatch({
                type: PostModalAction.SHOW,
            });
        }
    };

    return (
        <IconWrapper ariaLabel="포스트 작성" onClick={handleClick}>
            <BsFillPencilFill />
        </IconWrapper>
    );
};
