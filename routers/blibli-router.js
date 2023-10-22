const express = require("express");
const blibli = express.Router();
const BlibliController = require("../controllers/blibli-controller");
const permissionMiddleware = require("../middlewares/permission-middleware");

const blibliController = new BlibliController();
blibli.get("/",permissionMiddleware ,blibliController.blibli);

module.exports = blibli;