import produce from 'immer';

import { CommentAction } from '../../actions/comment';
import { CreateCommentAction } from '../../actions/comment/create-comment';
import { DeleteCommentAction } from '../../actions/comment/delete-comment';
import { UpdateCommentAction } from '../../actions/comment/update-comment';

export interface ICommentState {
    isAddCommentLoading: boolean;
    isUpdateCommentLoading: boolean;
    isDeleteCommentLoading: boolean;
}

const initialState: ICommentState = {
    isAddCommentLoading: false,
    isUpdateCommentLoading: false,
    isDeleteCommentLoading: false,
};

export default (state = initialState, { type }: CommentAction) =>
    produce(state, (draft) => {
        switch (type) {
            // Create
            case CreateCommentAction.REQUEST: {
                draft.isAddCommentLoading = true;
                break;
            }
            case CreateCommentAction.SUCCESS: {
                draft.isAddCommentLoading = false;
                break;
            }
            // Update
            case UpdateCommentAction.REQUEST: {
                draft.isUpdateCommentLoading = true;
                break;
            }
            case UpdateCommentAction.SUCCESS: {
                draft.isUpdateCommentLoading = false;
                break;
            }
            // Delete
            case DeleteCommentAction.REQUEST: {
                draft.isDeleteCommentLoading = true;
                break;
            }
            case DeleteCommentAction.SUCCESS: {
                draft.isDeleteCommentLoading = false;
                break;
            }
            default: {
                return state;
            }
        }
    });
