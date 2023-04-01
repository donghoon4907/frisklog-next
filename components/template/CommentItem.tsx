import { Dropdown } from 'antd';
import type { FC, FormEvent } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { FiMoreVertical } from 'react-icons/fi';
import styled from 'styled-components';

import type { Comment } from '../../interfaces/comment';
import type { AppState } from '../../reducers';
import type { UserState } from '../../reducers/user';
import { deleteCommentRequest } from '../../actions/comment/delete-comment.action';
import { updateCommentRequest } from '../../actions/comment/update-comment.action';
import { useInput } from '../../hooks/use-input';
import { timeForToday } from '../../lib/date/time-for-today';
import { CommentItemMenu } from '../dropdown/CommentItem.menu';
import { FormColumn, FormSubmitColumn } from '../form/form.style';
import { Button } from '../button';
import { FormTextarea } from '../FormTextarea';
import { useMutation } from '../../hooks/use-mutation';
import { mixinEllipsis } from '../theme/mixins';
import { Avatar } from '../avatar';
import { ActiveLink } from '../ActiveLink';

const Container = styled.li`
    border-top: 1px solid ${({ theme }) => theme.dividerColor};
`;

const Body = styled.div`
    position: relative;
    padding: 12px 23px 10px 0;
`;

const AvatarWrapper = styled.div`
    position: absolute;
    top: 12px;
    left: 0;
`;

const Meta = styled.div`
    padding-left: 46px;
`;

const Nickname = styled.div`
    margin-bottom: 4px;
    line-height: 1.5;
    font-weight: 700;
    overflow: hidden;
`;

const Content = styled.p`
    position: relative;
    line-height: 1.5;
    font-size: 13px;

    ${mixinEllipsis}
`;

const Date = styled.div`
    margin-top: 7px;
    font-size: 12px;
    line-height: 1;
    color: #979797;
`;

const Extension = styled.div`
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate3d(0, -50%, 0);
`;

interface Props extends Comment {}

export const CommentItem: FC<Props> = ({ id, content, createdAt, user }) => {
    const { id: userId } = useSelector<AppState, UserState>(
        (state) => state.user,
    );

    const [updateComment] = useMutation(updateCommentRequest, {
        useAuth: true,
    });

    const [deleteComment] = useMutation(deleteCommentRequest, {
        useAuth: true,
    });
    // 댓글
    const comment = useInput('');
    // 수정 활성화 여부
    const [activeUpdate, setActiveUpdate] = useState(false);
    // 내가 작성한 댓글인지 여부
    const isMyComment = userId ? userId == user.id : false;
    // 수정 클릭 핸들러
    const handleShowUpdate = () => {
        setActiveUpdate(true);
    };
    // 수정 취소 핸들러
    const handleHideUpdate = () => {
        comment.setValue('');

        setActiveUpdate(false);
    };
    // 댓글 수정 핸들러
    const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();

        if (comment.value.length > 100) {
            return alert('댓글은 100자 미만으로 입력 해주세요.');
        }

        const message = '입력한 내용으로 수정하시겠어요?';

        const tf = confirm(message);

        if (tf) {
            updateComment(
                {
                    id,
                    content: comment.value,
                },
                () => handleHideUpdate(),
            );
        }
    };
    // 댓글 삭제 핸들러
    const handleDelete = () => {
        const message = '댓글을 삭제하시겠어요?';

        const tf = confirm(message);

        if (tf) {
            deleteComment(
                {
                    id,
                },
                () => handleHideUpdate(),
            );
        }
    };

    return (
        <Container>
            <Body>
                <AvatarWrapper>
                    <ActiveLink aria-label="사용자 페이지" href={user.link}>
                        <Avatar
                            src={user.avatar}
                            alt="Avatar"
                            style={{ width: 36, height: 36, borderRadius: 4 }}
                        />
                    </ActiveLink>
                </AvatarWrapper>
                <Meta>
                    <Nickname>
                        <span>
                            <strong>{user.nickname}</strong>
                        </span>
                    </Nickname>
                    <Content>{content}</Content>
                    <Date>
                        <span>{timeForToday(createdAt)}</span>
                    </Date>
                </Meta>
                {isMyComment && (
                    <Extension>
                        {
                            <Dropdown
                                overlay={
                                    <CommentItemMenu
                                        onUpdate={handleShowUpdate}
                                        onDelete={handleDelete}
                                    />
                                }
                            >
                                <FiMoreVertical />
                            </Dropdown>
                        }
                    </Extension>
                )}
            </Body>

            {activeUpdate && (
                <form onSubmit={handleSubmit}>
                    <FormColumn>
                        <FormTextarea
                            id={`update_comment${id}`}
                            placeholder="댓글을 입력하세요."
                            label="댓글"
                            {...comment}
                        />
                    </FormColumn>

                    <FormSubmitColumn>
                        <Button
                            type="button"
                            colorType="warning"
                            onClick={handleHideUpdate}
                        >
                            취소
                        </Button>
                        <Button type="submit" colorType="primary">
                            댓글 수정
                        </Button>
                    </FormSubmitColumn>
                </form>
            )}
        </Container>
    );
};
