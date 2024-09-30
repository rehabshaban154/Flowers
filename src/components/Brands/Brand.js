import React, { useEffect } from 'react';
import Databrand from './Databrand';
import BrandCard from './BrandCard';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { Link } from 'react-router-dom';
import './brand.css'

export default function Brand() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Smooth easing for the animation
      once: true, // Animation happens only once on scroll
    });
  }, []);

  return (
    <div className='brands' style={{position:'relative',height:'auto'}}>
      <h2 style={{marginTop:'40px',fontFamily:'cursive',color:'var(--alt) !important'}} className='shop-heading'>Our Brands</h2>
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
      <Link to='/shop' style={{position:'absolute',left:'50%',backgroundColor:'#E91E63', transition:'0.7s'}} className='link'>Time To Shopping!😉</Link>
    </div>
  );
}
