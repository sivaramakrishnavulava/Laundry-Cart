import React from 'react';
import "./create-order.css";
import Side_Navbar from "../../components/side-navbar/side-navbar";
import Main_Header from "../../components/main-header/main-header";
import Footer from "../../components/footer/footer";

export default function Create_order() {
  return (
    <>
      <Main_Header />
      <div className='hero-container'>
        <Side_Navbar />
        <div className="create-order-container">
          <div className='create-order-container-row1'>
            <span>Create Order</span>
            <span style={{"position": "relative"}}>
              <input type="search" />
              <i className="fa-solid fa-magnifying-glass"></i>    
            </span>
          </div>
          <div className='create-order-container-row2'>
            
          </div>
          <div className='create-order-container-row3'>
            <button>
              Cancel
            </button>
            <button className='proceed-btn'>
              Proceed
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
