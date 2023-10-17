import React from 'react';
import "./order-success.css";

export default function Order_success_dialogbox({trigger}) {

  return (false) ? (
    <div className='overlay'>
      <div className='order_successfull_container'>
      <div>
        <i class="fa-solid fa-circle">
          <i className="fa-solid fa-check"></i>
        </i>
      </div>
      <div style={{"color":"#0A1F44"}}>
        <h3>Your order is</h3>
        <h3>successfully</h3>
      </div>
      <div style={{"color":"#0A1F44"}}>
        <p style={{'fontSize': "0.9rem"}}>You can track the delivery in the "Orders" section.</p>
      </div>
      <div>
        <button>Go to orders</button>
      </div>
    </div>
    </div>) : "";
}
