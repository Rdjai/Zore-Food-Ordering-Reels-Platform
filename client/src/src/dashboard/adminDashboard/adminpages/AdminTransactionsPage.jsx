import React from "react";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { FaCheckCircle, FaEye } from "react-icons/fa";

const AdminTransactionsPage = () => {
    const transactions = [
        {
            id: "#T1001",
            store: "Rdj Store",
            amount: "₹5,000",
            type: "Credit",
            method: "Bank Transfer",
            date: "2025-10-20",
            status: "Completed",
        },
        {
            id: "#T1002",
            store: "Kashyap Kitchen",
            amount: "₹3,200",
            type: "Debit",
            method: "UPI",
            date: "2025-10-19",
            status: "Pending",
        },
        {
            id: "#T1003",
            store: "Zore Café",
            amount: "₹7,800",
            type: "Credit",
            method: "PayPal",
            date: "2025-10-18",
            status: "Failed",
        },
    ];

    const handleVerify = (id) => {
        console.log("Verify transaction:", id);
        // TODO: backend API call to mark verified
    };

    const handleView = (id) => {
        console.log("View transaction details:", id);
        // TODO: navigate to transaction detail page or modal
    };

    return (
        <div className="p-6 bg-gray-50 h-screen w-screen overflow-scroll">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Transactions</h1>

            <div className="bg-white shadow-md rounded-xl p-5 border border-gray-100 w-full overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="text-gray-600 border-b">
                            <th className="py-2">Transaction ID</th>
                            <th className="py-2">Store</th>
                            <th className="py-2">Amount</th>
                            <th className="py-2">Type</th>
                            <th className="py-2">Payment Method</th>
                            <th className="py-2">Date</th>
                            <th className="py-2">Status</th>
                            <th className="py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((txn) => (
                            <tr
                                key={txn.id}
                                className="border-b text-gray-700 hover:bg-gray-50 transition-all"
                            >
                                <td className="py-2 flex items-center gap-2">
                                    <RiMoneyRupeeCircleLine className="text-green-500" /> {txn.id}
                                </td>
                                <td className="py-2">{txn.store}</td>
                                <td className="py-2">{txn.amount}</td>
                                <td className="py-2">{txn.type}</td>
                                <td className="py-2">{txn.method}</td>
                                <td className="py-2">{txn.date}</td>
                                <td className={`py-2 font-medium ${txn.status === "Completed" ? "text-green-600" :
                                    txn.status === "Pending" ? "text-orange-500" :
                                        "text-red-600"
                                    }`}>
                                    {txn.status}
                                </td>
                                <td className="py-2 flex items-center gap-3">
                                    {txn.status === "Pending" && (
                                        <button
                                            onClick={() => handleVerify(txn.id)}
                                            className="flex items-center gap-1 text-green-600 hover:text-green-800"
                                        >
                                            <FaCheckCircle /> Verify
                                        </button>
                                    )}
                                    <button
                                        onClick={() => handleView(txn.id)}
                                        className="flex items-center gap-1 text-blue-500 hover:text-blue-700"
                                    >
                                        <FaEye /> View
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

export default AdminTransactionsPage;
