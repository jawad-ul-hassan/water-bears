import HeroLeftDecorator from '../assets/images/hero-left-decorator.png';
import HeroRightDecorator from '../assets/images/hero-right-decorator.png';

export const MintHero = () => {
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
                  <span>0</span>/<span>10,000</span>
                </div>
                <div className="hero-mint-no-field">
                  <button className="hero-mint-no-less">-</button>
                  <input type="number" name="mint" id="mint" />
                  <button className="hero-mint-no-more">+</button>
                </div>
                <button className="hero-mint-btn">Mint Now</button>
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
