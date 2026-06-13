import mongoose from "mongoose";

const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("database connected")
    }
    catch(err){
        console.log("error in DB connection", err.message)
        process.exit(1);
    }
}

export default connectDB;