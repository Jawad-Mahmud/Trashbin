import React from 'react'
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import "../styles/Footer.css"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
export const Footer = () => {
  return (
    <>
    <div className='footer-container'>
      <div className='logo'>
        Iqronix
        </div>  
        <div className='footer-s-navbar-links'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
        </div>
        <div className='footer-s-footer'>
         <p>@ 2025 Iqronix Inc.Copyright and rights reserved <br /></p>   
         <p className='Privacy-Policy'>Privacy Policy</p>
        </div>
    </div>
    
    </>
  )
}
