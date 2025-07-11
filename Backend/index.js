const express = require("express");
const { createSignUp, createSignIn } = require("./types");

const app = express();
app.use(express.json());

app.post("/signup" , async function(req , res){
    const payload = req.body;
    const savePayload = createSignUp.safeParse(payload);
    
    if(!savePayload){
        res.status(411).json({
            msg : "Invalid Inputs"
        });
        return savePayload;
    }
    await signup.create({
        firstname : payload.firstname,
        secondname : payload.secondname,
        email : payload.email,
        phone : payload.number
    });
});

app.post("/signin" , async function(req , res){

  const payload = req.body;
  const savePayload = createSignIn.safeParse(payload);

  if(!savePayload){
    res.status(411).json({
        msg : "Invalid email and password"
    })
  }

})