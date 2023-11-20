import React from 'react';
import Github from '../../assets/github.png';
import Instagram from '../../assets/instagram.png';
import linkedin from '../../assets/linkedin.png';
import logo from '../../assets/logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <div className='Footer-container'>
      <hr />
      <div className="footer">

        <div className="social-links">
        <img src={Github} alt="" />
        <img src={Instagram} alt="" />
        <img src={linkedin} alt="" />
        </div>
      </div>

      <div className="logo-f">
        <img src={logo} alt="" />
      </div>
      <div className="blur blur-footer"></div>
      <div className="blur blur-footer-2"></div>

    </div>
  )
}

export default Footer
