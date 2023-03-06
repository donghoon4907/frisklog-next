import { FC } from 'react';

import { Button } from '.';
import { logoutUserRequest } from '../../actions/user/logout-user.action';
import { useMutation } from '../../hooks/use-mutation';
import { useRoute } from '../../hooks/use-route';

export const LogoutButton: FC = () => {
    const route = useRoute();

    const [logout] = useMutation(logoutUserRequest);

    // 클릭 핸들러
    const handleClick = () => {
        const tf = window.confirm('로그아웃 하시겠어요?');

        if (tf) {
            logout({}, () => route.move('/'));
        }
    };

    return (
        <Button type="button" colorType="danger" onClick={handleClick}>
            로그아웃
        </Button>
    );
};
