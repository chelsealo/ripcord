import { BEGIN_AJAX_CALL, AJAX_CALL_ERROR } from '../actions/actionTypes';
import initialState from './initialState';

const actionTypeEndsInSuccess = type => {
  return type.substring(type.length - 8) === '_SUCCESS';
};

const ajaxStatusReducer = (
  state = initialState.ajaxCallsInProgress,
  action,
) => {
  if (action.type === BEGIN_AJAX_CALL) {
    return state + 1;
  } else if (
    action.type === AJAX_CALL_ERROR ||
    actionTypeEndsInSuccess(action.type)
  ) {
    return state - 1;
  }
  return state;
};

export default ajaxStatusReducer;
