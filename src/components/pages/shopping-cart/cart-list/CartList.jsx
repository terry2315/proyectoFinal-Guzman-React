import { useContext } from "react"
import { CartContext } from '../../../../context/CartProvider'
import { Link } from "react-router-dom"
import styles from './CartList.module.css'

export const CartList = () => {

    const { cart, deleteItem, deleteList } = useContext(CartContext)
    return (
        <div className={styles.content__cartList}>
            <h2>Carrito de compras</h2>

            <div className={styles.article__cart}>
                {
                    cart.map((item, index) => (
                        <div className={styles.cart__item} key={item.id || index}>
                            <img src={item.img} alt={item.model} />
                            <p>Modelo: <span>{item.model}</span> </p>
                            <p>Cantidad: <span>{item.quantity}</span> </p>
                            <p> Precio por unidad:<span> {item.price}</span></p>
                            <p>Precio $ <span>{item.price * item.quantity}</span> </p>
                            <p>Precio total: <span>${item.price}</span></p> 
                            <button onClick={() => deleteItem(item.id)}>Borrar</button>
                        </div>
                    ))
                }
            </div>


            <div className={styles.emptyCart}>
                <button onClick={deleteList}>Vaciar carrito</button>
                <Link className={styles.emptyCart__link} to='/account'>Finalizar Compra</Link>
            </div>

        </div>
    )
}
