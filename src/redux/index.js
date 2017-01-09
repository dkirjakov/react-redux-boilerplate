// Set up your root reducer here...
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import xkcdReducer from './xkcd';

const rootReducer = combineReducers({
  routing: routerReducer,
  xkcd: xkcdReducer,
});

export default rootReducer;
