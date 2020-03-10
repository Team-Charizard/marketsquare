import * as types from '../constants/actionTypes';

export const login = (username, password) => ({
  type: types.SIGN_IN,
  payload: username,
});
