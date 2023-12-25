import React from 'react'
import './styles/header.css'
import logo from '../logo.svg';
import { Link } from 'react-scroll';

function Header({ handleC, DBalance }) {
  return (
    <header className="h__bg">
      <div>
        <img src={logo} className="app__logo" alt="logo" />
      </div>
      <div className="h__content">
        <ul className="no__bullets">
          <li>
            {' '}
            <Link spy={true} smooth={true} to="header">
              Home
            </Link>
          </li>
          <li>
            <Link class spy={true} smooth={true} to="about">
              About
            </Link>
          </li>
          <li>
            <Link class spy={true} smooth={true} to="upcomming">
              <pre>Launching soon</pre>
            </Link>
          </li>
          <li>
            <Link class spy={true} smooth={true} to="features">
              Features
            </Link>
          </li>
          <li>
            <Link class spy={true} smooth={true} to="roadmap">
              RoadMap
            </Link>
          </li>
          <li>
            <Link class spy={true} smooth={true} to="tokenomics">
              Tokenomics
            </Link>
          </li>
          <li>
            <Link class spy={true} smooth={true} to="team">
              Team
            </Link>
          </li>
          <li>
            <Link class spy={true} smooth={true} to="partners">
              Partners
            </Link>
          </li>
          <li>
            <Link class spy={true} smooth={true} to="faq">
              FAQ
            </Link>
          </li>
          <li className="h__button" onClick={handleC}>
            {DBalance != null ? `BAL- ${DBalance}` : 'Connect'}
          </li>
        </ul>
        {/* <button className="h__button">Connect</button> */}
      </div>
    </header>
  );
}

export default Header