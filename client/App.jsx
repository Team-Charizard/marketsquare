import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/login';
import MainContainer from './components/MainContainer';
import LandingPage from './components/LandingPage';
import CreateUser from './components/createUser';

const App = () => {
  return (
    <div>
      <MainContainer />
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/LandingPage' component={LandingPage} />
        <Route exact path='/CreateUser' component={CreateUser} />
      </Switch>
    </div>
  );
};
export default App;
