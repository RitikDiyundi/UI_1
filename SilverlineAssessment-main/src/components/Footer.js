import React from 'react'
import logo from"../logo.svg"
import "./styles/footer.css"

function Footer() {
  return (
    <div className="footer__container">
      <div className='footer__start'>
        <div>
          <img src={logo} />
        </div>
        <div></div>
        <div></div>
      </div>
      <div className="footer__middle">
        <h1>OUR COMPANY</h1>
        <div className="footer__middle__content">
          <div className="footer__inside__middle">
            <p>HOME</p>
            <p>ABOUT</p>
            <p>LAUNCHING SOON</p>
            <p>FEATURES</p>
            <p>ROADMAP</p>
          </div>
          <div className="footer__inside__middle">
            <p>TOKENOMICS</p>
            <p>TEAM</p>
            <p>PARTNERS</p>
            <p>FAQ</p>
          </div>
        </div>
      </div>
      <div className='footer__right'>
        <p>
          Embark with us on a journey to the crypto universe To get started,
          share your email ID.
        </p>
        <div className='footer__right__inside'>
          <input type="text" placeholder='ENTER YOUR MAIL ID'/>
          <button>SEND</button>
        </div>
      </div>
    </div>
  );
}

export default Footer