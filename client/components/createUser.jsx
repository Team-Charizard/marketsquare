/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable react/no-unused-state */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';
import * as actions from '../actions/actions';

const mapStateToProps = state => ({
  isFetching: state.auth.isFetching,
  isAuthenticated: state.auth.isAuthenticated,
  credentials: state.auth.credentials,
  id_token: state.auth.id_token,
  message: state.auth.message,
  successfulSignUp: state.auth.successfulSignUp,
});

const mapDispatchToProps = dispatch => ({
  createAccount: credentials => dispatch(actions.createAccount(credentials)),
});

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
    const { username, password, email } = this.state;
    const credentials = {
      username,
      password,
      email,
    };
    const { createAccount } = this.props;
    createAccount(credentials);
  }

  // sets State to all the values inputted by the user
  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { successfulSignUp } = this.props;
    if (successfulSignUp) {
      return <Redirect to='/LandingPage' />;
    }

    return (
      <div className='login-container'>
        <div className='login-div'>
          <h2>MarketSquare Create Account</h2>
          <form className='login-form' onSubmit={this.submitLogin}>
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
            {this.props.message && <p>{this.props.message}</p>}
          </form>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);
