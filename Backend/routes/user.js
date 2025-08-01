const express = require('express');
const {User} = require('../models/db');
const router  = express.Router();
const jwt = require('jsonwebtoken');
const { SignupValidation, SigninValidation } = require('../types');



router.post("/signup" , async (req,res) => {
    try{
    const { success }  = SignupValidation.safeParse(req.body) ;

    if(!success) {
       return res.status(411).json({msg : "Invalid inputs"});
    }
    const existingUser = await User.findOne({
        email: req.body.email 
       })
        
        if(existingUser) {
           return res.status(411).json({
                msg : "user already exists"
            })
        }
    
   const newUser =  await User.create({
        Name:req.body.Name,
        email:req.body.email,
        password:req.body.password
    });

    const token = jwt.sign({
    userId : newUser._id
    },process.env.JWT_SECRET);

    return res.json({
        msg : "Signup succesfull",
        token
    })
}
catch(error){
  return  res.status(500).json({
        msg:(`Internal server error  ${error.message}`)
    });
}
});

router.post("/signin" , async (req , res) =>{
    try{
        const { success } = SigninValidation.safeParse(req.body);
        if(!success){
          return res.status(411).json({
            msg : "Invalid inputs"
          }) 
        } 
        const signedInUser = await User.findOne({
            email : req.body.email,
            password : req.body.password
            
        });
        if(signedInUser){
            const token = jwt.sign({
                userId: signedInUser._id
            },process.env.JWT_SECRET)
            
            return res.json({
            token
        })
        } else {
            return res.status(411).json({
                msg : "Invalid credentials"
            })
        }      
    }catch(error){
        return res.status(500).json({
            msg :( `Internal server error  ${error.message}`)
        })
    }

})

module.exports = router
