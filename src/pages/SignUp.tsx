import Form from '../components/Form/Form';

const signUpInfo = ['First Name', 'Last Name', 'Email', 'Password'];
function SignUp() {
  return (
    <div>
      <Form
        title="Sign Up"
        inputItems={signUpInfo}
        submitButtonLabel="Sign Up"
        isMemberLinkVisible={true}
      />
    </div>
  );
}

export default SignUp;
