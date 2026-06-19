import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    userName:{
        type : String,
        required : true
    },
    userEmail:{
        type:String,
        required:true
    },
    userPassword:{
        type : String,
        require:true
    },
    verifiyed:{
        type:Boolean,
    },
    refreshToken:{
        type:String
    },
    provider:{
        type:String,
        enum:['local', 'google'],
        default:'local'
    },
    userProfilePic:{
        type:String
    }
},{timestamps:true});

const user = mongoose.model("user" , userSchema);

export default user;