import { FC } from 'react';
import { ActiveLink } from '../../ActiveLink';

import * as StyledMyPosts from './MyPosts.style';

export const MyPosts: FC = () => {
    return (
        <StyledMyPosts.Container>
            <StyledMyPosts.Item>
                <ActiveLink
                    href="/mypage/like"
                    aria-label="좋아요한 포스트 보기"
                >
                    좋아요한 포스트 보기
                </ActiveLink>
            </StyledMyPosts.Item>
            <hr />
            <StyledMyPosts.Item>
                <ActiveLink
                    href="/mypage/restore"
                    aria-label="삭제한 포스트 보기"
                >
                    삭제한 포스트 보기
                </ActiveLink>
            </StyledMyPosts.Item>
        </StyledMyPosts.Container>
    );
};
