import Form from '../../components/Form/Form';
import { UserFormData } from '../../components/Form/Form';
import { useNavigate } from 'react-router-dom';

const signUpInfo = ['FirstName', 'LastName', 'Email', 'Password'];
function SignUp() {
  const navigate = useNavigate();
  const handleFormSubmit = (formData: UserFormData) => {
    console.log(formData);
    alert('You are now a member!');
    navigate('/Login');
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
