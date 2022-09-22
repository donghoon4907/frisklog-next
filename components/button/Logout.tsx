import { FC } from 'react';
import { useDispatch } from 'react-redux';

import { Button } from '.';
import { updateUserRequest } from '../../actions/user/update-user.action';
import { UserStatus } from '../../types/status';

export const LogoutButton: FC = () => {
    const dispatch = useDispatch();

    // 클릭 핸들러
    const handleClick = () => {
        const tf = window.confirm('로그아웃 하시겠어요?');

        if (tf) {
            dispatch(
                updateUserRequest({
                    status: UserStatus.OFFLINE,
                }),
            );
        }
    };

    return (
        <div title="로그아웃 버튼">
            <Button type="button" colorType="primary" onClick={handleClick}>
                로그아웃
            </Button>
        </div>
    );
};
