import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({ id, title, price, image, handleAddToCart }) {
  return (
    <div className="item">
      <img src={image} alt={title} />

      {/* Overlay for Quick View link */}
      <div className="overlay">
        <Link to={`/shop/${id}`} className="quick-view-link">
          Quick View
        </Link>
      </div>

      <div className="disc">
        <h2>{title}</h2>
        <h3>{price}</h3>
      </div>

      <button
        className="add"
        onClick={() => handleAddToCart({ id, title, price, image })}
        style={{ marginTop: '20px', cursor: 'pointer' }}
      >
        Add to Cart+
      </button>
    </div>
  );
}
