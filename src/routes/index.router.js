const express = require("express")
const router = express.Router()

const indexController = require("../controllers/index.controller")
const createController = require("../controllers/note/create.controller")
router.get("/", indexController.get)
router.get("/:url", createController.getNote)

module.exports = router