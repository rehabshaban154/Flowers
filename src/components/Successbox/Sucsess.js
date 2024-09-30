import React from 'react';
import './Sucsess.css'; // Ensure this imports your CSS file

const SuccessBox = ({ message, onClose }) => {
  return (
    message && (
      <div className="success-modal">
        <h4>{message}</h4>
        <div className="btn-container">
          <button className="continue-btn" onClick={onClose}>Continue Shopping</button>
          <button className="close-btn" onClick={onClose}>Close</button>
        </div>
      </div>
    )
  );
};

export default SuccessBox;
