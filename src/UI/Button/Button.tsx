import { FC } from 'react';
import { ButtonProps } from '../../types/types';
import styles from './Button.module.css';


const Button:FC<ButtonProps> = ({ children, disabled = false, ...rest }) => {
  return (
    <button 
        {...rest}
        className={styles.button}
        disabled={disabled}
    >
        {children}     
    </button>
  )
}

export default Button