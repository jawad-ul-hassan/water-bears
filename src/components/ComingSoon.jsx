import ComingSoonRightDecorator from "../assets/images/coming-soon-right-decorator.png";
import ComingSoonLeftDecorator from "../assets/images/coming-soon-left-decorator.png";
import ComingSoonBear1 from "../assets/images/Tardigrade10.png";
import ComingSoonBear2 from "../assets/images/Tardigrade14.png";
import ComingSoonBear3 from "../assets/images/Capsule2.png";
import ComingSoonBear5 from "../assets/images/Baby2.png";
import Coin from "../assets/images/coin.png";
import RightArrow from "../assets/svg/right-arrow.svg?react";

const ComingSoon = () => {
  return (
    <section className="coming-soon">
      <div className="container">
        <div className="coming-soon-content">
          <img
            src={ComingSoonLeftDecorator}
            alt=""
            className="coming-soon-left-decorator"
          />
          <div className="coming-soon-wrapper">
            {/* <h3 className="coming-soon-subtitle">tardigrades ARE</h3> */}
            <h1 className="coming-soon-title">COMING soon</h1>
            <p className="coming-soon-text">
              WaterBears is collection of 3,333 algorithmically generated
              tardigrades living on the Radix Ledger. All art drawn by hand in
              24px format. Explore the collection's ecosystem through staking,
              gamified mints and custom merchandise.
              <span className="coming-soon-text-br">
                Each Genesis WaterBear produces 5 $DNA every day
              </span>
            </p>

            <div className="coming-soon-guide">
              <p className="coming-soon-guide-text">
                Hold any two Genesis WaterBears in your wallet and burn 300 $DNA
                <span className="coming-soon-guide-text-br">
                  to receive a test tube
                </span>
              </p>
              <div className="coming-soon-guide-box">
                <div className="coming-soon-guide-box-images">
                  <img src={ComingSoonBear1} alt="" />
                  <img src={ComingSoonBear2} alt="" />
                </div>
                <RightArrow className="coming-soon-guide-box-arrow" />
                <div className="coming-soon-guide-box-images">
                  <img src={ComingSoonBear3} alt="" />
                </div>
              </div>
              <p className="coming-soon-guide-text">
                Each test tube can be minted into a baby WaterBear. Baby
                WaterBears has a supply of 6,666 supply
                <span className="coming-soon-guide-text-br"></span>
              </p>
              <div className="coming-soon-guide-box">
                <div className="coming-soon-guide-box-images">
                  <img src={ComingSoonBear3} alt="" />
                </div>
                <RightArrow className="coming-soon-guide-box-arrow" />
                <div className="coming-soon-guide-box-images">
                  <img src={ComingSoonBear5} alt="" />
                </div>
              </div>
              <p className="coming-soon-guide-text">
                1 $DNA = 1 $DNA
                <span className="coming-soon-guide-text-br">
                  DNA is not an investment and has no financial value
                </span>
              </p>
              <img src={Coin} alt="" className="coming-soon-guide-coin" />
            </div>
          </div>
          <img
            src={ComingSoonRightDecorator}
            alt=""
            className="coming-soon-right-decorator"
          />
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
