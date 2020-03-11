import {
  SIGN_IN,
  SIGN_UP_FAIL,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
} from '../constants/actionTypes';

const initialState = {
  user: 'Sergiy',
  isFetching: false,
  isAuthenticated: false,
  credentials: null,
  id_token: null,
  message: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        user: action.payload,
      };
    case SIGN_UP_REQUEST:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false,
        credentials: action.credentials,
        message: null,
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        id_token: action.id_token,
        message: null,
      };
    case SIGN_UP_FAIL:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        message: action.message,
      };
    default:
      return state;
  }
};
