import styles from "./Border.module.css"

export const Border = ({ className }) => (
  <div className={`${styles.border} ${className}`}>
    <div className={styles.line}></div>
    <i className={styles.arrow}></i>
    <div className={styles.line}></div>
  </div>
)
