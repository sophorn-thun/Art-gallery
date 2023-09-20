import React, { useState } from 'react';
import Form from '../../components/Form/Form';
import { UserFormData } from '../../components/Form/Form';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFirstName(e.target.value);
  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setLastName(e.target.value);
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const handleFormSubmit = (formData: UserFormData) => {
    console.log(formData);
    alert('You are now a member!');
    navigate('/Login');
  };

  const inputItems = [
    {
      label: 'FirstName',
      value: firstName,
      onChange: handleFirstNameChange,
    },
    {
      label: 'LastName',
      value: lastName,
      onChange: handleLastNameChange,
    },
    {
      label: 'Email',
      value: email,
      onChange: handleEmailChange,
    },
    {
      label: 'Password',
      value: password,
      onChange: handlePasswordChange,
    },
  ];

  return (
    <>
      <Form
        title="Sign Up"
        inputItems={inputItems}
        submitButtonLabel="Sign Up"
        isMemberLinkVisible={true}
        onSubmit={handleFormSubmit}
      />
    </>
  );
}

export default SignUp;
