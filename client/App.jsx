import React from 'react';
import Login from './components/Login';
import MainContainer from './components/MainContainer';
import CreateUser from './components/CreateUser';

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
