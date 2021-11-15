import express from 'express'
const router = express.Router();

import { create, edit, findOneTrain, listRelated, remove, search } from '../controller/train';
router.post('/train/create',create );
router.get("/train/search",search); // tim kiem theo ngay, diem den , diem di, chuyen tau
router.get('/train',listRelated) // show toan bo tau
router.put("/train/edit/:trainId", edit);
router.delete('/train/:trainId', remove);
router.get("/train/:trainId",findOneTrain); // tim kiem 1 tau
module.exports = router;