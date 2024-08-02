import React from 'react';

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__logo">
        <a href="/" id="footer__logo">
          <img src="images/logo.png" width="80" height="80" alt="Logo" />
        </a>
        <p>©2024 All rights reserved</p>
      </div>
      <div className="social__icons">
        <a href="/" className="social__icon--link" target="_blank"><i className="fa-brands fa-instagram"></i></a>
        <a href="/" className="social__icon--link" target="_blank"><i className="fa-brands fa-facebook"></i></a>
        <a href="/" className="social__icon--link" target="_blank"><i className="fa-brands fa-youtube"></i></a>
      </div>
    </div>
  );
};

export default Footer;

