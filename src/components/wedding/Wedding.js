import React, { useState } from 'react';
import Card from '../../Card';
import '../../components/Shop/shop.css';
import Data from './Data';  
import { useCart } from '../Shop/Cartcontext';  // Using useCart hook for cart functionality
import Modal from '../../Modal';  // Importing Modal component for quick view
import SuccessBox from '../../components/Successbox/Sucsess'; // Importing SuccessBox component

export default function Wedding() {
  const { addToCart } = useCart(); // Accessing addToCart from Cart context
  const [searchColor, setSearchColor] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);  // For modal quick view
  const [isModalOpen, setIsModalOpen] = useState(false);  // Control for modal visibility
  const [successMessage, setSuccessMessage] = useState(''); // For success message display

  // Filter items by color
  const filteredItems = Data.filter((item) =>
    item.color.toLowerCase().includes(searchColor.toLowerCase())
  );

  // Sort items based on price
  const sortedItems = filteredItems.sort((a, b) => {
    if (sortOrder === 'lowToHigh') {
      return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
    } else if (sortOrder === 'highToLow') {
      return parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', ''));
    } else {
      return 0; // No sorting if no selection is made
    }
  });

  // Function to handle adding item to cart
  const handleAddToCart = (item) => {
    addToCart({ ...item, quantity: 1 }); // Ensure quantity is set when adding to cart
    setSuccessMessage(`${item.title} has been added to your cart!`);  // Set success message
  };

  // Function to handle quick view
  const handleQuickView = (item) => {
    setSelectedItem(item);  // Set selected item for modal
    setIsModalOpen(true);   // Open modal
  };

  // Function to close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);  // Close modal
  };

  // Function to clear success message
  const closeSuccessMessage = () => {
    setSuccessMessage('');  // Clear message
  };

  return (
    <>
      {/* Title */}
      <div className="title flex" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', marginTop: '30px', fontFamily: 'cursive' }}>
        <h2 className='shop-heading'>Wedding Occasion</h2>
      </div>

      {/* Search input for color filtering */}
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
        <label htmlFor="sortOrder" className='sort' style={{ color: 'var(--alt)' }}>Sort by price: </label>
        <select
          id="sortOrder"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          style={{ padding: '10px', borderRadius: '10px', border: '1px solid rgb(204, 204, 204)', outline: 'none', marginLeft: '12px' }}>
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
          sortedItems.map((item) => {
            // Destructuring item properties
            const { img, title, price, id } = item;

            return (
              <Card
                image={img}
                title={title}
                price={price}
                id={id}
                key={id}  // Use unique key
                handleQuickView={() => handleQuickView(item)}  // Quick view handler
                handleAddToCart={() => handleAddToCart(item)}  // Add to cart handler
              />
            );
          })
        )}
      </div>

      {/* Render the modal for quick view */}
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} item={selectedItem} />
      )}

      {/* Render the success message if it exists */}
      {successMessage && (
        <SuccessBox message={successMessage} onClose={closeSuccessMessage} />
      )}
    </>
  );
}
