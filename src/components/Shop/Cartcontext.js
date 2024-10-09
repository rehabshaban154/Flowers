import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    // Load the cart from localStorage if available
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Function to add items to the cart
  const addToCart = (newItem) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(cartItem => cartItem.title === newItem.title);
      if (existingItemIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: updatedCart[existingItemIndex].quantity + newItem.quantity, // Increment quantity
        };
        return updatedCart;
      } else {
        // Initialize quantity for new items
        return [...prevCart, { ...newItem, quantity: newItem.quantity || 1 }];
      }
    });
  };

  

  // Function to remove an item from the cart by ID
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Function to clear the entire cart
  const clearCart = () => {
    setCart([]); // Set cart to an empty array
  };

  // Update localStorage whenever the cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Calculate cart length correctly
  const cartLength = cart.reduce((total, item) => total + (item.quantity || 0), 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, cartLength }}>
      {children}
    </CartContext.Provider>
  );
};
