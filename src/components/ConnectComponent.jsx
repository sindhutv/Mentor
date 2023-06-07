import React, { useState } from 'react';
import './LoginPage.css';


const ConnectComponent = () => {
  const [link, setLink] = useState('');

  const handleLinkChange = (event) => {
    setLink(event.target.value);
  };

  const handleConnect = () => {
    window.open(link, '_blank');
    setLink('');
  };

  return (
    <div className="connect-box">
      <h2>Connect your LinkedIn Profile</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter your LinkedIn profile address"
          value={link}
          onChange={handleLinkChange}
        />
        </div><br></br>
        <button onClick={handleConnect}>Connect</button>
    </div>
  );
};

export default ConnectComponent;
