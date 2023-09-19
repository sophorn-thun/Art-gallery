import React, { ChangeEvent, useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';

import styles from './Form.module.css';

interface FormProps {
  inputItems: string[];
  title: string;
  submitButtonLabel: string;
  isMemberLinkVisible?: boolean;
  onSubmit: (data: UserFormData) => void;
}

export interface UserFormData {
  FirstName?: string;
  LastName?: string;
  Email: string;
  Password: string;
}
function Form({ isMemberLinkVisible, title, submitButtonLabel, inputItems, onSubmit }: FormProps) {
  const [formData, setFormData] = useState<UserFormData>({
    FirstName: '',
    LastName: '',
    Email: '',
    Password: '',
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit(formData);
  };

  return (
    <div className={styles['sign-up']}>
      <div className={styles['form-main']}>
        <h1>{title}</h1>
        <form onSubmit={handleSubmit} className={styles['form']}>
          {inputItems.map((inputItem) => (
            <input
              name={inputItem}
              onChange={handleInputChange}
              className={styles['form-input']}
              key={inputItem}
              placeholder={inputItem}
              type={inputItem === 'password' ? 'password' : 'text'}
              required
            />
          ))}
          <button type="submit" className={styles['button']}>
            {submitButtonLabel}
          </button>
        </form>
        {isMemberLinkVisible && (
          <p>
            Already a member?{' '}
            <Link className={styles['link']} to="/LogIn">
              Log In
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}

export default Form;
