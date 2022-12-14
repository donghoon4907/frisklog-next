import produce from 'immer';

import { CommentAction } from '../../actions/comment';
import { createCommentActionTypes } from '../../actions/comment/create-comment.action';
import { CreateCommentSuccessAction } from '../../actions/comment/create-comment.interface';
import { deleteCommentActionTypes } from '../../actions/comment/delete-comment.action';
import { DeleteCommentSuccessAction } from '../../actions/comment/delete-comment.interface';
import { postCommentsActionTypes } from '../../actions/comment/post-comments.action';
import { PostCommentsSuccessAction } from '../../actions/comment/post-comments.interface';
import { updateCommentActionTypes } from '../../actions/comment/update-comment.action';
import { UpdateCommentSuccessAction } from '../../actions/comment/update-comment.interface';
import { Comment } from '../../interfaces/comment';
import { OffsetPageInfo } from '../../interfaces/page-info';

export interface CommentState {
    postComments: {
        postId: string | null;
        nodes: Comment[];
        pageInfo: OffsetPageInfo | null;
    };
}

const initialState: CommentState = {
    postComments: {
        postId: null,
        nodes: [],
        pageInfo: null,
    },
};

export default (state = initialState, action: CommentAction) =>
    produce(state, (draft) => {
        switch (action.type) {
            case postCommentsActionTypes.SUCCESS: {
                const { payload } = action as PostCommentsSuccessAction;

                draft.postComments.postId = payload.postId;

                draft.postComments.pageInfo = payload.pageInfo;

                draft.postComments.nodes = payload.nodes;
                break;
            }
            case createCommentActionTypes.SUCCESS: {
                const { payload } = action as CreateCommentSuccessAction;

                draft.postComments.nodes.unshift(payload);
                break;
            }
            case updateCommentActionTypes.SUCCESS: {
                const { payload } = action as UpdateCommentSuccessAction;

                const findIndex = draft.postComments.nodes.findIndex(
                    (comment) => payload.id == comment.id,
                );

                if (findIndex !== -1) {
                    draft.postComments.nodes[findIndex] = payload;
                }
                break;
            }
            case deleteCommentActionTypes.SUCCESS: {
                const { payload } = action as DeleteCommentSuccessAction;

                const findIndex = draft.postComments.nodes.findIndex(
                    (comment) => payload.id == comment.id,
                );

                if (findIndex !== -1) {
                    draft.postComments.nodes.splice(findIndex, 1);
                }
                break;
            }
            default: {
                return state;
            }
        }
    });
