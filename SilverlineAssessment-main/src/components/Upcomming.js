import React from 'react'
import "./styles/upcomming.css";
import Butterfly from "./assets/butterfly.png"
import Sparc from "./assets/sparc.png"
import ButterflyWB from "./assets/butterflywb.png"

function Upcomming() {
  return (
    <div className="upcomming__container">
      <h1 style={{ display: 'flex', justifyContent: 'center', margin: '5%' }}>
        Launching Soon
      </h1>
      <div className="upcomming__content__container">
        <div className="gradient-border" id="box">
          <img
            src={ButterflyWB}
            alt="SILVERLINESWAP-DEX"
            style={{ width: '180px' }}
          />
          <p>SILVERLINE TOKEN</p>
          <p>Landing soon...</p>
        </div>
        <div className="gradient-border" id="box">
          <img src={Sparc} alt="Sparc" />
          <p>SPARC</p>
          <p>Landing soon...</p>
        </div>
        <div className="gradient-border" id="box">
          <img
            src={Butterfly}
            alt="SILVERLINE TOKEN"
            style={{ marginTop: '30px' }}
          />
          <p>SILVERLINESWAP-DEX</p>
          <p>Landing soon...</p>
        </div>
      </div>
    </div>
  );
}

export default Upcomming