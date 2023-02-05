import React, { useState, FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

import { likePostRequest } from '../../actions/post/like-post.action';
import { unlikePostRequest } from '../../actions/post/unlike-post.action';
import { AppState } from '../../reducers';
import { LoadingState } from '../../reducers/common/loading';
import { IconAndTextWrapper, IconWrapper } from './IconWrapper';
import { useMutation } from '../../hooks/use-mutation';

interface Props {
    postId: string;
    isLiked: boolean;
    isShowCount: boolean;
    likedCount: number;
}

export const LikePostButton: FC<Props> = ({
    postId,
    isLiked,
    isShowCount,
    likedCount,
}) => {
    const { loading } = useSelector<AppState, LoadingState>(
        (state) => state.loading,
    );
    // 좋아요 여부 상태
    const [isLike, setIsLike] = useState<boolean>(false);
    // 좋아요 수 상태, -1: 비활성화
    const [likeCount, setLikeCount] = useState(likedCount);

    const [likePost] = useMutation(likePostRequest, { useAuth: true });

    const [unlikePost] = useMutation(unlikePostRequest, { useAuth: true });

    // 클릭 핸들러
    const handleClick = () => {
        if (loading) {
            return alert('요청 중입니다. 잠시만 기다려주세요.');
        }

        let nextIsLike: boolean;
        let nextLikeCount: number;

        if (isLike) {
            nextIsLike = false;

            nextLikeCount = likeCount - 1;

            unlikePost({
                id: postId,
            });
        } else {
            nextIsLike = true;

            nextLikeCount = likeCount + 1;

            likePost({
                id: postId,
            });
        }

        // 좋아요 여부 업데이트
        setIsLike(nextIsLike);
        // 좋아요 수 업데이트
        setLikeCount(nextLikeCount);
    };

    useEffect(() => {
        setIsLike(isLiked);
    }, [isLiked]);

    return isShowCount ? (
        <IconAndTextWrapper
            onClick={handleClick}
            aria-label={isLike ? '좋아요 취소' : '좋아요'}
            text={likeCount.toLocaleString()}
        >
            {isLike ? <AiFillHeart /> : <AiOutlineHeart />}
        </IconAndTextWrapper>
    ) : (
        <IconWrapper
            onClick={handleClick}
            aria-label={isLike ? '좋아요 취소' : '좋아요'}
        >
            {isLike ? <AiFillHeart /> : <AiOutlineHeart />}
        </IconWrapper>
    );
};
