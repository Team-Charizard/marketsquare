/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = ({ isLogged }) => (
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
          <Link to='/'>Logout</Link>
        </li>
      )}
    </ul>
  </nav>
);
