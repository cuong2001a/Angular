import mongoose from 'mongoose'

const AddressGo = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model("AddressGo", AddressGo);