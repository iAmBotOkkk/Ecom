const express = require('express');
const router = express.Router();
const { Grocery } = require('../models/db');
const { RegistrationValidation } = require('../types');



router.post("/register" , async (req,res) => {
    try{
        const ValidationResult= RegistrationValidation.safeParse(req.body);
        if(!ValidationResult.success){
            return res.status(401).json({
                msg : "Invalid Inputs"
            })
        }
        const data = ValidationResult.data

        const existingShopDetails = await Grocery.findOne({
            shopNo :data.shopNo,
            email : data.email
        })
        if(existingShopDetails){
            return res.status(401).json({
                msg : "Shop already exists"
            })
        } else {
            const newShop = await Grocery.create({
               groceryShopName : data.groceryShopName,
                ownerDetails : {
                ownerName : data.ownerDetails.ownerName,
                email : data.ownerDetails.email,
                phoneNumber : data.ownerDetails.phoneNumber,
                },
                groceryShopDetails :{
                shopNo : data.groceryShopDetails.shopNo,
                area : data.groceryShopDetails.area,
                city : data.groceryShopDetails.city,
                landmark : data.groceryShopDetails.landmark,
                pincode : data.groceryShopDetails.pincode,
                }
            })
            return res.json({
                msg : "Registration succesfull",
                shop : newShop
            })
        }
    }catch(error){
         return  res.status(500).json({
        msg:(`Internal server error  ${error.message}`)
    });
    }
})

module.exports = router