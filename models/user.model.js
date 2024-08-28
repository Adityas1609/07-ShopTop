const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/ShopTop")

const userModel = mongoose.Schema({
    username:{
        type : String
    },
    fullname:{
        type:String
    },
    email:{
        type:String,
    },
    password:{
        type:String
    },
    cart:{
        type:String,
        default:[]

    },
    isadmin: Boolean,
    contact : Number,
    picture: String
})

module.exports = mongoose.model("user" , userModel)