import { FC } from 'react';
import { useDispatch } from 'react-redux';

import { Button } from '.';
import { showUserModal } from '../../actions/switch/user-modal.action';

export const SetNicknameButton: FC = () => {
    const dispatch = useDispatch();

    // 클릭 핸들러
    const handleClick = () => {
        dispatch(showUserModal());
    };

    return (
        <div title="닉네임변경 버튼">
            <Button type="button" colorType="primary" onClick={handleClick}>
                닉네임 변경
            </Button>
        </div>
    );
};
