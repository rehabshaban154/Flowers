// src/components/nav/Nav.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../Shop/Cartcontext'; // Update the path if necessary
import logo from '../../Assets/logo-removebg-preview.png';
import './nav.css';

export default function Nav() {
  const { cart } = useCart();

  // Ensure cart is defined and is an array before using reduce
  const totalItems = (cart || []).reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" className='logo' style={{ width: '80px', height: '80px' }} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shop">Shop</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/brand">Brands</Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Occasions
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/wedding">Wedding</Link></li>
                <li><Link className="dropdown-item" to="/val">Valentine</Link></li>
                <li><Link className="dropdown-item" to="/engagement">Engagement</Link></li>
                <li><Link className="dropdown-item" to="/grad">Graduation</Link></li>
                <li><Link className="dropdown-item" to="/ramdan">Ramadan</Link></li>
                <li><Link className="dropdown-item" to="/getwell">Get Well</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
          <form className="d-flex" role="search" style={{ justifyContent: 'space-evenly', width: '239px' }}>
            <Link to="/cart" className="d-flex align-items-center">
              <i className="cart-icon">🛒</i>
              {totalItems > 0 && <span className="item-count">{totalItems}</span>}
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
}
