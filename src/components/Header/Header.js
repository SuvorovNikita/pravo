import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Image from 'next/image';

import '@/components/Header/Header.scss';

import logo from '@/assets/img/logo.svg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (index) => {
    setActiveLink(index);
  };

  const menuItems = [
    { text: 'Услуги', href: '#', index: 0 },
    { text: 'О компании', href: '#', index: 1 },
    { text: 'Наши Юристы', href: '#', index: 2 },
    { text: 'Отзывы', href: '#', index: 3 },
    { text: 'Новости', href: '#', index: 4 },
    { text: 'Контакты', href: '#', index: 5 },
  ];

  return (
    <header className="header">
      <div className="header__inner">
        <div className="container">
          <div className="header__top">
            <div className="header__phone">
              <div className="header__icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.3333 0.833252H6.66663C5.28329 0.833252 4.16663 1.94992 4.16663 3.33325V16.6666C4.16663 18.0499 5.28329 19.1666 6.66663 19.1666H13.3333C14.7166 19.1666 15.8333 18.0499 15.8333 16.6666V3.33325C15.8333 1.94992 14.7166 0.833252 13.3333 0.833252ZM14.1666 14.9999H5.83329V3.33325H14.1666V14.9999ZM11.6666 17.4999H8.33329V16.6666H11.6666V17.4999Z"
                    fill="#4F8FF0"
                  />
                </svg>
              </div>
              <Link className="header__link" href="tel:+79220229482">
                +7 (922) 022-94-82
              </Link>
            </div>
            <div className="header__mail">
              <div className="header__icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.33342 16.6666C2.87508 16.6666 2.48258 16.5033 2.15592 16.1766C1.82925 15.8499 1.66619 15.4577 1.66675 14.9999V4.99992C1.66675 4.54159 1.83008 4.14909 2.15675 3.82242C2.48342 3.49575 2.87564 3.3327 3.33342 3.33325H16.6667C17.1251 3.33325 17.5176 3.49659 17.8442 3.82325C18.1709 4.14992 18.334 4.54214 18.3334 4.99992V14.9999C18.3334 15.4583 18.1701 15.8508 17.8434 16.1774C17.5167 16.5041 17.1245 16.6671 16.6667 16.6666H3.33342ZM10.0001 10.8333L3.33342 6.66659V14.9999H16.6667V6.66659L10.0001 10.8333ZM10.0001 9.16659L16.6667 4.99992H3.33342L10.0001 9.16659ZM3.33342 6.66659V4.99992V14.9999V6.66659Z"
                    fill="#4F8FF0"
                  />
                </svg>
              </div>
              <Link className="header__link" href="mailto:janis62@yahoo.com">
                janis62@yahoo.com
              </Link>
            </div>
            <div className="header__order">
              <Link className="header__order-call" href="#">
                Заказать звонок
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="header__bottom">
        <div className="container">
          <div className="header__bottom-inner">
            <Image className="header__logo" src={logo} alt="Логотип" priority />
            <nav className="header__menu">
              <ul className="header__menu-list">
                {menuItems.map((item, index) => (
                  <li className="header__menu-item" key={index}>
                    <Link className="header__menu-link" href={item.href}>
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav className="menu-mobile">
              <button
                className={`menu-mobile__button ${isOpen ? 'menu-mobile__button--open' : ''}`}
                onClick={toggleMenu}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z" fill="white" />
                </svg>
              </button>
              <ul className={`menu-mobile__list ${isOpen ? 'menu-mobile__list--open' : ''}`}>
                {menuItems.map((item) => (
                  <li className="menu-mobile__item" key={item.index}>
                    <Link
                      href="#"
                      className={`menu-mobile__link ${
                        activeLink === item.index ? 'menu-mobile__link--active' : ''
                      }`}
                      onClick={() => handleClick(item.index)}
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
