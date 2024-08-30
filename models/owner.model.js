const mongoose = require("mongoose")


const ownerSchema = mongoose.Schema({
  
    fullname:{
        type:String ,
        minLength : 3,
        trim : true
    },
    email:{
        type:String,
    },
    password:{
        type:String
    },
    product:{
        type:String,
        default:[]

    },
   
    picture: String,
    gstin : String
});

module.exports = mongoose.model("owner" , ownerSchema)