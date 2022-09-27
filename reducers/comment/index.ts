import produce from 'immer';

import { CommentAction } from '../../actions/comment';
import { postCommentsActionTypes } from '../../actions/comment/post-comments.action';
import { PostCommentsSuccessAction } from '../../actions/comment/post-comments.interface';
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
            default: {
                return state;
            }
        }
    });
