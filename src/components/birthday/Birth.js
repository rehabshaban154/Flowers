import React, { useState, useContext } from 'react';
import Card from '../../Card';
import '../../components/Shop/shop.css';
import Data from './Data';  
import  { useCart }  from '../Shop/Cartcontext';
import Modal from '../../Modal';  // Import the Modal component
import SuccessBox from '../../components/Successbox/Sucsess'; // Import the SuccessBox component

export default function Birth({ showSuccessMessage }) {
  const { addToCart } = useCart();
  const [searchColor, setSearchColor] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);  // To track the selected item for the modal
  const [isModalOpen, setIsModalOpen] = useState(false);  // To control the modal visibility
  const [successMessage, setSuccessMessage] = useState(''); // Success message state

  const filteredItems = Data.filter((item) =>
    item.color.toLowerCase()
  );

  const sortedItems = filteredItems.sort((a, b) => {
    if (sortOrder === 'lowToHigh') {
      return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
    } else if (sortOrder === 'highToLow') {
      return parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', ''));
    } else {
      return 0; // No sorting
    }
  });

  const handleAddToCart = (item) => {
    addToCart(item);
    setSuccessMessage(`${item.title} has been added to your cart!`);  // Set success message
  };

  const handleQuickView = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);  // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);  // Close the modal
  };

  const closeSuccessMessage = () => {
    setSuccessMessage('');  // Clear success message on close
  };

  return (
    <>
      <div className="title flex" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', marginTop: '30px', fontFamily: 'cursive' }}>
        <h2 className='shop-heading'>Birthday Occasion</h2>
      </div>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        {/* Add search input here if needed */}
      </div>

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

      <div className="container grid" style={{ marginTop: '40px' }}>
        {sortedItems.length === 0 ? (
          <p>No items found for "{searchColor}"</p>
        ) : (
          sortedItems.map((item, index) => (
            <Card
              image={item.img}
              title={item.title}
              price={item.price}
              id={index}
              key={index}
              handleQuickView={() => handleQuickView(item)}  // Pass the function to Card
              handleAddToCart={() => handleAddToCart(item)} // Pass the function to Card
            />
          ))
        )}
      </div>

      {/* Render the modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} item={selectedItem} />

      {/* Render the success message */}
      <SuccessBox message={successMessage} onClose={closeSuccessMessage} />
    </>
  );
}
