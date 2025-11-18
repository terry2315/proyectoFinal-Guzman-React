import { Link } from 'react-router-dom'
import { BrandCart } from '../brand-card/BrandCart'
import styles from './BrandList.module.css'

export const BrandList = ({ brand }) => {
    return (
        <div>
            <Link to={`/model/${brand.id}`} className={styles.brand__link}>
                <BrandCart>
                    {brand.brand}
                </BrandCart>
            </Link>
        </div>
    )
}


