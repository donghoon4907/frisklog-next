import type { FC } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux';

import type { UserState } from '../../reducers/user';
import type { AppState } from '../../reducers';
import { IconWrapper } from './IconWrapper';
import { Avatar } from '../avatar';
import { ActiveLink } from '../ActiveLink';
import { useAuthenticate } from '../../hooks/use-authenticate';

export const ProfileButton: FC = () => {
    const { id, avatar } = useSelector<AppState, UserState>(
        (state) => state.user,
    );

    const { validateToken } = useAuthenticate();

    const handleClick = () => validateToken();

    const isLogin = !!id;

    return isLogin ? (
        <ActiveLink aria-label="마이페이지" href={`/mypage/${id}`}>
            <Avatar
                src={avatar!}
                alt="Avatar"
                width={28}
                height={28}
                borderRadius="4px"
            />
        </ActiveLink>
    ) : (
        <IconWrapper aria-label="로그인" onClick={handleClick}>
            <FaUserCircle />
        </IconWrapper>
    );
};
