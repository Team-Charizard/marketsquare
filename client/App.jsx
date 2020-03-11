import React from 'react';
import Login from './components/login';
import MainContainer from './components/MainContainer';
import CreateUser from './components/createUser';

const App = () => {
  return (
    <div>
      <MainContainer />
      <Login />
      <CreateUser />
    </div>
  );
};
export default App;
