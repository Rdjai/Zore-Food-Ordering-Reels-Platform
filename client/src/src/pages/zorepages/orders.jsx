import React, { useState, useEffect } from "react";

const StoreOrdersPage = () => {
    const [orders, setOrders] = useState([]);

    // Temporary JSON data for orders
    const tempOrders = [
        {
            _id: "ord001",
            orderId: "ORDER173001",
            restaurant: "Pizza Hub",
            items: [
                { name: "Margherita Pizza", quantity: 2, price: 299 },
                { name: "Garlic Bread", quantity: 1, price: 200 },
            ],
            totalPrice: 798,
            orderStatus: "Delivered",
            date: "2025-10-20T10:00:00Z",
            customer: {
                name: "Jay Kashyap",
                email: "jay@example.com",
                phone: "+91 9876543210",
            },
        },
        {
            _id: "ord002",
            orderId: "ORDER173002",
            restaurant: "Burger Point",
            items: [
                { name: "Cheese Burger", quantity: 1, price: 199 },
                { name: "Cold Coffee", quantity: 2, price: 100 },
            ],
            totalPrice: 399,
            orderStatus: "Preparing",
            date: "2025-10-19T14:30:00Z",
            customer: {
                name: "Alice Sharma",
                email: "alice@example.com",
                phone: "+91 9123456789",
            },
        },
        {
            _id: "ord003",
            orderId: "ORDER173003",
            restaurant: "Green Leaf Salad Bar",
            items: [{ name: "Veg Salad Bowl", quantity: 1, price: 179 }],
            totalPrice: 179,
            orderStatus: "Delivered",
            date: "2025-10-18T18:15:00Z",
            customer: {
                name: "Rohit Verma",
                email: "rohit@example.com",
                phone: "+91 9988776655",
            },
        },
    ];

    useEffect(() => {
        // Simulate API fetch
        setTimeout(() => setOrders(tempOrders), 1000);
    }, []);

    if (orders.length === 0) {
        return (
            <div className="text-center mt-10 text-gray-500 text-lg">
                Loading orders...
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
            <h2 className="text-2xl font-bold text-center mb-6">Store Orders</h2>

            <div className="mb-4 text-lg font-semibold text-gray-700">
                Total Orders: {orders.length}
            </div>

            {orders.map((order) => (
                <div
                    key={order._id}
                    className="border border-gray-200 rounded-xl p-4 mb-4 hover:shadow-md transition"
                >
                    {/* Order Header */}
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold">{order.orderId} - {order.restaurant}</h3>
                        <span
                            className={`text-sm font-semibold ${order.orderStatus === "Delivered"
                                    ? "text-green-600"
                                    : order.orderStatus === "Preparing"
                                        ? "text-yellow-600"
                                        : "text-red-600"
                                }`}
                        >
                            {order.orderStatus}
                        </span>
                    </div>

                    {/* Order Date */}
                    <p className="text-sm text-gray-500 mb-2">
                        Date: {new Date(order.date).toLocaleString()}
                    </p>

                    {/* Items */}
                    <ul className="space-y-1 text-gray-700 mb-2">
                        {order.items.map((item, idx) => (
                            <li key={idx} className="flex justify-between">
                                <span>
                                    {item.name} × {item.quantity}
                                </span>
                                <span>₹{item.price}</span>
                            </li>
                        ))}
                    </ul>

                    {/* Total */}
                    <p className="text-right font-semibold mb-2">Total: ₹{order.totalPrice}</p>

                    {/* Customer Info */}
                    <div className="text-sm text-gray-600">
                        <p>
                            <strong>Customer:</strong> {order.customer.name} ({order.customer.email})
                        </p>
                        <p>
                            <strong>Phone:</strong> {order.customer.phone}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StoreOrdersPage;
