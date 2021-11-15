import mongoose from 'mongoose'
const {ObjectId} = mongoose.Schema
 const TypeTicket = mongoose.Schema({
     name:{
         type: String,
         required: true
     },
     price:{
         type: Number,
         required: true
     },
     trainCar: {
        type: ObjectId,
        ref: 'TrainCar',
        required: true
    }
 })
 module.exports = mongoose.model("TypeTicket",TypeTicket);