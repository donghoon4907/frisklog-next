import type { FC } from 'react';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Dropdown } from 'antd';
import { FiMoreVertical } from 'react-icons/fi';
import { BiCommentDetail } from 'react-icons/bi';
import { marked } from 'marked';
import hljs from 'highlight.js';

import type { Post } from '../../interfaces/post';
import type { AppState } from '../../reducers';
import type { UserState } from '../../reducers/user';
import type { CommentState } from '../../reducers/comment';
import { ActiveLink } from '../ActiveLink';
import { timeForToday } from '../../lib/date/time-for-today';
import { LikePostButton } from '../button/LikePost';
import { ModifyPostButton } from '../button/ModifyPost';
import { RemovePostButton } from '../button/RemovePost';
import { PostMenu } from '../dropdown/PostItem.menu';
import { IconAndTextWrapper } from '../button/IconWrapper';
import { CommentList } from '../CommentList';
import { postCommentsRequest } from '../../actions/comment/post-comments.action';
import { useLazyQuery } from '../../hooks/use-query';
import { mixinBox, mixinEllipsis } from '../theme/mixins';
import { Avatar } from '../avatar';
import { useMutation } from '../../hooks/use-mutation';
import { restorePostRequest } from '../../actions/post/restore-post.action';
import { Button } from '../button';
import { convertAllToLike } from '../../lib/text/highlight';

const renderer = {
    code(code: string, lang: string) {
        const language = hljs.getLanguage(lang) ? lang : 'plaintext';

        return `
        <pre class="contraction-code">
            <code>${hljs.highlight(code, { language }).value}</code>
            <div class="copy-code">
                <button type="button" class="copy-code-btn" tabindex="-1" area-label="복사">
                    <textarea class="a11y-hidden">${code.replace(
                        /"/g,
                        "'",
                    )}</textarea>
                    
                </button>
                
            </div>
        </pre>
        `;
    },
};

marked.use({ renderer });

const Container = styled.div`
    position: relative;
    margin-bottom: 20px;
    width: 100%;
`;

const Body = styled.article`
    line-height: 0;
    position: relative;
    width: 100%;
    max-width: ${({ theme }) => theme.postWidth};

    ${mixinBox}
`;

const Header = styled.header`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 5px;
`;

const Writer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const HeaderMore = styled.div`
    & svg {
        width: 20px;
        height: 20px;
    }
`;

const AvatarWrapper = styled.div`
    width: 32px;
    height: 32px;
`;

const NicknameWrapper = styled.div`
    line-height: 1;
    flex-direction: row;
    flex-grow: 1;
    font-size: 1.5rem;
    font-weight: 700;
    height: 100%;
    overflow: hidden;
`;

const Nickname = styled.span`
    margin-left: 5px;
    margin-right: 5px;
    line-height: 1.5;

    ${mixinEllipsis}
`;

const Content = styled.div`
    position: relative;
    overflow: hidden;
    height: auto;
`;

const Footer = styled.footer`
    padding: 5px;
`;

const Tag = styled.div`
    position: relative;
    font-weight: 700;
    word-break: break-word;
    line-height: 1.5;
    font-size: 1rem;

    & a {
        padding: 2px 6px 2px 0;
        color: ${({ theme }) => theme.textColor};
        display: inline-block;
    }
`;

const More = styled.div`
    padding-top: 5px;
    border-top: 1px solid var(--frisklog-divider-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
`;

