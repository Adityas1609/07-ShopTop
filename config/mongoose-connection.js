const mongoose  = require("mongoose")
const config = require("config")
const dbgr = require("debug")("development : mongoose")
mongoose.connect(`${config.get("MONGO_URL")}/ShopTop` )
.then(()=>{
    dbgr("conntected to server");
    
}).catch((error) =>{
    dbgr(error);
    
})

module.exports = mongoose.connection;