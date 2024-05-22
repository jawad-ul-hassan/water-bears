import { useState } from "react";
import HeroLeftDecorator from "../assets/images/hero-left-decorator.png";
import HeroRightDecorator from "../assets/images/hero-right-decorator.png";
import { useSendTransactionManifest } from "../hooks/useSendTransactionManifest";
import { useAccounts } from "../hooks/useAccounts";
import { AccountPicker } from "../components/base-components/account-picker/AccountPicker";
import { useRef } from "react";
import { useConnectButtonState } from "../hooks/useConnectButtonState";
import { Tooltip } from "../components/base-components/tooltip/Tooltip";
import styles from "./MintHero.module.css";

export const MintHero = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => Math.min(prevCount + 1, 20)); // Limit to 20
  };

  const decrement = () => {
    setCount((prevCount) => Math.max(prevCount - 1, 0)); // Limit to 0
  };

  const handleChange = (event) => {
    const newCount = parseInt(event.target.value, 10);
    if (isNaN(newCount) || newCount < 0 || newCount > 20) {
      return; // Ignore invalid input
    }
    setCount(newCount);
  };

  const handleFocus = () => {
    if (count === 0) {
      setCount(""); // Clear input value on focus only if it's 0
    }
  };

  const { buyWaterBear } = useSendTransactionManifest()();
  const {
    state: { accounts },
  } = useAccounts();

  const [state, setState] = useState({
    hideTooltip: false,
    isPopoverOpen: false,
    insufficientXrdAlertDismissed: false,
  });
  const { selectedAccountAddress } = state;
  const ref = useRef();
  const connectButtonState = useConnectButtonState();
  const showTooltip =
    !state.hideTooltip &&
    !state.isPopoverOpen &&
    connectButtonState === "pending";

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-mint-content">
          <img src={HeroLeftDecorator} alt="" className="hero-left-decorator" />
          <div className="hero-mint">
            <h2 className="hero-mint-title">MINT</h2>
            <p className="hero-mint-text">
              Nibh est tincidunt tellus tortor non. Eu molestie.
            </p>
            <div className="hero-mint-box">
              <h3 className="hero-mint-box-title">Mint</h3>
              <p className="hero-mint-box-text">
                The price is 0.08eth ETH + Gas fee
              </p>
              <div className="hero-mint-field">
                <div className="hero-mint-total">
                  <span>{count}</span>/<span>10,000</span>
                </div>
                <div className="hero-mint-no-field">
                  <button className="hero-mint-no-less" onClick={decrement}>
                    -
                  </button>
                  <input
                    type="number"
                    name="mint"
                    id="mint"
                    value={count} // Set initial value from state
                    onChange={handleChange}
                    onFocus={handleFocus}
                  />
                  <button className="hero-mint-no-more" onClick={increment}>
                    +
                  </button>
                </div>
                {!accounts.length ? (
                  <>
                    <div className={styles["radix-connect-button"]}>
                      <radix-connect-button ref={ref} />
                      {showTooltip && (
                        <Tooltip
                          className={styles.tooltip}
                          onClose={() =>
                            setState((prev) => ({ ...prev, hideTooltip: true }))
                          }
                        >
                          You have a request waiting! Open your Radix Wallet
                          mobile app to review and approve.
                        </Tooltip>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <AccountPicker
                      className="mb-2"
                      accounts={accounts}
                      selected={selectedAccountAddress}
                      onSelect={(selectedAccountAddress) =>
                        setState((prev) => ({
                          ...prev,
                          selectedAccountAddress,
                        }))
                      }
                    />
                    <button
                      className="hero-mint-btn"
                      onClick={() =>
                        buyWaterBear({
                          accountAddress: selectedAccountAddress,
                        })
                      }
                    >
                      Mint Now
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
          <img
            src={HeroRightDecorator}
            alt=""
            className="hero-right-decorator"
          />
        </div>
      </div>
    </section>
  );
};
