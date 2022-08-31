import { AnyAction, combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';

import user from './user';
import post from './post';
import comment from './comment';
import common from './common';

export const rootReducer = (state: any, action: AnyAction) => {
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
