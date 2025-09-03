import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink,useNavigate } from 'react-router-dom';

export default function Navbar(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const Navigate=useNavigate()
  const { 
    title = 'Web development',
    about = 'About Us',
    service = "Services"
  } = props;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const hanleNavigate =(e)=>{
    e.preventDefault();
    Navigate('/Text/')
  }

  return (
    <nav id="navbar" style={props.mode}>
      {/* Mobile menu overlay */}
      <div className={`mobile-overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}></div>
      
      {/* Brand/Logo */}
      <div className="navbar-brand" onClick={hanleNavigate}>
        <span>TextUtils</span>
      </div>

      {/* Navigation Links */}
      <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
        <li>
          <NavLink 
            to="/Text/" 
            style={props.mode}  
            className={({ isActive }) => isActive ? 'active-link' : ''}
            onClick={closeMenu}
          >
            {title}
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            style={props.mode}  
            className={({ isActive }) => isActive ? 'active-link' : ''}
            onClick={closeMenu}
          >
            {about}
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/service" 
            style={props.mode}  
            className={({ isActive }) => isActive ? 'active-link' : ''}
            onClick={closeMenu}
          >
            {service}
          </NavLink>
        </li>
      </ul>

      {/* Theme Selector and Controls */}
      <div className="flex">
        <div className="box yellow" onClick={() => props.othermode('grey')}></div>
        <div className="box green" onClick={() => props.othermode('green')}></div>
        <div className="box blue" onClick={() => props.othermode('blue')}></div>
        <div className="box black" onClick={() => props.othermode('dark')}></div>
        <div className="box white" onClick={() => props.othermode('light')}></div>
        <div><div>{props.name}</div></div>
      </div>

      {/* Mobile Menu Toggle Button */}
      <button 
        className={`mobile-toggle ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  service: PropTypes.string.isRequired,
};