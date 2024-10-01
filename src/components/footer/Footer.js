import React from 'react';
import './footer.css'; // Import your CSS file for styling

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5>About Us</h5>
            <p>
              At [Our Brand], we believe in celebrating life’s moments with the beauty of flowers. 
              From weddings to birthdays, our hand-picked arrangements are crafted with love and care.
            </p>
          </div>
          {/* Contact Section */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>
                <i className="fas fa-phone"></i> +1 (234) 567-890
              </li>
              <li>
                <i className="fas fa-envelope"></i> info@yourflowerbrand.com
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i> 123 Flower St, Bloomtown, FL 12345
              </li>
            </ul>
          </div>
          {/* Social Media Section */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5>Follow Us</h5>
            <ul className="list-unstyled social-media">
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-pinterest"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center col-lg-4 col-md-6 mb-4">
          <p className='copy'>© {new Date().getFullYear()} <span style={{color:'var(--alt)',fontWeight:'bold'}}>Rehab Shaban</span> . All Rights Reserved.</p>
        </div>
        </div>
        {/* Copyright Section */}
       
      </div>
    </footer>
  );
};

export default Footer;
