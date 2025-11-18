import { FactoryList } from "../factory-list/FactoryList"
import { useContext } from "react"
import { DataContext } from "../../../../../context/DataProvider"
import { Loading } from "../../../loading/Loading"
import styles from './FactoryContent.module.css'

export const FactoryContent = () => {

  const { data, loading, error } = useContext(DataContext);

  const listFactory = data.map((data) => ({
    factory: data.factory,
    id: data.factory
  }));

  const factory = listFactory.reduce((acc, fac) => {
    if (!acc.map(a => a.factory).includes(fac.factory)) {
      acc.push(fac)
    }
    return acc;
  }, []);

  if (error) return <p>Error al cargar la pagina</p>

  return (
    <div className={styles.content__factory}>
      {
        loading
          ?
          <Loading />
          :
          factory.map((factory, index) => <FactoryList key={index} factory={factory} />)
      }
    </div>
  )
}
