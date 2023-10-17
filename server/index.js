const express= require("express");
const app= express();
app.use(express.json());

const bodyparser= require("body-parser");
app.use(bodyparser.urlencoded({ extended : false}));

//dotenv
const dotenv= require("dotenv");
dotenv.config();

//cors
const cors= require("cors");
app.use(cors({ origin: "*" }));
app.use(cors());

//mongoose connection
const mongoose= require("mongoose");
const MONGO_URI= process.env.MONGO_URI;
mongoose.connect(MONGO_URI)
        .then(()=> console.log(`connection to db successful`))
        .catch((error) => console.log(`connection to db error: ${error}`))

//routes
const userRoute= require("./routes/user");
const orderRoute= require("./routes/order");
app.use("/user", userRoute);
app.use("/order", orderRoute);
app.get("/", (req, res)=>{
    res.send(`Server side`)
})

const PORT= process.env.PORT || 8000;
app.listen(PORT, console.log(`Server successfully connected at ${PORT}`))

