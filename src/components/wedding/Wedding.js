import React, { useState, useContext } from 'react';
import Card from '../../Card';
import '../../components/Shop/shop.css';
import Data from './Data';  
import { useCart } from '../Shop/Cartcontext'; // Change import to useCart
import Modal from '../../Modal';  // Import the Modal component
import SuccessBox from '../../components/Successbox/Sucsess'; // Import the SuccessBox component

export default function Wedding() {
  const { addToCart } = useCart(); // Use the useCart hook to get addToCart function
  const [searchColor, setSearchColor] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);  // To track the selected item for the modal
  const [isModalOpen, setIsModalOpen] = useState(false);  // To control the modal visibility
  const [successMessage, setSuccessMessage] = useState(''); // Success message state

  // Filtering items based on searchColor input
  const filteredItems = Data.filter((item) =>
    item.color.toLowerCase().includes(searchColor.toLowerCase())
  );

  // Sorting items based on selected price order
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
    addToCart(item);
    setSuccessMessage(`${item.title} has been added to your cart!`);  // Set success message
  };

  // Function to handle quick view of the item
  const handleQuickView = (item) => {
    setSelectedItem(item);  // Set the selected item for quick view
    setIsModalOpen(true);   // Open the modal
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);  // Close the modal
  };

  // Function to clear the success message
  const closeSuccessMessage = () => {
    setSuccessMessage('');  // Clear success message on close
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
        <label htmlFor="sortOrder" className='sort' style={{color:'var(--alt)'}}>Sort by price: </label>
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

      {/* Display the list of items */}
      <div className="container grid" style={{ marginTop: '40px' }}>
        {sortedItems.length === 0 ? (
          <p>No items found for "{searchColor}"</p>
        ) : (
          sortedItems.map((item) => (
            <Card
              image={item.img}
              title={item.title}
              price={item.price}
              id={item.id} // Use unique id if available
              key={item.id} // Use unique key if available
              handleQuickView={() => handleQuickView(item)}  // Pass the function to Card
              handleAddToCart={() => handleAddToCart(item)} // Pass the function to Card
            />
          ))
        )}
      </div>

      {/* Render the modal for quick view */}
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} item={selectedItem} />
      )}

      {/* Render the success message only when it exists */}
      {successMessage && (
        <SuccessBox message={successMessage} onClose={closeSuccessMessage} />
      )}
    </>
  );
}
