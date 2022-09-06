import { AnyAction, combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';

import user from './user';
import post from './post';
import comment from './comment';
import common from './common';

const combinedReducer = combineReducers({ user, post, comment, common });

export const rootReducer = (state: any, action: AnyAction) => {
    let nextState;
    if (action.type === HYDRATE) {
        nextState = {
            ...state,
            ...action.payload,
        };
    } else {
        nextState = combinedReducer(state, action);
    }

    return nextState;
};

export type ReducerType = ReturnType<typeof rootReducer>;

