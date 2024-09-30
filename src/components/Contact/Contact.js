import React from 'react';
import logo from '../../Assets/logo-removebg-preview.png';
import './contact.css'
export default function Contact() {
  return (
    <div className='contact' style={{marginTop:'40px'}}>
        <h2 className='shop-heading'>Contact Us</h2>
    <div className="container">
      <img src={logo} alt="Company Logo" />
      <form style={{flexBasis:'50%',marginTop:'49px'}}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input type="text" className="form-control" id="name" placeholder="Your Name" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input type="email" className="form-control" id="email" placeholder="Your Email" />
        </div>
        <div className="mb-3">
          <label htmlFor="subject" className="form-label">Subject</label>
          <input type="text" className="form-control" id="subject" placeholder="Subject" />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea className="form-control" id="message" rows="5" placeholder="Your Message"></textarea>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-custom" style={{backgroundColor: "var(--alt)"
,marginRight:'none'}}>Send Message</button>
        </div>
      </form>
    </div>
    </div>
  );
}
