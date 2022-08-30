import produce from 'immer';

import { PostAction } from '../../actions/post';
import { CreatePostAction } from '../../actions/post/create-post';
import { DeletePostAction } from '../../actions/post/delete-post';
import { LikePostAction } from '../../actions/post/like-post';
import { UnlikePostAction } from '../../actions/post/unlike-post';
import { UpdatePostAction } from '../../actions/post/update-post';

const initialState: Record<string, any> = {
    isAddPostLoading: false,
    addPostErrorReason: '',
    isUpdatePostLoading: false,
    updatePostErrorReason: '',
    isDeletePostLoading: false,
    deletePostErrorReason: '',
    isLikePostLoading: false,
    likePostErrorReason: '',
    isUnlikePostLoading: false,
    unlikePostErrorReason: '',
};

export default (state = initialState, { type, payload, error }: PostAction) =>
    produce(state, draft => {
        switch (type) {
            // Create
            case CreatePostAction.REQUEST: {
                draft.isAddPostLoading = true;
                break;
            }
            case CreatePostAction.SUCCESS: {
                draft.isAddPostLoading = false;
                break;
            }
            case CreatePostAction.FAILURE: {
                draft.isAddPostLoading = false;

                draft.addPostErrorReason = error;
                break;
            }
            // Update
            case UpdatePostAction.REQUEST: {
                draft.isUpdatePostLoading = true;
                break;
            }
            case UpdatePostAction.SUCCESS: {
                draft.isUpdatePostLoading = false;
                break;
            }
            case UpdatePostAction.FAILURE: {
                draft.isUpdatePostLoading = false;

                draft.updatePostErrorReason = error;
                break;
            }
            // Delete
            case DeletePostAction.REQUEST: {
                draft.isDeletePostLoading = true;
                break;
            }
            case DeletePostAction.SUCCESS: {
                draft.isDeletePostLoading = false;
                break;
            }
            case DeletePostAction.FAILURE: {
                draft.isDeletePostLoading = false;

                draft.deletePostErrorReason = error;
                break;
            }
            // Like
            case LikePostAction.REQUEST: {
                draft.isLikePostLoading = true;
                break;
            }
            case LikePostAction.SUCCESS: {
                draft.isLikePostLoading = false;
                break;
            }
            case LikePostAction.FAILURE: {
                draft.isLikePostLoading = false;

                draft.likePostErrorReason = error;
                break;
            }
            // Unlike
            case UnlikePostAction.REQUEST: {
                draft.isUnlikePostLoading = true;
                break;
            }
            case UnlikePostAction.SUCCESS: {
                draft.isUnlikePostLoading = false;
                break;
            }
            case UnlikePostAction.FAILURE: {
                draft.isUnlikePostLoading = false;

                draft.unlikePostErrorReason = error;
                break;
            }
            default: {
                return state;
            }
        }
    });
