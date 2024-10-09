import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Data from './Data';
import { useCart } from './Cartcontext';
import SuccessBox from '../Successbox/Detailssuccess'; // Import SuccessBox
import './itemdetails.css';

export default function ItemDetails() {
    const { id } = useParams(); // Get the ID from URL params
    const item = Data.find((product) => product.id === parseInt(id)); // Ensure id comparison is correct
    const { addToCart } = useCart(); // Access cart context
    const [quantity, setQuantity] = useState(1); // Default quantity is 1
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleAddToCart = () => {
        if (item) {
            const quantityNumber = parseInt(quantity);
            if (quantityNumber > 0) {
                // Add item to the cart with the specified quantity
                addToCart({
                    id: item.id,
                    title: item.title,
                    price: item.price,
                    color: item.color,
                    description: item.description,
                    clientRate: item.clientRate,
                    reviews: item.reviews,
                    img: item.img,
                    quantity: quantityNumber, // Use the quantity from the input
                });
                setSuccessMessage(`${item.title} added to cart with quantity: ${quantityNumber}`); // Set the success message
            } else {
                setSuccessMessage('Please enter a valid quantity.');
            }
        }
    };

    const handleCloseSuccessBox = () => {
        setSuccessMessage(''); // Close the success box
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
                        onChange={(e) => setQuantity(e.target.value)}
                        onBlur={(e) => {
                            if (!e.target.value || isNaN(e.target.value) || parseInt(e.target.value) < 1) {
                                setQuantity(1); // Ensure valid quantity
                            }
                        }}
                    />
                    <button style={{ marginLeft: '10px', backgroundColor: 'var(--alt)' }} onClick={handleAddToCart}>
                        Add to Cart
                    </button>
                </div>
            </div>

            {/* Render SuccessBox if there's a success message */}
            {successMessage && (
                <SuccessBox message={successMessage} onClose={handleCloseSuccessBox} />
            )}
        </div>
    );
}
