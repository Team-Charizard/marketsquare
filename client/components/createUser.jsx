/* eslint-disable no-console */
/* eslint-disable react/no-unused-state */

import React, { Component } from 'react';

class CreateUser extends Component {
  // want to have functionality to grab and change user data
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
  }

  submitLogin(event) {
    event.preventDefault();
  }

  // sets State to all the values inputted by the user
  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <div className='login-container'>
        <div className='login-div'>
          <h2>MarketSquare Create Account</h2>
          <form className='login-form' onSubmit={this.onSubmit}>
            <input
              name='email'
              type='text'
              placeholder='enter email'
              onChange={this.handleInputChange}
            />
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
              Create Account
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateUser;
