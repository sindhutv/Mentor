import React, { useState } from 'react';
import './LoginPage.css';

const CheckboxComponent = () => {
  const [checkedItems, setCheckedItems] = useState({});

  const handleChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
  };

  const handleContinue = () => {
    // Perform action with the selected checkboxes
    console.log(checkedItems);
    setCheckedItems({});
  };

  return (
    <div className="checkbox-box">
      <h2>Which industry do you have expertise in?</h2>
      <div>
        <label>
          <input
            type="checkbox"
            name="checkbox1"
            checked={checkedItems['checkbox1'] || false}
            onChange={handleChange}
          />
          Finance
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="checkbox2"
            checked={checkedItems['checkbox2'] || false}
            onChange={handleChange}
          />
          Retail
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="checkbox3"
            checked={checkedItems['checkbox3'] || false}
            onChange={handleChange}
          />
          E-Commerce
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="checkbox4"
            checked={checkedItems['checkbox4'] || false}
            onChange={handleChange}
          />
          Manufacturing
        </label>
      </div>
      <button onClick={handleContinue}>Continue</button>
    </div>
  );
};

export default CheckboxComponent;
