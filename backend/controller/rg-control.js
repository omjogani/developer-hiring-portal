import { body, validationResult } from 'express-validator'
import bcrypt from 'bcryptjs'
import Reguser from '../modules/registration.js'
import multer from 'multer';
import sendmail from '../controller/sendmail.js'
import Token from '../modules/token.js'
import crypto from 'crypto';
import * as dotenv from 'dotenv';
dotenv.config({path:'../.env'});
import jwt from 'jsonwebtoken'
import fetchuser from '../middleware/fetchuser.js';
import cookieToken from '../utlis/cookieToken.js'


/*const generatetoken=(id)=>{
      return jwt.sign({id},process.env.JWTTOKEN,{expiresIn:'1d'});
}
*/

export const signup = ([body('username', 'enter vaild name').isLength({ min: 8 }),
body('email', 'enter vaild email').isEmail(),
body('password', 'enter vaild password').isLength({ min: 8 })
],async (req, res, next) => {
    let existinguser;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
  
    try {
        existinguser = await Reguser.findOne({ email: req.body.email })
        if (existinguser) {
            return res.status(400).json({ message: "user is already exist" })
        }
        const salt = await bcrypt.genSalt(10);
        const secpass = await bcrypt.hash(req.body.password, salt)

        const user = await Reguser.create({
            username: req.body.username,
            email: req.body.email,
            password: secpass,
            mobile:req.body.mobile,
        })
        user.save();
       
        const token=await new Token({
            userId:user._id,
            token:crypto.randomBytes(32).toString("hex")

        }).save();
        cookieToken(user, res);
       // const url=`${process.env.BASE_URL}user/${user._id}/verify/${token.token}`
        // await sendmail(user.email,"Verify Email",url)
       // return res.status(201).json({ meaage:"please verify your email" });
      // return res.status(201).json({message:"register successfully",user:user});

    } catch (error) {
        return console.log(error);
    }

});

export const verified=async(req,res)=>{
    const user=await Reguser.findOne({_id:req.params.id})
    if(!user)
    {
        return res.status(400).json({message:"not vefity"});
    }
    const token=await new Token.findOne({
        userId:Reguser._id,
        token:req.params.token

    })
    if(!token)
    {
        return res.status(401).json({message:"token not found"});
    }
    await Reguser.updateOne({_id:Reguser._id,verify:true});
    await token.remove();

    res.status(200).json({meaage:"verify successful"})

}

export const login = ([
    body('email', 'enter vaild email').exists(),
    body('password', 'passwork cannot be blank').exists()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
        let user = await Reguser.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "please try to login with correct info" });
        }
        const passcom = await bcrypt.compare(password, user.password);
        if (!passcom) {
            return res.status(400).json({ error: "please try to login with correct info" });
        }
       /* if(!user.verify)
        {
            let tokan=await Token.findOne({userId:user._id});
            if(!tokan)
            {
                const token=await new Token({
                    userId:Reguser._id,
                    token:crypto.randomBytes(32).toString("hex")
        
                }).save();
                const url=`${process.env.BASE_URL}user/${Reguser._id}/verify/${token.token}`
                await sendmail(user.email,"Verify Email",url)
                
            }
            return  res.status(200).json({ message:"verify link was send please verify it",user:user})
        }*/
        cookieToken(user, res);
       // return  res.status(200).json({ message:"login success",user:user})
       // return  res.status(200).json({ message:"login success",user:user,token:generatetoken(user._id)})
    } catch (error) {
        console.log(error.message)
    }
})

// export const photo=(upload.single('photo'),async(req,res)=>{
//     console.log(req.file);
// })
