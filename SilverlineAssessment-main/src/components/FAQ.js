import React from 'react'
import "./styles/faq.css"

function FAQ() {
  return (
    <div className="faq__container">
      <h1 className="faq__heading">FAQ</h1>
      <div className="faq__content__container">
        <div className="faq__field">
          <p>What is SLN stack ?</p>
          <p className="faq__button">
            <b>+</b>
          </p>
        </div>
        <div className="faq__field">
          <p>What is the total supply of sLN stake ?</p>
          <p className="faq__button">
            <b>+</b>
          </p>
        </div>
        <div className="faq__field">
          <p>how does the auto staking feature work?</p>
          <p className="faq__button">
            <b>+</b>
          </p>
        </div>
      </div>
    </div>
  );
}

export default FAQ