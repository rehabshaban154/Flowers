import React from 'react';
import { Link } from 'react-router-dom';
import './login.css'; // Make sure to include CSS if necessary

export default function Login() {
  return (
    <div className='login-container'> {/* Add a wrapper div for styling */}
      <h2>Login</h2>
      <form method='get'>
        <label htmlFor='user'>Username or Email Address</label>
        <input type='text' name='user' id='user' />
        
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' id='password' />
        
        <div className='form-actions'>
          <button type='submit'>Login</button> {/* Change from <a> to <button> */}
          <input type='checkbox' id='remember' />
          <label htmlFor='remember'>Remember Me</label>
        </div>
        
        <Link to='/register' style={{ fontWeight: 'bold',    // Use camelCase for 'font-weight'
  color: 'black',        // Property values as strings
  position: 'relative',  // Same as in CSS
  left: '-70px',         // Use strings for values with units
  top: '7px'     }}>Register Now!</Link> {/* Use <Link> for navigation */}
      </form>
    </div>
  );
}
