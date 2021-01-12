import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './root-reducer';

const middleware = [thunkMiddleware, logger];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;