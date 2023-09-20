import React from 'react';
import { useContext } from 'react';
import { GlobalStateContext } from './GlobalState';

function UseAuth() {
  const context = useContext(GlobalStateContext);

  if (!context) {
    throw new Error('UseAuth must be used within a GlobalStateProvider');
  }

  const { state, setState } = context;

  const isLoggedIn = !!state.loggedIn;

  const logIn = () => {
    setState((prevState) => ({ ...prevState, loggedIn: true }));
  };

  const logOut = () => {
    setState((prevState) => ({ ...prevState, loggedIn: false }));
  };

  return { isLoggedIn, logIn, logOut };
}

export default UseAuth;
