/* eslint-disable import/no-extraneous-dependencies */
import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { reducers } from './reducers/reducers';

export const store = createStore(
  reducers,
  compose(applyMiddleware(thunk), composeWithDevTools()),
);
