import { useContext } from 'react'
import { CartContext } from '../../../../context/CartProvider'
import { EmptyCart } from '../empty-cart/EmptyCart'
import { CartList } from '../cart-list/CartList'

export const ShoppingCart = () => {

  const { cart } = useContext(CartContext)



  return (
    <>
      {cart.length > 0 ? <CartList /> : <EmptyCart />}
    </>
  )
}
