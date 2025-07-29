const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Grocery = require('../models/db');
const { RegistrationValidation } = require('../types');



router.post("/register" , async (req,res) => {
    try{
        const { success } = RegistrationValidation.safeParse(req.body);
        if(!success){
            return res.status(403).json({
                msg : "Invalid Inputs"
            })
        }

        const existingShopDetails = await Grocery.findOne({
            shopNo : req.body.shopNo,
            email : req.body.email
        })
        if(existingShopDetails){
            return res.status(403).json({
                msg : "Shop already exists"
            })
        } else {
            const newShop = Grocery.create({
               groceryShopName : req.body.groceryShopName,
                ownerDetails : {
                    ownerName : req.body.ownerName
                },
                email : req.body.email,
                phoneNumber : req.body.phoneNumber,
                groceryShopDetails :{
                    shopNo : req.body.shopNo,
                    area : req.body.area,
                    city : req.body.city,
                    landmark : req.body.landmark,
                    pincode : req.body.pincode,
        
                }
            })
        }
    }catch(error){
         return  res.status(500).json({
        msg:(`Internal server error  ${error.message}`)
    });
    }
})