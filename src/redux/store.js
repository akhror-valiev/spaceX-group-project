import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rockReducer from './rocketSlice';

const rootReducer = combineReducers({
  rockReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
