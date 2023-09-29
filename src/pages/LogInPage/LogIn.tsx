import Form from '../../components/Form/Form';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import UseAuth from '../../context/UseAuth';

import styles from './LogIn.module.css';

function LogIn() {
  const navigate = useNavigate();
  const { logIn } = UseAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const user = {
    email: 'test@email.com',
    password: 'test123',
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const handleSubmit = () => {
    if (email === user.email && password === user.password) {
      alert('Successfully logged in!');
      logIn();
      navigate('/Collection');
    } else {
      alert('Invalid email/password! Please try again!');
    }
  };

  const inputItems = [
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
    <div className={styles['login']}>
      <Form
        isMemberLinkVisible={false}
        title="Log In"
        submitButtonLabel="Log In"
        inputItems={inputItems}
        onSubmit={handleSubmit}
      />
      <p className={styles['demo']}>Demo email: test@email.com & password: test123</p>
    </div>
  );
}

export default LogIn;
