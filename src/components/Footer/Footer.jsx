import "./Footer.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import insta from "../../Image/Footer/instagram.png";
import ws from "../../Image/Footer/whatsapp.png";
import tg from "../../Image/Footer/telegram.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main-container">
        <div className="footer__left-part">
          <Link className="header__logo logo" to="/">
            SpeakSwift
          </Link>
          <p className="footer__copy">@ 2024 Speakswift, Inc. All rights reserved.</p>
        </div>
        <div className="footer__right-part">
            <div className="footer__contact">
                <p className="footer__phone">+375 (17) 123 45 67</p>
                <p className="footer__email">example@gmail.com</p>
            </div>
            <ul className="footer__navlist">
                <li className="footer__item">
                    <NavLink className="footer__link" to='/' target="_blank">
                        <img className="footer__image" src={insta} alt="иконка"/>
                    </NavLink>
                </li>

                <li className="footer__item">
                    <NavLink className="footer__link" to='/' target="_blank">
                        <img className="footer__image" src={ws} alt="иконка"/>
                    </NavLink>
                </li>

                <li className="footer__item">
                    <NavLink className="footer__link" to='/' target="_blank">
                        <img className="footer__image" src={tg} alt="иконка"/>
                    </NavLink>
                </li>
            </ul>
        </div>
      </div>
    </footer>
  );
}
