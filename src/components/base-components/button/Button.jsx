import styles from "./Button.module.css"

export const Button = ({
  children,
  disabled,
  icon = "none",
  onClick,
  className = ""
}) => {
  const iconClass = icon
    ? { "external-link": styles["external-link"], none: "" }[icon]
    : ""

  const handleOnClick = ev => {
    if (disabled || !onClick) return
    onClick(ev)
  }
  const classes = `${styles.button} ${iconClass} ${className}`
  return (
    <button disabled={disabled} className={classes} onClick={handleOnClick}>
      {children}
    </button>
  )
}
