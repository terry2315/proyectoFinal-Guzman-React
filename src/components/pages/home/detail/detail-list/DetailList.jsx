import { DetailCard } from '../detail-card/DetailCard'
import { ContentCount } from '../count/ContentCount'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../../../../context/CartProvider'
import styles from './DetailList.module.css'

export const DetailList = ({ detail }) => {

  const { addToCart } = useContext(CartContext);
  const [buyer, setBuyer] = useState(false);

  const onAdd = (cantidad) => {
    addToCart(detail, cantidad)
    setBuyer(true)
  }

  return (
    <div className={styles.list__detail}>
      <DetailCard>
        <div>
          <img src={detail.img} alt={detail.model} />
        </div>
        <div>
          <ul>
            <li>
              <p>Fabricante :</p>
            </li>

            <li>
              <p>Marca :</p>
            </li>

            <li>
              <p>Modelo :</p>
            </li>

            <li>
              <p>Precio :</p>
            </li>
          </ul>

          <ul>
            <li>
              <p>{detail.factory}</p>
            </li>

            <li>
              <p>{detail.brand}</p>
            </li>

            <li>
              <p>{detail.model}</p>
            </li>

            <li>
              <p>$ {detail.price}</p>
            </li>
          </ul>
        </div>

        <div>
          {
            buyer ? <Link to='/cart' className={styles.buyer__link}>Ir al carrito</Link> : <ContentCount stock={detail.stock} onAdd={onAdd} />
          }

        </div>

      </DetailCard>
    </div>

  )
}
