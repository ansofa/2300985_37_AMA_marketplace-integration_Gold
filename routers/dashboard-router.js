const express = require("express");
const dashboard = express.Router();
const DashboardController = require("../controllers/dashboard-controller");
const permissionMiddleware = require("../middlewares/permission-middleware");

const dashboardController = new DashboardController();
dashboard.get("/",permissionMiddleware ,dashboardController.index);

module.exports = dashboard;