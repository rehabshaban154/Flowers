import './App.css';
import Nav from './components/nav/Nav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Shop from './components/Shop/Shop';
import ItemDetails from './components/Shop/ItemDetails';
import Cart from './components/Shop/Cart'; 
import { CartProvider } from './components/Shop/Cartcontext';// Ensure correct import
import Brand from './components/Brands/Brand';
import Register from './components/register/Register';
import React, { useState } from 'react'; 
import Contact from './components/Contact/Contact';
import Occasions from './components/occasions/Occasions';
import Engagement from './components/Engangment/Engangment'; // Corrected import name
import SuccessBox from './components/Successbox/Sucsess'; // Ensure correct path and name
import Val from './components/valantin/Val';
import Gradution from './components/gradution/Gradution';
import Birth from './components/birthday/Birth';
import Ram from './components/Ramdan/Ram';
import Getwell from './components/getwell/Getwell';
import Wedding from './components/wedding/Wedding';

function App() {
  const [user, setUser] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleRegister = (userData) => {
    setUser(userData);
    console.log('User registered:', userData);
  };

  const showSuccessMessage = (message) => {
    setSuccessMessage(message);
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000); // Ensure this has a duration
  };

  return (
<CartProvider>
      <Router>
        <Nav />

        {/* Display SuccessBox at the top level */}
        {successMessage && <SuccessBox message={successMessage} onClose={() => setSuccessMessage('')} />}
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop showSuccessMessage={showSuccessMessage} />} />
          <Route path="/shop/:id" element={<ItemDetails showSuccessMessage={showSuccessMessage} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/brand" element={<Brand />} />
          <Route path="/occasion" element={<Occasions />} />
          <Route path="/engagement" element={<Engagement showSuccessMessage={showSuccessMessage} />} />
          <Route path="/grad" element={<Gradution showSuccessMessage={showSuccessMessage} />} />
          <Route path="/birthday" element={<Birth showSuccessMessage={showSuccessMessage} />} />
          <Route path="/ramdan" element={<Ram showSuccessMessage={showSuccessMessage} />} />
          <Route path="/getwell" element={<Getwell showSuccessMessage={showSuccessMessage} />} />
          <Route path="/wedding" element={<Wedding showSuccessMessage={showSuccessMessage} />} />
          <Route path="/val" element={<Val showSuccessMessage={showSuccessMessage} />} />
          <Route path="/register" element={!user ? <Register onRegister={handleRegister} /> : <p>Welcome, {user.name}!</p>} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
      </Router>
      </CartProvider>
  );
}

export default App;
