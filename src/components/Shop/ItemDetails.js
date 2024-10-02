import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Data from './Data'; // Ensure the path to Data is correct
import { useCart } from './Cartcontext'; // Your cart context hook
import SuccessBox from '../Successbox/Sucsess'; // Ensure the path is correct
import './itemdetails.css';

export default function ItemDetails() {
    const { id } = useParams(); // Get the ID from URL params
    console.log("Fetched ID from URL:", id); // Debugging

    const item = Data.find((product) => product.id === parseInt(id)); // Ensure id comparison is correct
    console.log("Item found:", item); // Debugging

    const { addToCart } = useCart(); // Access cart context
    const [quantity, setQuantity] = useState(1);
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleAddToCart = () => {
        if (item) {
            addToCart({ id: item.id, title: item.title, price: item.price, image: item.img }, quantity);
            setSuccessMessage(`${item.title} has been added to your cart!`);
        } else {
            setSuccessMessage('Item not found.'); // Display this if the item is not found
        }
    };

    const handleContinueShopping = () => {
        setSuccessMessage('');
        navigate('/shop');
    };

    const handleCloseSuccessBox = () => {
        setSuccessMessage('');
    };

    if (!item) {
        return <div className="error-message">Sorry, the item you are looking for is not available.</div>;
    }

    return (
        <div className="item-details-container">
            <div className="item-left">
                <img src={item.img} alt={item.title} className="item-img" />
                <div className="item-info">
                    <h1>{item.title}</h1>
                    <h2>{item.price}</h2>
                    <p>Color: <span style={{ color: item.color === 'white' ? 'gray' : item.color, fontWeight: 'bold' }}>{item.color}</span></p>
                </div>
            </div>

            <div className="item-right">
                <div className="description">Description</div>
                <p className="paragraph">{item.description}</p>
                <p className="client-rate">Client Rating: {item.clientRate}</p>
                <p className="reviews">Reviews: {item.reviews}</p>

                <div>
                    <label htmlFor="quantity">Quantity: </label>
                    <input
                        type="number"
                        id="quantity"
                        min="1"
                        value={quantity}
                        onChange={(e) => setQuantity(parseInt(e.target.value) || 1)} // Ensure a fallback value
                    />
                    <button onClick={handleAddToCart} style={{ marginLeft: '10px', backgroundColor: 'var(--alt)' }}>
                        Add to Cart
                    </button>
                </div>
            </div>

            {successMessage && (
                <SuccessBox 
                    message={successMessage} 
                    onContinue={handleContinueShopping} 
                    onClose={handleCloseSuccessBox}
                />
            )}
        </div>
    );
}
