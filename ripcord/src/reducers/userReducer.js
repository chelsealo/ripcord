import {
	LOAD_USERS_SUCCESS,
	CREATE_USER_SUCCESS,
	UPDATE_USER_SUCCESS,
	DELETE_USER_SUCCESS
} from '../actions/actionTypes';
import initialState from './initialState';

const userReducer = (state = initialState.users, action) => {
  switch (action.type) {
    case LOAD_USERS_SUCCESS:
      return action.users;
    case CREATE_USER_SUCCESS:
      return [...state, Object.assign({}, action.user)];  // or [...state, action.user]
    case UPDATE_USER_SUCCESS:
      return [
        ...state.filter(user => user.id !== action.user.id),
        Object.assign({}, action.user),
      ];
    case DELETE_USER_SUCCESS:
      return [...state.filter(user => user.id !== action.userId)];
    default:
      return state;
  }
};

export default userReducer;
