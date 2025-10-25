import Address from "../../models/Address.model.js";

export const addAddress = async (req, res) => {
    try {
        const { street1, street2, city, state, zipCode, country } = req.body;

        if (!street1 || !city || !state || !zipCode) {
            return res.status(400).json({ success: false, message: "Required fields are missing" });
        }
        const existingAddress = await Address.findOne({ user: req.user.userId });
        if (existingAddress) {
            return res.status(400).json({ success: false, message: "Address already exists for this user" });
        }
        const newAddress = new Address({
            user: req.user.userId,
            street1,
            street2,
            city,
            state,
            zipCode,
            country,
        });

        const savedAddress = await newAddress.save();

        res.status(201).json({
            success: true,
            message: "Address added successfully",
            address: savedAddress,
        });
    } catch (error) {
        console.error("Error adding address:", error);
        res.status(500).json({ success: false, message: "Server Error", error });
    }
};

export const getAddress = async (req, res) => {
    try {
        const userId = req.user.userId;
        const address = await Address.findOne({ user: userId });

        if (!address) {
            return res.status(404).json({ success: false, message: "No address found" });
        }

        res.status(200).json({ success: true, address });
    } catch (error) {
        console.error("Error fetching address:", error);
        res.status(500).json({ success: false, message: "Server Error", error });
    }
};

export const updateAddress = async (req, res) => {
    try {
        const { userId } = req.params;
        const updateData = req.body;

        const updated = await Address.findOneAndUpdate(
            { userId },
            updateData,
            { new: true }
        );

        if (!updated) {
            return res.status(404).json({ success: false, message: "Address not found" });
        }

        res.status(200).json({ success: true, message: "Address updated successfully", address: updated });
    } catch (error) {
        console.error("Error updating address:", error);
        res.status(500).json({ success: false, message: "Server Error", error });
    }
};
