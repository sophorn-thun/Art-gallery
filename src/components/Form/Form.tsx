import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Form.module.css';

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  inputItems: string[];
  title: string;
  submitButtonLabel: string;
  isMemberLinkVisible?: boolean;
}

function Form({ isMemberLinkVisible, title, submitButtonLabel, inputItems }: FormProps) {
  return (
    <div className={styles['sign-up']}>
      <div className={styles['form-main']}>
        <h1>{title}</h1>
        <form className={styles['form']}>
          {inputItems.map((inputItem) => (
            <input className={styles['form-input']} key={inputItem} placeholder={inputItem} />
          ))}
        </form>
        {isMemberLinkVisible && (
          <p>
            Already a member?{' '}
            <Link className={styles['link']} to="/LogIn">
              Log In
            </Link>
          </p>
        )}

        <button className={styles['button']}>{submitButtonLabel}</button>
      </div>
    </div>
  );
}

export default Form;
