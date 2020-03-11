/**
 * @description log in component
 *
 */

import React from 'react';
import auth from './auth';

const Login = props => {
  return (
    <div className='login-container'>
      <div className='login-div'>
        <h2>MarketSquare Login</h2>
        <form className='login-form'>
          <input type='text' placeholder='enter username' />
          <input type='text' placeholder='password' />
          <button
            onClick={() => {
              auth.login(() => {
                this.props.history.push('/LandingPage');
              });
            }}
            type='button'
            id='login-button'
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
