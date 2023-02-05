import { FC } from 'react';
import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux';

import { useAuthenticate } from '../../hooks/use-authenticate';
import { LinkAvatar } from '../LinkAvatar';
import { UserState } from '../../reducers/user';
import { IconWrapper } from './IconWrapper';
import { AppState } from '../../reducers';

const AvatarWrapper = styled.div`
    width: 28px;
    height: 28px;
`;

export const ProfileButton: FC = () => {
    const { id, avatar } = useSelector<AppState, UserState>(
        (state) => state.user,
    );

    const { validateToken } = useAuthenticate();

    const handleClick = () => validateToken();

    const isLogin = id !== null && avatar !== null;

    return isLogin ? (
        <AvatarWrapper>
            <LinkAvatar
                aria-label="마이페이지"
                href={`/user/${id}`}
                src={avatar}
                alt="Avatar"
            />
        </AvatarWrapper>
    ) : (
        <IconWrapper aria-label="로그인" onClick={handleClick}>
            <FaUserCircle />
        </IconWrapper>
    );
};
