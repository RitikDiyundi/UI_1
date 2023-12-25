import './App.css';
import About from './components/About';
import Features from './components/Features';
import Header from './components/Header';
import Hero from './components/Hero';
import Roadmap from './components/Roadmap';
import Upcomming from './components/Upcomming';
import Team from './components/Team';
import Partners from './components/Partners';
import ListingPartner from './components/ListingPartner';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import React, { useState } from 'react';
import Tokenomics from './components/Tokenomics';
import { ethers } from 'ethers';


function App() {
  const [data, setdata] = useState({
    address: '',
    Balance: null,
  });

  const handleClick = () =>{
    if (window.ethereum) {
      window.ethereum
        .request({ method: 'eth_requestAccounts' })
        .then((res) => accountChangeHandler(res[0]));
    } else {
      alert('Please install metamask extension!');
    }
  }

  const getbalance = (address) => {
    window.ethereum
      .request({
        method: 'eth_getBalance',
        params: [address, 'latest'],
      })
      .then((balance) => {
        setdata({
          Balance: ethers.utils.formatEther(balance),
        });
      });
  };

  const accountChangeHandler = (account) => {
    setdata({
      address: account,
    });
    getbalance(account);
  };

  return (
    <div className="App">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}

      <Header handleC={handleClick} DBalance={data.Balance} />
      <div id='header'>
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="upcomming">
        <Upcomming />
      </div>
      <div id='features'>
        <Features />
      </div>
      <div id='roadmap'>
        <Roadmap />
      </div>
      <div id='tokenomics'>
        <Tokenomics />
      </div>
      {/* <Token /> */}
      <div id='team'>
        <Team />
      </div>
      <div id='partners'>
        <Partners />
      </div>
      <div id='listpartner'>
        <ListingPartner />
      </div>
      <div id='faq'>
      <FAQ />
      </div>
      <Footer />
    </div>
  );
}

export default App;
