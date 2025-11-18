import { useParams } from "react-router-dom"
import { useContext } from "react"
import { DataContext } from "../../../../../context/DataProvider"
import { DetailList } from '../detail-list/DetailList'
import { Loading } from '../../../loading/Loading'
import styles from './DetailContent.module.css'

export const DetailContent = () => {

  const { data, loading } = useContext(DataContext);
  const { id } = useParams();

  if (loading) return <Loading />

  const detail = data.filter(data => data.model === id);


  return (
    <div className={styles.content__detail}>
      {
        detail.map((detail, index) => < DetailList key={index} detail={detail}/>)
      }
    </div>
  )
}
