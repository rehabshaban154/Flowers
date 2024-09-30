import React, { useEffect } from 'react';
import Databrand from './HomeDatabrand';
import BrandCard from '../../Brands/BrandCard';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { Link } from 'react-router-dom';

export default function HomeBrand() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Smooth easing for the animation
      once: true, // Animation happens only once on scroll
    });
  }, []);

  return (
    <div className='brands'>
      <h2 style={{marginTop:'40px', fontFamily:'cursive'}}>Our Brands</h2>
      <div className="brand-container">
        {Databrand.map((value, index) => (
          <div data-aos="fade-up" data-aos-delay={`${index * 100}`} key={index}>
            <BrandCard
              image={value.img}
              title={value.title}
              disc={value.disc}
            />
          </div>
        ))}
      </div>
      <Link to='/brand' className='link' style={{backgroundColor:'#E91E63'}}>View All Brands</Link>
    </div>
  );
}
