import user from '../../models/Auth/user.model.js';
import habit from '../../models/User/habit.model.js'

export const getProfile = async (req, res) => {
    res.status(200).json({
        success: true,
        user: req.user
    });
}

export const userSetting = async (req , res) =>{
    try{
        const { userEmailNotification } = req.body;
        const existingUser = await user.findOne({ _id : req.user._id });
        
        if(!existingUser){
            return res.status(400).json({
                success:false,
                message:"user not find"
            })
        }
        
        existingUser.emailNotification = userEmailNotification;
        await existingUser.save();
        
        return res.status(200).json({
            success:true,
            message:"seting is change"
        })
    }catch(error){
        return res.status(500).json({
            success:false,
            message:"not change setting",
            error:error.message
        })
    }
}

export const resetHabitData = async (req, res) => {
    try {
        const userId = req.user._id;

        if (!userId) {
            return res.status(400).json({
                success: false,
                message: "not find your account"
            })
        }

        const existingUser = await user.findOne({ _id: userId });

        if (!existingUser) {
            return res.status(400).json({
                success: false,
                message: "user not find"
            })
        }

        await habit.deleteMany({ userId });

        existingUser.perfectDays = 0;
        existingUser.lastPerfectDate = null;
        existingUser.activeStreak = 0;
        existingUser.longestStreak = 0;
        existingUser.lastActiveDate = null;
        existingUser.executionHistory = [];

        await existingUser.save();

        return res.status(200).json({
            success: true,
            message: "habit data reset successfully",
            user: existingUser
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "habit data not reset",
            error: error.message
        })
    }
}

export const parmanetDeleteAccount = async (req , res) =>{
    try{
        const userId  = req.user._id;
        
        if(!userId){
            return res.status(400).json({
                success:false,
                message:"not find your account"
            })
        }
        
        await user.deleteOne({_id : userId});
        await habit.deleteMany({userId});

        const isProduction = process.env.NODE_ENV === 'production';
        const validSameSite = isProduction ? "none" : "strict";
        const cookieOptions = {
            httpOnly: true,
            secure: isProduction,
            sameSite: validSameSite
        };

        res.clearCookie("accessToken", cookieOptions);
        res.clearCookie("refreshToken", cookieOptions);

        return res.status(200).json({
            success:true,
            message:"your account parmnet delited"
        })
        
    }catch(error){
        return res.status(500).json({
            success:false,
            message: "your account not delete",
            error:error.message
        })
    }
}
