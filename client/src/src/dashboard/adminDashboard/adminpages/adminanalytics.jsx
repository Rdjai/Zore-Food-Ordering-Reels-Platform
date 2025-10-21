import React from "react";
import {
    LineChart,
    Line,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from "recharts";
import { BsGraphUpArrow, BsPeopleFill } from "react-icons/bs";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { FiShoppingBag } from "react-icons/fi";
import { MdDeliveryDining } from "react-icons/md";

const AdminAnalytics = () => {
    const salesData = [
        { month: "Jan", revenue: 32000, orders: 240 },
        { month: "Feb", revenue: 42000, orders: 290 },
        { month: "Mar", revenue: 52000, orders: 320 },
        { month: "Apr", revenue: 61000, orders: 360 },
        { month: "May", revenue: 48000, orders: 300 },
        { month: "Jun", revenue: 72000, orders: 420 },
        { month: "Jul", revenue: 81000, orders: 440 },
    ];

    const usersData = [
        { name: "Users", value: 4532 },
        { name: "Riders", value: 218 },
        { name: "Stores", value: 128 },
    ];

    return (
        <div className="flex w-screen h-screen bg-gray-50">
            <div className="flex flex-col w-full">

                <div className="p-6 overflow-y-scroll h-[92vh]">
                    <h1 className="text-2xl font-semibold mb-6 text-gray-800">
                        Analytics Dashboard
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition-all">
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="text-gray-500 text-sm">Total Revenue</p>
                                    <h2 className="text-2xl font-semibold text-gray-800 mt-1">
                                        ₹8.4L
                                    </h2>
                                </div>
                                <RiMoneyRupeeCircleLine className="text-red-600 text-3xl" />
                            </div>
                        </div>

                        <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition-all">
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="text-gray-500 text-sm">Total Orders</p>
                                    <h2 className="text-2xl font-semibold text-gray-800 mt-1">
                                        12,349
                                    </h2>
                                </div>
                                <FiShoppingBag className="text-red-600 text-3xl" />
                            </div>
                        </div>

                        <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition-all">
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="text-gray-500 text-sm">Active Users</p>
                                    <h2 className="text-2xl font-semibold text-gray-800 mt-1">
                                        4,532
                                    </h2>
                                </div>
                                <BsPeopleFill className="text-red-600 text-3xl" />
                            </div>
                        </div>

                        <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition-all">
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="text-gray-500 text-sm">Active Riders</p>
                                    <h2 className="text-2xl font-semibold text-gray-800 mt-1">
                                        218
                                    </h2>
                                </div>
                                <MdDeliveryDining className="text-red-600 text-3xl" />
                            </div>
                        </div>
                    </div>

                    {/* Charts Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Revenue Growth */}
                        <div className="bg-white p-6 rounded-xl shadow">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-lg font-semibold text-gray-700">
                                    Monthly Revenue & Orders
                                </h3>
                                <BsGraphUpArrow className="text-red-600 text-2xl" />
                            </div>

                            <ResponsiveContainer width="100%" height={280}>
                                <LineChart data={salesData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="month" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line
                                        type="monotone"
                                        dataKey="revenue"
                                        stroke="#ef4444"
                                        strokeWidth={2}
                                        activeDot={{ r: 8 }}
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="orders"
                                        stroke="#3b82f6"
                                        strokeWidth={2}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-lg font-semibold text-gray-700">
                                    Platform Distribution
                                </h3>
                            </div>

                            <ResponsiveContainer width="100%" height={280}>
                                <BarChart data={usersData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar dataKey="value" fill="#ef4444" radius={[8, 8, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Rider Performance */}
                    <div className="bg-white p-6 mt-6 rounded-xl shadow">
                        <h3 className="text-lg font-semibold text-gray-700 mb-4">
                            Top Performing Riders
                        </h3>
                        <table className="w-full text-left border-t border-gray-200">
                            <thead>
                                <tr className="text-gray-600 text-sm">
                                    <th className="py-2">Rider</th>
                                    <th className="py-2">Deliveries</th>
                                    <th className="py-2">Rating</th>
                                    <th className="py-2">Earnings</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t text-gray-700">
                                    <td className="py-2">Rahul Kumar</td>
                                    <td className="py-2">78</td>
                                    <td className="py-2">⭐ 4.8</td>
                                    <td className="py-2">₹2,340</td>
                                </tr>
                                <tr className="border-t text-gray-700">
                                    <td className="py-2">Sandeep Yadav</td>
                                    <td className="py-2">64</td>
                                    <td className="py-2">⭐ 4.6</td>
                                    <td className="py-2">₹2,120</td>
                                </tr>
                                <tr className="border-t text-gray-700">
                                    <td className="py-2">Vikas Singh</td>
                                    <td className="py-2">59</td>
                                    <td className="py-2">⭐ 4.5</td>
                                    <td className="py-2">₹1,950</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminAnalytics;
