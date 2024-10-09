import React, { useState } from 'react';
import Card from '../../Card';
import '../../components/Shop/shop.css';
import Data from './Data';  
import { useCart } from '../Shop/Cartcontext';  // Correctly importing the cart context hook
import Modal from '../../Modal';  // Modal component for quick view
import SuccessBox from '../../components/Successbox/Sucsess'; // SuccessBox component for showing the success message

export default function Val() {
  const { addToCart } = useCart(); // Access the addToCart function from Cart context
  const [searchColor, setSearchColor] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);  // Track the selected item for quick view modal
  const [isModalOpen, setIsModalOpen] = useState(false);  // Modal control state
  const [successMessage, setSuccessMessage] = useState(''); // State for success message

  // Filter items by color
  const filteredItems = Data.filter((item) =>
    item.color.toLowerCase().includes(searchColor.toLowerCase())
  );

  // Sort items based on price order
  const sortedItems = filteredItems.sort((a, b) => {
    if (sortOrder === 'lowToHigh') {
      return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
    } else if (sortOrder === 'highToLow') {
      return parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', ''));
    } else {
      return 0; // No sorting applied if none selected
    }
  });

  // Add item to the cart and set the success message
  const handleAddToCart = (item) => {
    addToCart({ ...item, quantity: 1 }); // Ensure the default quantity is 1
    setSuccessMessage(`${item.title} has been added to your cart!`);  // Set success message
  };

  // Open quick view modal with the selected item
  const handleQuickView = (item) => {
    setSelectedItem(item);  // Set the selected item for quick view
    setIsModalOpen(true);   // Open modal
  };

  // Close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);  // Close modal
  };

  // Clear success message when user dismisses it
  const closeSuccessMessage = () => {
    setSuccessMessage('');  // Clear success message
  };

  return (
    <>
      {/* Page title */}
      <div className="title flex" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', marginTop: '30px', fontFamily: 'cursive' }}>
        <h2 className='shop-heading'>Valentine's Day Occasions</h2>
      </div>

      {/* Search input for filtering by color */}
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
          style={{ padding: '10px', borderRadius: '10px', border: '1px solid rgb(204, 204, 204)', outline: 'none', marginLeft: '12px' }} >
          <option value="">Select</option>
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
        </select>
      </div>

      {/* Display list of items */}
      <div className="container grid" style={{ marginTop: '40px' }}>
        {sortedItems.length === 0 ? (
          <p>No items found for "{searchColor}"</p>
        ) : (
          sortedItems.map((item) => (
            <Card
              image={item.img}
              title={item.title}
              price={item.price}
              id={item.id}
              key={item.id} // Ensure unique key for each item
              handleQuickView={() => handleQuickView(item)}  // Quick view handler
              handleAddToCart={() => handleAddToCart(item)}  // Add to cart handler
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
