const mongoose= require("mongoose");
const userSchema= new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    state: String,
    district: String,
    address: String,
    pincode: Number, 
    password: String
})
const User= mongoose.model("User", userSchema);
module.exports= User;