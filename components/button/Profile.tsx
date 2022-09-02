import { FC } from 'react';
import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux';

import { useAuthenticate } from '../../hooks/use-authenticate';
import { LinkAvatar } from '../LinkAvatar';
import { IState } from '../../reducers';
import { IUserState } from '../../reducers/user';

const AvatarWrapper = styled.div`
    width: 28px;
    height: 28px;
`;

export const ProfileButton: FC = () => {
    const { id, avatar } = useSelector<IState, IUserState>(state => state.user);

    const { validateToken } = useAuthenticate();

    const handleClick = () => validateToken();

    const isLogin = id !== null && avatar !== null;

    return isLogin ? (
        <AvatarWrapper title="마이페이지 링크">
            <LinkAvatar
                ariaLabel="마이페이지로 이동"
                href={`/user/${id}`}
                src={avatar}
                alt="Avatar"
            />
        </AvatarWrapper>
    ) : (
        <div title="로그인 버튼">
            <button type="button" onClick={handleClick} aria-label="로그인">
                <FaUserCircle />
            </button>
        </div>
    );
};
