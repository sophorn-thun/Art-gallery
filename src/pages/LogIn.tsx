import { useState } from 'react';
import Form from '../components/Form/Form';

function LogIn() {
  const logInInfo = ['Email', 'Password'];
  return (
    <div>
      <Form
        isMemberLinkVisible={false}
        title="Log In"
        submitButtonLabel="Log In"
        inputItems={logInInfo}
        children="Log In"
      />
    </div>
  );
}

export default LogIn;
