import useGlobalState from './UseGlobalState';

function UseAuth() {
  const context = useGlobalState();

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
