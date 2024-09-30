import React, { useState, useEffect } from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import Login from './Login'; // Adjust the import path as needed
import HomeBrand from './homebrand/HomeBrand';
import about from '../../Assets/about.webp'
import Discription from '../Discription/Discription';
import Blur from '../blur/Blur';
import Mobile from '../mobile/Mobile';
import Footer from '../footer/Footer';

export default function Home() {
  const images = [
    require('../../Assets/landing.jpg'),
    require('../../Assets/landing2.jpg'),
    require('../../Assets/landing3.jpg'),
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleProfileClick = () => {
    setShowLogin((prev) => !prev); // Toggle login visibility on click
  };

  return (
    <div className='content'>
      <div className="home">
        {/* Dynamic Image */}
        <img
          src={images[currentImageIndex]}
          alt="Landing Slide"
          style={{ width: '100%', height: '100%' }}
        />
        
        <div className="info">
          <h2>
            Discover Our Collection <br />
            <span>Same Day Delivery</span>
          </h2>
          <Link to='/Shop'>Shop Now</Link>
        </div>

        {/* Profile Icon */}
        <div 
          onClick={handleProfileClick}
          style={{ cursor: 'pointer', position: 'absolute', top: '20px', right: '20px' }} >
          <span style={{backgroundColor: 'whitesmoke',
    padding: '12px',
    borderRadius: '4px',
    color: 'var(--alt)',
    fontWeight: 'bold'}}>👤 Profile</span>
        </div>

        {/* Show Login Component */}
        {showLogin && <Login />}
      </div>
      <div className='about' style={{marginTop:'200px'}}>
      <h2 style={{fontFamily:'cursive',fontWeight:'bold',marginLeft:'74px',color:'var(--alt) !important'}}>About Us 👀</h2>
        <div className='container flex'>
        <img src={about} style={{width:'400px',height:'350px',borderRadius:'6px'}}/>
        <div className='disc'>
          <p>Looking for a beautiful, reliable, affordable flower bouquet ?! You have come to the right place. 
            Customer service is our top priority. We offer 100% money back guarantee. Send Flowers to your beloved ones all over Egypt from anywhere in the world. 
            Pay by secure credit card, or if you live in Egypt. We are here to serve you and your company.</p>
            <span>Passion and Flowers</span>
            <p> we believe that flowers are nature's perfect gift to us, symbolizing love, happiness, and beauty.
               Our passion for florals inspires us to create stunning arrangements that speak to the heart and elevate every moment."</p>
            <span>Our Story</span>
            <p>"Founded with a deep love for the art of floristry, We started as a small boutique and has grown into a trusted name for quality and elegance. Every bouquet we craft tells a story, 
              whether it's celebrating love, friendship, or life's most precious moments."</p>
            <span>Our Mission</span>
            <p>"Our mission is simple: to bring joy and beauty into your life through the power of flowers. We carefully handpick each bloom to ensure freshness and quality, 
              ensuring that every arrangement delivered is nothing short of perfection."</p>
        </div>
      </div>
    </div>
  <Discription />
  <HomeBrand />
  <Blur />
  <Mobile />
  <Footer />
    </div>
  );
}
