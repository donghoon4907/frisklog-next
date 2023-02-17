import { FC, useState } from 'react';

import { Button } from '.';
import { followUserRequest } from '../../actions/user/follow-user.action';
import { unfollowUserRequest } from '../../actions/user/unfollow-user.action';
import { useMutation } from '../../hooks/use-mutation';

interface Props {
    userId: string;
    defaultIsFollowing?: boolean;
}

export const FollowButton: FC<Props> = ({ userId, defaultIsFollowing }) => {
    const [follow] = useMutation(followUserRequest, { useAuth: true });

    const [unfollow] = useMutation(unfollowUserRequest, { useAuth: true });

    const [isFollowing, setIsFollowing] = useState<boolean>(
        defaultIsFollowing || false,
    );
    // 클릭 핸들러
    const handleClick = () => {
        if (isFollowing) {
            unfollow({ id: userId }, () => setIsFollowing(!isFollowing));
        } else {
            follow({ id: userId }, () => setIsFollowing(!isFollowing));
        }
    };

    return (
        <Button
            type="button"
            onClick={handleClick}
            colorType={isFollowing ? 'danger' : 'info'}
            aria-label={isFollowing ? '언팔로우' : '팔로우'}
        >
            {isFollowing ? '언팔로우' : '팔로우'}
        </Button>
    );
};
