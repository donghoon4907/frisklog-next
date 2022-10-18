import { Dropdown } from 'antd';
import { useState, FC, FormEvent } from 'react';
import { useSelector } from 'react-redux';
import { FiMoreVertical } from 'react-icons/fi';

import { deleteCommentRequest } from '../actions/comment/delete-comment.action';
import { updateCommentRequest } from '../actions/comment/update-comment.action';
import { useInput } from '../hooks/use-input';
import { Comment } from '../interfaces/comment';
import { timeForToday } from '../lib/date/time-for-today';
import { AppState } from '../reducers';
import { UserState } from '../reducers/user';
import { LinkAvatar } from './LinkAvatar';
import { CommentItemMenu } from './dropdown/CommentItem.menu';
import { FormColumn, FormSubmitColumn } from './form/form.style';
import { Button } from './button';
import { FormTextarea } from './FormTextarea';
import * as StyledCommentItem from './CommentItem.style';
import { useMutation } from '../hooks/use-mutation';

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
        <StyledCommentItem.Container>
            <StyledCommentItem.Body>
                <StyledCommentItem.AvatarWrapper title="사용자 링크">
                    <LinkAvatar
                        ariaLabel="사용자 페이지로 이동"
                        href={user.link}
                        src={user.avatar}
                        alt="Avatar"
                    />
                </StyledCommentItem.AvatarWrapper>
                <StyledCommentItem.Meta>
                    <StyledCommentItem.Nickname>
                        <span>
                            <strong>{user.nickname}</strong>
                        </span>
                    </StyledCommentItem.Nickname>
                    <StyledCommentItem.Content>
                        {content}
                    </StyledCommentItem.Content>
                    <StyledCommentItem.Date>
                        <span>{timeForToday(createdAt)}</span>
                    </StyledCommentItem.Date>
                </StyledCommentItem.Meta>
                {isMyComment && (
                    <StyledCommentItem.Extension>
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
                    </StyledCommentItem.Extension>
                )}
            </StyledCommentItem.Body>

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
        </StyledCommentItem.Container>
    );
};
