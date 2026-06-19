import express from "express";
import cors from "cors";
import cookieParser from 'cookie-parser'

import authRoute from './routes/Auth'
import userRoute from './routes/User'

const app = express();

app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials:true
}))
app.use(express.json());
app.use(cookieParser());

app.use('/auth' , authRoute);
app.use('/user' , userRoute);

app.use("/" , (req , res)=>{
    res.send("API Running..")
})

export default app; 