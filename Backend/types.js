const z = require('zod');

const createSignUp = z.object({
    firstname : z.string(),
    secondname : z.string(),
    email : z.string(),
    phone : z.number(),
    password : z.string(),
    confirmPassword : z.string()
});

const createSignIn = z.object({
    email : z.string(),
    password : z.string() 
})


module.exports = { createSignUp , createSignIn }