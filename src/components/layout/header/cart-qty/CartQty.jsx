import { useContext } from "react"
import { CartContext } from '../../../../context/CartProvider';

export const CartQty = () => {

    const { cart } = useContext(CartContext);

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <>
            <span>{totalItems || 0}</span>
        </>
    )
}



