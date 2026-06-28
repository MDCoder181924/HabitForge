import user from '../../models/Auth/user.model.js';

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