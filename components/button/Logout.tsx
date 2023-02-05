import { FC } from 'react';

import { Button } from '.';
import { logoutUserRequest } from '../../actions/user/logout-user.action';
import { useMutation } from '../../hooks/use-mutation';

export const LogoutButton: FC = () => {
    const [logout] = useMutation(logoutUserRequest, { useReload: true });

    // 클릭 핸들러
    const handleClick = () => {
        const tf = window.confirm('로그아웃 하시겠어요?');

        if (tf) {
            logout();
        }
    };

    return (
        <Button type="button" colorType="primary" onClick={handleClick}>
            로그아웃
        </Button>
    );
};
