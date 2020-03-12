/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-state */
/**
 * @description log in component
 *
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions/actions';
import Group from './Group.jsx';

const mapStateToProps = state => ({
  isFetching: state.auth.isFetching,
  isAuthenticated: state.auth.isAuthenticated,
  credentials: state.auth.credentials,
  id_token: state.auth.id_token,
  username: state.auth.username,
  message: state.auth.message,
});

const mapDispatchToProps = dispatch => ({
  loginUser: credentials => dispatch(actions.loginUser(credentials)),
});

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
    event.preventDefault();
    const { username, password } = this.state;
    const credentials = {
      username,
      password,
    };
    const { loginUser } = this.props;
    loginUser(credentials);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
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
            <Link to='/Createuser'>
              <div> Sign Up</div>
            </Link>
          </form>
          {this.props.message && <p>{this.props.message}</p>}
        </div>
        <Group />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
