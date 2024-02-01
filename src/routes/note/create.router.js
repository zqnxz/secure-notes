const express = require("express")
const router = express.Router()

const createController = require("../../controllers/note/create.controller")
router.post("/post", createController.createNote)

module.exports = router