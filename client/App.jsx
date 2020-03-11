import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/login';
import MainContainer from './components/MainContainer';
import LandingPage from './components/LandingPage';
import CreateUser from './components/createUser';

const App = () => {
  return (
    <div>
      <Router>
        {/* <MainContainer /> */}
        {/* <Login /> */}
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/LandingPage' component={LandingPage} />
          <Route exact path='/CreateUser' component={CreateUser} />
        </Switch>
      </Router>
    </div>
  );
};
export default App;
