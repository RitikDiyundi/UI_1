import React from 'react'
import BluePlanet from "./assets/bluishplanet.svg"
import MaroonPlanet from "./assets/maroonPlanet.svg"
import YellowPlanet from "./assets/yellowplanet.svg"
import RomaticMoon from "./assets/romanticMoon.svg"
import MaroonplanetGradient from "./assets/maronPlanetGradient.svg"
import "./styles/roadmap.css";

const data = {
  phase1: [
    'Website Launch - Completed',
    'Community Build Up - Recurring',
    'Community Competitions - Recurring',
    'Team Enhancement - Recurring',
    'Dashboard Development - Completed',
    'Smart Contract Audit (Coinscope) - January 2022',
  ],
  phase2: [
    'Smart Contract Audit – March 2022',
    'Team KYC – June 2022',
    'Token Presale (PinkSale) – july 2022',
    'Private Sale – July 2022',
    'Distributed Denial Of Service (DDOS)Integration – July',
    'CoinMarketCap & CoinGecko Listing – August 2022',
    'Smart Contract Audit for dEX (Techrate) - August 2022',
    '2022 Insurance For SLN Token -August 2022',
    'Token Launch In Pancakeswap – August 2022',
    'SilverLine Token Staking – August 2022',
    'SilverLine Token Farming –August 2022',
    'Decentralized Exchange Platform– August 2022',
    'Stake Silverline Token To Earn Alt-Coins –August 2022',
  ],
  phase3: [
    'Influencing Marketing - Recurring',
    'Ecosystem Build Up - Ongaoing',
  ],
  phase4: [
    'Partnerships - Upcoming',
    'SilverLine Merchandise - Upcoming',
    'SilverPay Crypto Currency Payment Wallet - Upcoming',
    'Crypto Loans – Upcoming',
    'Crypto Score - Upcoming',
  ],
  phase5: [
    "Nobu Limited Edition NFT Collection - Upcoming",
    "NFT MarketPlace – Upcoming",
    "Defi Games - Upcoming"
  ],
};
function Roadmap() {
  return (
    <div className="raodmap__container">
      <h1 className="roadmap__heading">Roadmap</h1>
      <div className="roadmap__content__container">
        <Child
          key={1}
          image={BluePlanet}
          title="Phase 1"
          description={data.phase1}
        />
        <Child
          key={2}
          image={MaroonPlanet}
          title="Phase 2"
          description={data.phase2}
          reverse={true}
        />
        <Child
          key={3}
          image={YellowPlanet}
          title="Phase 3"
          description={data.phase3}
        />
        <Child
          key={3}
          image={MaroonplanetGradient}
          title="Phase 4"
          description={data.phase4}
          reverse={true}
        />
        <Child
          key={3}
          image={RomaticMoon}
          title="Phase 5"
          description={data.phase5}
        />
      </div>
    </div>
  );
}

function Child({image,description,title,reverse=false}){
    return (
      <div className={reverse ? 'roadmap__card__reverse' : 'roadmap__card'}>
        <img
          className={`${title === 'Phase 3' && 'image__size'}`}
          src={image}
          alt={`${Math.random().toString()}`}
        />
        <div className="roadmap__card__right">
          <h1 style={{"textAlign":"center","margin":"auto auto 4% auto"}}>{title}</h1>

          <div className="roadmap__card__right__content">
            <ul>
              {description.map((i, ind) => {
                return (
                  <div key={ind}>
                    <li>{i}</li>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
}

export default Roadmap