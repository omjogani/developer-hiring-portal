import mongoose from 'mongoose'

const schema=mongoose.Schema;
import * as dotenv from 'dotenv';
dotenv.config({path:'./.env'});

const reuser=new schema({
      username:{
        type:String,
        unique:true,
        required:true,      
      },
      email:{
        type:String,
        unique:true,
        required:true
      },
      password:{
        type:String,
        unique:true,
        required:true,
      },
      mobile:{
        type:String,
        unique:true,

      },
      verify:{
        type:Boolean,
        defalut:false
      }
});



export default mongoose.model('Reguser',reuser)