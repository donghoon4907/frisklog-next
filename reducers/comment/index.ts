import produce from 'immer';

import { CommentAction } from '../../actions/comment';
import { CreateCommentAction } from '../../actions/comment/create-comment';
import { DeleteCommentAction } from '../../actions/comment/delete-comment';
import { UpdateCommentAction } from '../../actions/comment/update-comment';

export interface ICommentState {
    isAddCommentLoading: boolean;
    addCommentErrorReason: string;
    isUpdateCommentLoading: boolean;
    updateCommentErrorReason: string;
    isDeleteCommentLoading: boolean;
    deleteCommentErrorReason: string;
}

const initialState: ICommentState = {
    isAddCommentLoading: false,
    addCommentErrorReason: '',
    isUpdateCommentLoading: false,
    updateCommentErrorReason: '',
    isDeleteCommentLoading: false,
    deleteCommentErrorReason: '',
};

export default (
    state = initialState,
    { type, payload, error }: CommentAction,
) =>
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
            case CreateCommentAction.FAILURE: {
                draft.isAddCommentLoading = false;

                draft.addCommentErrorReason = error;
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
            case UpdateCommentAction.FAILURE: {
                draft.isUpdateCommentLoading = false;

                draft.updateCommentErrorReason = error;
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
            case DeleteCommentAction.FAILURE: {
                draft.isDeleteCommentLoading = false;

                draft.deleteCommentErrorReason = error;
                break;
            }
            default: {
                return state;
            }
        }
    });
