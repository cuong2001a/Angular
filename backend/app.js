import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import moment from 'moment'
const app = express();
dotenv.config();
moment().format('DD MM YYYY hh:mm:ss');

const addressGo = require("./routes/addressGo")
const addressArrival = require("./routes/addressArrival")
const desk = require("./routes/desk")
const infoTicket = require('./routes/infoTicket')
const train  =require('./routes/train')
const trainCar = require('./routes/trainCar')
const typeTicket = require("./routes/typeTicket")
const typeTrip = require("./routes/typeTrip")



app.use(express.json())
app.use(cors({ credentials: "same origin" }));
app.use('/api',addressArrival)
app.use('/api',addressGo);
app.use('/api',typeTicket);
app.use('/api',desk);
app.use('/api',infoTicket);
app.use('/api',train);
app.use('/api',trainCar);
app.use('/api',typeTrip);

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if(err) throw err;
    console.log('Connected to MongoDB!!!')
    });
mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`)
})
const port = process.env.PORT || 3000
app.listen(port ,()=>{
    console.log("Server is running on",port);
})