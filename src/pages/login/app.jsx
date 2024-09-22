import React, { useState } from 'react';
import './App.css'; 

export default function App() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div>
      <button className="fpas-btn" onClick={handleOpenPopup}>
        Forgot Password
      </button>

      <div
        className="fpas-popu-bo"
        style={{
          transform: isPopupVisible ? 'scale(1)' : 'scale(0)',
          transition: 'transform 0.3s ease',
        }}
      >
        <button className="close-btn" onClick={handleClosePopup}>
          Close
        </button>
        <p>Reset your password here!</p>
      </div>
    </div>
  );
}
