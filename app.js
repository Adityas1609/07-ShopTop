const express = require("express")
const app = express()

const cookieParser = require("cookie-parser")
const path = require("path")

const userModel = require("./models/user.model")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))
app.set("view engine" , "ejs")

app.get("/" , ( req, res) =>{
    res.render("index")
})

app.listen(3000)