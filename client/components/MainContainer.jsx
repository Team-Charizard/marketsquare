/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable prettier/prettier */
import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import { NavBar } from './NavBar';

const mapStateToProps = state => ({
  user: state.auth.user,
  credentials: state.auth.credentials,
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = dispatch => ({
  // login: (email, username, password) => dispatch(actions.login(email, username, password)),
  logoutUser: () => dispatch(actions.logoutUser()),
});

const MainContainer = ({ isAuthenticated, logoutUser, history }) => {
  const handleLogout = () => {
    logoutUser();
    history.push('/');
  }
  return (
    <>
        {/* <h1>Hi {user}</h1>
        <button type="button" onClick={() => login('email', 'Kelvin')}>Login</button> */}
        <NavBar isLogged={isAuthenticated} logout={handleLogout}/>
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MainContainer));
