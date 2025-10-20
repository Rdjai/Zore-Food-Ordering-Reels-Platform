import React, { useEffect, useState } from "react";
import axios from "axios";

const StoreProductPage = ({ restaurantId }) => {
    const [foods, setFoods] = useState([]);
    const [form, setForm] = useState({ name: "", price: "", image: "", category: "Others" });

    const fetchFoods = async () => {
        const res = await axios.get(`/api/food/restaurant/${restaurantId}`);
        setFoods(res.data.foods);
    };

    useEffect(() => {
        fetchFoods();
    }, []);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("/api/food/create", { ...form, restaurant: restaurantId });
        setForm({ name: "", price: "", image: "", category: "Others" });
        fetchFoods();
    };

    const handleDelete = async (id) => {
        await axios.delete(`/api/food/${id}`);
        fetchFoods();
    };

    const handleAvailabilityToggle = async (id, currentStatus) => {
        await axios.put(`/api/food/${id}`, { isAvailable: !currentStatus });
        fetchFoods();
    };

    // Temporary data for demo
    const product = [
        {
            _id: "1",
            name: "Margherita Pizza",
            description: "Classic cheese pizza with fresh basil and tomato sauce.",
            image: "https://images.unsplash.com/photo-1601924579097-d84b0e4c2e4b",
            price: 299,
            category: "Pizza",
            isAvailable: true,
        },
        {
            _id: "2",
            name: "Cheese Burger",
            description: "Juicy beef patty with cheese, lettuce, and tomato.",
            image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
            price: 199,
            category: "Burger",
            isAvailable: false,
        },
        {
            _id: "3",
            name: "Chocolate Shake",
            description: "Thick milkshake made with dark chocolate and ice cream.",
            image: "https://images.unsplash.com/photo-1590080875831-32fbd6d8b0c6",
            price: 149,
            category: "Drinks",
            isAvailable: true,
        },
        {
            _id: "4",
            name: "Gulab Jamun",
            description: "Soft and sweet Indian dessert soaked in sugar syrup.",
            image: "https://images.unsplash.com/photo-1609859878625-5c18c739b7ef",
            price: 99,
            category: "Dessert",
            isAvailable: true,
        },
        {
            _id: "4",
            name: "Gulab Jamun",
            description: "Soft and sweet Indian dessert soaked in sugar syrup.",
            image: "https://images.unsplash.com/photo-1609859878625-5c18c739b7ef",
            price: 99,
            category: "Dessert",
            isAvailable: true,
        },
        {
            _id: "4",
            name: "Gulab Jamun",
            description: "Soft and sweet Indian dessert soaked in sugar syrup.",
            image: "https://images.unsplash.com/photo-1609859878625-5c18c739b7ef",
            price: 99,
            category: "Dessert",
            isAvailable: true,
        },
        {
            _id: "4",
            name: "Gulab Jamun",
            description: "Soft and sweet Indian dessert soaked in sugar syrup.",
            image: "https://images.unsplash.com/photo-1609859878625-5c18c739b7ef",
            price: 99,
            category: "Dessert",
            isAvailable: true,
        },
        {
            _id: "4",
            name: "Gulab Jamun",
            description: "Soft and sweet Indian dessert soaked in sugar syrup.",
            image: "https://images.unsplash.com/photo-1609859878625-5c18c739b7ef",
            price: 99,
            category: "Dessert",
            isAvailable: true,
        },
        {
            _id: "4",
            name: "Gulab Jamun",
            description: "Soft and sweet Indian dessert soaked in sugar syrup.",
            image: "https://images.unsplash.com/photo-1609859878625-5c18c739b7ef",
            price: 99,
            category: "Dessert",
            isAvailable: true,
        },
        {
            _id: "4",
            name: "Gulab Jamun",
            description: "Soft and sweet Indian dessert soaked in sugar syrup.",
            image: "https://images.unsplash.com/photo-1609859878625-5c18c739b7ef",
            price: 99,
            category: "Dessert",
            isAvailable: true,
        },
        {
            _id: "4",
            name: "Gulab Jamun",
            description: "Soft and sweet Indian dessert soaked in sugar syrup.",
            image: "https://images.unsplash.com/photo-1609859878625-5c18c739b7ef",
            price: 99,
            category: "Dessert",
            isAvailable: true,
        },
        {
            _id: "4",
            name: "Gulab Jamun",
            description: "Soft and sweet Indian dessert soaked in sugar syrup.",
            image: "https://images.unsplash.com/photo-1609859878625-5c18c739b7ef",
            price: 99,
            category: "Dessert",
            isAvailable: true,
        },
        {
            _id: "4",
            name: "Gulab Jamun",
            description: "Soft and sweet Indian dessert soaked in sugar syrup.",
            image: "https://images.unsplash.com/photo-1609859878625-5c18c739b7ef",
            price: 99,
            category: "Dessert",
            isAvailable: true,
        },
    ];

    return (
        <div className="p-6 w-screen ">
            <h1 className="text-2xl font-bold mb-4">🍔 Manage Products</h1>

            {/* Form */}
            <form onSubmit={handleSubmit} className="invisible h-0 md:h-auto md:visible mb-6 space-y-3 flex flex-col sm:flex-row gap-3">
                <input
                    type="text"
                    name="name"
                    placeholder="Food Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="border p-2 rounded w-full"
                />
                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={form.price}
                    onChange={handleChange}
                    required
                    className="border p-2 rounded w-full"
                />
                <input
                    type="text"
                    name="image"
                    placeholder="Image URL"
                    value={form.image}
                    onChange={handleChange}
                    required
                    className="border p-2 rounded w-full"
                />
                <select
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    className="border p-2 rounded w-full"
                >
                    <option>Others</option>
                    <option>Main Course</option>
                    <option>Snacks</option>
                    <option>Dessert</option>
                    <option>Fast Food</option>
                </select>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Add Food
                </button>
            </form>

            {/* Product List */}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-y-scroll no-scrollbar p-2 h-[80vh] pb-45">
                {product.map((food) => (
                    <div key={food._id} className="border p-4 rounded shadow bg-white">
                        <img
                            src={food.image}
                            alt={food.name}
                            className="w-full h-40 object-cover rounded"
                        />
                        <h2 className="text-lg font-semibold mt-2">{food.name}</h2>
                        <p className="text-gray-600 text-sm">{food.category}</p>
                        <p className="font-bold text-lg mt-1">₹{food.price}</p>

                        {/* Availability Badge */}
                        <span
                            className={`inline-block mt-2 px-2 py-1 text-xs rounded ${food.isAvailable ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                                }`}
                        >
                            {food.isAvailable ? "Available" : "Not Available"}
                        </span>

                        {/* Buttons */}
                        <div className="flex justify-between items-center mt-3">
                            <button
                                onClick={() => handleAvailabilityToggle(food._id, food.isAvailable)}
                                className={`px-3 py-1 rounded text-white ${food.isAvailable ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"
                                    }`}
                            >
                                {food.isAvailable ? "Mark Unavailable" : "Mark Available"}
                            </button>
                            <button
                                onClick={() => handleDelete(food._id)}
                                className="bg-gray-700 text-white px-3 py-1 rounded hover:bg-gray-800"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        </div>

    );
};

export default StoreProductPage;
