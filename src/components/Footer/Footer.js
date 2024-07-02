import '@/components/Footer/Footer.scss';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/img/logo-footer.svg';
import ava from '@/assets/img/avatar.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__header">
          <div className="footer__logo">
            <Image src={logo} alt="логотип футера" />
          </div>
          <div className="footer__paragraph">
            <p>
              Предварительные выводы неутешительны: синтетическое тестирование, а также свежий
              взгляд на привычные вещи — безусловно открывает новые горизонты для экономической
              целесообразности принимаемых решений.
            </p>
          </div>
        </div>

        <div className="footer__body">
          <div className="footer__contact">
            <div className="footer__item">
              <div className="footer__icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 6.5C12.663 6.5 13.2989 6.76339 13.7678 7.23223C14.2366 7.70107 14.5 8.33696 14.5 9C14.5 9.3283 14.4353 9.65339 14.3097 9.95671C14.1841 10.26 13.9999 10.5356 13.7678 10.7678C13.5356 10.9999 13.26 11.1841 12.9567 11.3097C12.6534 11.4353 12.3283 11.5 12 11.5C11.337 11.5 10.7011 11.2366 10.2322 10.7678C9.76339 10.2989 9.5 9.66304 9.5 9C9.5 8.33696 9.76339 7.70107 10.2322 7.23223C10.7011 6.76339 11.337 6.5 12 6.5ZM12 2C13.8565 2 15.637 2.7375 16.9497 4.05025C18.2625 5.36301 19 7.14348 19 9C19 14.25 12 22 12 22C12 22 5 14.25 5 9C5 7.14348 5.7375 5.36301 7.05025 4.05025C8.36301 2.7375 10.1435 2 12 2ZM12 4C10.6739 4 9.40215 4.52678 8.46447 5.46447C7.52678 6.40215 7 7.67392 7 9C7 10 7 12 12 18.71C17 12 17 10 17 9C17 7.67392 16.4732 6.40215 15.5355 5.46447C14.5979 4.52678 13.3261 4 12 4Z"
                    fill="#F8F5F4"
                  />
                </svg>
              </div>
              <div className="footer__info">
                <h4 className="footer__title">Наш адрес</h4>
                <adress className="footer__adress">г. Одинцово, пр. Будапештсткая, 40</adress>
              </div>
            </div>
            <div className="footer__item">
              <div className="footer__icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 1H8C6.34 1 5 2.34 5 4V20C5 21.66 6.34 23 8 23H16C17.66 23 19 21.66 19 20V4C19 2.34 17.66 1 16 1ZM17 18H7V4H17V18ZM14 21H10V20H14V21Z"
                    fill="#F8F5F4"
                  />
                </svg>
              </div>
              <div className="footer__info">
                <h4 className="footer__title">Запись на консультанцию</h4>
                <Link className="footer__adress" href="#">
                  +7 (922) 022-94-82
                </Link>
              </div>
            </div>
            <div className="footer__item">
              <div className="footer__icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 20C3.45 20 2.979 19.804 2.587 19.412C2.195 19.02 1.99934 18.5493 2 18V6C2 5.45 2.196 4.979 2.588 4.587C2.98 4.195 3.45067 3.99934 4 4H20C20.55 4 21.021 4.196 21.413 4.588C21.805 4.98 22.0007 5.45067 22 6V18C22 18.55 21.804 19.021 21.412 19.413C21.02 19.805 20.5493 20.0007 20 20H4ZM12 13L4 8V18H20V8L12 13ZM12 11L20 6H4L12 11ZM4 8V6V18V8Z"
                    fill="#F8F5F4"
                  />
                </svg>
              </div>
              <div className="footer__info">
                <h4 className="footer__title">Корреспонденция</h4>
                <Link className="footer__adress" href="#">
                  janis62@yahoo.com
                </Link>
              </div>
            </div>
          </div>
          <ul className="footer__menu-list">
            <li className="footer__menu-item">
              <Link href="#" className="footer__menu-link">
                Услуги
              </Link>
            </li>
            <li className="footer__menu-item">
              <Link href="#" className="footer__menu-link">
                О компании
              </Link>
            </li>
            <li className="footer__menu-item">
              <Link href="#" className="footer__menu-link">
                Сертификаты
              </Link>
            </li>
            <li className="footer__menu-item">
              <Link href="#" className="footer__menu-link">
                отзывы
              </Link>
            </li>
            <li className="footer__menu-item">
              <Link href="#" className="footer__menu-link">
                Полезные материалы
              </Link>
            </li>
            <li className="footer__menu-item">
              <Link href="#" className="footer__menu-link">
                Благотворительность
              </Link>
            </li>
          </ul>

          <div className="footer__person-answer">
            <div className="footer__avatar">
              <Image src={ava} alt="Аватар" />
              <div className="footer__employee-info">
                <h3 className="footer__name">Миронов Александр</h3>
                <p className="footer__paragraph-alt">Ведущий юрист</p>
              </div>
            </div>
            <div className="footer__text">
              <p>
                Есть над чем задуматься: тщательные исследования конкурентов разоблачены. Идейные
                соображения высшего порядка, а также перспективное планирование играет
              </p>
            </div>
            <button className="footer__button button" type="button">
              Задать вопрос юристу
            </button>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <div className="footer__bottom-text">
            <p>Все права защищены, 2024</p>
            <p>Политика обработки персональных данных</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
