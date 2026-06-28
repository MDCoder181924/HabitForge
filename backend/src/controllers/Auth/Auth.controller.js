import user from '../../models/Auth/user.model.js';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
import { OAuth2Client } from "google-auth-library";
import { generateAccessToken, generateRefreshToken } from '../../services/sesstionService.js'

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)

const isProduction = process.env.NODE_ENV === 'production'

const validSameSite = isProduction ? "none" : "strict";

export const userRagister = async (req, res) => {
    try {
        const { userName, userEmail, userPassword } = req.body;

        if (!userName || !userEmail || !userPassword) {
            return res.status(400).json({
                success: false,
                message: "fill oll info"
            })
        }

        const existingUser = await user.findOne({ userEmail });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "Email already exists"
            });
        }

        const newUserPassword = await bcrypt.hash(userPassword, 10);

        const newUser = await user.create({
            userName,
            userEmail,
            userPassword: newUserPassword
        })

        const AccessToken = await generateAccessToken(newUser);
        const RefreshToken = await generateRefreshToken(newUser);

        newUser.refreshToken = RefreshToken;

        await newUser.save();

        res.cookie("accessToken", AccessToken, {
            httpOnly: true,
            secure: isProduction,
            sameSite: validSameSite,
            maxAge: 15 * 60 * 1000
        })

        res.cookie("refreshToken", RefreshToken, {
            httpOnly: true,
            secure: isProduction,
            sameSite: validSameSite,
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        return res.status(200).json({
            success: true,
            message: "User Ragister"
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "not ragister",
            error: error.message
        })
    }
}

export const userLogin = async (req, res) => {
    try {
        const { userEmail, userPassword } = req.body;

        if (!userEmail || !userPassword) {
            return res.status(400).json({
                success: false,
                message: "fill oll filds"
            })
        }

        const existingUser = await user.findOne({ userEmail });

        if (!existingUser) {
            return res.status(400).json({
                success: false,
                message: "user not exist",
            })
        }

        const isValisPassword = await bcrypt.compare(userPassword, existingUser.userPassword);

        if (!isValisPassword) {
            return res.status(400).json({
                success: false,
                message: "password not mach"
            })
        }

        const AccessToken = await generateAccessToken(existingUser);
        const RefreshToken = await generateRefreshToken(existingUser);

        res.cookie("accessToken", AccessToken, {
            httpOnly: true,
            secure: isProduction,
            sameSite: validSameSite,
            maxAge: 15 * 60 * 1000
        })

        res.cookie("refreshToken", RefreshToken, {
            httpOnly: true,
            secure: isProduction,
            sameSite: validSameSite,
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        existingUser.refreshToken = RefreshToken;

        await existingUser.save()

        return res.status(200).json({
            success: true,
            message: "Login Successfully"
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Not Login",
            error: error.message
        })
    }
}

export const userLogout = async (req, res) => {
    try {
        const RefreshToken = req.cookies.refreshToken;

        const existingUser = await user.findOne({ refreshToken: RefreshToken });

        const cookieOptions = {
            httpOnly: true,
            secure: isProduction,
            sameSite: validSameSite
        };

        if (!existingUser) {
            res.clearCookie("accessToken", cookieOptions);
            res.clearCookie("refreshToken", cookieOptions);
            return res.status(200).json({
                success: true,
                message: "User is not loogged in"
            })
        }

        existingUser.refreshToken = null;
        await existingUser.save();

        res.clearCookie("accessToken", cookieOptions);
        res.clearCookie("refreshToken", cookieOptions);

        return res.status(200).json({
            success: true,
            message: "logged out successfully"
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Logout Fail",
            error: error.message
        })
    }
}

export const refreshAccessToken = async (req, res) => {
    try {

        const RefreshToken = req.cookies.refreshToken;

        if (!RefreshToken) {
            return res.status(401).json({
                success: false,
                message: "Refresh token missing"
            })
        }

        const decoded = jwt.verify(RefreshToken, process.env.REFRESH_TOKEN_SECRET);

        const existingUser = await user.findOne({ _id: decoded.userId });

        if (!existingUser || existingUser.refreshToken !== RefreshToken) {
            return res.status(401).json({
                success: false,
                message: "Invalid refresh token"
            });
        }

        const newAccessToken = generateAccessToken(existingUser);

        res.cookie("accessToken", newAccessToken, {
            httpOnly: true,
            secure: isProduction,
            sameSite: validSameSite,
            maxAge: 15 * 60 * 1000
        })

        return res.status(200).json({
            success: true,
            message: "New access token genrated"
        })

    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Invealid refresh token"
        })
    }
}

export const googleLogin = async (req, res) => {
    try {
        const { token } = req.body;

        if (!token) {
            return res.status(400).json({
                success: false,
                message: "token not get"
            })
        }

        const ticket = await client.verifyIdToken({ idToken: token, audience: process.env.GOOGLE_CLIENT_ID })

        const response = await fetch(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${token}`);
        if (!response.ok) {
            return res.status(401).json({
                success: false,
                message: "Invalid Google access token"
            });
        }


        const payload = ticket.getPayload();

        const { email, name, picture } = payload;

        let existingUser = await user.findOne({ userEmail: email });

        if (!existingUser) {
            existingUser = await user.create({
                userName: name,
                userEmail: email,
                provider: 'google',
                userProfilePic: picture,
                verifiyed: true
            });
        }

        const AccessToken = await generateAccessToken(existingUser);
        const RefreshToken = await generateRefreshToken(existingUser);

        existingUser.refreshToken = RefreshToken;
        await existingUser.save();

        res.cookie("accessToken", AccessToken, {
            httpOnly: true,
            secure: isProduction,
            sameSite: validSameSite,
            maxAge: 15 * 60 * 1000
        });

        res.cookie("refreshToken", RefreshToken, {
            httpOnly: true,
            secure: isProduction,
            sameSite: validSameSite,
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        return res.status(200).json({
            success: true,
            message: "Google Login Successfully"
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Google Login Fail",
            error: error.message
        })
    }
}