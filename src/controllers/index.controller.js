const noteSchema = require("../models/note.model")

module.exports = {
    get: async (req, res) => {
        try {
            const lastGeneratedUrl = await noteSchema.find({}).sort({_id: -1}).limit(1)
    
            res.render("index", {lastGeneratedUrl: lastGeneratedUrl})
        } catch (err) {throw err}
    }
}