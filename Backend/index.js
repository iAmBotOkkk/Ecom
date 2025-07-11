const express = require("express");
const { createEcom } = require("./types");
const { email } = require("zod");

const app = express();
app.use(express.json());

app.post("/signup" , async function(req , res){
    const payload = req.body;
    const savePayload = createEcom.safeParse(payload);
    
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
        phone : payload.email
    })

})