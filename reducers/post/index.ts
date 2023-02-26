import produce from 'immer';

import { PostAction } from '../../actions/post';
import { activePostActionTypes } from '../../actions/post/active-post.action';
import { ActivePostRequestAction } from '../../actions/post/active-post.interface';
import { categoryPostsActionTypes } from '../../actions/post/category-posts.action';
import { followingPostsActionTypes } from '../../actions/post/following-posts.action';
import { FollowingPostsSuccessAction } from '../../actions/post/following-posts.interface';
import { homePostsActionTypes } from '../../actions/post/home-posts.action';
import { HomePostsSuccessAction } from '../../actions/post/home-posts.interface';
import { removedPostsActionTypes } from '../../actions/post/removed-posts.action';
import { restorePostActionTypes } from '../../actions/post/restore-post.action';
import { RestorePostSuccessAction } from '../../actions/post/restore-post.interface';
import { searchPostsActionTypes } from '../../actions/post/search-posts.action';
import { SearchPostsSuccessAction } from '../../actions/post/search-posts.interface';
import { userPostsActionTypes } from '../../actions/post/user-posts.action';
import { UserPostsSuccessAction } from '../../actions/post/user-posts.interface';
import { OffsetPageInfo } from '../../interfaces/page-info';
import { Post } from '../../interfaces/post';
import { likedPostsActionTypes } from '../../actions/post/liked-posts.action';
import { LikedPostsSuccessAction } from '../../actions/post/liked-posts.interface';

export interface PostState {
    activePost: {
        id: string | null;
        content: string | null;
        categories: string[];
    };
    homePosts: {
        pageInfo: OffsetPageInfo | null;
        nodes: Post[];
    };
    searchPosts: {
        pageInfo: OffsetPageInfo | null;
        nodes: Post[];
    };
    categoryPosts: {
        pageInfo: OffsetPageInfo | null;
        nodes: Post[];
    };
    userPosts: {
        pageInfo: OffsetPageInfo | null;
        nodes: Post[];
    };
    followingPosts: {
        pageInfo: OffsetPageInfo | null;
        nodes: Post[];
    };
    removedPosts: {
        pageInfo: OffsetPageInfo | null;
        nodes: Post[];
    };
    likedPosts: {
        pageInfo: OffsetPageInfo | null;
        nodes: Post[];
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
    searchPosts: {
        pageInfo: null,
        nodes: [],
    },
    categoryPosts: {
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
    removedPosts: {
        pageInfo: null,
        nodes: [],
    },
    likedPosts: {
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
            case searchPostsActionTypes.SUCCESS: {
                const { payload } = action as SearchPostsSuccessAction;

                const { pageInfo, nodes } = payload;

                draft.searchPosts.pageInfo = pageInfo;

                const isFirst = pageInfo.currentPage === 1;
                if (isFirst) {
                    draft.searchPosts.nodes = nodes;
                } else {
                    draft.searchPosts.nodes =
                        draft.searchPosts.nodes.concat(nodes);
                }

                break;
            }
            case categoryPostsActionTypes.SUCCESS: {
                const { payload } = action as UserPostsSuccessAction;

                const { pageInfo, nodes } = payload;

                draft.categoryPosts.pageInfo = pageInfo;

                const isFirst = pageInfo.currentPage === 1;
                if (isFirst) {
                    draft.categoryPosts.nodes = nodes;
                } else {
                    draft.categoryPosts.nodes =
                        draft.categoryPosts.nodes.concat(nodes);
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
            case removedPostsActionTypes.SUCCESS: {
                const { payload } = action as FollowingPostsSuccessAction;

                const { pageInfo, nodes } = payload;

                draft.removedPosts.pageInfo = pageInfo;

                const isFirst = pageInfo.currentPage === 1;
                if (isFirst) {
                    draft.removedPosts.nodes = payload.nodes;
                } else {
                    draft.removedPosts.nodes =
                        draft.removedPosts.nodes.concat(nodes);
                }

                break;
            }
            case restorePostActionTypes.SUCCESS: {
                const { payload } = action as RestorePostSuccessAction;

                const findIndex = draft.removedPosts.nodes.findIndex(
                    (post) => payload.id == post.id,
                );

                if (findIndex !== -1) {
                    draft.removedPosts.nodes[findIndex].deletedAt = null;
                }

                break;
            }
            case likedPostsActionTypes.SUCCESS: {
                const { payload } = action as LikedPostsSuccessAction;

                const { pageInfo, nodes } = payload;

                draft.likedPosts.pageInfo = pageInfo;

                const isFirst = pageInfo.currentPage === 1;
                if (isFirst) {
                    draft.likedPosts.nodes = payload.nodes;
                } else {
                    draft.likedPosts.nodes =
                        draft.likedPosts.nodes.concat(nodes);
                }

                break;
            }
            default: {
                return state;
            }
        }
    });
