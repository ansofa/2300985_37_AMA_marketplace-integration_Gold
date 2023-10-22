const express = require("express");
const register = express.Router();
const RegisterController = require("../controllers/register-controller");

const registerController = new RegisterController();
register.get("/", registerController.register);

module.exports = register;