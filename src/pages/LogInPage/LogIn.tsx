import Form from '../../components/Form/Form';
import { useNavigate } from 'react-router-dom';

function LogIn() {
  const navigate = useNavigate();
  const logInInfo = ['Email', 'Password'];

  const handleSubmit = () => {
    alert('Successfully logged in!');
    navigate('/MemberPage');
  };

  return (
    <>
      <Form
        isMemberLinkVisible={false}
        title="Log In"
        submitButtonLabel="Log In"
        inputItems={logInInfo}
        onSubmit={handleSubmit}
      />
    </>
  );
}

export default LogIn;
