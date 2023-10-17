import React from 'react';
import "./main-header.css";
import { Context } from '../../context/context';
import { useContext } from 'react';

export default function Main_Header() {
    const {user}= useContext(Context);
  return (
    <div className='main_header_container'>
        <div className='main_header_container-heading'>
            LAUNDRY
        </div>
        <nav className='main_header_container-navbar'>
            <div>Pricing</div>
            <div>Career</div>
            <div className='user_info'>
                <span className='user_image'>
                    <i className='fa-solid fa-user'></i>
                </span>
                <span>{user.name}</span>
            </div>
        </nav>
    </div>
  )
}