import React from 'react';
import { Link } from 'react-router-dom';
import '../../src/styles/styles.css';

function Header() {
  return (
    <header>
      <h1>Food Corner</h1>
      <nav aria-label="primary-navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/recipes">Recipes</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          
        </ul>
        <div className="logo-image">
          <img src="images/log.jpg" alt="Foodies logo" />
        </div>
        <div className="auth-links">
        <Link to="/login" className="login-btn">Login</Link>
        <Link to="/signup" className="signup-btn">Sign Up</Link>
      </div>
      </nav>
    </header>
  );
}

export default Header;
