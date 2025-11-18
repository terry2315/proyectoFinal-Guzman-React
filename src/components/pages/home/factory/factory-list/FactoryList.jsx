import { Link } from 'react-router-dom'
import { FactoryCard } from '../factory-card/FactoryCard'
import styles from './FactoryList.module.css'


export const FactoryList = ({ factory }) => {
  return (
    <div className={styles.factory__list}>
      <Link to={`/brand/${factory.id}`} className={styles.factory__link}>
        <FactoryCard>
          {factory.factory}
        </FactoryCard>
      </Link>
    </div>
  )
}
