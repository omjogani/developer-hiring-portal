import Comp from '../modules/company.js'
import { body, validationResult } from 'express-validator'


export const getcompany=async(req,res)=>{
      let comp;
      try {
        comp=await Comp.find();
      } catch (error) {
        console.log(error);
      }
      if(!comp)
      {
        return res.status(404).json({message:"company does not found"});
      }
      return res.status(200).json({comp});
}

export const companyrg=async(req,res)=>{
    const {name,email,password,technology,years}=req.body
    console.log(req.body)
    let existcompany;
    try {
        existcompany=await Comp.findOne({name:name});
        if(existcompany)
        {
            return res.status(500).json({message:"company is already exist"});
        }
        const comp=await Comp.create({
            name:name,
            email:email,
            password:password,
            technology:technology,
            years:years
        });
        comp.save();
        return res.status(200).json({comp});
    } catch (error) {
        console.log(error);
    }
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
        let comp = await Comp.findOne({ email });
        if (!comp) {
            return res.status(400).json({ error: "please try to login with correct info" });
        }
        if (!password) {
            return res.status(400).json({ error: "please try to login with correct info" });
        }
       
       return  res.status(200).json({ message:"login success",user:comp})
       // return  res.status(200).json({ message:"login success",user:user,token:generatetoken(user._id)})
    } catch (error) {
        console.log(error.message)
    }
})

export const updatecomp=async(req,res)=>{
    const {name,tech,logo,years}=req.body
    let com;
    let cid=req.params.id;
    try {
        com=await Comp.findByIdAndUpdate(cid,{Name:name,Technology:tech,Logo:logo,Years:years});
    } catch (error) {
        console.log(error);
    }
    if(!com)
    {
        return res.status(400).json({message:"unable to update the data"});
    }
    return res.status(200).json({com});
}

export const deletecomp=async(req,res)=>{
    let id=req.params.id;
    let deletecomp;
    try {
        deletecomp=await Comp.findByIdAndRemove(id);
    } catch (error) {
        console.log(error)
    }
    if(!deletecomp)
    {
        return res.status(400).json({message:"unable to delete company"})
    }
    return res.status(200).json({message:"deleted successfully"});
}