import React, { useState } from "react";
import axios from "axios";

const AddNewItems = () => {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: "",
        category: "",
        tags: "",
        isAvailable: true,
        image: null,
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    // ✅ Handle Input Changes
    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        if (type === "file") {
            setFormData({ ...formData, image: files[0] });
        } else if (type === "checkbox") {
            setFormData({ ...formData, [name]: checked });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    // ✅ Handle Submit (image upload + backend call)
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.image) {
            setMessage("Please upload an image.");
            return;
        }

        try {
            setLoading(true);
            setMessage("");

            const imageData = new FormData();
            imageData.append("file", formData.image);
            imageData.append("upload_preset", "zore_foods");

            const uploadRes = await axios.post(
                "https://api.imagekit.io/v1/files/upload",
                imageData,
                {
                    headers: {
                        Authorization: "Basic " + btoa("your_public_key:"),
                    },
                }
            );

            const imageUrl = uploadRes.data.url;

            const payload = {
                name: formData.name,
                description: formData.description,
                price: Number(formData.price),
                category: formData.category,
                tags: formData.tags.split(",").map((tag) => tag.trim()),
                isAvailable: formData.isAvailable,
                image: imageUrl,
            };

            await axios.post(
                "http://localhost:5000/api/food/addFood",
                payload,
                { withCredentials: true }
            );

            setMessage("✅ Item added successfully!");
            setFormData({
                name: "",
                description: "",
                price: "",
                category: "",
                tags: "",
                isAvailable: true,
                image: null,
            });
        } catch (error) {
            console.error(error);
            setMessage("❌ Error adding item. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="">
            <div className="text-2xl font-bold w-[83vw] h-[45px] flex items-center bg-green-200 m-4 pl-5 rounded-[12px] text-green-700 shadow-sm">
                <p>Add New Food Item</p>
            </div>

            {/* ✅ Make this scrollable container */}
            <div className="w-[83vw] bg-white mt-2 m-4 rounded-[12px] shadow-lg p-6 h-[80vh] overflow-y-scroll no-scrollbar">
                {message && (
                    <p className="text-center text-sm mb-3 font-semibold text-red-500">
                        {message}
                    </p>
                )}

                <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {/* Name */}
                    <div>
                        <label className="block text-gray-700 mb-2 font-medium">Name</label>
                        <input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter food name"
                            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-400"
                            required
                        />
                    </div>

                    {/* Price */}
                    <div>
                        <label className="block text-gray-700 mb-2 font-medium">Price</label>
                        <input
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            placeholder="Enter price (₹)"
                            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-400"
                            required
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label className="block text-gray-700 mb-2 font-medium">Category</label>
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-400"
                            required
                        >
                            <option value="">Select category</option>
                            <option value="Main Course">Main Course</option>
                            <option value="Snacks">Snacks</option>
                            <option value="Dessert">Dessert</option>
                            <option value="Drinks">Drinks</option>
                            <option value="Fast Food">Fast Food</option>
                            <option value="Pizza">Pizza</option>
                            <option value="Burger">Burger</option>
                            <option value="Indian">Indian</option>
                        </select>
                    </div>

                    {/* Tags */}
                    <div>
                        <label className="block text-gray-700 mb-2 font-medium">
                            Tags (comma separated)
                        </label>
                        <input
                            name="tags"
                            value={formData.tags}
                            onChange={handleChange}
                            placeholder="e.g. spicy, vegan, bestseller"
                            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-400"
                        />
                    </div>

                    {/* Description */}
                    <div className="md:col-span-2">
                        <label className="block text-gray-700 mb-2 font-medium">
                            Description
                        </label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Write a short description"
                            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-400"
                            rows="3"
                        />
                    </div>

                    {/* Image Upload */}
                    <div className="md:col-span-2">
                        <label className="block text-gray-700 mb-2 font-medium">Upload Image</label>
                        <input
                            type="file"
                            name="image"
                            accept="image/*"
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-400"
                            required
                        />
                    </div>

                    {/* Availability */}
                    <div className="flex items-center gap-3 mt-2 md:col-span-2">
                        <input
                            type="checkbox"
                            name="isAvailable"
                            checked={formData.isAvailable}
                            onChange={handleChange}
                            className="w-4 h-4"
                        />
                        <label className="text-gray-700">Available for sale</label>
                    </div>

                    {/* Submit Button */}
                    <div className="md:col-span-2 mt-4">
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-3 rounded-lg font-semibold text-white shadow-lg transition duration-300 ${loading
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-green-500 hover:bg-green-600"
                                }`}
                        >
                            {loading ? "Adding..." : "Add New Item"}
                        </button>
                    </div>
                </form>
            </div>

            {/* Footer */}
            <div className="bg-gray-200 p-4 text-center mb-10 w-[83vw] rounded-lg">
                <p className="text-gray-600">
                    &copy; 2024 Store Dashboard. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default AddNewItems;
