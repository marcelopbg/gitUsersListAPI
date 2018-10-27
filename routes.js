const express = require("express");
const router = express.Router();
const controller = require('./controller')

router.get("/users", controller.getUser)
router.get("/users/:username/details", controller.getUserDetails)
router.get("/users/:username/repos", controller.getUserRepos)
module.exports = router;
