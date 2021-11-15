import mongoose from 'mongoose'

 const TypeTrip = mongoose.Schema({
     name:{
         type: String,
         requied: true
     }
 })
 module.exports = mongoose.model("TypeTrip",TypeTrip);