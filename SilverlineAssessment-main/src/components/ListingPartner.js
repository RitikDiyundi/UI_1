import React from 'react'
import CoinHunter from "./assets/silverlinepartners/coinhunter.svg"
import Coinalpha from "./assets/silverlinepartners/coinalpha.svg"
import cointoplist from './assets/silverlinepartners/cointoplist.svg';
import watcherGuru from './assets/silverlinepartners/watcherGuru.svg';
import cntoken from './assets/silverlinepartners/cntoken.svg';
import coinxhigh from './assets/silverlinepartners/coinxhigh.svg';
import freshcoin from './assets/silverlinepartners/freshcoin.svg';
import cryptach from './assets/silverlinepartners/cryptach.svg';
import coinmoonhunt from './assets/silverlinepartners/coinmoonhunt.svg';
import gemhunters from './assets/silverlinepartners/gemhunters.svg';
import coinvote from './assets/silverlinepartners/coinvote.svg';
import coinsniper from './assets/silverlinepartners/coinsniper.svg';
import coinsGod from './assets/silverlinepartners/coinsGod.svg';
import coincatapult from './assets/silverlinepartners/coincatapult.svg';
import gemfinder from './assets/silverlinepartners/gemfinder.svg';
import dappradar from './assets/silverlinepartners/dappradar.svg';
import mathwallet from './assets/silverlinepartners/mathwallet.svg';
import "./styles/listpartner.css";

const data = [
  { image: CoinHunter , name: 'COIN HUNTER' },
  { image: Coinalpha , name: 'COIN ALPHA' },
  { image: cointoplist , name: 'COIN TOP LIST' },
  { image: watcherGuru , name: 'WATHER GURU' },
  { image: cntoken , name: 'CN TOKEN' },
  { image: coinxhigh , name: 'COIN X HIGH' },
  { image: freshcoin , name: 'FRESH COIN' },
  { image: cryptach , name: 'CRYPTACH' },
  { image: coinmoonhunt , name: 'COINMOONHUNT' },
  { image: gemhunters , name: 'GEM HUNTER' },
  { image: coinvote , name: 'COIN VOTE' },
  { image: coinsniper , name: 'COIN SNIPER' },
  { image: coinsGod , name: 'COINS GOD' },
  { image: coincatapult , name: 'COIN CATAPULT' },
  { image: gemfinder , name: 'GEM FINDER' },
  { image: dappradar , name: 'DAPP RADAR' },
  { image: mathwallet , name: 'MATH WALLET' },
];
function ListingPartner() {
  return (
    <div className="lp__container">
      <h1 className="lp__heading">SILVERLINE LISTING PARTNERS</h1>
      <div className="lp__content__container">
        {data.map((i, ind) => (
          <div key={ind} className="lp__card">
            <img src={i.image} alt={i.name} />
            <p>{i.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


export default ListingPartner