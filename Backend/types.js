const zod = require('zod');
const SignupValidation = zod.object({
    Name : zod.string(),
    email : zod.email(),
    password : zod.string().min(6)
});
const SigninValidation = zod.object({
    email : zod.email(),
    password : zod.string().min(6)
})

const RegistrationValidation = zod.object({
    groceryShopName: zod.string().min(1, "Shop name is required"),
    
    ownerDetails: zod.object({
        ownerName: zod.string().min(1, "Owner name is required"),
        email: zod.email("Invalid email format"),
        phoneNumber: zod.string().min(10, "Phone number must be at least 10 digits")
    }),
    
    groceryShopDetails: zod.object({
        shopNo: zod.string().optional(),
        area: zod.string().min(1, "Area is required"),
        city: zod.string().min(1, "City is required"),
        landmark: zod.string().optional(), 
        pincode: zod.string().regex(/^[0-9]{6}$/, "Pincode must be 6 digits")
    })
});

module.exports = {SignupValidation , SigninValidation , RegistrationValidation}

