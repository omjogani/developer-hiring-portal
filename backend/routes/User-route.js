import express from 'express'
import {Delete, getbyid, getuser,getuserin, updateuser}from "../controller/User-control.js"
import {signup,login, verified}from "../controller/rg-control.js"
import fetchuser from '../middleware/fetchuser.js';


const router=express.Router()

router.get('/',getuser);
router.post('/userin/:id',getuserin)
router.post('/signup',signup)
router.post('/login',login)
router.put('/update/:id',updateuser)

router.delete('/delete/:id',Delete)
//router.get('/:id',fetchuser,getbyid)
router.get('/:id',getbyid)
router.get('/:id/varify/:token',verified)

export default router
