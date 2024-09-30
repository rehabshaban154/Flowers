import React from 'react';
import './modal.css';

export default function Modal({ isOpen, onClose, item }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button className="close-btn close" onClick={onClose}>X</button>
        <img src={item.image} alt={item.title} className="modal-image" />
        <h2 style={{color:'var(--alt)'}}>{item.title}</h2>
        <h3 style={{color:'#FDD835'}}>{item.price}</h3>
        <p>{item.description}</p> {/* Assuming each item has a description */}
      </div>
    </div>
  );
}
