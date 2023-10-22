const express = require("express");
const UserController = require("../../controllers/user-controller");
const registerRouter = express.Router();

const userController = new UserController();

registerRouter.get("/register", userController.indexRegister);

module.exports = registerRouter;