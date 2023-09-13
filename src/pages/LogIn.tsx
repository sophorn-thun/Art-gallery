import Form, { UserFormData } from '../components/Form/Form';

function LogIn() {
  const logInInfo = ['Email', 'Password'];
  const handleSubmit = (formData: UserFormData) => {
    console.log(formData);
  };
  return (
    <div>
      <Form
        isMemberLinkVisible={false}
        title="Log In"
        submitButtonLabel="Log In"
        inputItems={logInInfo}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default LogIn;
