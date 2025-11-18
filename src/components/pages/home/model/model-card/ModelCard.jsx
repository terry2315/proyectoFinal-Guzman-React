import styles from './ModelCard.module.css'

export const ModelCard = ({ children }) => {
    return (
        <article className={styles.model__card}>
            {children}
        </article>
    )
}
