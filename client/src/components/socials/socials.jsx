import React from 'react';
import "./socials.css";
import fb_logo from "../../assets/facebook.svg";
import instagram_logo from "../../assets/instagram.svg";
import linkedin_logo from "../../assets/linkedin.svg";

export default function Socials() {
  return (
    <div className='socials_conatiner'>
      <span className='background-image'></span>
      <div>
        <div className='bold'>ABOUT US</div>
        <div>Doorstep Wash & Dryclean Service</div>
      </div>
      <div className='middle_row_container'>
        <div>
          <div className='bold'>Home</div>
          <div>Sign In</div>
          <div>Register</div>
        </div>
        <div>
          <div className='bold'>Pricing</div>
        </div>
        <div>
          <div className='bold'>Career</div>
          <div>Blogs</div>
          <div>Create</div>
        </div>
        <div>
          <div className='bold'>Contact</div>
          <div>Ph1 - +919191919191</div>
          <div>Ph2 - +917171717171</div>
        </div>
      </div>
      <div>
        <div className='bold'>SOCIAL MEDIA</div>
        <div className='social_icons'>
          <span> 
            <img src={fb_logo} />
          </span>
          <span>
            <img src={instagram_logo} />
          </span>
          <span>
            <img src={linkedin_logo} />
          </span>
        </div>
      </div>
    </div>
  )
}
