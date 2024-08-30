const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    image : String ,
    name : String , 
    price : Number,
    discount : {
        type :String,
        default : 0
    },
    bgcolor :String,
    panelcolor: String,
    textcolor : String


})

exports.module =  mongoose.model("product" ,productSchema)