const Date = styled.div`
    flex: 1;
    text-align: right;
    line-height: 20px;
`;

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
    visibility,
}) => {
    const router = useRouter();

    const { id: userId } = useSelector<AppState, UserState>(
        (state) => state.user,
    );

    const { postComments } = useSelector<AppState, CommentState>(
        (state) => state.comment,
    );

    const [getComments] = useLazyQuery(postCommentsRequest);

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
    // 검색 키워드 - 검색 페이지에서만 활성
    const searchKeyword = router.query.keyword as string;
    // 실제 렌더링될 내용
    let renderContent = content;
    // 검색 키워드가 있는 경우 하이라이팅 처리
    if (searchKeyword) {
        renderContent = convertAllToLike(searchKeyword, renderContent);
    }

    return (
        <Container>
            <Body>
                <Header>
                    <Writer>
                        <AvatarWrapper>
                            <ActiveLink
                                aria-label="사용자 페이지"
                                href={isMe ? `/mypage/${userId}` : user.link}
                            >
                                <Avatar
                                    src={user.avatar}
                                    alt="Avatar"
                                    style={{
                                        width: 32,
                                        height: 32,
                                        borderRadius: 4,
                                    }}
                                />
                            </ActiveLink>
                        </AvatarWrapper>
                        <NicknameWrapper>
                            <Nickname>{user.nickname}</Nickname>
                        </NicknameWrapper>
                    </Writer>
                    {isMe && (
                        <HeaderMore>
                            <Dropdown
                                overlay={
                                    <PostMenu
                                        id={id}
                                        content={content}
                                        categories={postCategories}
                                        visibility={visibility}
                                    />
                                }
                                placement="bottomRight"
                            >
                                <FiMoreVertical />
                            </Dropdown>
                        </HeaderMore>
                    )}
                </Header>
                <Content>
                    <div
                        className="toastui-editor-contents"
                        ref={mdBodyEl}
                        dangerouslySetInnerHTML={{
                            __html: renderContent ? marked(renderContent) : '',
                        }}
                    />
                </Content>
                <Footer>
                    <Tag>
                        {postCategories.map((category, index) => (
                            <ActiveLink
                                key={`post${id}Category${index}`}
                                href={`/category/${category}`}
                                aria-label={`'${category}' 카테고리 검색`}
                            >
                                {`#${category}`}
                            </ActiveLink>
                        ))}
                    </Tag>

                    <More>
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
                                    visibility={visibility}
                                />
                                <RemovePostButton id={id} />
                            </>
                        )}

                        <Date>{timeForToday(createdAt)}</Date>
                    </More>
                    <div>
                        {activeComment && (
                            <CommentList
                                postId={postComments.postId!}
                                nodes={postComments.nodes!}
                                pageInfo={postComments.pageInfo!}
                            />
                        )}
                    </div>
                </Footer>
            </Body>
        </Container>
    );
};

export const RemovedPostItem: FC<Props> = ({
    id,
    user,
    categories,
    content,
    deletedAt,
}) => {
    const [restorePost] = useMutation(restorePostRequest, { useAuth: true });

    const postCategories = categories.map((category) => category.content);

    const isRestored = deletedAt === null;

    const handleRestore = () => {
        const message = '해당 포스트를 복원하시겠습니까?';

        const tf = confirm(message);

        if (tf) {
            restorePost({ id });
        }
    };

    return (
        <Container>
            <Body>
                <Header>
                    <Writer>
                        <AvatarWrapper>
                            <ActiveLink
                                aria-label="사용자 페이지"
                                href={user.link}
                            >
                                <Avatar
                                    src={user.avatar}
                                    alt="Avatar"
                                    style={{
                                        width: 28,
                                        height: 28,
                                        borderRadius: 4,
                                    }}
                                />
                            </ActiveLink>
                        </AvatarWrapper>
                        <NicknameWrapper>
                            <Nickname>{user.nickname}</Nickname>
                        </NicknameWrapper>
                    </Writer>
                    <HeaderMore>
                        <Button disabled={isRestored} onClick={handleRestore}>
                            {isRestored ? '복원 완료' : '복원'}
                        </Button>
                    </HeaderMore>
                </Header>
                <Content>
                    <div
                        className="toastui-editor-contents"
                        dangerouslySetInnerHTML={{
                            __html: content,
                        }}
                    />
                </Content>
                <Footer>
                    <Tag>
                        {postCategories.map((category, index) => (
                            <ActiveLink
                                key={`post${id}Category${index}`}
                                href={`/category/${category}`}
                                aria-label={`'${category}' 카테고리 검색`}
                            >
                                #{category}
                            </ActiveLink>
                        ))}
                    </Tag>

                    <More>
                        <div></div>
                        {deletedAt && <Date>{timeForToday(deletedAt)}</Date>}
                    </More>
                </Footer>
            </Body>
        </Container>
    );
};
