import React from 'react';
import "./header.css";

export default function Header() {
  return (
    <div className='header_container'>
        <div className='header_container-heading'>
            LAUNDRY
        </div>
        <nav className="header_container-navbar">
            <div>Home</div>
            <div>Pricing</div>
            <div>Career</div>
            <div>Sign In</div>
        </nav>
    </div>
  )
}