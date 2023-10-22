const express = require("express");
const shopee = express.Router();
const ShopeeController = require("../controllers/shopee-controller");
const permissionMiddleware = require("../middlewares/permission-middleware");

const shopeeController = new ShopeeController();
shopee.get("/",permissionMiddleware ,shopeeController.shopee);

module.exports = shopee;