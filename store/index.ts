import { applyMiddleware, createStore, Middleware, Store } from 'redux';
import createSagaMiddleware, { Task } from 'redux-saga';
import { createWrapper, Context, MakeStore } from 'next-redux-wrapper';

import { rootReducer } from '../reducers';
import { rootSaga } from '../sagas';

const bindMiddleware = (middleware: Middleware<any>[]) => {
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension');

        return composeWithDevTools(applyMiddleware(...middleware));
    }
};

interface SagaStore extends Store {
    sagaTask: Task;
}

export const makeStore: MakeStore<SagaStore> = (context: Context) => {
    const sagaMiddleware = createSagaMiddleware();

    const store: SagaStore = createStore(
        rootReducer,
        bindMiddleware([sagaMiddleware]),
    );

    store.sagaTask = sagaMiddleware.run(rootSaga);

    return store;
};

export const wrapper = createWrapper<SagaStore>(makeStore, { debug: true });
