import {
	LOAD_USERS_SUCCESS,
	UPDATE_USER_SUCCESS,
	CREATE_USER_SUCCESS,
	DELETE_USER_SUCCESS
} from './actionTypes';
import UserApi from '../api/mockUserApi';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export const loadUsersSuccess = users => {
  return {
    type: LOAD_USERS_SUCCESS,
    users,
  };
};

const updateUserSuccess = user => {
  return {
    type: UPDATE_USER_SUCCESS,
    user,
  };
};

const createUserSuccess = user => {
  return {
    type: CREATE_USER_SUCCESS,
    user,
  };
};
const deleteUserSuccess = userId => {
  return {
    type: DELETE_USER_SUCCESS,
    userId,
  };
};

export const loadUsers = () => {
  return dispatch => {
    dispatch(beginAjaxCall());
    return UserApi.getAllUsers()
      .then(users => {
        dispatch(loadUsersSuccess(users));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const saveUser = user => {
  return (dispatch, getState) => {
    dispatch(ajaxCallError());
    return UserApi.saveUser(user)
      .then(userSaved => {
        userSaved.id
          ? dispatch(updateUserSuccess(userSaved))
          : dispatch(createUserSuccess(userSaved));
      })
      .catch(error => {
        dispatch(ajaxCallError());
        throw error;
      });
  };
};

export const deleteUser = userId => {
  return dispatch => {
    return UserApi.deleteUser(userId)
      .then(() => dispatch(deleteUserSuccess(userId)))
      .catch(error => {
        dispatch(ajaxCallError());
        throw error;
      });
  };
};
