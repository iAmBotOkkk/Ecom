const z = require('zod');

const createEcom = z.object({
    firstname : z.string(),
    secondname : z.string(),
    email : z.string(),
    phone : z.number()
})


module.exports = { createEcom }