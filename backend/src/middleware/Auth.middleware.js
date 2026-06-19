import user from '../models/Auth/user.model.js';
import jwt from 'jsonwebtoken'

export const authMiddleware = async (req, res , next) =>{
    try{

        const AccessToken = req.cookies.accessToken;

        if(!AccessToken){
            return res.status(401).json({
                success:false,
                message:"Unauthorized"
            })
        }

        const decoded = jwt.verify(AccessToken, process.env.ACCESS_TOKEN_SECRET);

        const existingUser = await user.findById(decoded.userId).select("-userPassword");

        if(!existingUser){
            return res.status(404).json({
                success:false,
                message:"User not found"
            })
        }

        req.user = existingUser;

        next()

    }catch(error){
        return res.status(401).json({
            success:false,
            message:"Ivalid Token",
            error: error.message
        })
    }
}
