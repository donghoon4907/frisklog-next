import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '.';
import { followUserRequest } from '../../actions/user/follow-user.action';
import { unfollowUserRequest } from '../../actions/user/unfollow-user.action';
import { useAuthenticate } from '../../hooks/use-authenticate';
import { AppState } from '../../reducers';
import { LoadingState } from '../../reducers/common/loading';
// import { UserState } from '../../reducers/user';

interface Props {
    userId: string;
    defaultIsFollowing?: boolean;
}

export const FollowButton: FC<Props> = ({ userId, defaultIsFollowing }) => {
    const dispatch = useDispatch();

    // const { id, followings } = useSelector<AppState, UserState>(
    //     (state) => state.user,
    // );

    const { loading } = useSelector<AppState, LoadingState>(
        (state) => state.loading,
    );

    const { validateToken } = useAuthenticate();

    const [isFollowing, setIsFollowing] = useState<boolean>(
        defaultIsFollowing || false,
    );
    // const isFollowing = followings.some((following) => following.id == userId);
    // 클릭 핸들러
    const handleClick = () => {
        const token = validateToken();

        if (!token) {
            return null;
        }

        if (loading) {
            return alert('요청 중입니다. 잠시만 기다려주세요.');
        }

        if (isFollowing) {
            dispatch(unfollowUserRequest({ id: userId }));
        } else {
            dispatch(followUserRequest({ id: userId }));
        }

        setIsFollowing(!isFollowing);
    };

    return (
        <div title="팔로우 버튼">
            <Button
                type="button"
                onClick={handleClick}
                colorType={isFollowing ? 'danger' : 'info'}
                aria-label={isFollowing ? '언팔로우' : '팔로우'}
            >
                {isFollowing ? '언팔로우' : '팔로우'}
            </Button>
        </div>
    );
};
