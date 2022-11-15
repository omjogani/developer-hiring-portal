import mongoose from 'mongoose';

const Schema=mongoose.Schema;

const tokenschema=new Schema({
    userId:{
    type: Schema.Types.ObjectId,
    required:true,
    ref:"User",
    unique:true
     },
     token:{
        type:String,
        required:true
     },
     createAt:{
        type:Date,
        default:Date.now(),
        expires:3600
     }

})

export default mongoose.model("Token",tokenschema);

