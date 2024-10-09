import React from 'react';
import { useCart } from './Cartcontext';
import './cart.css'; // Import the CSS file for styling

export default function Cart() {
  const { cart, clearCart, removeFromCart } = useCart();

  // Debugging: Log cart length and contents
  console.log('Cart length:', cart.length);
  console.log('Cart items:', cart);

  return (
    <div className="cart-container">
      <h2 className='shop-heading'>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="empty-cart" style={{ fontFamily: 'cursive' }}>
          Your cart is empty!
        </p>
      ) : (
        <div>
          <ul className="cart-list" style={{ marginTop: '40px' }}>
          {cart.map((item) => (
  <li key={item.id} className="cart-item">
    <img src={item.img} alt={item.title} className="item-image" />
    <div className="item-details">
      <h3 className="item-title">{item.title}</h3>
      <p className="item-price">Price: {(item.price)}</p> {/* Fix decimal points */}
      <p className="item-quantity">Quantity: {item.quantity || 0}</p> {/* Ensure quantity is displayed */}
    </div>
    <button style={{backgroundColor:'red',color:'white'}} className="remove-item" onClick={() => removeFromCart(item.id)}>
      Remove
    </button>
  </li>
))}



          </ul>
          <div className="cart-summary">
            <button className="clear-cart" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
