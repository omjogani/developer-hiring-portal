import mongoose from 'mongoose';
const mongoUrl="mongodb+srv://javiya_125:harshad125@cluster1.oxydu.mongodb.net/odhp?retryWrites=true&w=majority";
// harshad125
const contomongo=()=>{
       mongoose.connect(mongoUrl,()=>{
           console.log("successfully connected");
       }).catch((err)=>console.log(err))
}

export default contomongo;