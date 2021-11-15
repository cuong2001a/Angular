import express from 'express'
const router = express.Router();

import { create, edit, findOneAddress, list, remove } from '../controller/addressGo';
router.post('/addressGo/create', create);
router.put("/addressGo/edit/:addressGoId", edit);
router.delete('/addressGo/:addressGoId', remove);
router.get('/addressGo',list)
router.get("/addressGo/:addressGoId",findOneAddress)
module.exports = router;