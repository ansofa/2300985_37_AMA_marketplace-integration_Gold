const express = require("express");
const UserController = require("../../controllers/user-controller");
const permissionMiddleware = require("../../middlewares/permission-middleware");

const dashboardRouter = express.Router();
const userController = new UserController();

dashboardRouter.get("/dashboard", permissionMiddleware, userController.indexDashboard);
dashboardRouter.get("/", permissionMiddleware, userController.indexDashboard);

module.exports = dashboardRouter;
