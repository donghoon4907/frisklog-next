import { useRef, FC } from 'react';
import { useSelector } from 'react-redux';
import { Dropdown } from 'antd';
import { FiMoreVertical } from 'react-icons/fi';
import { BiCommentDetail } from 'react-icons/bi';
import { marked } from 'marked';
import hljs from 'highlight.js';

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
import { useQuery } from '../hooks/use-query';

const renderer = {
    code(code: string, lang: string) {
        const language = hljs.getLanguage(lang) ? lang : 'plaintext';

        return `
        <pre class="contraction-code">
            <code>${hljs.highlight(code, { language }).value}</code>
            <div class="copy-code">
                <svg class="copy-code-icon" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" d="M0 0h24v24H0z"></path><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"></path>
                </svg>
            </div>
        </pre>
        `;
    },
};

marked.use({ renderer });

interface Props extends Post {}

export const PostItem: FC<Props> = ({
    id,
    createdAt,
    user,
    categories,
    content,
    isLiked,
    likedCount,
    commentCount,
}) => {
    const { id: userId } = useSelector<AppState, UserState>(
        (state) => state.user,
    );

    const { postComments } = useSelector<AppState, CommentState>(
        (state) => state.comment,
    );

    const [getComments] = useQuery(postCommentsRequest);

    const mdBodyEl = useRef<HTMLDivElement>(null);

    const activeComment = postComments.postId == id;

    // 댓글 클릭 핸들러
    const handleShowComment = () => {
        if (postComments.postId === null || !activeComment) {
            getComments({ postId: id, limit: 5 });
        }
    };

    const isMe = userId == user.id;

    const postCategories = categories.map((category) => category.content);

    return (
        <StyledPost.Container>
            <StyledPost.Body>
                <StyledPost.Header>
                    <StyledPost.Writer>
                        <StyledPost.AvatarWrapper>
                            <LinkAvatar
                                aria-label="사용자 페이지"
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
                            __html: content ? marked(content) : '',
                        }}
                    />
                </StyledPost.Content>
                <StyledPost.Footer>
                    <StyledPost.Tag>
                        {postCategories.map((category, index) => (
                            <ActiveLink
                                key={`post${id}Category${index}`}
                                href={`/category/${category}`}
                                aria-label={`'${category}' 카테고리 검색`}
                            >
                                #{category}
                            </ActiveLink>
                        ))}
                    </StyledPost.Tag>

                    <StyledPost.More>
                        <div>
                            <LikePostButton
                                postId={id}
                                isLiked={isLiked}
                                likedCount={likedCount}
                                isShowCount={true}
                            />
                        </div>
                        <div>
                            <IconAndTextWrapper
                                onClick={handleShowComment}
                                aria-label="댓글 보기"
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
