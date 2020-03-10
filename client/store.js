import { createStore, compose } from 'redux';
import { reducers } from './reducers/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(reducers, composeWithDevTools());
