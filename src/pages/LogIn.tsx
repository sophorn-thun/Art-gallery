import Form from '../components/Form/Form';

function LogIn() {
  const logInInfo = ['Email', 'Password'];
  return (
    <div>
      <Form isMemberLinkVisible={false} inputItems={logInInfo} children="Log In" />
    </div>
  );
}

export default LogIn;
