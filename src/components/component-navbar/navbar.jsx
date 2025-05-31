import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css'
import logoFull from '../../assets/images/logo-full.png'; // Importa la imagen

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="nav-container">
        <div className='nav-content'>
          <div className='logo-container'>
            <NavLink to="/">
              <img className='nav-logo' src={logoFull} alt="" />
            </NavLink>
          </div>
          <ul className={menuOpen ? 'show' : ''}>
            <li><NavLink to="/">Inicio</NavLink></li>
            <li><NavLink to="/camos">Camuflajes</NavLink></li>
            <li><NavLink to="/uniforms">Uniformes</NavLink></li>
            <li><NavLink to="/vests">Chalecos</NavLink></li>
          </ul>
          <button
            className="nav-hamburger"
            aria-label="Abrir menú"
            onClick={() => setMenuOpen(open => !open)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'none' }}
          >
            <span style={{ display: 'block', width: 28, height: 3, background: 'var(--wht)', margin: '6px 0', borderRadius: 2 }}></span>
            <span style={{ display: 'block', width: 28, height: 3, background: 'var(--wht)', margin: '6px 0', borderRadius: 2 }}></span>
            <span style={{ display: 'block', width: 28, height: 3, background: 'var(--wht)', margin: '6px 0', borderRadius: 2 }}></span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;