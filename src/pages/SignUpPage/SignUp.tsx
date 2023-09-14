import Form from '../../components/Form/Form';
import { UserFormData } from '../../components/Form/Form';
import { useNavigate } from 'react-router-dom';

const signUpInfo = ['FirstName', 'LastName', 'Email', 'Password'];
function SignUp() {
  const navigate = useNavigate();
  const handleFormSubmit = (formData: UserFormData) => {
    console.log(formData);

    fetch('http://localhost:8000/SignUp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert(data.message);
          navigate('/LogIn');
        } else {
          alert(data.message);
        }
      })
      .catch((error) => {
        console.error('There was an error during the sign-up process', error);
        alert('There was an unexpected error during signing up. Please try again later.');
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
