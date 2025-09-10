import userModel from "../models/user.model.js";
import reelsModel from "../models/reels.model.js";
import restaurantModel from "../models/restaurant.model.js";

export const deleteUserByAdmin = async (req, res) => {
    try {
        const { id } = req.params;
        if (req.user.id === id) {
            return res.status(400).json({
                status: false,
                error: "Admins cannot delete themselves"
            });
        }
        const user = await userModel.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).json({ status: false, error: "User not found" });
        }
        res.status(200).json({
            status: true,
            message: "User deleted successfully",
            deletedUser: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });
    } catch (error) {
        console.error("Admin delete user error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find().select("-password");
        res.status(200).json({ success: true, users });
    } catch (error) {
        console.error("Admin getAllUsers error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};


export const getAllRestaurants = async (req, res) => {
    try {
        const restaurants = await restaurantModel.find();
        res.status(200).json({ success: true, restaurants });
    } catch (error) {
        console.error("Admin getAllRestaurants error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const getAllReels = async (req, res) => {
    try {
        const reels = await reelsModel.find()
            .populate("userId", "name email")
            .populate("restaurantId", "name");
        res.status(200).json({ success: true, reels });
    } catch (error) {
        console.error("Admin getAllReels error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const banUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userModel.findByIdAndDelete(id);

        if (!user) return res.status(404).json({ error: "User not found" });

        res.status(200).json({ success: true, message: "User banned successfully" });
    } catch (error) {
        console.error("Admin banUser error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const removeReel = async (req, res) => {
    try {
        const { id } = req.params;
        const reel = await reelsModel.findByIdAndDelete(id);

        if (!reel) return res.status(404).json({ error: "Reel not found" });

        res.status(200).json({ success: true, message: "Reel removed successfully" });
    } catch (error) {
        console.error("Admin removeReel error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};