import { Routes, Route } from 'react-router-dom'
import { FactoryContent } from '../../pages/home/factory/factory-content/FactoryContent'
import { Account } from '../../pages/account/Account'
import { ShoppingCart } from '../../pages/shopping-cart/shopping-cart/ShoppingCart'
import { BrandContent } from '../../pages/home/brand/brand-content/BrandContent'
import { ModelContent } from '../../pages/home/model/model-content/ModelContent'
import { DetailContent } from '../../pages/home/detail/detail-content/DetailContent/'
import { Error } from '../../pages/error/Error'
import styles from './Main.module.css'

export const Main = () => {
    return (
        <main className={styles.layout__main}>
            <Routes>
                <Route path='/' element={<FactoryContent />} />
                <Route path='/account' element={<Account />} />
                <Route path='/cart' element={<ShoppingCart />} />
                <Route path='/brand/:id' element={<BrandContent />} />
                <Route path='/model/:id' element={<ModelContent />} />
                <Route path='/detail/:id' element={<DetailContent />} />
                <Route path='*' element={<Error />} />
            </Routes>
        </main>
    )
}
