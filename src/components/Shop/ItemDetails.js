import React, { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Data from './Data';
import { useCart } from './Cartcontext'; // Use the hook to access the cart context
import './itemdetails.css';
import SuccessBox from '../Successbox/Sucsess'; // Ensure this path is correct

export default function ItemDetails() {
  const { id } = useParams(); // Get the item ID from the URL
  const item = Data[id]; // Fetch the relevant item using the ID
  const { addToCart } = useCart(); // Access cart context using the hook
  const [quantity, setQuantity] = useState(1); // State for item quantity
  const [successMessage, setSuccessMessage] = useState(''); // State for success message
  const navigate = useNavigate(); // To navigate back to the shop

  // Function to handle adding the item to the cart
  const handleAddToCart = () => {
    addToCart({ id: item.id, title: item.title, price: item.price, image: item.img }, quantity); // Ensure item.id is used
    setSuccessMessage(`${item.title} has been added to your cart!`);
  };

  // Function to continue shopping
  const handleContinueShopping = () => {
    setSuccessMessage(''); // Clear the success message
    navigate('/shop'); // Navigate back to the shop
  };

  // Function to close the success box
  const handleCloseSuccessBox = () => {
    setSuccessMessage(''); // Clear the success message
  };

  return (
    <div className="item-details-container">
      {/* Left section for image and item info */}
      <div className="item-left">
        <img src={item.img} alt={item.title} className="item-img" />
        <div className="item-info">
          <h1>{item.title}</h1>
          <h2>{item.price}</h2>
          <p>
            Color: <span style={{ color: item.color === 'white' ? 'gray' : item.color, fontWeight: 'bold' }}>{item.color}</span>
          </p>
        </div>
      </div>

      {/* Right section for description, reviews, and cart functionality */}
      <div className="item-right">
        <div className="description">Description</div>
        <p className="paragraph">{item.description}</p>
        <p className="client-rate">Client Rating: {item.clientRate}</p>
        <p className="reviews">Reviews: {item.reviews}</p>

        {/* Quantity input and Add to Cart button */}
        <div>
          <label htmlFor="quantity">Quantity: </label>
          <input
            type="number"
            id="quantity"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value) || 1)} // Ensure a fallback value
          />
          <button 
            onClick={handleAddToCart} 
            style={{ marginLeft: '10px', backgroundColor: 'var(--alt)' }} // Use proper inline style
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Success message modal */}
      {successMessage && (
        <SuccessBox 
          message={successMessage} 
          onContinue={handleContinueShopping} 
          onClose={handleCloseSuccessBox} // Pass the close function
        />
      )}
    </div>
  );
}
