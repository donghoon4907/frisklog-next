import produce from 'immer';

import { PostAction } from '../../actions/post';
import { ActivePostAction } from '../../actions/post/active-post';
import { CreatePostAction } from '../../actions/post/create-post';
import { DeletePostAction } from '../../actions/post/delete-post';
import { LikePostAction } from '../../actions/post/like-post';
import { GetPostsAction } from '../../actions/post/get-posts';
import { UnlikePostAction } from '../../actions/post/unlike-post';
import { UpdatePostAction } from '../../actions/post/update-post';

export interface IPostState {
    activePost: {
        id: string | null;
        content: string | null;
        categories: string[];
    };
    isHomePostsLoading: boolean;
    homePosts: Record<string, any>[];
    isAddPostLoading: boolean;
    addPostErrorReason: string;
    isUpdatePostLoading: boolean;
    updatePostErrorReason: string;
    isDeletePostLoading: boolean;
    deletePostErrorReason: string;
    isLikePostLoading: boolean;
    likePostErrorReason: string;
    isUnlikePostLoading: boolean;
    unlikePostErrorReason: string;
}

const initialState: IPostState = {
    activePost: {
        id: null,
        content: null,
        categories: [],
    },
    isHomePostsLoading: false,
    homePosts: [],
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
    produce(state, (draft) => {
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
            // Active post
            case ActivePostAction.SET: {
                draft.activePost.id = payload.id;

                draft.activePost.content = payload.content;

                draft.activePost.categories = payload.categories;
                break;
            }
            case ActivePostAction.INIT: {
                draft.activePost.id = null;

                draft.activePost.content = null;

                draft.activePost.categories = [];
                break;
            }
            // Get posts
            case GetPostsAction.REQUEST: {
                draft.isHomePostsLoading = true;
                break;
            }
            case GetPostsAction.SUCCESS: {
                draft.isHomePostsLoading = false;

                draft.homePosts = [...draft.homePosts, ...payload.nodes];
                break;
            }
            case GetPostsAction.FAILURE: {
                draft.isHomePostsLoading = false;

                draft.unlikePostErrorReason = error;
                break;
            }
            default: {
                return state;
            }
        }
    });
