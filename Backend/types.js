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

module.exports = {SignupValidation , SigninValidation}

