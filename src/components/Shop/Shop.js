import React, { useState } from 'react';
import Card from './Card';
import '../../components/Shop/shop.css';
import Data from './Data';
import { useCart } from '../Shop/Cartcontext';
import SuccessBox from '../Successbox/Sucsess';
import { Link } from 'react-router-dom';

export default function Shop() {
  const { addToCart } = useCart();
  const [searchColor, setSearchColor] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Filtering items based on the search input for color
  const filteredItems = Data.filter((item) =>
    item.color.toLowerCase().includes(searchColor.toLowerCase())
  );

  // Sorting items based on the selected price order
  const sortedItems = filteredItems.sort((a, b) => {
    if (sortOrder === 'lowToHigh') {
      return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
    } else if (sortOrder === 'highToLow') {
      return parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', ''));
    } else {
      return 0; // No sorting applied
    }
  });

  // Function to handle adding an item to the cart
  const handleAddToCart = (item) => {
    addToCart(item); // Call addToCart with the item object
    setSuccessMessage(`${item.title} has been added to your cart!`);
    setShowModal(true); // Show the modal after adding to cart
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setShowModal(false); // Hide the modal
  };

  return (
    <div className='shop'>
      {/* Title */}
      <div className="title flex" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', marginTop: '30px', fontFamily: 'cursive' }}>
        <h2 className='shop-heading'>Shop</h2>
      </div>

      {/* Search input */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <input
          type="text"
          placeholder="Search by color"
          value={searchColor}
          onChange={(e) => setSearchColor(e.target.value)}
          style={{ padding: '10px', borderRadius: '10px', border: '1px solid rgb(204, 204, 204)', outline: 'none', width: '300px' }}
        />
      </div>

      {/* Sort by price */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <label htmlFor="sortOrder" className="sort" style={{ color: 'var(--alt)' }}>Sort by price: </label>
        <select
          id="sortOrder"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          style={{ padding: '10px', borderRadius: '10px', border: '1px solid rgb(204, 204, 204)', outline: 'none', marginLeft: '12px' }}
        >
          <option value="">Select</option>
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
        </select>
      </div>

      {/* Display the list of items */}
      <div className="container grid" style={{ marginTop: '40px' }}>
        {sortedItems.length === 0 ? (
          <p>No items found for "{searchColor}"</p>
        ) : (
          sortedItems.map((item,index) => (
            <Card
             key={index}
              id={item.id} // Use a unique key for each card
              image={item.img}
              title={item.title}
              price={item.price}
              handleAddToCart={() => handleAddToCart(item)} // Correctly passing the item for adding to cart
            />
          ))
        )}
        <Link to='/occasion' className='shoose'>OR Choose Your <br/>Specific Occasion 🔎</Link>
      </div>

      {/* Success Modal */}
      {showModal && <SuccessBox message={successMessage} onClose={handleCloseModal} />}
    </div>
  );
}
