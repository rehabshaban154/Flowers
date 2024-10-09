import React from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'; // Include your custom CSS if necessary

export default function Login() {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    // Navigate to the Register component
    navigate('/register');
  };

  return (
    <div>
      {/* Trigger button */}
      <button style={{color:'white',backgroundColor:'var(--alt)'}}
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#loginModal"
      >
       Login
      </button>

      {/* Bootstrap Modal */}
      <div
        className="modal fade"
        id="loginModal"
        tabIndex="-1"
        aria-labelledby="loginModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="loginModalLabel" style={{fontSize: '29px'}}>Login</h5>
              {/* Close (X) Button */}
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
             style={{fontSize:'26px',color:'red !important'}} ></button>
            </div>

            <div className="modal-body">
              {/* Login Form */}
              <form method='get'>
                <div className="mb-3">
                  <label htmlFor="user" className="form-label">
                    Username or Email Address
                  </label>
                  <input
                    type="text"
                    name="user"
                    id="user"
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                  />
                </div>

                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="remember"
                  />
                  <label className="form-check-label" htmlFor="remember">
                    Remember Me
                  </label>
                </div>

                <button type="submit" className="btn btn-primary mt-3">
                  Login
                </button>
              </form>

              {/* Register Now! button that closes the modal and navigates */}
              <button 
                className="btn  mt-3 d-block"
                style={{
                  fontWeight: 'bold',
                  color: 'black',
                }}
                data-bs-dismiss="modal"  // This will close the modal
                onClick={handleRegisterClick}  // Navigate to Register component
              >
                Register Now!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
