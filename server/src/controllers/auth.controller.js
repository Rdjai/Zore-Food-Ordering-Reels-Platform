import userModel from "../models/user.model.js"
import bcryptjs from 'bcryptjs'
import { generateToken } from "../services/jwt.js";
export const UserAuthRegistrtion = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) return res.status(400).json({
            error: "Missing credentials"
        })

        const checkExistingUser = await userModel.findOne({ email });
        if (checkExistingUser) return res.status(400).json({ error: "Email already registered" });
        const hashPass = await bcryptjs.hash(password, 5);
        const user = await userModel.create({
            name,
            email,
            password: hashPass
        })

        const token = generateToken({
            id: user._id,
            email: user.email,
            role: user.role
        })

        res.status(201).json({
            success: true,
            message: "User created successfully",
            token: token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
        });

    } catch (error) {
        console.error("Registration error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const UserLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "Missing credentials" });
        }

        const user = await userModel.findOne({ email });
        if (!user) return res.status(400).json({
            error: "User not found"
        })

        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ error: "Invalid user credentials" });
        const payload = {
            email: user.email,
            userId: user._id,
            role: user.role
        }
        const token = generateToken(payload)

        res.status(200).json({
            success: true,
            message: "Login successful",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
        });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}


export const myProfile = async (req, res) => {
    try {
        const user = await userModel.findById(req.user.id).select("-password");
        if (!user) return res.status(404).json({ error: "User not found" });
        res.status(200).json({
            success: true,
            user,
        });
    } catch (error) {
        console.error("GetMe error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}