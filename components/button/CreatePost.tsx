import { FC } from 'react';
import { BsFillPencilFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';

import { PostModalAction } from '../../actions/switch/post-modal';
import { useAuthenticate } from '../../hooks';

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
        <div title="포스트 작성 버튼">
            <button
                type="button"
                aria-label="포스트 작성"
                onClick={handleClick}
            >
                <BsFillPencilFill />
            </button>
        </div>
    );
};
