import mongoose from 'mongoose';
import Project from '../modules/Project.js'
import User from '../modules/User.js'

export const getAllproject=async(req,res,next)=>{

    let project;
    try {
        project=await Project.find().populate('user');
        if(!project)
        {
          return  res.status(400).json({message:"blog is not found"})
        }
        return res.status(200).json({project})
        
    } catch (error) {
        console.log(error);
    }
}

export const addproject=async(req,res,next)=>{
    const {title,description,screenshot,livelink,githublink,user}=req.body;
    let existinguser;
    try {
        existinguser=await User.findById(user);
        
    } catch (error) {
        console.log(error);
    }
    if(!existinguser)
    {
        return res.status(400).json({message:"user not found"});
    }
    const project=new Project({title,description,screenshot,livelink,githublink,user});
    try {
        const session=await mongoose.startSession();
         session.startTransaction();
        await project.save({session});
        existinguser.projects.push(project);
        await existinguser.save({session});
        await session.commitTransaction();

    } catch (error) {
         console.log(error);
         return res.status(500).json({message:"sorry fail to add project "});
        
    }
    return res.status(200).json({project})
}

export const updateproject=async(req,res,next)=>{
    const {title,description,livelink}=req.body;
    const projectid=req.params.id
    let project;
    try {
        project=await Project.findByIdAndUpdate(projectid,{title,description,livelink});
        
    } catch (error) {
        return console.log(error)
    }
    if(!project)
    {
        return res.status(500).json({message:"unable to updata data"});
    }
    return res.status(200).json({project});

}

export const getbyid=async(req,res,next)=>{
    const id=req.params.id
    let project;
    try {
        project=await Project.findById(id);
        
    } catch (error) {
        return console.log(error);
    }
    if(!project)
    {
        return res.status(404).json({message:"blog not found"})
    }
    return res.status(200).json({blog})
}

export const deleteproject=async(req,res,next)=>{
    const id=req.params.id;
    let project;
    try {
        project=await Project.findByIdAndRemove(id).populate('user');
        await project.user.projects.pull(project);
        await project.user.save();
    } catch (error) {
        console.log(error);
    }
    if(!project)
    {
        return res.status(500).json({message:"unable to delete blog"})
    }
    return res.status(200).json({message:"deleted successfully"})
}

export const getuserbyid=async(req,res,next)=>{
    const id=req.params.id;
    let userproject;
    try {
        userproject=await User.findById(id).populate("projects"); 
    } catch (error) {
        console.log(error)
    }
    if(!userproject)
    {
        return res.status(404).json({message:"user blog was not found"});
    }
    return res.status(200).json({user:userblog})
}