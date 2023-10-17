const express= require("express");
const router= express.Router();
router.use(express.json());
const User= require("../models/user");
const bcrypt= require("bcrypt");
const jwt= require("jsonwebtoken");
const dotenv= require("dotenv");
dotenv.config();
const SECRET_KEY= process.env.SECRET_KEY;

router.post("/register", async(req, res) =>{
    try {
        const {name, email, phone, state, district, address, pincode, password}= req.body;
        const existingUser= await User.findOne({email});
        if(existingUser){
            res.json({
                message: "user already exists!"
            })
        }
        else{
            bcrypt.hash(password, 10, async function(err, hash){
                if(err){
                    return res.status(400).json({
                        message: err.message
                    })
                }
                else{
                    const user= await User.create({
                        name, 
                        email, 
                        phone, 
                        state, 
                        district, 
                        address, 
                        pincode, 
                        password: hash
                    });
                    res.status(200).json({
                        message: "user registeration successfull!",
                        user
                    })
                }
            })
        }
    } catch (error) {
        res.status(401).json({
            message: error.message
        })
    }
})

router.post("/login", async(req, res) =>{
    try {
        const {email, password}= req.body;
        const existingEmail= await User.findOne({email});
        if(existingEmail){
            const userPassword = existingEmail.password;
            const isMatch = await bcrypt.compare(password, userPassword);
            if(isMatch){
                const token= jwt.sign({
                                data: existingEmail.email
                            }, SECRET_KEY)
                            res.status(200).json({
                                message: "login successfull!", 
                                token
                            })
            }
            else {
                return res.status(402).json({
                    message : "Incorrect Password!"
                })
            }
        }
        else{
            res.json({
                message: "user not registered!"
            })
        }
        
    } catch (error) {
        res.status(401).json({
            message: error.message
        })
    }
})

module.exports= router;