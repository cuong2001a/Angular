import express from 'express'
const router = express.Router();

import { create, edit, findOne, list, remove } from '../controller/addressArrival';
router.post('/addressArrival/create', create);
router.put("/addressArrival/edit/:addressArrivalId", edit);
router.delete('/addressArrival/:addressArrivalId', remove);
router.get("/addressArrival",list);
router.get("/addressArrival/:addressArrivalId",findOne)
module.exports = router;