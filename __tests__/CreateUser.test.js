import React from 'react';
import { shallow } from 'enzyme';
import CreateUser from '../client/components/CreateUser';

xdescribe('CreateUser unit tests', () => {
  let wrapper;
  const props = {
    isFetching: false,
    isAuthenticated: false,
    credentials: null,
    id_token: null,
    createAccount: jest.fn(),
  };

  beforeAll(() => {
    wrapper = shallow(<CreateUser {...props} />);
  });

  it('renders a div with the class name login-container', () => {
    console.log(wrapper.debug());
    expect(wrapper.find(`.login-container`).length).toEqual(1);
  });

  it('has props', () => {
    expect(wrapper.props()).toBe(props);
  });
});
