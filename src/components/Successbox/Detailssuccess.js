// SuccessBox.js
import React from 'react';
import './detailssuccess.css';
import { useNavigate } from 'react-router-dom';

const Detailssuccess = ({ message, onClose }) => {
    const navigate = useNavigate(); // Use navigate to go to the cart

    const handleGoToCart = () => {
        navigate('/cart'); // Navigate to the cart
        onClose(); // Close the success box
    };

    return (
        <div className="success-box">
            <div className="success-message">
                <span style={{ maxWidth: '220px', 
        margin: 'auto',    
        color: 'black',    
        fontSize: '20px' }}>{message}</span>
                <button style={{backgroundColor:'red',color:'white'}} className="close-button" onClick={onClose}>×</button>
            </div>
            <button style={{backgroundColor:'var(--alt)'}} className="go-to-cart-button btn-primary" onClick={handleGoToCart}>
                Go to Cart
            </button>
        </div>
    );
};

export default Detailssuccess;
