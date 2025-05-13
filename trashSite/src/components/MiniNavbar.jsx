import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import '../styles/navbar.css';
import { useState } from 'react';
export const MiniNavbar = () => {
      const [menuOpen, setMenuOpen] = useState(false);
  return (
     <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <span className="navbar-logo">Iqronix</span>
          <MenuIcon onClick={() => setMenuOpen(!menuOpen)} className="menu-icon" />
        </div>
        {menuOpen && (
             <div className="mobile-menu">
            <a href="/" className="navbar-link">Home</a>
            <a href="/about" className="navbar-link">About</a>
            <a href="/contact" className="navbar-link">Contact</a>
            <button className="navbar-cta">Get Started</button>
          </div> 
        )}

        </div>
    </nav>
  )
}
