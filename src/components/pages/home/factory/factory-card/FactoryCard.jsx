import styles from './FactoryCard.module.css'

export const FactoryCard = ({ children }) => {
    return (
        <article className={styles.factory__card}>
            {children}
        </article>
    )
}
