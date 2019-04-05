import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggingMiddleware from 'redux-logger';

import reducer from './reducers/records';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(loggingMiddleware, thunkMiddleware),
  ),
)

export default store
