import { ModelCard } from '../model-card/ModelCard'
import { Link } from 'react-router-dom'
import styles from './ModelList.module.css'

export const ModelList = ({ model }) => {
    return (
        <Link to={`/detail/${model.id}`} className={styles.model__link}>
            <ModelCard>
                {model.model}
            </ModelCard>
        </Link>
    )
}
