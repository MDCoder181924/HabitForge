import express from "express";
import cors from "cors";

const app = express();

app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials:true
}))
app.use(express.json());

app.use("/" , (req , res)=>{
    app.send("API Running..")
})

export default app; 