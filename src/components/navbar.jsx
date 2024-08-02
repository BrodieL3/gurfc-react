import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return [
        <nav className="navbar">
          <div className="navbar__container">
            <div className="navbar__wide">
              <Link to="/" id="navbar__logo">
                <img src="./images/logo.png" width="80" height="80" alt="Logo" />
              </Link>
              <ul className="navbar__menu">
                <li className="navbar__item">
                  <Link to="/shop" className="navbar__links">Shop</Link>
                </li>
                <li className="navbar__item">
                  <Link to="/about" className="navbar__links">About</Link>
                </li>
                <li className="navbar__item">
                  <Link to="/roster" className="navbar__links">Roster</Link>
                </li>
                <li className="navbar__item">
                  <Link to="/match" className="navbar__links">Watch</Link>
                </li>
                <li className="navbar__btn">
                  <Link to="/watch" className="button">Join GURFC</Link>
                </li>
              </ul>
            </div>
        <div className="navbar__toggle" id="mobile-menu">
          <br />
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
    ]
}

export default Navbar