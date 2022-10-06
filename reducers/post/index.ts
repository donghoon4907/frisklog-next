import produce from 'immer';

import { PostAction } from '../../actions/post';
import { activePostActionTypes } from '../../actions/post/active-post.action';
import { ActivePostRequestAction } from '../../actions/post/active-post.interface';
import { createPostActionTypes } from '../../actions/post/create-post.action';
import { CreatePostSuccessAction } from '../../actions/post/create-post.interface';
import { deletePostActionTypes } from '../../actions/post/delete-post.action';
import { DeletePostSuccessAction } from '../../actions/post/delete-post.interface';
import { followingPostsActionTypes } from '../../actions/post/following-posts.action';
import { FollowingPostsSuccessAction } from '../../actions/post/following-posts.interface';
import { homePostsActionTypes } from '../../actions/post/home-posts.action';
import { HomePostsSuccessAction } from '../../actions/post/home-posts.interface';
import { updatePostActionTypes } from '../../actions/post/update-post.action';
import { UpdatePostSuccessAction } from '../../actions/post/update-post.interface';
import { userPostsActionTypes } from '../../actions/post/user-posts.action';
import { UserPostsSuccessAction } from '../../actions/post/user-posts.interface';
import { OffsetPageInfo } from '../../interfaces/page-info';
import { FollowingPost, HomePost, UserPost } from '../../interfaces/post';

export interface PostState {
    activePost: {
        id: string | null;
        content: string | null;
        categories: string[];
    };
    homePosts: {
        pageInfo: OffsetPageInfo | null;
        nodes: HomePost[];
    };
    userPosts: {
        pageInfo: OffsetPageInfo | null;
        nodes: UserPost[];
    };
    followingPosts: {
        pageInfo: OffsetPageInfo | null;
        nodes: FollowingPost[];
    };
}

const initialState: PostState = {
    activePost: {
        id: null,
        content: null,
        categories: [],
    },
    homePosts: {
        pageInfo: null,
        nodes: [],
    },
    userPosts: {
        pageInfo: null,
        nodes: [],
    },
    followingPosts: {
        pageInfo: null,
        nodes: [],
    },
};

export default (state = initialState, action: PostAction) =>
    produce(state, (draft) => {
        switch (action.type) {
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
            case homePostsActionTypes.SUCCESS: {
                const { payload } = action as HomePostsSuccessAction;

                const { pageInfo, nodes } = payload;

                draft.homePosts.pageInfo = pageInfo;

                draft.homePosts.nodes = draft.homePosts.nodes.concat(nodes);
                break;
            }
            case userPostsActionTypes.SUCCESS: {
                const { payload } = action as UserPostsSuccessAction;

                const { pageInfo, nodes } = payload;

                draft.userPosts.pageInfo = pageInfo;

                const isFirst = pageInfo.currentPage === 1;
                if (isFirst) {
                    draft.userPosts.nodes = nodes;
                } else {
                    draft.userPosts.nodes = draft.userPosts.nodes.concat(nodes);
                }

                break;
            }
            case followingPostsActionTypes.SUCCESS: {
                const { payload } = action as FollowingPostsSuccessAction;

                const { pageInfo, nodes } = payload;

                draft.followingPosts.pageInfo = pageInfo;

                const isFirst = pageInfo.currentPage === 1;
                if (isFirst) {
                    draft.followingPosts.nodes = payload.nodes;
                } else {
                    draft.followingPosts.nodes =
                        draft.followingPosts.nodes.concat(nodes);
                }

                break;
            }
            // Create posts
            // case createPostActionTypes.SUCCESS: {
            //     const { payload } = action as CreatePostSuccessAction;

            //     draft.homePosts.nodes.unshift({
            //         ...payload,
            //         likers: [],
            //         likeCount: 0,
            //         commentCount: 0,
            //     });

            //     break;
            // }
            // Update posts
            // case updatePostActionTypes.SUCCESS: {
            //     const { payload } = action as UpdatePostSuccessAction;

            //     const findIndex = draft.homePosts.nodes.findIndex(
            //         (post) => payload.id == post.id,
            //     );

            //     if (findIndex !== -1) {
            //         draft.homePosts.nodes[findIndex].content = payload.content;

            //         draft.homePosts.nodes[findIndex].categories =
            //             payload.categories;
            //     }

            //     break;
            // }
            // Delete posts
            // case deletePostActionTypes.SUCCESS: {
            //     const { payload } = action as DeletePostSuccessAction;

            //     const findIndex = draft.homePosts.nodes.findIndex(
            //         (post) => payload.id == post.id,
            //     );

            //     if (findIndex !== -1) {
            //         draft.homePosts.nodes.splice(findIndex, 1);
            //     }

            //     break;
            // }
            default: {
                return state;
            }
        }
    });
