import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.container}>
        <img src="/logo.png" className={styles.logo} alt="logo" />
        <div className={styles.text}>Your Ultimate Task Organizer</div>
    </div>
  )
}

export default Header