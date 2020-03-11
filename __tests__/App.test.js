import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/App';

it('Snapshot Test', () => {
  const wrapper = shallow(<App />);

  expect(wrapper).toMatchSnapshot();
});
