import React from 'react'
import Partner from "./assets/partners/binance.svg"
import Audit from "./assets/partners/auditby.svg"
import TeamKYC from "./assets/partners/teamkyc.svg"
import "./styles/partner.css"

function Partners() {
  return (
    <div className="partner__container">
      <h1 className="partner__heading">PARTNERS</h1>
      <p className="partner__description">
        Creating the future with the best of the best
      </p>
      <div className="partner__content__container">
        <div className="partner__card">
          <h3>PARTNERS</h3>
          <img src={Partner} alt="Partner" />
        </div>
        <div className="partner__card">
          <h3>AUDIT BY</h3>
          <img src={Audit} alt="Audit team" />
        </div>
        <div className="partner__card">
          <h3>TEAM KYC</h3>
          <img src={TeamKYC} alt="kYC team" />
        </div>
      </div>
    </div>
  );
}

export default Partners