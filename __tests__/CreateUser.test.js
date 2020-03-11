import React from 'react';
import { shallow } from 'enzyme';
import CreateUser from '../client/components/createUser';

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
    wrapper = shallow(<CreateUser />);
  });

  it('renders a div with the class name login-container', () => {
    expect(wrapper.find(`.login-container`).length).toEqual(1);
  });
});
