import { FC } from 'react';
import { useSelector } from 'react-redux';

import { User } from '../interfaces/user';
import { LinkAvatar } from './LinkAvatar';
import * as StyleUser from './UserItem.style';
import { AppState } from '../reducers';
import { UserState } from '../reducers/user';

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
        <StyleUser.Container>
            <StyleUser.Header>
                <StyleUser.Nickname>{nickname}</StyleUser.Nickname>
                <span>{postCount?.toLocaleString()} Posts</span>
            </StyleUser.Header>
            <StyleUser.Body>
                <StyleUser.AvatarWrapper>
                    <LinkAvatar
                        aria-label="사용자 페이지"
                        href={isMe ? `/mypage/${id}` : link}
                        src={avatar}
                        alt="Avatar"
                        tab-index="-1"
                    />
                </StyleUser.AvatarWrapper>
            </StyleUser.Body>
        </StyleUser.Container>
    );
};
