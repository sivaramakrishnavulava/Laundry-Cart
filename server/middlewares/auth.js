const {verify}= require("jsonwebtoken");
const dotenv= require("dotenv");
const SECRET_KEY= process.env.SECRET_KEY;
const validateToken = (req, res, next) =>{
    const token = req.headers.authorization;
    if(!token){
        return res.json({
            message: "User not logged in!"
        })
    }else{
        const decode= verify(token, SECRET_KEY);
        const data= decode.data;
        req.email= data;
        next();
    }
}
module.exports = {validateToken};