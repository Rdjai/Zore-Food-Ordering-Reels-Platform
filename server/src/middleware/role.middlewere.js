import Restorent from "../models/restorentModel.js"

export const isAdminOrOwner = async (req, res, next) => {
    try {
        const user = req.user;
        const { id } = req.params;
        if (!user) {
            return res.status(401).json({ status: false, message: "Unauthorized" });
        }
        if (user.role === "admin") {
            return next();
        }
        if (!id) {
            return next();
        }

        const restorent = await Restorent.findById(id);
        if (!restorent) {
            return res.status(404).json({ status: false, message: "Restaurant not found" });
        }
        if (restorent.owner.toString() !== user._id.toString()) {
            return res.status(403).json({ status: false, message: "Forbidden: Not owner/admin" });
        }
        next();

    } catch (error) {
        console.error("isAdminOrOwner error:", error);
        res.status(500).json({ status: false, message: "Internal server error" });
    }
}