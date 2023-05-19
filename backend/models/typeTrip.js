import mongoose from 'mongoose'

 const TypeTrip = mongoose.Schema({
     name:{
         type: String,
         required: true
     }
 })
 module.exports = mongoose.model("TypeTrip",TypeTrip);