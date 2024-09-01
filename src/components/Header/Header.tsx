import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css'

const Header:FC = () => {
  return (
    <div className={styles.container}>
        <img src="/logo.png" className={styles.logo} alt="logo" />
        <div className={styles.text}>Your Ultimate Task Organizer</div>
        <Link to="/archive">Go to Archive</Link>
    </div>
  )
}

export default Header