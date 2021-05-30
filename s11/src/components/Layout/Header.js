import { Fragment } from 'react'
import styles from './Header.module.scss'
import banner from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={styles['main-image']}>
        <img src={banner} alt="banner" />
      </div>
    </Fragment>
  )
}

export default Header
