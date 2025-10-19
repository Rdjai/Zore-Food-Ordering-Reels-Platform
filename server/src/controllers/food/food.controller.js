import Food from "../../models/product.model.js";
import restaurantModel from "../../models/restaurant.model.js";
import ImageKit from "../../utils/imagekit.js";

export const addFood = async (req, res) => {

    try {
        const {
            name,
            description,
            price,
            category,
            tags,
            isAvailable,

        } = req.body;

        const imageFile = req.files?.image?.[0];

        if (!imageFile) {
            return res.status(400).json({ message: "Please upload an image or video" });
        }
        const imageName = imageFile?.originalname.replace(/\s/g, '_');
        console.log();
        const imageUrl = await ImageKit.upload(
            {
                file: req.files.image[0].buffer,
                fileName: imageName
            }
        );
        const image = imageUrl.url;
        const store = restaurantModel.findById(req.user.userId);
        if (!store) {
            return res.status(404).json({ message: "Restaurant not found" });
        }
        const newFood = new Food({
            name,
            description,
            restaurant: req.user.userId,
            image,
            price,
            category,
            tags,
            isAvailable,
            createdBy: req.user.userId
        });

        const savedFood = await newFood.save();
        res.status(201).json({ message: "Food item added successfully", savedFood });
    } catch (error) {
        res.status(500).json({ message: "Error adding food item", error: error.message });
    }
}


export const getAllFood = async (req, res) => {
    try {
        const foods = await Food.find().sort({ createdAt: -1 })
        res.status(200).json(foods);
    } catch (error) {
        res.status(500).json({ message: "Error fetching food items", error: error.message });
    }

}
export const getFoodById = async (req, res) => {
    try {
        const id = req.params.id;
        const food = await Food.findById(id).populate("restaurant", "name city");
        if (!food) {
            return res.status(404).json({ message: "Food item not found" });
        }
        res.status(200).json(food);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const updateFoodById = async (req, res) => {
    try {
        const id = req.params.id;

        const updatedFood = await Food.findByIdAndUpdate(id, { $set: req.body },
            { new: true });
        if (!updatedFood) return res.status(404).json({ message: "Food not found" });
        res.status(200).json({ message: "Food updated successfully", food: updatedFood });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const deleteFood = async (req, res) => {
    try {
        const deletedFood = await Food.findByIdAndDelete(req.params.id);
        if (!deletedFood) return res.status(404).json({ message: "Food not found" });
        res.status(200).json({ message: "Food deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting food", error: error.message });
    }
};

export const getFoodsByRestaurant = async (req, res) => {
    try {
        const foods = await Food.find({ restaurant: req.params.restaurantId });
        res.status(200).json(foods);
    } catch (error) {
        res.status(500).json({ message: "Error fetching restaurant foods", error: error.message });
    }
};