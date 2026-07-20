import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevToolsDevelopmentOnly } from '@redux-devtools/extension';
import rootReducer from './reducers';

const middleware = applyMiddleware(createLogger());

export default createStore(
  rootReducer,
  composeWithDevToolsDevelopmentOnly(middleware),
);
