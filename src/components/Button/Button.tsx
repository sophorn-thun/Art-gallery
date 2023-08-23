import React from 'react';
import styles from './Button.module.css';

interface ButtonProps extends React.ComponentProps<'button'> {
  children: string;
  color: 'primary' | 'secondary';
}
function Button({ children, color, ...rest }: ButtonProps) {
  const colorClass = color === 'primary' ? styles.primary : styles.secondary;
  return (
    <button {...rest} className={`${styles['welcome-button']} ${colorClass}`}>
      {children}
    </button>
  );
}

export default Button;
