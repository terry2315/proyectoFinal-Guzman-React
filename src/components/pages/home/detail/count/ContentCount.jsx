import { useState } from "react"
import styles from './ContentCount.module.css'


export const ContentCount = ({ stock, onAdd }) => {

  const [count, setCount] = useState(1);

  const increase = () => {
    if (count < stock) {
      setCount(count + 1)
    }
  }

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  const buy = () => {
    onAdd(count)
  }

  return (
    <>
      {stock > 0
        ?
        <div className={styles.content__count}>
          <button onClick={decrease}>-</button>
          <span>{count}</span>
          <button onClick={increase}>+</button>
          <button onClick={buy} disabled={stock === 0 || count === 0}>Agregar al carrito</button>
        </div>
        :
        <p>No hay unidades disponibles</p>
      }
    </>
  )
}
