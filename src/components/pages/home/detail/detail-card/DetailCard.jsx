import styles from './DetailCard.module.css'

export const DetailCard = ({ children }) => {
  return (
    <article className={styles.detail__card}>
      {children}
    </article>
  )
}
