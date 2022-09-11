import React, { useState, useEffect, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

import {
    likePostRequest,
    LIKE_POST_KEY,
} from '../../actions/post/like-post.action';
import {
    unlikePostRequest,
    UNLIKE_POST_KEY,
} from '../../actions/post/unlike-post.action';
import { useAuthenticate } from '../../hooks/use-authenticate';
import { User } from '../../interfaces/user';
import { AppState } from '../../reducers';
import { LoadingState } from '../../reducers/common/loading';
import { UserState } from '../../reducers/user';
import { IconAndTextWrapper, IconWrapper } from './IconWrapper';

interface Props {
    postId: string;
    likers: User[];
    isShowCount: boolean;
}

export const LikePostButton: FC<Props> = ({ postId, likers, isShowCount }) => {
    const dispatch = useDispatch();

    const { id } = useSelector<AppState, UserState>((state) => state.user);

    const loading = useSelector<AppState, LoadingState>(
        (state) => state.loading,
    );
    // 좋아요 여부 상태
    const [isLike, setIsLike] = useState<boolean>(false);
    // 좋아요 수 상태, -1: 비활성화
    const [likeCount, setLikeCount] = useState<number>(likers.length);

    const { validateToken } = useAuthenticate();

    const isLoading = loading[LIKE_POST_KEY] || loading[UNLIKE_POST_KEY];
    // 클릭 핸들러
    const handleClick = () => {
        if (isLoading) {
            return alert('요청 중입니다. 잠시만 기다려주세요.');
        }
        // 로그인 체크
        const token = validateToken();

        if (token !== null) {
            let nextIsLike;
            let nextLikeCount;

            if (isLike) {
                dispatch(
                    unlikePostRequest({
                        id: postId,
                    }),
                );
                nextIsLike = false;

                nextLikeCount = likeCount - 1;
            } else {
                dispatch(
                    likePostRequest({
                        id: postId,
                    }),
                );

                nextIsLike = true;

                nextLikeCount = likeCount + 1;
            }
            // 좋아요 여부 업데이트
            setIsLike(nextIsLike);
            // 좋아요 수 업데이트
            setLikeCount(nextLikeCount);
        }
    };

    useEffect(() => {
        setIsLike(likers.some((liker) => liker.id == id));
    }, [id]);

    return isShowCount ? (
        <IconAndTextWrapper
            onClick={handleClick}
            ariaLabel={isLike ? '좋아요 취소' : '좋아요'}
            text={likeCount.toLocaleString()}
        >
            {isLike ? <AiFillHeart /> : <AiOutlineHeart />}
        </IconAndTextWrapper>
    ) : (
        <IconWrapper
            onClick={handleClick}
            ariaLabel={isLike ? '좋아요 취소' : '좋아요'}
        >
            {isLike ? <AiFillHeart /> : <AiOutlineHeart />}
        </IconWrapper>
    );
};
