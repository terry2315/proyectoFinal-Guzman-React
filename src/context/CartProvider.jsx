import { createContext, useState } from "react";

export const CartContext = createContext();
export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addToCart = (item, qty) => {
        if (exist(item.id)) {
            setCart(
                cart.map((prod) => {
                    if (prod.id === item.id) {
                        return { ...prod, quantity: prod.quantity, qty }
                    } else {
                        return prod;
                    }
                })
            )
        } else {
            setCart([...cart, { ...item, quantity: qty }])
        }
    }

    const deleteList = () => {
        setCart([])
    }

    const deleteItem = (id) => {
        setCart(cart.filter((item) => item.id !== id))
    }

    const exist = (id) => {
        return cart.some((item) => item.id === id)
    }

    const payTotal = () => {
        return cart.reduce((acc, prod) => acc += (prod.quantity * prod.price), 0);
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, deleteList, deleteItem, payTotal }}>
            {children}
        </CartContext.Provider>
    )
}