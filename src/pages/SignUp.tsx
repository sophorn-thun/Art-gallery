import Form from '../components/Form/Form';

const signUpInfo = ['First Name', 'Last Name', 'Email', 'Password'];
function SignUp() {
  return (
    <div>
      <Form children="Sign Up" inputItems={signUpInfo} isMemberLinkVisible={true} />
    </div>
  );
}

export default SignUp;
