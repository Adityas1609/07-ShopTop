const mongoose = require("mongoose")



const userSchema = mongoose.Schema({
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

module.exports = mongoose.model("user" , userSchema)