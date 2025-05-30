import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css'
import logoFull from '../../assets/images/logo-full.png'; // Importa la imagen

const Navbar = () => {
  return (
    <>
      <nav className="nav-container">
        <div className='nav-content'>
          <div className='logo-container'>
            <NavLink to="/">
              <img className='nav-logo' src={logoFull} alt="" />
            </NavLink>
          </div>
          <ul>
            <li><NavLink to="/">Inicio</NavLink></li>
            <li><NavLink to="/camos">Camuflajes</NavLink></li>
            <li><NavLink to="/uniforms">Uniformes</NavLink></li>
            <li><NavLink to="/vests">Chalecos</NavLink></li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;