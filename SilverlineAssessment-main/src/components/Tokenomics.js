import React from 'react'
import Tokenomics from "../components/assets/tokenomics.png"
import "./styles/tokenomics.css"

function Tokenomicsss() {
  return (
    <div className='tokenomics__container'>
      <h1 className='tokenomics__heading'>TOKENOMICS</h1>
      <div className='tokenomics__content__container'>
        <div>
          <p style={{ color: '#3CF3FF' }}>
            NAME :<span style={{ color: 'white' }}> SilverLine</span>
          </p>
          <p style={{ color: '#3CF3FF' }}>
            SYMBOL :<span style={{ color: 'white' }}> SLN</span>
          </p>
          <p style={{ color: '#3CF3FF' }}>
            TOKEN ADDRESS :<span style={{ color: 'white' }}> 0X3DHSTEJREYSUDCSUCYGEIUWY67WIDHJSSSWEYSYUI876</span>
          </p>
          <p style={{ color: '#3CF3FF' }}>
            BLOCKCHAIN :<span style={{ color: 'white' }}> BINANACE SMART CHAIN</span>
          </p>
          <p style={{ color: '#3CF3FF' }}>
            TYPE :<span style={{ color: 'white' }}> BEP-20</span>
          </p>
          <p style={{ color: '#3CF3FF' }}>
            TOKEN TOTAL SUPPLY :<span style={{ color: 'white' }}> 1,000,000,000,000</span>
          </p>
        </div>
        <div>
            <img src={Tokenomics} alt="tokenomics"/>
        </div>
      </div>
    </div>
  );
}

export default Tokenomicsss;