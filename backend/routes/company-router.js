import express from 'express'
import { companyrg, deletecomp, getcompany, login, updatecomp } from '../controller/company-control.js'
const comrouter=express.Router()

comrouter.get('/',getcompany);
comrouter.post('/login',login);
comrouter.post('/companyin',companyrg);
comrouter.put('/update/:id',updatecomp);
comrouter.delete('/delete/:id',deletecomp);






export default comrouter
