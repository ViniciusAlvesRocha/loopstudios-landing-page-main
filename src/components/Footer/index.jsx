import React from 'react';
import logo from '../../images/logo.svg';
import iconFacebook from '../../images/icon-facebook.svg';
import iconTwitter from '../../images/icon-twitter.svg';
import iconPinterest from '../../images/icon-pinterest.svg';
import iconInstagram from '../../images/icon-instagram.svg';
import './footer-style-mobile.css';
import './footer-style-desktop.css';

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={ logo } alt="logo footer"/>
        <nav className="menu-footer">
          <ul>
            <li>About <span></span></li>
            <li>Careers <span></span></li>
            <li>Events <span></span></li>
            <li>Products <span></span></li>
            <li>Support <span></span></li>
          </ul>
        </nav>
      </div>

      <div className="social-media-all-rights">
        <div className="social-media">
          <img src={ iconFacebook } alt="social media facebook" />
          <img src={ iconTwitter } alt="social media tuitter" />
          <img src={ iconPinterest} alt="social media pinterest" />
          <img src={ iconInstagram } alt="social media instagram" />
        </div>

        <div className="all-rights-reserved">© 2021 Loopstudios. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default Footer;