import mongoose from 'mongoose';

const Schema=mongoose.Schema;

const userschema=new Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String
    },
    bio:{
        type:String,

    },
    skill:[
        {
            type:String,
        }
    ],
    social:[{
        twitter:{type:String},
        github:{type:String},
        linkedIn:{type:String},
        instagram:{type:String}
    }],
    experience:{
       type:Number
    },
    userid:{
        type:mongoose.Types.ObjectId,ref:"registration",required:true
    },
    projects:[{type:mongoose.Types.ObjectId,ref:"Project",required:true}]
   
     
});

export default mongoose.model('User',userschema);
