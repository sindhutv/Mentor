import React, { useState } from 'react';

const RadioButtonComponent = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (event) => {
    const optionValue = event.target.value;
    if (selectedOptions.includes(optionValue)) {
      setSelectedOptions(selectedOptions.filter((option) => option !== optionValue));
    } else {
      setSelectedOptions([...selectedOptions, optionValue]);
    }
  };

  return (
    <div className="select-button-box">
      <h2>Pick the area you want to mentor in</h2>
      <div className="option-container">
        <label>
          <input
            type="checkbox"
            value="Data Science"
            checked={selectedOptions.includes('Data Science')}
            onChange={handleOptionChange}
          />
          Data Science
        </label><br></br>
        <label>
          <input
            type="checkbox"
            value="Data Engineering"
            checked={selectedOptions.includes('Data Engineering')}
            onChange={handleOptionChange}
          />
          Data Engineering
        </label><br></br>
        <label>
          <input
            type="checkbox"
            value="Product Management"
            checked={selectedOptions.includes('Product Management')}
            onChange={handleOptionChange}
          />
          Product Management
        </label>
      </div>
    </div>
  );
};

export default RadioButtonComponent;
