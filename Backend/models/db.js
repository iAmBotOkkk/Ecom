const dotenv = require("dotenv");
const mongoose = require('mongoose');
dotenv.config();
mongoose.connect(process.env.MONGO_URI)
.then(() =>{
    console.log("MongoDb Connected");
});
 const Ecom_Schema = new mongoose.Schema({
    firstname : String,
    secondname : String,
    email : String,
    phone : String, 
    password : String, 
});

 module.exports = mongoose.model('Ecom' , Ecom_Schema);
