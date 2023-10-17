const express= require("express");
const router= express.Router();
router.use(express.json());
const {validateToken}= require("../middlewares/auth");
const User = require("../models/user");
const Order = require("../models/order");

router.get("/userDetails", validateToken, async(req, res)=>{
    const user= await User.findOne({email : req.email}) 
    if(user){
        res.json({
            message: "user found!",
            user
        })
    }
    else{
        res.json({
            message: "no user found!"
        })
    }
})

module.exports= router;