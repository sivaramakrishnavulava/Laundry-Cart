import React, { useEffect } from 'react';
import "./login.css";
import Header from "../../components/header/header";
import Refer_Section from "../../components/refer-section/refer-section";
import Socials from "../../components/socials/socials";
import Footer from "../../components/footer/footer";
import {Link} from "react-router-dom";
import { useState } from 'react';
import { Context } from '../../context/context';
import { useContext } from 'react';

export default function Login() {
    const {userLogin} = useContext(Context);
    const [loginFormData, setLoginFormData]= useState({
        email: "",
        password: ""
    });
    const [formErrors, setFormErrors]= useState({
        email : "",
        password : ""
    });
    const [isSubmit, setIsSubmit]= useState(false);
    function handleLoginInputs(event){
        const {name, value}= event.target;
        setLoginFormData(pre => {
            return {
                ...pre, 
                [name] : value
            }
        })
    }
    function validateLoginForm(formData){
        const {email, password}= formData;
        const formErrors= {};
        if(!email){
            formErrors.email = "Input field should not be empty!"
        }
        if(!password){
            formErrors.password= "Input field should not be empty!"
        }
        else if(password.length < 6){
            formErrors.password = "Password should not be less than 6 characters!"
        }
        return formErrors;
    }
    function handleUserLogin(event){
        event.preventDefault();
        setIsSubmit(true);
        setFormErrors(validateLoginForm(loginFormData))
    }
    useEffect(() => {
        if(Object.keys(formErrors).length === 0 && isSubmit){
            userLogin(loginFormData)
        } 
    }, [formErrors])
  return (
    <>
    <Header />
    <div className='login_form_container'>
        <div className='login_form_container-left'>
            <div>
                <div className='company_name'>Laundry</div>
                <div className='company_name' style={{"paddingBottom": "20px"}}>Service</div>
                <div className='company_tagline'>Doorstep Wash & Dryclean Service</div>
            </div>
            <div>
                <div style={{"color": "#565657"}}>Don’t Have An Account?</div>
                <Link to="/register" >
                    <button className='login_form_container-left-btn'>
                    Register
                    </button>
                </Link>
            </div>
        </div>
        <div className='login_form_container-right'>
            <form>
                <div className='form-box'>
                    <span className='form-heading'>SIGN IN</span>
                </div> 
                <div className='form-box'>
                    <div className='input-container'>
                        <input id='user' 
                                name="email"
                                placeholder='Email'
                                onChange={handleLoginInputs}
                                value={loginFormData.email} />
                        <p style={{"marginBottom" : "20px"}} className='form_error'>{formErrors.email}</p>
                    </div>
                    <div className='input-container'>
                        <input id='password'
                                type="password"
                                name="password"
                                placeholder='Password'
                                onChange={handleLoginInputs}
                                value={loginFormData.password} />
                        <p style={{"marginBottom" : "20px"}} className='form_error'>{formErrors.password}</p>
                        <p 
                        style={{"color": "#4552C1",
                         "textAlign": "right", 
                         "fontFamily": "'Montserrat', sans-serif", 
                         "letterSpacing": "-0.05rem",
                         "fontSize": "0.8rem",
                        "fontWeight": "500"}}
                        >Forget Password?</p>
                    </div>
                </div>
                <div className='form-box' style={{"textAlign": "center"}}>
                    <button className='login_form_container-right-btn'
                            onClick={handleUserLogin}>
                        Sign In
                    </button>
                </div>
            </form>
        </div>
    </div>
    <Refer_Section />
    <Socials />
    <Footer />
    </>
    
  )
}
