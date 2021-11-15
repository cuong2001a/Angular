import express from 'express'
const router = express.Router();

import { create,edit,findOne,list,remove } from '../controller/typeTrip';
router.post('/typeTrip/create',create );
router.put("/typeTript/edit/:typeTripId", edit);
router.delete('/typeTript/:typeTripId', remove);
router.get("/typeTrip",list)
router.get("/typeTrip/:typeTripId",findOne);

module.exports = router;