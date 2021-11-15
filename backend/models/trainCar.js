import mongoose from 'mongoose';
const {ObjectId} = mongoose.Schema;
const TrainCar = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    train: {
        type: ObjectId,
        ref:"Train",
        required: false
    }
})
module.exports = mongoose.model("TrainCar", TrainCar)