import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/login';
import MainContainer from './components/MainContainer';
import LandingPage from './components/LandingPage';

const App = () => {
  return (
    <div>
      <Router>
        <MainContainer />
        <Login />
        <Route exact path='/' component={Login} />
        <Route exact path='/LandingPage' component={LandingPage} />
      </Router>
    </div>
  );
};
export default App;
