import { FC } from 'react';

import { User } from '../interfaces/user';
import { LinkAvatar } from './LinkAvatar';
import * as StyleUser from './UserItem.style';

interface Props extends User {}

export const UserItem: FC<Props> = ({ nickname, avatar, link, postCount }) => (
    <StyleUser.Container>
        <StyleUser.Header>
            <StyleUser.Nickname>{nickname}</StyleUser.Nickname>
            <span>{postCount?.toLocaleString()} Posts</span>
        </StyleUser.Header>
        <StyleUser.Body>
            <StyleUser.AvatarWrapper>
                <LinkAvatar
                    aria-label="사용자 페이지"
                    href={link}
                    src={avatar}
                    alt="Avatar"
                    tab-index="-1"
                />
            </StyleUser.AvatarWrapper>
        </StyleUser.Body>
    </StyleUser.Container>
);
