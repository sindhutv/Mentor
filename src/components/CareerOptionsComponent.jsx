import React from 'react';
import './LoginPage.css';

const CareerOptionsComponent = () => {
  return (
    <div className="career-options-wrapper">
      <div className="career-options-box">
        <h4>What types of 1:1 mentoring are you offering?</h4>
        <div className="details-container">
          <div className="button-container">
            <button className="career-option-button">Career Guidance</button>
            <button className="detail-time">45 min</button>
            <button className="detail-amount">Rs. 500</button>
          </div>

          <div className="button-container">
            <button className="career-option-button">Resume Review</button>
            <button className="detail-time">45 min</button>
            <button className="detail-amount">Rs. 500</button>
          </div>

          <div className="button-container">
            <button className="career-option-button">Mock Interview</button>
            <button className="detail-time">45 min</button>
            <button className="detail-amount">Rs. 600</button>
          </div>

          <div className="button-container">
            <button className="career-option-button">Technical Session</button>
            <button className="detail-time">45 min</button>
            <button className="detail-amount">Rs. 400</button>
          </div>

          <div className="button-container">
            <button className="career-option-button">Free Session</button>
            <button className="detail-time">20 min</button>
            <button className="detail-amount">Rs. 0.00</button>
          </div>
        </div>

        <div className="save-continue-container">
          <button className="save-continue-button">Save and Continue</button>
        </div>
      </div>
    </div>
  );
}

export default CareerOptionsComponent;