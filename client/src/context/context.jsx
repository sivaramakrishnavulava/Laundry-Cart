import React, { useState } from "react";
import { useEffect } from "react";
const Context= React.createContext();
import { useNavigate } from "react-router-dom";

function ContextProvider({children}){
    const navigate = useNavigate();
    const [user, setUser]= useState({});
    function validateForm(formData){
        const formErrors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const {name, email, phone, state, district, address, pincode, password, isAgreeToTandC}= formData;
        if(!name){
            formErrors.name = "Input field should not be empty!"
        }
        if(!email){
            formErrors.email = "Input field should not be empty!"
        }
        else{
            if(!regex.test(email)){
                formErrors.email = "Enter valid Email!"
            }
        }
        if(!phone){
            formErrors.phone = "Input field should not be empty!"
        }
        else if(phone.length !== 10){
            formErrors.phone = "Enter valid Phone Number!"
        }
        if(!state){
            formErrors.state = "Please select state!"
        }
        if(!district){
            formErrors.district = "Input field should not be empty!"
        }
        if(!address){
            formErrors.address = "Input field should not be empty!"
        }
        if(!pincode){
            formErrors.pincode = "Input field should not be empty!"
        }
        else if(pincode.length !== 6){
            formErrors.pincode = "Enter valid Pincode!"
        }
        if(!password){
            formErrors.password= "Input field should not be empty!"
        }
        else if(password.length < 6){
            formErrors.password = "Password should not be less than 6 characters!"
        }
        if(isAgreeToTandC === false){
            formErrors.isAgreeToTandC= "Please select the checkbox!"
        }
        return formErrors;
    }
    //for registeration
    const userRegisteration= (formData) => {
        const {name, email, phone, state, district, address, pincode, password, isAgreeToTandC}= formData;
        fetch("http://localhost:8000/user/register", {
            method: "POST",
            headers : {
                "Content-Type": "application/json"
            },
            body : JSON.stringify({
                name, email, phone, state, district, address, pincode, password, isAgreeToTandC
            })
        }).then(res => res.json())
        .then(data => {
            if(data.message === "user already exists!"){
                alert("user already exists!")
                return;
            }
            if(data.message === "user registeration successfull!"){
                navigate("/")
            }
            else{
                return alert(data.message)
            }
        })
    }
    //for login
    const userLogin = (formData) =>{
        const {email, password}= formData;
        fetch("http://localhost:8000/user/login", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        }).then(res => res.json())
        .then(data => {
            if(data.message === "Incorrect Password!"){
                return alert("Incorrect Password!")
            }
            if(data.message === "user not registered!"){
                return alert("user not registered!")
            }
            if(data.message === "login successfull!"){
                localStorage.setItem("token", data.token);
                navigate("/homepage")
            }
        })
    }

    function getUser(){
        const token= localStorage.getItem("token");
        fetch("http://localhost:8000/order/userDetails", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        }).then(res => res.json())
          .then(data => {
            console.log(data)
            if(data.message === "user not found"){
                return alert("Authorization Error")
            }
            if(data.message === "user found!"){
                setUser(data.user);
            }
          })
    }
    return (
        <Context.Provider value={{validateForm, userRegisteration, userLogin, getUser, user}}>
            {children}
        </Context.Provider>
    )
}
export {ContextProvider, Context};
