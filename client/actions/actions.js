/* eslint-disable no-console */
import * as types from '../constants/actionTypes';

/**
 * need to make these thunks to query the database
 */

const requestLoginUser = credentials => ({
  type: types.LOG_IN_REQUEST,
  credentials,
  message: null,
});

const successfulLogIn = username => ({
  type: types.LOG_IN_SUCCESS,
  payload: {
    isFetching: false,
    isAuthenticated: true,
    username,
  },
});

const failedLogIn = message => ({
  type: types.LOG_IN_FAIL,
  payload: {
    isFetching: false,
    isAuthenticated: false,
    message,
  },
});

//
const requestCreateAccount = credentials => ({
  type: types.SIGN_UP_REQUEST,
  credentials,
});

// add JWT token on successful account creation
const successfulCreateAccount = user => ({
  type: types.SIGN_UP_SUCCESS,
  // id_token: user.id.token,
  payload: {
    isFetching: false,
    isAuthenticated: true,
  },
});

const failedCreateAccount = message => ({
  type: types.SIGN_UP_FAIL,
  payload: {
    isFetching: false,
    isAuthenticated: false,
    message,
  },
});

// thunk that handles all the other createAccount functionality
export const createAccount = credentials => {
  return dispatch => {
    // dispatch the loading action creator
    console.log('credentials in createAccount dispatch:', credentials);
    dispatch(requestCreateAccount(credentials));

    // async dispatch creator
    fetch('user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
      .then(response => response.json())
      .then(response => {
        // error if taken username
        // username sent if correct
        console.log('response in fetch:', response);
        if (response.err) dispatch(failedCreateAccount(response.err));
        else {
          dispatch(successfulCreateAccount(response));
        }
      });
  };
};

export const loginUser = credentials => {
  return dispatch => {
    console.log('credentials in loginDispatch', credentials);

    dispatch(requestLoginUser(credentials));

    fetch('user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
      .then(response => response.json())
      .then(data => {
        if (data.errorMessage) dispatch(failedLogIn(data.errorMessage));
        else dispatch(successfulLogIn(data));
      });
  };
};

export const logoutUser = () => ({
  type: types.LOG_OUT,
  payload: {
    isAuthenticated: false,
    credentials: null,
  },
});
