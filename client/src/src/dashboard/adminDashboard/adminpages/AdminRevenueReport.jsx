import React from "react";
import { FaRupeeSign, FaStore, FaWallet, FaChartLine } from "react-icons/fa";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend
);

const AdminRevenueReport = () => {
    const revenueCards = [
        {
            title: "Total Revenue",
            value: "₹8,42,390",
            icon: <FaRupeeSign className="text-red-500" />,
            growth: "+18%",
        },
        {
            title: "Monthly Revenue",
            value: "₹1,24,580",
            icon: <FaChartLine className="text-green-600" />,
            growth: "+6%",
        },
        {
            title: "Total Payouts",
            value: "₹6,70,500",
            icon: <FaWallet className="text-yellow-500" />,
            growth: "+9%",
        },
        {
            title: "Top Earning Store",
            value: "Rdj Store",
            icon: <FaStore className="text-blue-500" />,
            growth: "₹45,000",
        },
    ];

    const monthlyRevenueData = {
        labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        datasets: [
            {
                label: "Monthly Revenue (₹)",
                data: [54000, 67000, 78000, 89000, 97000, 124580, 132000, 145000, 158000, 161000, 167000, 172000],
                backgroundColor: "#ef4444",
            },
        ],
    };

    const weeklyRevenueData = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
            {
                label: "Weekly Revenue (₹)",
                data: [15000, 18000, 12000, 22000, 20000, 25000, 27000],
                borderColor: "#16a34a",
                backgroundColor: "rgba(22,163,74,0.1)",
                tension: 0.4,
                fill: true,
            },
        ],
    };

    const topStores = [
        { name: "Rdj Store", revenue: "₹45,000", orders: 220 },
        { name: "Kashyap Kitchen", revenue: "₹38,200", orders: 180 },
        { name: "Zore Café", revenue: "₹34,900", orders: 162 },
        { name: "Tasty Treats", revenue: "₹29,100", orders: 141 },
    ];

    const payouts = [
        { id: "#P1001", store: "Rdj Store", amount: "₹25,000", method: "Bank Transfer", status: "Completed" },
        { id: "#P1002", store: "Kashyap Kitchen", amount: "₹18,000", method: "UPI", status: "Pending" },
        { id: "#P1003", store: "Zore Café", amount: "₹15,000", method: "Bank Transfer", status: "Completed" },
    ];

    return (
        <div className="p-6 bg-gray-50 h-screen pb-25 w-screen overflow-scroll">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">
                Revenue Report
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
                {revenueCards.map((item, i) => (
                    <div
                        key={i}
                        className="bg-white shadow-md rounded-xl p-5 flex items-center justify-between border border-gray-100 hover:shadow-lg transition-all"
                    >
                        <div>
                            <h2 className="text-gray-500 text-sm">{item.title}</h2>
                            <p className="text-xl font-semibold text-gray-800">
                                {item.value}
                            </p>
                            <p className="text-green-600 text-xs font-medium">
                                {item.growth}
                            </p>
                        </div>
                        <div className="text-3xl">{item.icon}</div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="bg-white shadow-md rounded-xl p-5 border border-gray-100">
                    <h2 className="text-lg font-semibold text-gray-700 mb-3">
                        Monthly Revenue Overview
                    </h2>
                    <Bar data={monthlyRevenueData} />
                </div>

                <div className="bg-white shadow-md rounded-xl p-5 border border-gray-100">
                    <h2 className="text-lg font-semibold text-gray-700 mb-3">
                        Weekly Revenue Trends
                    </h2>
                    <Line data={weeklyRevenueData} />
                </div>
            </div>

            <div className="bg-white shadow-md rounded-xl p-5 border border-gray-100 mb-8">
                <h2 className="text-lg font-semibold text-gray-700 mb-3">
                    Top Earning Stores
                </h2>
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="text-gray-600 border-b">
                            <th className="py-2">Store Name</th>
                            <th className="py-2">Revenue</th>
                            <th className="py-2">Orders</th>
                        </tr>
                    </thead>
                    <tbody>
                        {topStores.map((store, i) => (
                            <tr key={i} className="border-b text-gray-700">
                                <td className="py-2">{store.name}</td>
                                <td className="py-2">{store.revenue}</td>
                                <td className="py-2">{store.orders}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="bg-white shadow-md rounded-xl p-5 border border-gray-100">
                <h2 className="text-lg font-semibold text-gray-700 mb-3">
                    Recent Payouts
                </h2>
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="text-gray-600 border-b">
                            <th className="py-2">Payout ID</th>
                            <th className="py-2">Store</th>
                            <th className="py-2">Amount</th>
                            <th className="py-2">Method</th>
                            <th className="py-2">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payouts.map((payout, i) => (
                            <tr key={i} className="border-b text-gray-700">
                                <td className="py-2">{payout.id}</td>
                                <td className="py-2">{payout.store}</td>
                                <td className="py-2">{payout.amount}</td>
                                <td className="py-2">{payout.method}</td>
                                <td
                                    className={`py-2 ${payout.status === "Completed"
                                        ? "text-green-600"
                                        : "text-yellow-500"
                                        }`}
                                >
                                    {payout.status}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminRevenueReport;
