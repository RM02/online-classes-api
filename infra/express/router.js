const express = require("express");
const router = express()

const courseInterface = require("./routes/course");
const userInterface = require("./routes/user");
const authInterface = require("./routes/auth");

//auth endpoint
router.post("/auth/login", authInterface.login)
// user endpoints
router.post("/user/create", userInterface.create)
router.get("/user/getAll", userInterface.getAll)
router.get("/user/:id", userInterface.getOne)
// course endpoints
router.post("/course/create", courseInterface.create)
router.get("/course/getAll", courseInterface.getAll)
router.post("/course/:id/subscribe/:user", courseInterface.subscribe)

router.get("/ping", courseInterface.ping)

module.exports = router;