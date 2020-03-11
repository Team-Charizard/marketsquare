import * as types from '../constants/actionTypes';

/**
 * need to make these thunks to query the database
 */

export const login = (username, password) => ({
  type: types.SIGN_IN,
  payload: username,
});

//
const requestCreateAccount = credentials => ({
  type: types.SIGN_UP_REQUEST,
  credentials,
});

// add JWT token on successful account creation
const successfulCreateAccount = user => ({
  type: types.SIGN_UP_SUCCESS,
  isFetching: false,
  isAuthenticated: true,
  id_token: user.id.token,
});

const failedCreateAccount = message => ({
  type: types.SIGN_UP_FAIL,
  isFetching: false,
  isAuthenticated: false,
  message,
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
        console.log('hitting response here', response);
        dispatch(successfulCreateAccount(response.username));
      })
      .catch(err => {
        dispatch(failedCreateAccount(err.message));
      });
  };
};
