import React from 'react';
import "./homepage.css";
import Side_Navbar from "../../components/side-navbar/side-navbar";
import Main_Header from "../../components/main-header/main-header";
import Footer from "../../components/footer/footer";
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import { Context } from '../../context/context';
import { useContext } from 'react';

export default function Homepage() {
  const {getUser}= useContext(Context);
  useEffect(()=>{
    getUser();
  } , [])
  
  return (
    <>
      <Main_Header />
      <div className='hero-container'>
        <Side_Navbar />
        <div className="home-container">
          {/* <Link to="/createorder"> */}
            <button className='create_order_btn'>
              CREATE ORDER
            </button>
          {/* </Link> */}
        </div>
      </div>
      <Footer />
    </>
  )
}