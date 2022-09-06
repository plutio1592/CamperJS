const express = require("express");
const router = express.Router();

const campingRouter = require("./campings")
router.use("/campings", campingRouter)

module.exports = router;
