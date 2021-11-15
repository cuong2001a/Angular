import express from 'express'
const router = express.Router();

import { create, list,edit,remove, findOne } from '../controller/typeTicket';
router.post('/typeTicket/create',create );
router.get("/typeTicket",list);
router.put("/typeTicket/edit/:typeTicketId", edit);
router.delete('/typeTicket/:typeTicketId', remove);
router.get("/typeTicket/:typeTicketId",findOne);

module.exports = router;