const express = require("express")
const app = express()
const mongoose = require("mongoose")

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }))

const indexRouter = require("./routes/index.router")
const createRouter = require("./routes/note/create.router")

mongoose.connect("mongodb://127.0.0.1:27017/note").then(() => {
    console.log("DB Connected") 
}).catch(err => console.log(err)) 

app.use(indexRouter)
app.use(createRouter)

app.listen(3000)