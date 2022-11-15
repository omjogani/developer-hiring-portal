import jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv';
dotenv.config({path:'../.env'});
import Reguser from '../modules/registration.js'

const fetchuser=async (req,res,next)=>{
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer'))
    {
        try {
            token=req.headers.authorization.split(' ')[1];
            const decoded=jwt.verify(token,process.env.JWTTOKEN);
            req.user=await Reguser.findById(decoded.id).select('-password');
            next();
        } catch (error) {
            console.log(error);
            res.status(400)
            throw new Error('not authentication is done')
        }
    }
    if(!token)
    {
        res.status(400)
        throw new Error('not find token'); 
    }
} 

export default fetchuser