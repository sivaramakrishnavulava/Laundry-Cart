import React from 'react';
import "./register.css";
import Header from "../../components/header/header";
import Refer_Section from "../../components/refer-section/refer-section";
import Socials from "../../components/socials/socials";
import Footer from "../../components/footer/footer";
import {Link} from "react-router-dom";
import { useState, useContext} from 'react';
import { Context } from "../../context/context";
import { useEffect } from 'react';

export default function Register() {
    const { validateForm, userRegisteration } = useContext(Context);
    const [isSubmit, setIsSubmit]= useState(false);
    const [registerFormData, setRegisterFormData]= useState({
        name: "",
        email: "",
        phone: "",
        state: "",
        district: "",
        address: "",
        pincode: "",
        password: "",
        isAgreeToTandC: false
    });
    const [formErrors, setFormErrors]= useState({})
    function handleRegisterInputs(event){
        const {name, value, type, checked}= event.target;
        setRegisterFormData(prevFormData => {
            return {
              ...prevFormData,
              [name]: type === "checkbox" ? checked : value
            }
          })
    }
    function handleUserRegisteration(event){
        event.preventDefault();
        setIsSubmit(true);
        setFormErrors(validateForm(registerFormData));
    }
    useEffect(() => {
        if(Object.keys(formErrors).length === 0 && isSubmit){
            userRegisteration(registerFormData);
        }
    } , [formErrors])
    return (
        <> 
            <Header />
            <div className='register_form_container'>
                <div className='register_form_container-left'>
                    <div>
                        <div className='company_name'>Laundry</div>
                        <div className='company_name' style={{ "paddingBottom": "20px" }}>Service</div>
                        <div className='company_tagline'>Doorstep Wash & Dryclean Service</div>
                    </div>
                    <div>
                        <div style={{ "color": "#565657" }}>Already Have An Account?</div>
                        <Link to="/" >
                            <button className='register_form_container-left-btn'>
                            Sign In
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='register_form_container-right'>
                    <div>
                        <span className='form-heading'>
                            REGISTER
                        </span>
                    </div>

                    <div className='main_inputs_container'> 
                        <div className='row_inputs_container'>
                            <span>
                                <input 
                                    type="text"
                                    placeholder='Name'
                                    name="name"
                                    onChange={handleRegisterInputs}
                                    value={registerFormData.name}
                                     />
                                <p className='form_error'>{formErrors.name}</p>
                            </span>
                            <span>
                                <input 
                                    type="text"
                                    placeholder='Email'
                                    name="email"
                                    onChange={handleRegisterInputs}
                                    value={registerFormData.email} />
                                <p className='form_error'>{formErrors.email}</p>
                            </span>
                        </div>
                        <div className='row_inputs_container'>
                            <span>
                                <input 
                                    type="text"
                                    placeholder='Phone'
                                    name="phone"
                                    onChange={handleRegisterInputs}
                                    value={registerFormData.phone} />
                                <p className='form_error'>{formErrors.phone}</p>
                            </span>
                            <span>
                                <select name="state"
                                        onChange={handleRegisterInputs}>
                                    <option value="">State</option>
                                    <option value="AndhraPradesh">AndhraPradesh</option>
                                    <option value="Telangana">Telangana</option>
                                    <option value="Karnataka">Karnataka</option>
                                    <option value="TamilNadu">TamilNadu</option>
                                </select>
                                <p className='form_error'>{formErrors.state}</p>
                            </span>
                        </div>
                        <div className='row_inputs_container'>
                            <span>
                                <input 
                                    type="text"
                                    placeholder='District'
                                    name='district'
                                    onChange={handleRegisterInputs}
                                    value={registerFormData.district} />
                                <p className='form_error'>{formErrors.district}</p>
                            </span>
                            <span>
                                <input 
                                    type="text"
                                    placeholder='Address'
                                    name='address'
                                    onChange={handleRegisterInputs} />
                                <p className='form_error'>{formErrors.address}</p>
                            </span>
                        </div>
                        <div className='row_inputs_container'>
                            <span>
                                <input 
                                    type="text"
                                    placeholder='Pincode'
                                    name='pincode'
                                    onChange={handleRegisterInputs}
                                    value={registerFormData.pincode} />
                                <p className='form_error'>{formErrors.pincode}</p>
                            </span>
                            <span>
                                <input 
                                    type="password"
                                    placeholder='Password'
                                    name='password'
                                    onChange={handleRegisterInputs}
                                    value={registerFormData.password} />
                                <p className='form_error'>{formErrors.password}</p>
                            </span>
                        </div>
                    </div>

                    <div className='register_form_container-right--row3'>
                        <div>
                            <input type="checkbox"
                                    name="isAgreeToTandC"
                                    onChange={handleRegisterInputs}
                                    checked={registerFormData.isAgreeToTandC} />
                            <label style={{"paddingLeft": "10px"}}>I agree to Terms & Condition receiving marketing and promotional materials</label>
                            <p className='form_error' style={{"textDecoration": "none"}}>{formErrors.isAgreeToTandC}</p>
                        </div>
                        <div>
                            <button className='register_form_container-right-btn'
                            onClick={handleUserRegisteration}>
                                Register
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Refer_Section />
            <Socials />
            <Footer />
        </>
    )
}