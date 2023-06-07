import React from 'react';
import './LoginPage.css';

const ProfileComponent = () => {
    return (
        <div className="profile-box" >
            <div className="profile-heading" >
                <button className="profile-heading-item">Profile</button>
                <button className="profile-heading-item">Types of Mentoring</button>
                <button className="profile-heading-item">Area of Expertise</button>
                <button className="profile-heading-item">Availability</button>
            </div>

            <div className="photo-section">
                <div className="profile-circle">
                    {/* User photo goes here */}
                </div>
                <div className="profile-info">
                    <h3>Rakshitha S</h3>
                    <div className="profile-links">
                        <a href="https://www.linkedin.com/in/rakshitha-s-ba7466212/" target="_blank" rel="noopener noreferrer">Refer LinkedIn Profile</a>
                    </div>
                </div>
            </div>

            <div className="profile-summary-section">
                <h4>Profile Summary</h4>
                <div className="Profile-Rectangle">{}</div>
            </div>

            <div className="employment-summary-section">
                <h4>Employment Summary</h4>
                <input type="text" className="input-box" />
                <input type="text" className="input-box" />
            </div>

            <div className="education-section">
                <h4>Education</h4>
                <input type="text" className="input-box" />
            </div>

            <div className="continue-section">
                <button>Continue</button>
            </div>
        </div>
    );
}

export default ProfileComponent;
