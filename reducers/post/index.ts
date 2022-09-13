import produce from 'immer';

import { PostAction } from '../../actions/post';
import { activePostActionTypes } from '../../actions/post/active-post.action';
import { ActivePostRequestAction } from '../../actions/post/active-post.interface';
import { getPostsActionTypes } from '../../actions/post/get-posts.action';
import { GetPostsSuccessAction } from '../../actions/post/get-posts.interface';
import { HomePost } from '../../interfaces/post';

export interface PostState {
    activePost: {
        id: string | null;
        content: string | null;
        categories: string[];
    };
    homePosts: HomePost[];
}

const initialState: PostState = {
    activePost: {
        id: null,
        content: null,
        categories: [],
    },
    homePosts: [],
};

export default (state = initialState, action: PostAction) =>
    produce(state, (draft) => {
        switch (action.type) {
            // Active post
            case activePostActionTypes.SET: {
                const { payload } = action as ActivePostRequestAction;

                draft.activePost.id = payload.id;

                draft.activePost.content = payload.content;

                draft.activePost.categories = payload.categories;
                break;
            }
            case activePostActionTypes.INIT: {
                draft.activePost.id = null;

                draft.activePost.content = null;

                draft.activePost.categories = [];
                break;
            }
            // Get posts
            case getPostsActionTypes.SUCCESS: {
                const { payload } = action as GetPostsSuccessAction;

                draft.homePosts = [...draft.homePosts, ...payload.nodes];
                break;
            }
            default: {
                return state;
            }
        }
    });
