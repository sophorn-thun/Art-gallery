import Form, { UserFormData } from '../../components/Form/Form';
import { useNavigate } from 'react-router-dom';

function LogIn() {
  const navigate = useNavigate();
  const logInInfo = ['Email', 'Password'];

  const handleSubmit = (formData: UserFormData) => {
    fetch('http://localhost:8000/LogIn', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        return response.json().then((data) => {
          if (!response.ok) {
            throw data;
          }
          return data;
        });
      })
      .then((data) => {
        if (data.success) {
          alert(data.message);
          navigate('/MemberPage');
        }
      })
      .catch((error) => {
        console.error('There was an error with fetch', error.message);
        alert(error.message);
      });
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
