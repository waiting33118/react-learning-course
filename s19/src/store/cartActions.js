import { cartActions } from './cartSlice'
import { uiActions } from './uiSlice'

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        'https://react-http-fc47b-default-rtdb.firebaseio.com/cart.json'
      )

      if (!response.ok) throw new Error()

      const data = response.json()
      return data
    }

    try {
      const cartData = await fetchData()
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity
        })
      )
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'fetching cart data failed!'
        })
      )
    }
  }
}

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'sending',
        message: 'sending cart data!'
      })
    )

    const sendRequest = async () => {
      const response = await fetch(
        'https://react-http-fc47b-default-rtdb.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart)
        }
      )
      if (!response.ok) {
        throw new Error('error')
      }
    }

    try {
      await sendRequest()

      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'sending cart successfully!'
        })
      )
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'sending cart data failed!'
        })
      )
    }
  }
}
