import { AnyAction, CombinedState, combineReducers, Reducer } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';

import user, { IUserState } from './user';
import post, { IPostState } from './post';
import comment, { ICommentState } from './comment';
import common, { ICommonState } from './common';

export interface IState {
    user: IUserState;
    post: IPostState;
    comment: ICommentState;
    common: ICommonState;
}

export const rootReducer = (
    state: CombinedState<IState>,
    action: AnyAction,
) => {
    switch (action.type) {
        case HYDRATE: {
            return action.payload;
        }
        default: {
            return combineReducers({ user, post, comment, common })(
                state,
                action,
            );
        }
    }
};

export interface AnyState {
    [stateKey: string]: any;
}

export type ReducerType = ReturnType<typeof rootReducer>;
