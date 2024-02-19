import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="header" id="header">
      <nav className="nav container" style={{ backgroundColor: 'rgb(15,14,62)' }}>
        <div className="nav__left">
          <Link to="/" className="nav__logo">
            <span>Travlr</span>
          </Link>
        </div>
        <div className="nav__right">
          <div
            className={`nav__menu ${showMenu ? 'show-menu' : ''}`}
            id="nav-menu"
          >
            <ul className="nav__list">
              <li className="nav__item">
                <Link to="/" className="nav__link active">
                  Home
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/about" className="nav__link">
                  About
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/plans" className="nav__link ">
                  Services
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/reg" className="nav__link">
                  SignUp
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/login" className="nav__link ">
                  Login
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/Contact" className="nav__link ">
                 ContactUs
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/admin" className="nav__link">
                  AdminLogin
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav__toggle" onClick={() => setShowMenu(!showMenu)}>
            <i className="bx bx-menu"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
