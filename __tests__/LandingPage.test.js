/* eslint-disable camelcase */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import LandingPage from '../client/components/LandingPage';
import MockedGroup from '../client/components/Group';

jest.mock('../client/components/Group', () => {
  return function DummyGroup(props) {
    return <div data-testid='group'>{props.group_id}</div>;
  };
});

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('should render landing page and group with props', () => {
  const group_id = 1;
  act(() => {
    render(<LandingPage group_id={group_id} />, container);
  });

  expect(container.querySelector('h1').textContent).toEqual('Landing Page');

  expect(container.querySelector(`[data-testid='group']`).textContent).toEqual(
    '1',
  );
});
