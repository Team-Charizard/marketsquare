import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/App';

describe('App unit tests', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<App />);
  });

  it('Snapshot Test', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a div', () => {
    console.log(wrapper.debug());
    expect(wrapper.type()).toEqual('div');
    expect(wrapper.find('div').length).toEqual(1);
  });
});
