import Restaurant from "../models/restaurant.model.js";
import Reel from "../models/reel.model.js";

export const addRestaurant = async (req, res) => {
    try {
        const { name, description, location, cuisine, images } = req.body;

        if (!name || !location?.address) {
            return res.status(400).json({ status: false, error: "Name and address are required" });
        }

        const restaurant = await Restaurant.create({
            name,
            description,
            location,
            cuisine,
            images,
            owner: req.user.id,
        });

        res.status(201).json({
            status: true,
            message: "Restaurant added successfully",
            restaurant,
        });
    } catch (error) {
        console.error("Add restaurant error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const getAllRestaurants = async (req, res) => {
    try {
        const { city } = req.query;
        const filter = city ? { "location.city": city } : {};

        const restaurants = await Restaurant.find(filter).populate("owner", "name email role");

        res.status(200).json({
            status: true,
            count: restaurants.length,
            restaurants,
        });
    } catch (error) {
        console.error("Get restaurants error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const getRestaurantById = async (req, res) => {
    try {
        const { id } = req.params;
        const restaurant = await Restaurant.findById(id).populate("owner", "name email role");

        if (!restaurant) {
            return res.status(404).json({ status: false, error: "Restaurant not found" });
        }

        res.status(200).json({ status: true, restaurant });
    } catch (error) {
        console.error("Get restaurant error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};


export const updateRestaurant = async (req, res) => {
    try {
        const { id } = req.params;

        const restaurant = await Restaurant.findById(id);
        if (!restaurant) {
            return res.status(404).json({ status: false, error: "Restaurant not found" });
        }


        if (req.user.role !== "admin" && restaurant.owner.toString() !== req.user.id) {
            return res.status(403).json({ status: false, error: "Not authorized to update this restaurant" });
        }

        const updated = await Restaurant.findByIdAndUpdate(id, req.body, { new: true });

        res.status(200).json({
            status: true,
            message: "Restaurant updated successfully",
            restaurant: updated,
        });
    } catch (error) {
        console.error("Update restaurant error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
export const deleteRestaurant = async (req, res) => {
    try {
        const { id } = req.params;

        const restaurant = await Restaurant.findById(id);
        if (!restaurant) {
            return res.status(404).json({ status: false, error: "Restaurant not found" });
        }

        if (req.user.role !== "admin" && restaurant.owner.toString() !== req.user.id) {
            return res.status(403).json({ status: false, error: "Not authorized to delete this restaurant" });
        }

        await restaurant.deleteOne();

        res.status(200).json({
            status: true,
            message: "Restaurant deleted successfully",
        });
    } catch (error) {
        console.error("Delete restaurant error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const getReelsForRestaurant = async (req, res) => {
    try {
        const { id } = req.params;

        const reels = await Reel.find({ restaurantId: id })
            .populate("userId", "name email")
            .sort({ createdAt: -1 });

        if (!reels.length) {
            return res.status(404).json({
                success: false,
                message: "No reels found for this restaurant",
            });
        }

        res.status(200).json({
            success: true,
            count: reels.length,
            reels,
        });
    } catch (error) {
        console.error("Get reels for restaurant error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};