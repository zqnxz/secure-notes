const express = require("express")
const router = express.Router()

const createController = require("../../controllers/note/create.controller")
router.post("/create", createController.createNote)
router.get("/:url", createController.getNote)

module.exports = router