import ComingSoonBearHat from '../assets/images/hero-bear-md.png';
import ComingSoonBearWithoutHat from '../assets/images/hero-bear-sm.png';

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about-wrapper">
          <h2 className="about-title">About Us</h2>
          <p className="about-text">
            Tardigrades are the toughest animals on Earth. When faced with
            danger they have the incredible ability to enter a state of
            suspended animation, shielding themselves from extreme temperatures,
            intense radiation and pressure. Once conditions get comfier, they
            can wake back up and start plodding around like nothing happened.
          </p>
          <div className="about-members">
            <div className="about-member-card">
              <p className="about-member-card-title">Founder</p>
              <img
                src={ComingSoonBearWithoutHat}
                alt=""
                className="about-member-card-image"
              />
              <p className="about-member-card-text">Name</p>
            </div>
            <div className="about-member-card">
              <p className="about-member-card-title">Artis</p>
              <img
                src={ComingSoonBearHat}
                alt=""
                className="about-member-card-image"
              />
              <p className="about-member-card-text">Name</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
