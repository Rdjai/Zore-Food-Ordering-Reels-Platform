
export const verifyRestaurant = async (req, res, next) => {
    try {
        if (!req.user || !req.user.role) {
            return res.status(401).json({ message: "Unauthorized: User information missing." });
        }
        const { role } = req.user;
        console.log("User Role:", role);
        if (role !== "restaurant") {
            return res.status(403).json({ message: "Access denied. Only restaurant owners can access this route." });
        }
        req.restaurant = req.user;
        next();
    }
    catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
}