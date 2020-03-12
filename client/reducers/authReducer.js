import {
  SIGN_IN,
  SIGN_UP_FAIL,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  LOG_IN_REQUEST,
  LOG_IN_FAIL,
  LOG_IN_SUCCESS,
} from '../constants/actionTypes';

const initialState = {
  user: 'Sergiy',
  isFetching: false,
  isAuthenticated: false,
  credentials: null,
  id_token: null,
  message: null,
  successfulSignUp: false,
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
        ...action.payload,
        successfulSignUp: true,
      };
    case SIGN_UP_FAIL:
      return {
        ...state,
        ...action.payload,
      };
    case LOG_IN_REQUEST:
      return {
        ...state,
        credentials: action.credentials,
        message: action.message,
      };
    case LOG_IN_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case LOG_IN_FAIL:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
