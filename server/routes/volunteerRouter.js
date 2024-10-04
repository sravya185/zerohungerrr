const express = require("express");

const {register,login} = require('../controllers/login_register')


const volunteerRouter = express.Router();

volunteerRouter.post('/register',register)
volunteerRouter.post('/login',login)




module.exports = volunteerRouter;