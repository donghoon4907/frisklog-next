import { applyMiddleware, createStore, Middleware, Store } from 'redux';
import createSagaMiddleware, { Task } from 'redux-saga';
import { createWrapper, Context } from 'next-redux-wrapper';

import { rootReducer } from '../reducers';
import { rootSaga } from '../sagas';
import { getErrorPayload } from '../lib/error/graphql-request';
import { deleteCookie } from '../lib/cookie/cookie.client';
import { COOKIE_TOKEN_KEY } from '../lib/cookie/cookie.key';
import { initUser } from '../actions/user/user.action';
import { showLoginModal } from '../actions/switch/login-modal.action';
import { sagaError } from '../actions/error/error.action';

const bindMiddleware = (middleware: Middleware<any>[]) => {
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension');

        return composeWithDevTools(applyMiddleware(...middleware));
    }
};

export interface SagaStore extends Store {
    sagaTask?: Task;
}

export const makeStore = (context: Context) => {
    const sagaMiddleware = createSagaMiddleware({
        onError: (err) => {
            console.log(err);
            const { message, statusCode } = getErrorPayload(err);

            store.dispatch(sagaError({ message, statusCode }));

            if (statusCode === 401) {
                deleteCookie(COOKIE_TOKEN_KEY);

                store.dispatch(initUser());

                store.dispatch(showLoginModal());
            } else if (statusCode === 403) {
                alert(message);
            }
        },
    });

    const store = createStore(
        rootReducer,
        bindMiddleware([sagaMiddleware]),
    ) as SagaStore;

    store.sagaTask = sagaMiddleware.run(rootSaga);

    return store;
};

export const wrapper = createWrapper<SagaStore>(makeStore, {
    debug: false,
});
