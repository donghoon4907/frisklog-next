import { useRouter } from 'next/router';
import { FC } from 'react';

import { User } from '../interfaces/user';
import { FollowButton } from './button/Follow';
import { SquareAvatar } from './SquareAvatar';
import * as StyledFollowingItem from './FollowingItem.style';
import { ActiveLink } from './ActiveLink';

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
                    ariaLabel="사용자 포스트 보기"
                >
                    <StyledFollowingItem.Body>
                        <StyledFollowingItem.Avatar>
                            <SquareAvatar src={avatar} alt="Avatar" />
                        </StyledFollowingItem.Avatar>
                        <StyledFollowingItem.Meta>
                            <StyledFollowingItem.Name>
                                <span>{nickname}</span>
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
