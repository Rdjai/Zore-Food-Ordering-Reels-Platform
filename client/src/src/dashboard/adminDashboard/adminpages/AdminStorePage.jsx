import React from "react";
import { FaStore, FaToggleOn, FaToggleOff, FaEdit, FaTrash } from "react-icons/fa";

const AdminStorePage = () => {
    // Dummy store data
    const stores = [
        { id: "#S001", name: "Rdj Store", owner: "Rdj Kashyap", revenue: "₹45,000", status: "Active" },
        { id: "#S002", name: "Kashyap Kitchen", owner: "Sandeep Yadav", revenue: "₹38,200", status: "Inactive" },
        { id: "#S003", name: "Zore Café", owner: "Rahul Kumar", revenue: "₹34,900", status: "Active" },
        { id: "#S004", name: "Tasty Treats", owner: "Vikas Singh", revenue: "₹29,100", status: "Active" },
    ];

    return (
        <div className="p-6 bg-gray-50 h-screen w-screen overflow-scroll">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Stores Overview</h1>

            <div className="bg-white shadow-md rounded-xl p-5 border border-gray-100">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="text-gray-600 border-b">
                            <th className="py-2">Store ID</th>
                            <th className="py-2">Store Name</th>
                            <th className="py-2">Owner</th>
                            <th className="py-2">Revenue</th>
                            <th className="py-2">Status</th>
                            <th className="py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stores.map((store) => (
                            <tr key={store.id} className="border-b text-gray-700 hover:bg-gray-50 transition-all">
                                <td className="py-2">{store.id}</td>
                                <td className="py-2 flex items-center gap-2">
                                    <FaStore className="text-blue-500" /> {store.name}
                                </td>
                                <td className="py-2">{store.owner}</td>
                                <td className="py-2">{store.revenue}</td>
                                <td className="py-2">
                                    {store.status === "Active" ? (
                                        <span className="flex items-center text-green-600 gap-1">
                                            <FaToggleOn /> Active
                                        </span>
                                    ) : (
                                        <span className="flex items-center text-red-500 gap-1">
                                            <FaToggleOff /> Inactive
                                        </span>
                                    )}
                                </td>
                                <td className="py-2 flex items-center gap-3">
                                    <button className="text-blue-500 hover:text-blue-700">
                                        <FaEdit />
                                    </button>
                                    <button className="text-red-500 hover:text-red-700">
                                        <FaTrash />
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

export default AdminStorePage;
