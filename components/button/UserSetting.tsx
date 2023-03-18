import { FC } from 'react';

import { showUserModal } from '../../actions/switch/user-modal.action';
import { useDispatch } from 'react-redux';
import { Button } from '.';

export const UserSettingButton: FC = () => {
    const dispatch = useDispatch();

    // 클릭 핸들러
    const handleClick = () => {
        dispatch(showUserModal());
    };

    return (
        <Button type="button" colorType="primary" onClick={handleClick}>
            <span>사용자 설정</span>
        </Button>
    );
};
