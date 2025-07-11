const mongoose = require('mongoose');
const { email, string, number } = require('zod');

mongoose.connect(process.env.MONGO_URI)
.then(() =>{
    console.log("MongoDb Connected");
})

 const Ecom_Schema = mongoose.Schema({
    firstname : string,
    secondname : string,
    email : string,
    phone : number
})


module.exports = {
    Ecom_Schema
}
