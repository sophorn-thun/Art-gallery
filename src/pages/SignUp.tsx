import Form from '../components/Form/Form';
import { UserFormData } from '../components/Form/Form';

const signUpInfo = ['FirstName', 'LastName', 'Email', 'Password'];
function SignUp() {
  const handleFormSubmit = (formData: UserFormData) => {
    console.log(formData);

    fetch('http://localhost:8000/SignUp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    }).then(() => {
      console.log('Signed Up!');
    });
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
