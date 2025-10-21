import React from "react";
import { FaBox, FaEdit, FaTrash } from "react-icons/fa";

const AdminProductsPage = () => {
    const products = [
        {
            id: "#P1001",
            name: "Paneer Butter Masala",
            store: "Rdj Store",
            price: "₹250",
            stock: 20,
            category: "Main Course"
        },
        {
            id: "#P1002",
            name: "Veg Biryani",
            store: "Kashyap Kitchen",
            price: "₹180",
            stock: 15,
            category: "Biryani"
        },
        {
            id: "#P1003",
            name: "Chicken Tikka",
            store: "Zore Café",
            price: "₹300",
            stock: 10,
            category: "Starter"
        },
        {
            id: "#P1004",
            name: "Gulab Jamun",
            store: "Tasty Treats",
            price: "₹80",
            stock: 50,
            category: "Dessert"
        },
    ];

    const handleEditProduct = (id) => {
        console.log("Edit product:", id);
    };

    const handleDeleteProduct = (id) => {
        console.log("Delete product:", id);
    };

    return (
        <div className="p-6 bg-gray-50 h-screen w-screen">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Products</h1>

            <div className="bg-white shadow-md rounded-xl p-5 border border-gray-100 w-full overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="text-gray-600 border-b">
                            <th className="py-2">Product ID</th>
                            <th className="py-2">Product Name</th>
                            <th className="py-2">Store</th>
                            <th className="py-2">Price</th>
                            <th className="py-2">Stock</th>
                            <th className="py-2">Category</th>
                            <th className="py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id} className="border-b text-gray-700 hover:bg-gray-50 transition-all">
                                <td className="py-2 flex items-center gap-2">
                                    <FaBox className="text-blue-500" /> {product.id}
                                </td>
                                <td className="py-2">{product.name}</td>
                                <td className="py-2">{product.store}</td>
                                <td className="py-2">{product.price}</td>
                                <td className="py-2">{product.stock}</td>
                                <td className="py-2">{product.category}</td>
                                <td className="py-2 flex items-center gap-3">
                                    <button
                                        onClick={() => handleEditProduct(product.id)}
                                        className="text-blue-500 hover:text-blue-700 flex items-center gap-1"
                                    >
                                        <FaEdit /> Edit
                                    </button>
                                    <button
                                        onClick={() => handleDeleteProduct(product.id)}
                                        className="text-red-500 hover:text-red-700 flex items-center gap-1"
                                    >
                                        <FaTrash /> Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminProductsPage;
