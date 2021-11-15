import express from 'express'
const router = express.Router();

import { create, list,edit,remove, findbyTrain, findOne } from '../controller/trainCar';
router.post('/trainCar/create',create );
router.put("/trainCar/edit/:trainCarId", edit);
router.delete('/trainCar/:trainCarId', remove);
router.get('/trainCar',list)
router.get('/trainCar/search',findbyTrain);
router.get('/trainCar/:trainCarId',findOne)
module.exports = router;