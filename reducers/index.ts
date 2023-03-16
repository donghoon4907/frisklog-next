import { AnyAction, combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';

import user from './user';
import post from './post';
import comment from './comment';
import category from './category';
import notification from './notification';
import common from './common';
import photo from './photo';
import error from './common/error';
import loading from './common/loading';

const combinedReducer = combineReducers({
    user,
    post,
    comment,
    common,
    category,
    notification,
    photo,
    error,
    loading,
});

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

export type AppState = ReturnType<typeof rootReducer>;
