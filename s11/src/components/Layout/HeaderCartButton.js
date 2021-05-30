import styles from './HeaderCartButton.module.scss'
import CartIcon from '../Cart/CartIcon'
import { useContext, useEffect, useState } from 'react'
import CardContext from '../../store/cartContext'

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CardContext)
  const [btnIsHighLighted, setBtnIsHighLighted] = useState(false)

  const numberOfCartItems = cartCtx.items.reduce(
    (currentNumber, item) => currentNumber + item.amount,
    0
  )

  const btnClasses = `${styles.button} ${btnIsHighLighted ? styles.bump : ''}`

  useEffect(() => {
    let timer
    if (cartCtx.items.length !== 0) {
      setBtnIsHighLighted(true)
      timer = setTimeout(() => setBtnIsHighLighted(false), 300)
    }
    return () => {
      clearTimeout(timer)
    }
  }, [cartCtx.items])

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  )
}

export default HeaderCartButton
