import React, { useEffect, useState } from 'react'
import "./styles/hero.css"
import temp from "./assets/bg/six.svg"
import temp2 from "./assets/bg/seven.svg"

function Hero() {

  return (
    <div className='hero__container'>
      <div className='left__side'>
        <h1>Get In Line For SilverLine</h1>
        <p>
          At the launch of the presale, SilverLine Token will be landed on the
          Binance Smart Chain planet. To get to Milkyway, purchase the
          SilverLine Token at just $0.0013.
        </p>
        <button className='hero__button'>JOIN OUR COMMUNITY &rarr;</button>
      </div>
      <RightSide/>
    </div>
  );
}

function RightSide(){
   const [hour, setHour] = useState(12);
   const [min, setmin] = useState(13);
   const [sec, setsec] = useState(54);

   useEffect(() => {
     setTimeout(function () {
       setsec(sec >= 60 ? 0 : sec + 1);
     }, 1000);
   }, [setsec,sec]);
   

    return (
      <div className="right__side">
        <div>
          <p>pre-sale starts in</p><br/>
          <div className="timer">
            <HighLighter key={1} number={30} text="Days" />
            <HighLighter key={2} number={hour} text="Hours" />
            <HighLighter key={3} number={min} text="Minutes" />
            <HighLighter key={4} number={sec} text="Seconds" />
          </div>
          <Convertor/>
        </div>
      </div>
    );
}

function HighLighter({number,text}){
    return(
        <div>
            <span className='hero__highlighter'>{number}</span>
            <p className='hero__highlighter__description'>{text}</p>
        </div>
    )
}

function Convertor(){
    const [getInput, setGetInput] = useState(0.0)
    const [responseInput, setresponseInput] = useState(0.0);

    return (
      <div className="input__container">
        <div className="hero__input__group">
          <input
            type="number"
            value={getInput}
            onChange={(e) => setGetInput(e.target.value)}
          />
          <div className="texting">
            <img
              src={temp}
              alt="sample"
              style={{
                height: '25px',
                width: '25px',
                marginLeft: '10px',
                marginTop: '3px',
              }}
            />
            <p style={{ marginTop: '10px', padding: '0px 5px 0px 0px' }}>
              USDT
            </p>
          </div>
        </div>
        <div className="hero__input__group">
          <input
            type="number"
            value={responseInput}
            onChange={(e) => setresponseInput(e.target.value)}
          />
          <div className="texting">
            <img
              src={temp2}
              alt="sample"
              style={{
                height: '25px',
                width: '25px',
                marginLeft: '10px',
                marginTop: '3px',
              }}
            />
            <p style={{ marginTop: '10px', padding: '0px 5px 0px 10px' }}>SLN</p>
          </div>
        </div>
        <button className="hero__input__button">BUY SLN</button>
      </div>
    );
}

export default Hero