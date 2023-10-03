import React, { ChangeEvent, useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';

import styles from './Form.module.css';

interface InputItem {
  label: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

interface FormProps {
  inputItems: InputItem[];
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
        <h1 className={styles['title']}>{title}</h1>
        <form onSubmit={handleSubmit} className={styles['form']}>
          {inputItems.map((inputItem) => (
            <input
              name={inputItem.label}
              value={inputItem.value}
              onChange={inputItem.onChange}
              className={styles['form-input']}
              key={inputItem.label}
              placeholder={inputItem.label}
              type={inputItem.label.toLowerCase() === 'password' ? 'password' : 'text'}
              required
            />
          ))}

          <button type="submit" className={styles['button']}>
            {submitButtonLabel}
          </button>
        </form>
        {isMemberLinkVisible && (
          <p>
            Already a member?<span></span>
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
