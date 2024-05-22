import styles from "./Card.module.css"

export const Card = ({ children, outerClassName = "", className = "" }) => {
  return (
    <div className={`${styles["card-shadow"]} ${outerClassName}`}>
      <div className={`${styles["card"]} ${className}`}>{children}</div>
    </div>
  )
}
