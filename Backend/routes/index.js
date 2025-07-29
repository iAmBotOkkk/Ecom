const express = require('express');
const userRouter = require('./user');
const RegisterRouter = require('./register');
const router = express.Router();

router.use('/user', userRouter );
router.use('/details', RegisterRouter);

module.exports = router;