import { FC } from 'react';

import { LinkAvatar } from './LinkAvatar';
import { ActiveLink } from './ActiveLink';
import { timeForToday } from '../lib/date/time-for-today';
import * as StyledPost from './PostItem.style';
import { Post } from '../interfaces/post';
import { Button } from './button';
import { useMutation } from '../hooks/use-mutation';
import { restorePostRequest } from '../actions/post/restore-post.action';

interface Props extends Post {}

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
                        <Button disabled={isRestored} onClick={handleRestore}>
                            {isRestored ? '복원 완료' : '복원'}
                        </Button>
                    </StyledPost.HeaderMore>
                </StyledPost.Header>
                <StyledPost.Content>
                    <div
                        className="toastui-editor-contents"
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
                        <div></div>
                        {deletedAt && (
                            <StyledPost.Date>
                                {timeForToday(deletedAt)}
                            </StyledPost.Date>
                        )}
                    </StyledPost.More>
                </StyledPost.Footer>
            </StyledPost.Body>
        </StyledPost.Container>
    );
};
