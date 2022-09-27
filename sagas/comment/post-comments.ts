import { call, put, takeLatest } from 'redux-saga/effects';

import * as commentsService from '../../services/commentsService';
import {
    postCommentsSuccess,
    postCommentsActionTypes,
} from '../../actions/comment/post-comments.action';
import { PostCommentsRequestAction } from '../../actions/comment/post-comments.interface';

function* postCommentsSaga(action: PostCommentsRequestAction) {
    const { comments } = yield call(
        commentsService.getComments,
        action.payload,
    );

    yield put(
        postCommentsSuccess({
            nodes: comments.nodes,
            pageInfo: comments.pageInfo,
            postId: action.payload.postId,
        }),
    );
}

export function* watchPostComments() {
    yield takeLatest(postCommentsActionTypes.REQUEST, postCommentsSaga);
}
