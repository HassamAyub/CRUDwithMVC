const express=require('express');
const router=express.Router();
const CtrlFuncs=require('../controllers/cUser.js')

router
    .route('/')
    .get(CtrlFuncs.getAllusers)
    .post(CtrlFuncs.postnewUser)

router
    .route('/:id')
    .get(CtrlFuncs.getuserbyID)
    .patch(CtrlFuncs.updateUserbyID)
    .delete(CtrlFuncs.deleteUserbyID)

module.exports=router;
