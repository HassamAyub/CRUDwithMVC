const express=require('express');
const router=express.Router();
const CtrlFuncs=require('../controllers/cUser.js')

router
    .route('/')
    .get(CtrlFuncs.getAllusers)
    .post(CtrlFuncs.postnewUser)

module.exports=router;
