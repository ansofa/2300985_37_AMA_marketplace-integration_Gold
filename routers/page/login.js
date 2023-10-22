const express = require("express");
const UserController = require("../../controllers/user-controller");
const loginPageMiddleware = require("../../middlewares/login-page-middleware");
const loginRouter = express.Router();

const userController = new UserController();

loginRouter.get("/login", loginPageMiddleware, userController.indexLogin);

module.exports = loginRouter;
