import React, { useRef, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown } from 'antd';
import { FiMoreVertical } from 'react-icons/fi';
import { BiCommentDetail } from 'react-icons/bi';

import { AppState } from '../reducers';
import { UserState } from '../reducers/user';
import { LinkAvatar } from './LinkAvatar';
import { ActiveLink } from './ActiveLink';
import { timeForToday } from '../lib/date/time-for-today';
import * as StyledPost from './PostItem.style';
import { LikePostButton } from './button/LikePost';
import { Post } from '../interfaces/post';
import { ModifyPostButton } from './button/ModifyPost';
import { RemovePostButton } from './button/RemovePost';
import { PostMenu } from './dropdown/PostItem.menu';
import { IconAndTextWrapper } from './button/IconWrapper';
import { CommentList } from './CommentList';
import { postCommentsRequest } from '../actions/comment/post-comments.action';
import { CommentState } from '../reducers/comment';

interface Props extends Post {}

export const PostItem: FC<Props> = ({
    id,
    createdAt,
    user,
    categories,
    content,
    likers,
    commentCount,
}) => {
    const dispatch = useDispatch();

    const { id: userId } = useSelector<AppState, UserState>(
        (state) => state.user,
    );

    const { postComments } = useSelector<AppState, CommentState>(
        (state) => state.comment,
    );

    const mdBodyEl = useRef<HTMLDivElement>(null);

    const activeComment = postComments.postId == id;

    // 댓글 클릭 핸들러
    const handleShowComment = () => {
        if (postComments.postId === null || !activeComment) {
            dispatch(postCommentsRequest({ postId: id, limit: 5 }));
        }
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
                    {isMe && (
                        <StyledPost.HeaderMore>
                            <Dropdown
                                overlay={
                                    <PostMenu
                                        id={id}
                                        content={content}
                                        categories={postCategories}
                                    />
                                }
                                placement="bottomRight"
                            >
                                <FiMoreVertical />
                            </Dropdown>
                        </StyledPost.HeaderMore>
                    )}
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
                        <div>
                            <IconAndTextWrapper
                                onClick={handleShowComment}
                                ariaLabel="댓글 보기"
                                text={commentCount.toLocaleString()}
                            >
                                <BiCommentDetail />
                            </IconAndTextWrapper>
                        </div>

                        {isMe && (
                            <>
                                <ModifyPostButton
                                    postId={id}
                                    content={content}
                                    categories={postCategories}
                                />
                                <RemovePostButton id={id} />
                            </>
                        )}

                        <StyledPost.Date>
                            {timeForToday(createdAt)}
                        </StyledPost.Date>
                    </StyledPost.More>
                    <div>
                        {activeComment && (
                            <CommentList
                                postId={postComments.postId!}
                                nodes={postComments.nodes!}
                                pageInfo={postComments.pageInfo!}
                            />
                        )}
                    </div>
                </StyledPost.Footer>
            </StyledPost.Body>
        </StyledPost.Container>
    );
};
