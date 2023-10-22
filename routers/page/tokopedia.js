const express = require("express");
const TokopediaController = require("../../controllers/tokopedia-controller");
const permissionMiddleware = require("../../middlewares/permission-middleware");
const tokopedia = express.Router();

const tokopediaController = new TokopediaController
tokopedia.get("/tokopedia",permissionMiddleware ,tokopediaController.tokopedia);

module.exports = tokopedia;
