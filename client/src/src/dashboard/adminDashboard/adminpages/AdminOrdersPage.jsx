import React from "react";
import { FaClipboardList, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const AdminOrdersPage = () => {
    const orders = [
        {
            id: "#O1001",
            store: "Rdj Store",
            customer: "Jay Kashyap",
            items: 3,
            total: "₹450",
            status: "Pending",
            date: "2025-10-20"
        },
        {
            id: "#O1002",
            store: "Kashyap Kitchen",
            customer: "Rahul Kumar",
            items: 2,
            total: "₹320",
            status: "Delivered",
            date: "2025-10-19"
        },
        {
            id: "#O1003",
            store: "Zore Café",
            customer: "Sandeep Yadav",
            items: 5,
            total: "₹780",
            status: "Cancelled",
            date: "2025-10-18"
        },
    ];

    const handleMarkDelivered = (id) => {
        console.log("Mark as delivered:", id);
    };

    const handleCancelOrder = (id) => {
        console.log("Cancel order:", id);
    };

    return (
        <div className="p-6 bg-gray-50 w-screen h-screen overflow-scroll">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Orders</h1>

            <div className="bg-white shadow-md rounded-xl p-5 border border-gray-100">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="text-gray-600 border-b">
                            <th className="py-2">Order ID</th>
                            <th className="py-2">Store</th>
                            <th className="py-2">Customer</th>
                            <th className="py-2">Items</th>
                            <th className="py-2">Total</th>
                            <th className="py-2">Status</th>
                            <th className="py-2">Date</th>
                            <th className="py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order.id} className="border-b text-gray-700 hover:bg-gray-50 transition-all">
                                <td className="py-2 flex items-center gap-2">
                                    <FaClipboardList className="text-blue-500" /> {order.id}
                                </td>
                                <td className="py-2">{order.store}</td>
                                <td className="py-2">{order.customer}</td>
                                <td className="py-2">{order.items}</td>
                                <td className="py-2">{order.total}</td>
                                <td className="py-2">
                                    <span
                                        className={`font-medium ${order.status === "Delivered"
                                            ? "text-green-600"
                                            : order.status === "Cancelled"
                                                ? "text-red-600"
                                                : "text-orange-500"
                                            }`}
                                    >
                                        {order.status}
                                    </span>
                                </td>
                                <td className="py-2">{order.date}</td>
                                <td className="py-2 flex items-center gap-2">
                                    {order.status === "Pending" && (
                                        <>
                                            <button
                                                onClick={() => handleMarkDelivered(order.id)}
                                                className="flex items-center gap-1 text-green-600 hover:text-green-800"
                                            >
                                                <FaCheckCircle /> Delivered
                                            </button>
                                            <button
                                                onClick={() => handleCancelOrder(order.id)}
                                                className="flex items-center gap-1 text-red-600 hover:text-red-800"
                                            >
                                                <FaTimesCircle /> Cancel
                                            </button>
                                        </>
                                    )}
                                    {order.status !== "Pending" && <span className="text-gray-500">No Action</span>}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminOrdersPage;
