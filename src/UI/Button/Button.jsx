import React from 'react'
import styles from './Button.module.css'

const Button = (props) => {

const {children, disabled = false} = props

  return (
    <button 
        className={styles.button}
        disabled={disabled}
    >
        {children}     
    </button>
  )
}

export default Button