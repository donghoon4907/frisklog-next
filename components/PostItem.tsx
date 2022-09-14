import React, { useRef, useState, FC } from 'react';
import { useSelector } from 'react-redux';
import { Dropdown } from 'antd';
import { FiMoreVertical } from 'react-icons/fi';

import { AppState } from '../reducers';
import { UserState } from '../reducers/user';
import { LinkAvatar } from './LinkAvatar';
import { ActiveLink } from './ActiveLink';
import { timeForToday } from '../lib/date/time-for-today';
import * as StyledPost from './PostItem.style';
import { LikePostButton } from './button/LikePost';
import { HomePost } from '../interfaces/post';
import { ModifyPostButton } from './button/ModifyPost';
import { RemovePostButton } from './button/RemovePost';
import { PostMenu } from './dropdown/PostItem.menu';

interface Props extends HomePost {}

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
    // 댓글 보기 여부
    const [activeComment, setActiveComment] = useState(false);

    // 댓글 클릭 핸들러
    const handleShowComment = () => {
        setActiveComment(!activeComment);
    };

    const isMe = userId == user.id;

    const postCategories = categories.map((category) => category.content);

    return (
        <StyledPost.Container>
            <StyledPost.Body>
                <StyledPost.Header>
                    <StyledPost.Writer>
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
                    </StyledPost.Writer>
                    <StyledPost.HeaderMore>
                        <Dropdown
                            overlay={
                                <PostMenu
                                    postId={id}
                                    content={content}
                                    categories={postCategories}
                                />
                            }
                            placement="bottomRight"
                        >
                            <FiMoreVertical />
                        </Dropdown>
                    </StyledPost.HeaderMore>
                </StyledPost.Header>
                <StyledPost.Content>
                    <div
                        className="toastui-editor-contents"
                        ref={mdBodyEl}
                        dangerouslySetInnerHTML={{
                            __html: content,
                        }}
                    />
                </StyledPost.Content>
                <StyledPost.Footer>
                    <StyledPost.Tag>
                        {postCategories.map((category, index) => (
                            <ActiveLink
                                key={`post${id}Category${index}`}
                                href={`/category/${category}`}
                                ariaLabel={`'${category}' 카테고리 검색`}
                            >
                                #{category}
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
                        {isMe && (
                            <>
                                <ModifyPostButton
                                    postId={id}
                                    content={content}
                                    categories={postCategories}
                                />
                                <RemovePostButton postId={id} />
                            </>
                        )}

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
