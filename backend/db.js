import mongoose from 'mongoose';
const mongoUrl="YOUR_MONGO_DB_URL";
// harshad125
const contomongo=()=>{
       mongoose.connect(mongoUrl,()=>{
           console.log("successfully connected");
       }).catch((err)=>console.log(err))
}

export default contomongo;