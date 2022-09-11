import React, { useRef, useState, FC } from 'react';
import { useSelector } from 'react-redux';

import { AppState } from '../reducers';
import { UserState } from '../reducers/user';
import { LinkAvatar } from './LinkAvatar';
import { ActiveLink } from './ActiveLink';
import { timeForToday } from '../lib/date/time-for-today';
import * as StyledPost from './PostItem.style';
import { User } from '../interfaces/user';
import { Category } from '../interfaces/category';
import { LikePostButton } from './button/LikePost';

interface Props {
    id: string;
    content: string;
    likers: User[];
    createdAt: string;
    user: User;
    categories: Category[];
}

export const PostItem: FC<Props> = ({
    id,
    createdAt,
    user,
    categories,
    content,
    likers,
}) => {
    const { id: userId } = useSelector<AppState, UserState>(
        (state) => state.user,
    );

    const mdBodyEl = useRef<HTMLDivElement>(null);
    // ori 작업 완료 여부
    // useResizeImage(mdBodyEl);
    // 댓글 보기 여부
    const [activeComment, setActiveComment] = useState(false);

    // 댓글 클릭 핸들러
    const handleShowComment = () => {
        setActiveComment(!activeComment);
    };

    const isMe = userId == user.id;

    return (
        <StyledPost.Container>
            <StyledPost.Body>
                <StyledPost.Header>
                    <StyledPost.AvatarWrapper title="사용자 링크">
                        <LinkAvatar
                            ariaLabel="사용자 페이지로 이동"
                            href={user.link}
                            src={user.avatar}
                            alt="Avatar"
                        />
                    </StyledPost.AvatarWrapper>
                    <StyledPost.NameWrapper>
                        <StyledPost.NameBody>
                            {user.nickname}
                        </StyledPost.NameBody>
                    </StyledPost.NameWrapper>
                </StyledPost.Header>
                <StyledPost.Content>
                    {/* <div
                        ref={mdBodyEl}
                        className="markdown-body"
                        dangerouslySetInnerHTML={{
                            __html: content ? marked(content) : '',
                        }}
                    /> */}
                </StyledPost.Content>
                <StyledPost.Footer>
                    <StyledPost.Tag>
                        {categories.map(({ content }, index) => (
                            <ActiveLink
                                key={`post${id}Category${index}`}
                                href={`/category/${content}`}
                                ariaLabel={`'${content}' 카테고리 검색`}
                            >
                                #{content}
                            </ActiveLink>
                        ))}
                    </StyledPost.Tag>

                    <StyledPost.More>
                        <div>
                            <LikePostButton
                                postId={id}
                                likers={likers}
                                isShowCount={true}
                            />
                        </div>

                        {/* <div title="댓글 버튼">
                            <button
                                type="button"
                                onClick={handleShowComment}
                                aria-label="댓글 보기"
                            >
                                <Comment />
                            </button>
                        </div> */}
                        {/* {isMe && (
                            <>
                                <ModifyPostBtn
                                    postId={id}
                                    content={content}
                                    categories={Categories}
                                />
                                <RemovePostBtn postId={id} />
                            </>
                        )} */}

                        <StyledPost.Date>
                            {timeForToday(createdAt)}
                        </StyledPost.Date>
                    </StyledPost.More>
                    {/* <div className={`${displayName}__comment`}>
                        {activeComment && <CommentList postId={id} />}
                    </div> */}
                </StyledPost.Footer>
            </StyledPost.Body>
        </StyledPost.Container>
    );
};
