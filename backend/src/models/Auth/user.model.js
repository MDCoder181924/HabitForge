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
    },
    perfectDays:{
        type: Number,
        default: 0
    },
    lastPerfectDate: {
        type: String,
        default: null
    },
    activeStreak: {
        type: Number,
        default: 0
    },
    longestStreak: {
        type: Number,
        default: 0
    },
    emailNotification:{
        type:Boolean,
        default:true
    },
    lastActiveDate: {
        type: String,
        default: null
    }
},{timestamps:true});

const user = mongoose.model("user" , userSchema);

export default user;