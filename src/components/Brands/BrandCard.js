import React from 'react';
import './brand.css'; // Import the CSS for the card

export default function BrandCard({ image, title, disc }) {
  return (
    <div className="brand-card">
      <img src={image} alt={title} className="brand-image" />
      <h3 className="brand-title">{title}</h3>
      <p className="brand-disc">{disc}</p>
    </div>
  );
}
