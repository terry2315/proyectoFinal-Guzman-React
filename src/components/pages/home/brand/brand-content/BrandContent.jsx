import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { DataContext } from '../../../../../context/DataProvider'
import { BrandList } from '../brand-list/BrandList'
import { Loading } from '../../../loading/Loading'
import styles from './BrandContent.module.css'

export const BrandContent = () => {

    const { data, loading } = useContext(DataContext);
    const { id } = useParams();

    if (loading) return <Loading />

    const listBrand = data.filter((data) => data.factory === id);

    const brand = listBrand.map(brand => ({
        brand: brand.brand,
        id: brand.brand
    }))

    const brandReduce = brand.reduce((acc, br) => {
        if (!acc.map(a => a.brand).includes(br.brand)) {
            acc.push(br)
        }
        return acc;
    }, []);

    return (
        <div className={styles.content__brand}>
            {
                brandReduce.map((brand, index) => <BrandList key={index} brand={brand} />)
            }
        </div>
    )
}

