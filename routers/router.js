const express = require("express");
const shopee = require("./shopee-router");
const blibli = require("./blibli-router");
const tiktok = require("./tiktok-router");
const api = require("./api/api");
const tokopedia = require("./page/tokopedia");
const loginRouter = require("./page/login");
const authRouter = require("./page/auth");
const registerRouter = require("./page/register");
const dashboardRouter = require("./page/dashboard");

const router = express.Router();

router.use("/api", api);
router.use("/", tokopedia);
router.use("/", loginRouter);
router.use("/", authRouter);
router.use("/", registerRouter)
router.use("/", dashboardRouter)

router.use("/shopee", shopee);
router.use("/tiktok", tiktok);
router.use("/blibli", blibli);

module.exports = router;
