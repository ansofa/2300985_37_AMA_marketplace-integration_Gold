const express = require("express");
const TokopediaController = require("../../controllers/tokopedia-controller");
const UserController = require("../../controllers/user-controller");
const permissionMiddleware = require("../../middlewares/permission-middleware");
const api = express.Router();

const tokopediaController = new TokopediaController();
const userController = new UserController();

// Endpoint store profile
api.post("/v1/profiles",permissionMiddleware ,tokopediaController.storeProfile);
// Endpoint update profile
api.put("/v1/profile/:id",permissionMiddleware ,tokopediaController.updateProfile);
// Endpoint fetch profile
api.get("/v1/tokopedia/profile",permissionMiddleware ,tokopediaController.fetchProfile);
//Endpoint delete profile
api.delete("/v1/tokopedia/profile/:id",permissionMiddleware ,tokopediaController.deleteProfile);
//Endpoint register
api.post("/v1/users/register", userController.register);

module.exports = api;
