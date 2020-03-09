import { SIGN_IN } from '../constants/actionTypes';

const initialState = {
  user: 'Sergiy',
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
