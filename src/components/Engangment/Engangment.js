import React, { useState } from 'react';
import Card from '../../Card';
import '../../components/Shop/shop.css';
import Data from './Endata';  
import { useCart } from '../Shop/Cartcontext';  // Ensure correct import of the custom hook
import Modal from '../../Modal';  // Import the Modal component
import SuccessBox from '../../components/Successbox/Sucsess'; // Import the SuccessBox component

export default function Engagement({ showSuccessMessage }) {
  const { addToCart } = useCart();  // Access the addToCart function from Cart context
  const [searchColor, setSearchColor] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);  // To track the selected item for the modal
  const [isModalOpen, setIsModalOpen] = useState(false);  // To control the modal visibility
  const [successMessage, setSuccessMessage] = useState(''); // Success message state

  // Filter items based on search color
  const filteredItems = Data.filter((item) =>
    item.color.toLowerCase().includes(searchColor.toLowerCase())  // Search by color
  );

  // Sort items based on price
  const sortedItems = filteredItems.sort((a, b) => {
    if (sortOrder === 'lowToHigh') {
      return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
    } else if (sortOrder === 'highToLow') {
      return parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', ''));
    } else {
      return 0; // No sorting
    }
  });

  // Add item to the cart with default quantity 1 and show success message
  const handleAddToCart = (item) => {
    addToCart({ ...item, quantity: 1 });  // Set default quantity to 1
    setSuccessMessage(`${item.title} has been added to your cart!`);  // Set success message
  };

  // Handle quick view modal
  const handleQuickView = (item) => {
    setSelectedItem(item);  // Set the selected item for quick view
    setIsModalOpen(true);   // Open modal
  };

  // Close quick view modal
  const handleCloseModal = () => {
    setIsModalOpen(false);  // Close modal
  };

  // Close success message
  const closeSuccessMessage = () => {
    setSuccessMessage('');  // Clear success message
  };

  return (
    <>
      {/* Title */}
      <div className="title flex" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', marginTop: '30px', fontFamily: 'cursive' }}>
        <h2 className='shop-heading'>Engagement Occasion</h2>
      </div>

      {/* Search input */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <input
          type="text"
          placeholder="Search by color"
          value={searchColor}
          onChange={(e) => setSearchColor(e.target.value)}
          style={{ padding: '10px', borderRadius: '10px', border: '1px solid rgb(204, 204, 204)', outline: 'none' }}
        />
      </div>

      {/* Sort dropdown */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <label htmlFor="sortOrder" className='sort' style={{ color: 'var(--alt)' }}>Sort by price: </label>
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

      {/* Item list */}
      <div className="container grid" style={{ marginTop: '40px' }}>
        {sortedItems.length === 0 ? (
          <p>No items found for "{searchColor}"</p>
        ) : (
          sortedItems.map((item) => (
            <Card
              image={item.img}
              title={item.title}
              price={item.price}
              id={item.id}  // Use unique ID
              key={item.id}  // Ensure unique key for each item
              handleQuickView={() => handleQuickView(item)}  // Pass the quick view handler to Card
              handleAddToCart={() => handleAddToCart(item)}  // Pass the add to cart handler to Card
            />
          ))
        )}
      </div>

      {/* Modal for quick view */}
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} item={selectedItem} />
      )}

      {/* Success message when an item is added to the cart */}
      {successMessage && (
        <SuccessBox message={successMessage} onClose={closeSuccessMessage} />
      )}
    </>
  );
}
