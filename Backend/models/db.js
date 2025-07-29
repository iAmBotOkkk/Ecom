const mongoose = require("mongoose");
const dotenv = require('dotenv');


dotenv.config();
 const Connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("mongoDb connected");
    } catch (error) {
        console.log("Can't connect" , error.message);
    }
 }
 Connection();
 
  const UserSchema = mongoose.Schema({
    Name:String,
    email:String,
    password:String
  });


const GroceryRegistrationSchema = mongoose.Schema({
    groceryShopName: {
        type: String,
        required: true
    },
    ownerDetails: {
        ownerName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        phoneNumber: {
            type: String,
            required: true
        }
    },
    groceryShopDetails: {
        shopNo: String,
        area: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        landmark: String,
        pincode: String
    },
    registrationStatus: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending'
    },
    submittedAt: {
        type: Date,
        default: Date.now
    }
});

  const User = mongoose.model("User" , UserSchema);
  const Grocery = mongoose.model("Grocery" , GroceryRegistrationSchema )
  module.exports =  {User , Grocery}