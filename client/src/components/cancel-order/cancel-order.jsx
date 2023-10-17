import React from 'react';
import "./cancel-order.css"

export default function Cancel_Order_dialogbox({trigger}) {

  return (false) ? (
    <div className='overlay'>
      <div className='cancel_order_container'>
        <div className='alert_heading'>
            <span>Alert</span>
            <span>
                <i className="fa-solid fa-xmark"></i>
            </span>
        </div>
        <div className='alert_info'>
            <div>
                <i className="fa-solid fa-triangle-exclamation"></i>
            </div>
            <div className='alert_info_row2'>
                <div>
                    <p>Are you sure want to cancel the order No: OR1213</p>
                </div>
                <div>
                    <button>Proceed</button>
                </div>
            </div>
        </div>
      </div>
    </div>) : "";
}
