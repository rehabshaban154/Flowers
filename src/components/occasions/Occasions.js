import React, { useEffect } from 'react';
import Card from './Card';
import Data from './Data';
import './occasions.css';
import { Link } from 'react-router-dom';

export default function Occasions() {

  // Function to reveal cards on scroll
  const revealCards = () => {
    const items = document.querySelectorAll('.item');
    const windowHeight = window.innerHeight;

    items.forEach(item => {
      const itemTop = item.getBoundingClientRect().top;
      const revealPoint = 150; // Adjust for when to trigger the animation

      if (itemTop < windowHeight - revealPoint) {
        item.classList.add('show');
      } else {
        item.classList.remove('show');
      }
    });
  };

  useEffect(() => {
    // Trigger the animation on scroll
    window.addEventListener('scroll', revealCards);
    
    // Initial check for any items in view when component loads
    revealCards();

    return () => {
      window.removeEventListener('scroll', revealCards);
    };
  }, []);

  return (
    <div className='occasions' style={{marginTop:'50px'}}>
      <h2 className='shop-heading'>Your Occasions</h2>
      <div className="container grid">
        {
          Data.map((item, index) => {
            return (
              <Link to={item.path}><Card image={item.img} title={item.title} key={index} /></Link>
            )
          })
        }
      </div>
    </div>
  );
}
