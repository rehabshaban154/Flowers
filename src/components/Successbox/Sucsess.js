import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Sucsess.css'; // Ensure this imports your CSS file

const SuccessBox = ({ message, productTitle, onClose }) => {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate('/shop'); // Navigate to the shopping page
    onClose(); // Close the modal
  };

  const handleGoToCart = () => {
    navigate('/cart'); // Navigate to the cart page
    onClose(); // Close the modal
  };

  return (
    message && (
      <div className="success-modal">
        <div className="modal-content">
          <div className="modal-header">
            {/* <h4>{productTitle} has been added to your cart!</h4> */}
            <button className="close-icon" onClick={onClose}>
              &times; {/* "X" symbol */}
            </button>
          </div>
          <p style={{    marginTop:' 20px',fontWeight:'bold'}}>{message}</p>
          <div className="btn-container">
            <button className="btn btn-primary continue-btn" onClick={handleContinueShopping}>
              Continue Shopping
            </button>
            <button className="btn btn-success go-to-cart-btn" onClick={handleGoToCart}>
              Go to Cart
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default SuccessBox;
