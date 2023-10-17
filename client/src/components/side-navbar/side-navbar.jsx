import React from 'react';
import "./side-navbar.css";
import { Link, useNavigate } from "react-router-dom";

export default function Side_Navbar() {
    const navigate = useNavigate();
    function handleLogout() {
        navigate("/", { replace: true })
        localStorage.clear();
    }
    return (
        <div className='side-navbar'>
            <Link to="/homepage">
                <div>
                    <i className="fa-solid fa-house"></i>
                </div>
            </Link>
            {/* <Link to="/createorder"> */}
                <div>
                    <i className="fa-solid fa-circle-plus"></i>
                </div>
            {/* </Link> */}
            {/* <Link to="/orders"> */}
                <div>
                    <i className="fa-solid fa-list"></i>
                </div>
            {/* </Link> */}
            <div className="logout-btn" 
                 onClick= {handleLogout}>
                <i className="fa-solid fa-right-from-bracket"></i>
            </div>
        </div>
    )
}
