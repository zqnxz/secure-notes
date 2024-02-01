const noteSchema = require("../../models/note.model")

module.exports = {
    createNote: (req, res) => {
        const {message} = req.body

        if(!message) {
            return res.status(400).send({
                message: "Message is required"
            })
        }

        noteSchema.create({message: message}).then(() => {
            console.log("inserted")
            res.redirect("/")
        }).catch(err => {throw err})
    },
    getNote: async (req, res) => {
        const {url} = req.params

        try {
            const isUrlAvailable = await noteSchema.findOne({shorten: url})
            
            if (!isUrlAvailable) return res.status(404).send("Note not Found");

            isUrlAvailable.views++

            await isUrlAvailable.save()

            if (isUrlAvailable.views >= 1) {
                noteSchema.deleteOne({shorten: url}).then(() => {
                    console.log("deleted")
                }).catch(err => {throw err})
            }

            res.send(isUrlAvailable.message) 
        } catch (err) { throw err }
    }
}