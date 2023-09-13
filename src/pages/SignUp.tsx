import Form from '../components/Form/Form';
import { UserFormData } from '../components/Form/Form';

const signUpInfo = ['FirstName', 'LastName', 'Email', 'Password'];
function SignUp() {
  const handleFormSubmit = (formData: UserFormData) => {
    console.log(formData);
  };

  return (
    <>
      <Form
        title="Sign Up"
        inputItems={signUpInfo}
        submitButtonLabel="Sign Up"
        isMemberLinkVisible={true}
        onSubmit={handleFormSubmit}
      />
    </>
  );
}

export default SignUp;
