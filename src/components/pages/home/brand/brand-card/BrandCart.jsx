import styles from './BrandCard.module.css'

export const BrandCart = ({ children }) => {
    return (
        <article className={styles.brand__card}>
            {children}
        </article>
    )
}
