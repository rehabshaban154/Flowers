// src/components/Shop/Shop.js
import React, { useState } from 'react';
import Card from './Card';
import '../../components/Shop/shop.css';
import Data from './Data';
import { useCart } from '../Shop/Cartcontext';
import SuccessBox from '../Successbox/Sucsess';
import { Link } from 'react-router-dom';

export default function Shop() {
  const { addToCart, cart } = useCart(); // Get cart and addToCart from context
  const [searchColor, setSearchColor] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Filter items based on search input
  const filteredItems = Data.filter((item) =>
    item.color.toLowerCase().includes(searchColor.toLowerCase())
  );

  // Sort items based on selected price order
  const sortedItems = filteredItems.sort((a, b) => {
    if (sortOrder === 'lowToHigh') {
      return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
    } else if (sortOrder === 'highToLow') {
      return parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', ''));
    } else {
      return 0; // No sorting applied
    }
  });

  // Handle adding an item to the cart and increment quantity if item already exists
  const handleAddToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      // If item exists, increment its quantity
      addToCart({ ...item, quantity: existingItem.quantity + 1 });
    } else {
      // Add item to cart with an initial quantity of 1
      addToCart({ ...item, quantity: 1 });
    }
    setSuccessMessage(`${item.title} has been added to your cart!`);
    setShowModal(true); // Show success modal
  };

  // Close modal
  const handleCloseModal = () => {
    setShowModal(false); // Hide success modal
  };

  return (
    <div className='shop'>
      {/* Title */}
      <div className="title flex">
        <h2 className='shop-heading'>Shop</h2>
      </div>

      {/* Search by color */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <input
          type="text"
          placeholder="Search by color"
          value={searchColor}
          onChange={(e) => setSearchColor(e.target.value)}
          style={{ padding: '10px', borderRadius: '10px', width: '300px' }}
        />
      </div>

      {/* Sort by price */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <label htmlFor="sortOrder" className="sort">Sort by price: </label>
        <select
          id="sortOrder"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          style={{ padding: '10px', borderRadius: '10px', marginLeft: '12px' }}
        >
          <option value="">Select</option>
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
        </select>
      </div>

      {/* Item Grid */}
      <div className="container grid" style={{ marginTop: '40px' }}>
        {sortedItems.length === 0 ? (
          <p>No items found for "{searchColor}"</p>
        ) : (
          sortedItems.map((item, index) => (
            <Card
              key={index}
              id={item.id}
              img={item.img}
              title={item.title}
              price={item.price}
              handleAddToCart={() => handleAddToCart(item)}
            />
          ))
        )}
        <Link to='/occasion' className='choose'>OR Choose Your <br/> Specific Occasion 🔎</Link>
      </div>

      {/* Success Modal */}
      {showModal && <SuccessBox message={successMessage} onClose={handleCloseModal} />}
    </div>
  );
}
