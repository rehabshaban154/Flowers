import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({ id, title, price, image, handleQuickView, handleAddToCart }) {
  return (
    <div className="item">
      <img src={image} alt={title} />
      <div className="overlay">
        <button onClick={handleQuickView}>Quick View</button>  {/* Trigger the Quick View */}
      </div>
      <div className="disc">
        <h2>{title}</h2>
        <h3>{price}</h3>
      </div>
      <button className='add' onClick={() => handleAddToCart({ id, title, price, image })} style={{ marginTop: '20px', cursor: 'pointer' }}>
        Add to Cart+
      </button>
    </div>
  );
}
