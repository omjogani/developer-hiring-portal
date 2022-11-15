import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const projectschema = new Schema({
    title: {
        type: String,

    },
    description: {
        type: String
    },
    screenshot: {
        type: String
    },
    livelink: {
        type: String
    },
    githublink: {
        type: String
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:true
    }



});

export default mongoose.model('Project', projectschema);
