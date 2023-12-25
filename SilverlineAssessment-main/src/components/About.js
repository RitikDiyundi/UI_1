import React from 'react'
import Tablet from "../components/assets/tablet.png";
import "./styles/about.css";

function About() {
  return (
    <>
      <h1 className="about__heading">About Silverline</h1>
      <div className="about__container">
        <div className="about__container__left">
          <p>
            SilverlineSwap is a decentralized exchange that provides the
            smoothest peer-to-peer trading experience and users can trade any
            token on the Binance Smart Chain network using SilverLineSwap. We
            have the distinctive feature that nobody else has the GUN to protect
            your crypto identity & Nobu an AI personal assistant, who will walk
            you through your cryptocurrency adventure. and SPARC is the first
            prediction platform in the world where players who didn’t win are
            rewarded. We are known for the best use cases and seek to solve
            Sustainable Development Goals.
          </p>
        </div>
        <div className="about__container__right">
          <img src={Tablet} alt="View video" />
        </div>
      </div>
    </>
  );
}

export default About