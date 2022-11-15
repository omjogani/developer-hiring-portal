import express from 'express'
import { getAllproject ,addproject,updateproject, getbyid, deleteproject, getuserbyid} from '../controller/Project-control.js';

const projectrouter=express.Router();

projectrouter.get('/',getAllproject)
projectrouter.post('/add',addproject)
projectrouter.put('/update/:id',updateproject)
projectrouter.get('/:id',getbyid)
projectrouter.delete('/:id',deleteproject)
projectrouter.get('/user/:id',getuserbyid)

export default projectrouter;