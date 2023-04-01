import type { FC } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import type { User } from '../../interfaces/user';
import type { AppState } from '../../reducers';
import type { UserState } from '../../reducers/user';
import { mixinBox, mixinEllipsis } from '../theme/mixins';
import { ActiveLink } from '../ActiveLink';
import { Avatar } from '../avatar';

const Container = styled.div`
    display: flex;
    height: 110px;
    margin: 0 auto;
    padding: 1rem;

    ${mixinBox}

    ${({ theme }) => theme.breakPoints.md} {
        height: 150px;
    }
`;

const Header = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
`;

const Nickname = styled.span`
    font-family: 'Favorit', 'Helvetica Neue', 'HelveticaNeue', Helvetica, Arial,
        sans-serif;
    font-weight: 700;
    font-size: 18px;
    line-height: 30px;
    height: 30px;
    margin-right: 5px;

    ${mixinEllipsis};
`;

const Body = styled.div`
    width: 80px;
`;

const AvatarWrapper = styled.div`
    width: 100%;
    height: 80px;
`;

interface Props extends User {}

export const UserItem: FC<Props> = ({
    id,
    nickname,
    avatar,
    link,
    postCount,
}) => {
    const { id: userId } = useSelector<AppState, UserState>(
        (state) => state.user,
    );

    const isMe = userId == id;

    return (
        <Container>
            <Header>
                <Nickname>{nickname}</Nickname>
                <span>{postCount?.toLocaleString()} Posts</span>
            </Header>
            <Body>
                <AvatarWrapper>
                    <ActiveLink
                        aria-label="사용자 페이지"
                        href={isMe ? `/mypage/${id}` : link}
                        tab-index="-1"
                    >
                        <Avatar
                            src={avatar}
                            alt="Avatar"
                            style={{ width: 80, height: 80, borderRadius: 4 }}
                        />
                    </ActiveLink>
                </AvatarWrapper>
            </Body>
        </Container>
    );
};
