import type { FC } from 'react';
import { useRouter } from 'next/router';

import type { User } from '../interfaces/user';
import { FollowButton } from './button/Follow';
import * as StyledFollowingItem from './FollowingItem.style';
import { ActiveLink } from './ActiveLink';
import { Avatar } from './avatar';

interface Props extends User {}

export const FollowingItem: FC<Props> = ({
    id,
    nickname,
    avatar,
    postCount,
    followerCount,
}) => {
    const router = useRouter();

    const search = router.asPath.split('?')[1] || '';

    const searchParams = new URLSearchParams(`?${search}`);

    const isActive = id == router.query.userId;

    if (isActive) {
        searchParams.delete('userId');
    } else {
        searchParams.set('userId', id);
    }

    return (
        <StyledFollowingItem.Container>
            <StyledFollowingItem.Link isActive={isActive}>
                <ActiveLink
                    href={`/follow?${searchParams.toString()}`}
                    aria-label="사용자 포스트 보기"
                >
                    <StyledFollowingItem.Body>
                        <StyledFollowingItem.Avatar>
                            <Avatar
                                src={avatar}
                                alt="Avatar"
                                style={{
                                    width: 50,
                                    height: 50,
                                    borderRadius: 4,
                                }}
                            />
                        </StyledFollowingItem.Avatar>
                        <StyledFollowingItem.Meta>
                            <StyledFollowingItem.Name>
                                {nickname}
                            </StyledFollowingItem.Name>
                            <StyledFollowingItem.Description>
                                <span>팔로워 {followerCount}명</span>
                                <span> • </span>
                                <span>{postCount}개의 포스트</span>
                            </StyledFollowingItem.Description>
                        </StyledFollowingItem.Meta>
                    </StyledFollowingItem.Body>
                </ActiveLink>
            </StyledFollowingItem.Link>
            <StyledFollowingItem.Toolbar>
                <FollowButton userId={id} defaultIsFollowing={true} />
            </StyledFollowingItem.Toolbar>
        </StyledFollowingItem.Container>
    );
};
