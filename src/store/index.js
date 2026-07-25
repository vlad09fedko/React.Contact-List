import { composeWithDevToolsDevelopmentOnly } from '@redux-devtools/extension';
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';

import rootReducer from './reducers';

const middleware = applyMiddleware(createLogger());

export default createStore(
  rootReducer,
  composeWithDevToolsDevelopmentOnly(middleware),
);
