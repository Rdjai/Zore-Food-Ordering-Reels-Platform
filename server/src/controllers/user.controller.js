import userModel from "../models/user.model.js"
import restaurantModel from "../models/restaurant.model.js";
import { json } from "express";
export const UserProfile = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userModel.findById(id).select("-password");
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json({
            success: true,
            user,
        });
    } catch (error) {
        console.error("GetUserById error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}


export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        const updatedUser = await userModel.findByIdAndUpdate(
            id,
            updates,
            { new: true, runValidators: true }
        ).select("-password");

        if (!updatedUser) return res.status(404).json({ error: "User not found" });

        res.json({
            success: true,
            user: updatedUser
        });
    } catch (error) {
        console.error("Update user error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const updateStore = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        const updatedStore = await storeModel.findByIdAndUpdate(
            id,
            updates,
            { new: true, runValidators: true }
        );
        if (!updatedStore) return res.status(404).json({ error: "Store not found" });
        res.json({
            success: true,
            store: updatedStore
        });
    } catch (error) {
        console.error("Update store error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}


export const followUser = async (req, res) => {
    try {
        const { id } = req.params;
        const checkuser = await userModel.findById(id);
        if (!checkuser) return res.status(404).json({
            status: false,
            error: "User not found"
        });


        const currentUser = await userModel.findById(req.user.id);
        if (currentUser.includes(id)) return res.status(200).json({
            status: true,
            msg: "User already in your follow list"
        });


        currentUser.follow.push(id);
        await currentUser.save();

        res.status(200).json({
            status: true,
            msg: "User followed successfully",
            user: {
                id: currentUser._id,
                name: currentUser.name,
                email: currentUser.email,
                follow: currentUser.follow
            }
        });
    } catch (error) {
        console.error("Update store error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const unfollowUser = async (req, res) => {
    try {
        const { id } = req.params;
        if (req.user.id === id) {
            return res.status(400).json({
                status: false,
                error: "You cannot unfollow yourself"
            });
        }

        const targetUser = await userModel.findById(id);
        if (!targetUser) {
            return res.status(404).json({
                status: false,
                error: "User not found"
            });
        }

        const currentUser = await userModel.findById(req.user.id);

        if (!currentUser.follow.includes(id)) {
            return res.status(400).json({
                status: false,
                msg: "You are not following this user"
            });
        }

        currentUser.follow = currentUser.follow.filter(fId => fId.toString() !== id);
        await currentUser.save();

        res.status(200).json({
            status: true,
            msg: "User unfollowed successfully",
            user: {
                id: currentUser._id,
                name: currentUser.name,
                email: currentUser.email,
                follow: currentUser.follow
            }
        });


    } catch (error) {
        console.error("Unfollow user error:", error);
        res.status(500).json({ error: "Internal server error" });;
    }
}

export const getFollower = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userModel.findById(id).populate("followers", "name email role");
        if (!user) {
            return res.status(404).json({ status: false, error: "User not found" });
        }
        res.status(200).json({
            status: true,
            count: user.followers.length,
            followers: user.followers
        });
    } catch (error) {
        console.error("Get followers error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const getFollowing = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userModel.findById(id).populate("follow", "name email role");
        if (!user) {
            return res.status(404).json({ status: false, error: "User not found" });
        }
        res.status(200).json({
            status: true,
            count: user.follow.length,
            following: user.follow
        });

    } catch (error) {
        console.error("Get following error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};