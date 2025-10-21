import React from "react";

import { BsGraphUpArrow, BsPeopleFill } from "react-icons/bs";
import { FiShoppingBag } from "react-icons/fi";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { MdDeliveryDining } from "react-icons/md";

const AdminOverview = () => {
    return (
        <div className="flex w-screen h-screen bg-gray-50">
            <div className="flex flex-col w-full">
                <div className="p-6 overflow-y-scroll h-[92vh]">
                    <h1 className="text-2xl font-semibold mb-6 text-gray-800">Admin Overview</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition-all">
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="text-gray-500 text-sm">Total Users</p>
                                    <h2 className="text-2xl font-semibold text-gray-800 mt-1">4,532</h2>
                                </div>
                                <BsPeopleFill className="text-red-600 text-3xl" />
                            </div>
                        </div>

                        <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition-all">
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="text-gray-500 text-sm">Total Orders</p>
                                    <h2 className="text-2xl font-semibold text-gray-800 mt-1">12,349</h2>
                                </div>
                                <FiShoppingBag className="text-red-600 text-3xl" />
                            </div>
                        </div>

                        <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition-all">
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="text-gray-500 text-sm">Revenue</p>
                                    <h2 className="text-2xl font-semibold text-gray-800 mt-1">₹8.4L</h2>
                                </div>
                                <RiMoneyRupeeCircleLine className="text-red-600 text-3xl" />
                            </div>
                        </div>

                        <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition-all">
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="text-gray-500 text-sm">Active Riders</p>
                                    <h2 className="text-2xl font-semibold text-gray-800 mt-1">218</h2>
                                </div>
                                <MdDeliveryDining className="text-red-600 text-3xl" />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Orders Graph */}
                        <div className="bg-white p-6 rounded-xl shadow col-span-2">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-lg font-semibold text-gray-700">Sales Overview</h3>
                                <BsGraphUpArrow className="text-red-600 text-2xl" />
                            </div>
                            <div className="h-[250px] flex justify-center items-center text-gray-400 text-sm">
                                📊 Chart Placeholder (Add Recharts / ApexCharts later)
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow">
                            <h3 className="text-lg font-semibold text-gray-700 mb-4">Recent Orders</h3>
                            <ul className="space-y-3">
                                <li className="flex justify-between text-gray-700">
                                    <span>#ORD1023</span>
                                    <span className="text-green-600 font-medium">Delivered</span>
                                </li>
                                <li className="flex justify-between text-gray-700">
                                    <span>#ORD1022</span>
                                    <span className="text-yellow-500 font-medium">Pending</span>
                                </li>
                                <li className="flex justify-between text-gray-700">
                                    <span>#ORD1021</span>
                                    <span className="text-red-500 font-medium">Cancelled</span>
                                </li>
                                <li className="flex justify-between text-gray-700">
                                    <span>#ORD1020</span>
                                    <span className="text-green-600 font-medium">Delivered</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-white p-6 mt-6 rounded-xl shadow">
                        <h3 className="text-lg font-semibold text-gray-700 mb-4">Top Riders This Week</h3>
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

export default AdminOverview;
