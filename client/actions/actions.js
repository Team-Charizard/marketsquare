import * as types from '../constants/actionTypes';

export const login = (email, username, password) => ({
  type: types.SIGN_IN,
  payload: username,
});
