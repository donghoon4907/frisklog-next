import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { AiTwotoneSetting } from 'react-icons/ai';

import { showUserModal } from '../../actions/switch/user-modal.action';
import { IconWrapper } from './IconWrapper';

export const SetNicknameButton: FC = () => {
    const dispatch = useDispatch();

    // 클릭 핸들러
    const handleClick = () => {
        dispatch(showUserModal());
    };

    return (
        <IconWrapper ariaLabel="닉네임변경" onClick={handleClick}>
            <AiTwotoneSetting />
        </IconWrapper>
    );
};
