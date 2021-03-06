/* eslint-disable import/extensions */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store';
import App from './App.jsx';
// reminder to get scss or css in here
import './styles/login.css';
import './styles/group.css';
import './styles/applications.scss';

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
