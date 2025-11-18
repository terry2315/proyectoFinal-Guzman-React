import { useParams } from 'react-router-dom'
import { DataContext } from '../../../../../context/DataProvider'
import { ModelList } from '../model-list/ModelList'
import { Loading } from '../../../loading/Loading'
import { useContext } from 'react'
import styles from './ModelContent.module.css'


export const ModelContent = () => {

    const { data, loading } = useContext(DataContext);
    const { id } = useParams();

    if (loading) return <Loading />

    const listModel = data.filter((data) => data.brand === id);

    const model = listModel.map((data) => ({
        model: data.model,
        id: data.model
    }));



    return (
        <div className={styles.content__model}>
            {
                model.map((model, index) => <ModelList key={index} model={model} />)
            }
        </div>
    )
}
