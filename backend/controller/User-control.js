import User from '../modules/User.js';

export const getuser = async (req, res) => {
    let users;
    try {
        users = await User.find().sort({name:1});
    } catch (error) {
        console.log(error)

    }
    if (!users) {
        return res.status(404).json({ message: "user not found" })
    }
    return res.status(200).json({ users });
}

export const getuserin=async (req,res)=>{
    let existinguser;
    let did=req.params.id;
    try {
        existinguser=await User.findOne({email:req.body.email})
        if(existinguser)
        {
            return res.status(400).json({message:"user is already exist"})
        }
        const user=await User.create({
            name:req.body.name,
            email:req.body.email,
            bio:req.body.bio,
            skill:req.body.skill,
            social:req.body.social,
            experience:req.body.experience,
            userid:did,
            projects:[]
        })
        user.save();
        return res.status(200).json({user});
    } catch (error) {
        console.log(error);
    }
}

export const updateuser=async(req,res)=>{
    const {name,bio,skill,social,experience}=req.body;
    let did=req.params.id;
    let dev;
    try {
       dev=await User.findByIdAndUpdate(did,{name,bio,skill,social,experience})
    } catch (error) {
        console.log(error);
    }
    if(!dev)
    {
        return res.status(500).json({message:"unable to update the data"});
    }
    return res.status(200).json({dev});

}


export const getbyid=async(req,res)=>{
    let userid=req.params.id;
    let user;
    try {
        user=await User.findById(userid);
    } catch (error) {
        console.log(error);
    }
    if(!user)
    {
        return res.status(404).json({message:"user not found"});
    }
    return res.status(200).json({user});
}


export const Delete=async(req,res)=>{
      let userid=req.params.id;
      let user;
      try {
         user=await User.findByIdAndRemove(userid);
      } catch (error) {
        console.log(error);
      }
      if(!user)
      {
        return res.status(404).json({message:"user not deleted perfectly"});
      }
      return res.status(200).json({message:"user successfully deleted"});

}