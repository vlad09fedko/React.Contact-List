import { composeWithDevToolsDevelopmentOnly } from '@redux-devtools/extension';
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../sagas';

import rootReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();

const middleware = applyMiddleware(sagaMiddleware, createLogger());

export default createStore(
  rootReducer,
  composeWithDevToolsDevelopmentOnly(middleware),
);

sagaMiddleware.run(rootSaga);
