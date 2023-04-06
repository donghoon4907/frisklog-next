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

    const isLogin = !!id && !!avatar;

    return (
        <ActiveLink
            aria-label={isLogin ? '마이 페이지로 가기' : '로그인 페이지로 가기'}
            href={isLogin ? `/mypage/${id}` : '/auth/login'}
        >
            {isLogin ? (
                <Avatar
                    src={avatar}
                    alt="Avatar"
                    style={{ width: 28, height: 28, borderRadius: 4 }}
                />
            ) : (
                <FaUserCircle />
            )}
        </ActiveLink>
    );
};
