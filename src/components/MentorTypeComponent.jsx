import React, { useState } from 'react';
import './LoginPage.css';

const MentorTypeComponent = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedOptions([...selectedOptions, value]);
    } else {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    }
  };

  const handleContinueClick = () => {
    // Do something with the selected options
    console.log('Selected options:', selectedOptions);
    setSelectedOptions([]);
  };

  return (
    <div className="mentor-type-box">
      <h2>What types of mentees do you want to mentor</h2>
      <div>
        <label>
          <input
            type="checkbox"
            value="Freshers"
            checked={selectedOptions.includes('Freshers')}
            onChange={handleCheckboxChange}
          />
          Mentor Freshers
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            value="Experienced"
            checked={selectedOptions.includes('Experienced')}
            onChange={handleCheckboxChange}
          />
          Mentor Experienced Hires
        </label>
      </div>
      <button onClick={handleContinueClick}>Continue</button>
    </div>
  );
};

export default MentorTypeComponent;
