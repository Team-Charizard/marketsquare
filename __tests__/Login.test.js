import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Login from '../client/components/Login';

describe('Login unit tests', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<Login />);
  });

  it('snapshot test', () => {
    const tree = renderer.create(<Login />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a div with the class name login-container', () => {
    console.log(wrapper.debug());
    expect(wrapper.type()).toEqual('div');
    expect(wrapper.find(`.login-container`).length).toEqual(1);
  });

  it('renders market square login', () => {
    const h2 = wrapper.find('h2');
    expect(h2.text()).toEqual('MarketSquare Login');
  });

  it('renders a login form', () => {
    const form = wrapper.find('form');
    expect(form.length).toEqual(1);
  });
});
