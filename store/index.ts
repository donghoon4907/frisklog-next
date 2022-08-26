import { applyMiddleware, createStore, Middleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createWrapper, Context } from 'next-redux-wrapper';

import rootReducer from '../reducers';
import { rootSaga } from '../sagas';

const bindMiddleware = (middleware: Middleware<any>[]) => {
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension');

        return composeWithDevTools(applyMiddleware(...middleware));
    }
};

export const makeStore = (context: Context) => {
    const sagaMiddleware = createSagaMiddleware();

    const store: any = createStore(
        rootReducer,
        bindMiddleware([sagaMiddleware]),
    );

    store.sagaTask = sagaMiddleware.run(rootSaga);

    return store;
};

export const wrapper = createWrapper(makeStore, { debug: true });
