import React from "react";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const AdminPayoutsPage = () => {
    const payouts = [
        {
            id: "#PA1001",
            store: "Rdj Store",
            amount: "₹5,000",
            date: "2025-10-20",
            type: "Weekly",
            method: "Bank Transfer",
            status: "Completed",
        },
        {
            id: "#PA1002",
            store: "Kashyap Kitchen",
            amount: "₹3,200",
            date: "2025-10-19",
            type: "Daily",
            method: "UPI",
            status: "Pending",
        },
        {
            id: "#PA1003",
            store: "Zore Café",
            amount: "₹7,800",
            date: "2025-10-18",
            type: "Monthly",
            method: "PayPal",
            status: "Failed",
        },
    ];

    const handlePay = (id) => {
        console.log("Pay payout:", id);
        // TODO: backend API call
    };

    const handleReject = (id) => {
        console.log("Reject payout:", id);
        // TODO: backend API call
    };

    return (
        <div className="p-6 bg-gray-50 h-screen w-screen">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Store Payouts</h1>

            <div className="bg-white shadow-md rounded-xl p-5 border border-gray-100 w-full overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="text-gray-600 border-b">
                            <th className="py-2">Payout ID</th>
                            <th className="py-2">Store</th>
                            <th className="py-2">Amount</th>
                            <th className="py-2">Date</th>
                            <th className="py-2">Type</th>
                            <th className="py-2">Payment Method</th>
                            <th className="py-2">Status</th>
                            <th className="py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payouts.map((payout) => (
                            <tr
                                key={payout.id}
                                className="border-b text-gray-700 hover:bg-gray-50 transition-all"
                            >
                                <td className="py-2 flex items-center gap-2">
                                    <RiMoneyRupeeCircleLine className="text-green-500" /> {payout.id}
                                </td>
                                <td className="py-2">{payout.store}</td>
                                <td className="py-2">{payout.amount}</td>
                                <td className="py-2">{payout.date}</td>
                                <td className="py-2">{payout.type}</td>
                                <td className="py-2">{payout.method}</td>
                                <td className={`py-2 font-medium ${payout.status === "Completed" ? "text-green-600" :
                                        payout.status === "Pending" ? "text-orange-500" :
                                            "text-red-600"
                                    }`}>
                                    {payout.status}
                                </td>
                                <td className="py-2 flex items-center gap-2">
                                    {payout.status === "Pending" ? (
                                        <>
                                            <button
                                                onClick={() => handlePay(payout.id)}
                                                className="flex items-center gap-1 text-green-600 hover:text-green-800"
                                            >
                                                <FaCheckCircle /> Pay
                                            </button>
                                            <button
                                                onClick={() => handleReject(payout.id)}
                                                className="flex items-center gap-1 text-red-600 hover:text-red-800"
                                            >
                                                <FaTimesCircle /> Reject
                                            </button>
                                        </>
                                    ) : (
                                        <span className="text-gray-500">No Action</span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminPayoutsPage;
