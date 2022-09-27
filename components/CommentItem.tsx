import { Dropdown } from 'antd';
import { useState, FC, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiMoreVertical } from 'react-icons/fi';

import { deleteCommentRequest } from '../actions/comment/delete-comment.action';
import { updateCommentRequest } from '../actions/comment/update-comment.action';
import { useAuthenticate } from '../hooks/use-authenticate';
import { useInput } from '../hooks/use-input';
import { Comment } from '../interfaces/comment';
import { timeForToday } from '../lib/date/time-for-today';
import { AppState } from '../reducers';
import { LoadingState } from '../reducers/common/loading';
import { UserState } from '../reducers/user';
import { LinkAvatar } from './LinkAvatar';
import { CommentItemMenu } from './dropdown/CommentItem.menu';
import { FormColumn, FormSubmitColumn } from './form/form.style';
import { Button } from './button';
import { FormTextarea } from './FormTextarea';
import * as StyledCommentItem from './CommentItem.style';

interface Props extends Comment {}

export const CommentItem: FC<Props> = ({ id, content, createdAt, user }) => {
    const dispatch = useDispatch();

    const { id: userId } = useSelector<AppState, UserState>(
        (state) => state.user,
    );

    const { loading } = useSelector<AppState, LoadingState>(
        (state) => state.loading,
    );

    const { validateToken } = useAuthenticate();
    // 댓글
    const comment = useInput(content);
    // 수정 활성화 여부
    const [activeUpdate, setActiveUpdate] = useState(false);
    // 수정된 댓글
    const [changeComment, setChangeComment] = useState(content);
    // 삭제되어 사용할 수 없게 되었는지 여부
    const [disabled, setDisabled] = useState(false);
    // 내가 작성한 댓글인지 여부
    const isMyComment = userId ? userId == user.id : false;
    // 수정 클릭 핸들러
    const handleShowUpdate = () => {
        setActiveUpdate(true);
    };
    // 수정 취소 핸들러
    const handleHideUpdate = () => {
        const tf = confirm('수정을 취소하시겠어요?');

        if (tf) {
            setActiveUpdate(false);
        }
    };
    // 댓글 수정 핸들러
    const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();

        // 로그인 체크
        const token = validateToken();

        if (!token) {
            return null;
        }

        if (loading) {
            return alert('요청 중입니다. 잠시만 기다려주세요.');
        }

        if (comment.value.length > 100) {
            return alert('댓글은 100자 미만으로 입력 해주세요.');
        }

        const tf = confirm('입력한 내용으로 수정하시겠어요?');

        if (tf) {
            dispatch(
                updateCommentRequest({
                    id,
                    content: comment.value,
                    callbackFunc: () => setChangeComment(comment.value),
                }),
            );
        }
    };
    // 댓글 삭제 핸들러
    const handleDelete = () => {
        // 로그인 체크
        const token = validateToken();

        if (!token) {
            return null;
        }

        if (loading) {
            return alert('요청 중입니다. 잠시만 기다려주세요.');
        }

        const tf = confirm('댓글을 삭제하시겠어요?');

        if (tf) {
            dispatch(
                deleteCommentRequest({
                    id,
                    callbackFunc: () => setDisabled(true),
                }),
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
                        {changeComment}
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
            {disabled && <em>삭제된 댓글입니다.</em>}
        </StyledCommentItem.Container>
    );
};
