const express = require("express");
const tiktok = express.Router();
const TiktokController = require("../controllers/tiktok-controller");
const permissionMiddleware = require("../middlewares/permission-middleware");

const tiktokController = new TiktokController();
tiktok.get("/",permissionMiddleware ,tiktokController.tiktok);

module.exports = tiktok;