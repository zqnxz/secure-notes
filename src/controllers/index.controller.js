const noteSchema = require("../models/note.model")

module.exports = {
    get: async (req, res) => {
        try {
            const lastGeneratedUrl = await noteSchema.find({}).sort({_id: -1}).limit(1)
            console.log("latest", lastGeneratedUrl)
    
            res.render("index", {lastGeneratedUrl: lastGeneratedUrl[0] ? lastGeneratedUrl[0].shorten : []})
        } catch (err) {throw err}  
    }
} 