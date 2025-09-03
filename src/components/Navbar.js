import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export default function Navbar(props) {
  const { 
    title = 'Web development',
    about = 'About Us',
    service = "Services"
  } = props;

  return (
    <nav id="navbar" style={props.mode}>
      <ul>
        <li><NavLink to="/" style={props.mode}  className={({ isActive }) => isActive ? 'active-link' : ''}>{title}</NavLink></li>
        <li><NavLink to="/about" style={props.mode}  className={({ isActive }) => isActive ? 'active-link' : ''}>{about}</NavLink></li>
        <li><NavLink to="/service" style={props.mode}  className={({ isActive }) => isActive ? 'active-link' : ''}>{service}</NavLink></li>
      </ul>
      {/* <div className='enable'>
        <div>{props.name}</div>
      </div> */}
      <div className="flex">
        <div className="box yellow" onClick={() => props.othermode('grey')}></div>
        <div className="box green" onClick={() => props.othermode('green')}></div>
        <div className="box blue" onClick={() => props.othermode('blue')}></div>
        <div className="box black" onClick={() => props.othermode('dark')}></div>
        <div className="box white" onClick={() => props.othermode('light')}></div>
        <div><div>{props.name}</div></div>
      </div>

      { /* <label className="switch">
        <input type="checkbox" onClick={() => props.othermode('toggle')} />
        <div className="slider round"></div>
      </label> */}
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  service: PropTypes.string.isRequired,
};