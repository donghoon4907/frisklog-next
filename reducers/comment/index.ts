import produce from 'immer';

import { CommentAction } from '../../actions/comment';

export interface CommentState {}

const initialState: CommentState = {};

export default (state = initialState, action: CommentAction) =>
    produce(state, (draft) => {
        switch (action.type) {
            default: {
                return state;
            }
        }
    });
