import TwitterIcon from "../assets/svg/twitter.svg?react";
import DiscordIcon from "../assets/svg/discord.svg?react";
import TelegramIcon from "../assets/svg/telegram.svg?react";
import HamburgerIcon from "../assets/svg/hamburger.svg?react";
import CloseIcon from "../assets/svg/close.svg?react";
import WaterBearsLogo from "../assets/images/water-bears.png";
import { useState } from "react";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive); // Toggle the state
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <a href="#">
            <img
              src={WaterBearsLogo}
              alt="Water Bears"
              className="header-logo"
            />
          </a>
          <nav className={`header-navbar ${isActive ? "active" : ""}`}>
            <a href="/" className="header-navlink">
              Home
            </a>
            <a href="#faq" className="header-navlink">
              FAQ
            </a>
            <a href="#about" className="header-navlink">
              About
            </a>
            <a href="/mint" className="header-navlink">
              Mint
            </a>
            <a href="/breed" className="header-navlink">
              Breed
            </a>
            <a href="/stake" className="header-navlink">
              Stake
            </a>
          </nav>
          <div className="header-socials">
            <a href="#">
              <TwitterIcon />
            </a>
            <a href="https://t.me/WaterBearsXRD">
              <TelegramIcon />
            </a>
          </div>
          <button onClick={handleClick} className="header-hamburger">
            {isActive ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
