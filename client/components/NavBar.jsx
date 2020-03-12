/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = ({ isLogged, logout }) => (
  <nav className='navbar'>
    <Link to='/'>Marketsquare</Link>
    <ul>
      {!isLogged ? (
        [
          <li>
            <Link to='/'>Login</Link>
          </li>,
          <li>
            <Link to='/CreateUser'>Sign Up</Link>
          </li>,
        ]
      ) : (
        <li>
          <button type='button' onClick={logout}>
            Logout
          </button>
        </li>
      )}
    </ul>
  </nav>
);
