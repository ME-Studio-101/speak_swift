import "./Header.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import list_span from "../../Image/Header/link-span.svg";
import list_span_white from "../../Image/Header/link-span-white.svg";
import span from "../../Image/Header/dropdovn_span.svg";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <header className="header">
      <div className="header__nav-container">
        <Link className="header__logo" to="/">
          SpeakSwift
        </Link>
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <NavLink
              to="#"
              className="header__link header__link-drop"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              Курсы{" "}
              <span className="arrow">
                <img
                  className="span-img"
                  src={(isDropdownOpen && list_span) || list_span_white}
                  alt="стрелка"
                />
              </span>
              {isDropdownOpen && (
                <ul className="dropdown">
                  <li className="dropdown-item">
                    <NavLink to="" className="dropdown-link">
                      Индивидуальные занятия
                    </NavLink>
                    <img className="dropdown-span" src={span} alt="стрелка" />
                  </li>
                  <li className="dropdown-item">
                    <NavLink to="" className="dropdown-link">
                      Курсы английского
                    </NavLink>
                    <img className="dropdown-span" src={span} alt="стрелка" />
                  </li>
                  <li className="dropdown-item">
                    <NavLink to="" className="dropdown-link">
                      Курс интенсив
                    </NavLink>
                    <img className="dropdown-span" src={span} alt="стрелка" />
                  </li>
                  <li className="dropdown-item">
                    <NavLink to="" className="dropdown-link">
                      Занятия для детей
                    </NavLink>
                    <img className="dropdown-span" src={span} alt="стрелка" />
                  </li>
                </ul>
              )}
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink to="#" className="header__link">
              Тест на уровень Английского
            </NavLink>
          </li>

          <li className="header__nav-item">
            <NavLink to="*" className="header__link">
              О Нас
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="header__contact-container">
        <p className="header__phone">375 (29) 333 33 33</p>
        <button className="header__bottom">Связаться с нами</button>
        <div className="hamburger-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}
