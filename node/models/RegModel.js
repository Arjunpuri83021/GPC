const mongoose=require('mongoose')

const MongoSchema=mongoose.Schema({
    name:String,
    email:String,
    number:Number,
    password:String
})

module.exports = mongoose.model('8AmReg',MongoSchema)