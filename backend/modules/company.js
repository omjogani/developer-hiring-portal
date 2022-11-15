import mongoose from "mongoose";
const schema= mongoose.Schema;

 const companysc=new schema({
     name:{
        type:String,
        required:true
        
     },
     email:{
      type:String,
      required:true
     },
     password:{
      type:String,
      required:true
     },
     technology:{
         type:String,
         required:true
   
       },
     years:{
        type:String,
        required:true
     }

})

export default mongoose.model('Comp',companysc);