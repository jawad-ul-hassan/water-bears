import { Alert } from "../base-components/alert/Alert"
import styles from "./Header.module.css"

// eslint-disable-next-line
export const InsufficientXrdAlert = ({ onClose, onGetXrd, show }) => {
  if (!show) return null
  return (
    <Alert
      className={styles.alert}
      variant="info"
      title="XRD Tokens Required"
      text={
        <>
          <div style={{ marginBottom: "1rem" }}>
            Each transaction on the Radix Network requires you have some XRD to
            pay a small network fee.{" "}
            <a
              target="_blank"
              href="https://www.radixdlt.com/token"
              style={{
                textDecoration: "underline",
                fontWeight: "bold",
                marginBottom: "1rem"
              }}
            >
              Click here
            </a>{" "}
            for some options to buy XRD. Or, to celebrate the Radix Babylon
            upgrade,{" "}
            <a
              target="_blank"
              href="http://go.radixdlt.com/xrdflow"
              style={{ textDecoration: "underline", fontWeight: "bold" }}
            >
              click here and follow a few steps to verify yourself
            </a>{" "}
            to claim 5 XRD.
          </div>
        </>
      }
      onClose={onClose}
    />
  )
}
