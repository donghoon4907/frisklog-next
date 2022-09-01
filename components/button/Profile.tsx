import { FC } from 'react';
import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux';

import { useAuthenticate } from '../../hooks';
import { LinkAvatar } from '../LinkAvatar';

const AvatarWrapper = styled.div`
    width: 28px;
    height: 28px;
`;

export const ProfileButton: FC = () => {
    const { id, avatar } = useSelector(
        (state: Record<string, any>) => state.user,
    );

    const { validateToken } = useAuthenticate();

    const handleClick = () => validateToken();

    return id ? (
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
