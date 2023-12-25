import React from 'react'
import Gun from "./assets/gun.svg"
import Cryptoload from "./assets/cryptoloan.svg"
import Silverpay from "./assets/silverPay.svg"
import Nobu from "./assets/nobu.svg"
import "./styles/feature.css"

const data = [
  {
    image: Gun,
    title: 'Gun',
    description:
      'Global Unique Number, a global unique Identity that will protect you and your future.',
  },
  {
    image: Cryptoload,
    title: 'Crypto Loan',
    description:
      'A strategically flexible collateral free loan provided to you based on your crypto score.',
  },
  {
    image: Silverpay,
    title: 'Silver pay',
    description:
      'A space to enjoy your day-to-day shopping experience with cryptocurrency.',
  },
  {
    image: Nobu,
    title: 'Nobu',
    description:
      'An Artificial Intelligent personal assistant who will guide you through your crypto journey.',
  },
];

function Features() {
  return (
    <div className="feature__container">
      <h1 style={{"textAlign":"center","marginTop":"6%"}}>FEATURES</h1>
      <div className="feature__content__container">
        {data.map((i, ind) => (
          <div className="feature__card" key={ind} id={ind}>
            <img src={i.image} alt={i.title} />
            <h2>{i.title}</h2>
            <p>{i.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features