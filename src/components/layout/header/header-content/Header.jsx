import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { CartQty } from '../cart-qty/CartQty'


import styles from './Header.module.css'

export const Header = () => {
  return (
    <header className={styles.layout__header}>
      <div>
        <Link to='/' className={styles.header__title}>
          <h1>CARONTE</h1>
        </Link>
      </div>

      <nav className={styles.header__navbar}>
        <NavLink className={styles.navbar__link} to='/'>INICIO</NavLink>
        <NavLink className={styles.navbar__cart} to='/cart'><FontAwesomeIcon icon={faCartShopping} /><CartQty/></NavLink>
      </nav>
    </header>
  )
}