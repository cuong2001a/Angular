import mongoose from 'mongoose'
import moment from 'moment'
const {ObjectId} = mongoose.Schema
const  Train = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    addressArrival:{
        type: ObjectId,
        ref:"Arrival",
        required: true
    },
    addressGo:{
        type: ObjectId,
        ref:'AddressGo',
        required:true
    },
    thoiGianDi:{
        type: Date,
        required: true
    },
    thoiGianVe:{
        type: Date,
    }
    // typeTicket:{
    //     type: ObjectId,
    //     ref:'TypeTicket',
    //     required: true
    // },
    // typeTrip:{
    //     type: ObjectId,
    //     ref:"TypeTrip",
    //     required: true
    // }
})
module.exports = mongoose.model("Train",Train)