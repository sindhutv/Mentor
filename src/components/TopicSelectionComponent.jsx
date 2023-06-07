import React, { useState } from 'react';
import './LoginPage.css';

const TopicSelectionComponent = () => {
  const [checkedTopics, setCheckedTopics] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setCheckedTopics([...checkedTopics, value]);
    } else {
      setCheckedTopics(checkedTopics.filter((topic) => topic !== value));
    }
  };


  return (
    <div className="topic-selection-box">
      <h2>Do you have expertise in functional areas?</h2>
      <div>
        <label>
          <input
            type="checkbox"
            value="Marketing"
            checked={checkedTopics.includes('Marketing')}
            onChange={handleCheckboxChange}
          />
          Marketing
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            value="Finance"
            checked={checkedTopics.includes('Finance')}
            onChange={handleCheckboxChange}
          />
          Finance
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            value="HR"
            checked={checkedTopics.includes('HR')}
            onChange={handleCheckboxChange}
          />
          HR
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            value="Logistics"
            checked={checkedTopics.includes('Logistics')}
            onChange={handleCheckboxChange}
          />
          Logistics
        </label>
      </div>
    </div>
  );
};

export default TopicSelectionComponent;
