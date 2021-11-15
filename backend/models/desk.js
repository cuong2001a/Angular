import mongoose from 'mongoose'
const { ObjectId } = mongoose.Schema
const Desk = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    },
    toaTau: {
        type: ObjectId,
        ref: "TrainCar",
        required: false
    }
})
module.exports = mongoose.model("Desk", Desk);