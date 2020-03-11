/* eslint-disable react/no-unused-state */
/**
 * @description log in component
 *
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
  }

  submitLogin(event) {
    console.log(event);
    event.preventDefault();
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    console.log(this.props);
    return (
      <div className='login-container'>
        <div className='login-div'>
          <h2>MarketSquare Login</h2>
          <form className='login-form' onSubmit={this.submitLogin}>
            <input
              name='username'
              type='text'
              placeholder='enter username'
              onChange={this.handleInputChange}
            />
            <input
              name='password'
              type='text'
              placeholder='password'
              onChange={this.handleInputChange}
            />
            <button type='submit' id='login-button'>
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
