import { combineReducers } from 'redux';
import users from './userReducer';
import ajaxCallInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  users,
  ajaxCallInProgress,
});

export default rootReducer;
