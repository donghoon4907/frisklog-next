import { FC } from 'react';
import { AiTwotoneSetting } from 'react-icons/ai';

import { showUserModal } from '../../actions/switch/user-modal.action';
import { IconWrapper } from './IconWrapper';
import { useDispatch } from 'react-redux';

export const SetNicknameButton: FC = () => {
    const dispatch = useDispatch();

    // 클릭 핸들러
    const handleClick = () => {
        dispatch(showUserModal());
    };

    return (
        <IconWrapper aria-label="닉네임 변경" onClick={handleClick}>
            <AiTwotoneSetting />
        </IconWrapper>
    );
};
