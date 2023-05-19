import mongoose from "mongoose"
const {ObjectId} = mongoose.Schema
const infoTicket = mongoose.Schema({
  train: {
    type: ObjectId,
    ref: "Train",
    required: true,
  },
  trainCar: {
    type: ObjectId,
    ref: "TrainCar",
    required: true,
  },
  desk: {
    type: ObjectId,
    ref: "Desk",
    required: true,
  },
  typeTrip: {
    type: ObjectId,
    ref: "TypeTrip",
    required: true,
  },
  nameUser: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },

  payment: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: false,
  },
  cmnd: {
    type: String,
  },
  phoneNumber: {
    type: String,
    required: true,
    maxLength: 10,
  },
  email: {
    type: String,
  },
  people: {
    type: Number,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
})
module.exports = mongoose.model("infoTicket", infoTicket)
