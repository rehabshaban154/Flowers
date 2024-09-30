// src/components/Cart.js
import React from 'react';
import { useCart } from './Cartcontext';
import './cart.css'; // Import the CSS file for styling

export default function Cart() {
  const { cart, clearCart } = useCart();

  return (
    <div className="cart-container">
      <h2 className='shop-heading'>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="empty-cart" style={{ fontFamily: 'cursive' }}>
          Your cart is empty!
        </p>
      ) : (
        <div>
          <ul className="cart-list" style={{ marginTop: '80px' }}>
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.img} alt={item.title} className="item-image" />
                <div className="item-details">
                  <h3 className="item-title">{item.title}</h3>
                  <p className="item-price">{item.price}</p>
                  <p className="item-quantity">Quantity: {item.quantity}</p>
                </div>
              </li>
            ))}
          </ul>
          <button className="clear-cart" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
}
