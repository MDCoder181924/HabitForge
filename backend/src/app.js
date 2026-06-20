import express from "express";
import cors from "cors";
import cookieParser from 'cookie-parser'

import authRoute from './routes/Auth/user.route.js'
import userRoute from './routes/User/user.route.js'
import habitRoute from  './routes/User/habit.route.js'

const app = express();

app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials:true
}))
app.use(express.json());
app.use(cookieParser());

app.use('/auth' , authRoute);
app.use('/user' , userRoute);
app.use('/habit' , habitRoute);

app.use("/" , (req , res)=>{
    res.send("API Running..")
})

export default app; 