import mongoose from 'mongoose';
const Arrival = new mongoose.Schema({
    name:{
        type: String,
        required: true
    }
})
module.exports = mongoose.model("Arrival", Arrival);