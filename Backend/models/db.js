const mongoose = require('mongoose');


mongoose.connect(process.env.MONGO_URI)
.then(() =>{
    console.log("MongoDb Connected");
})

 const Ecom_Schema = mongoose.Schema({
    firstname : String,
    secondname : String,
    email : String,
    phone : Number,
    password : String,
    confirmPassword : String,
})


module.exports = {
    Ecom_Schema
}
