import React, { useState, useEffect } from "react";

const StorePaymentPage = () => {
    const [payments, setPayments] = useState([]);

    // Temporary JSON data for payouts
    const tempData = [
        {
            _id: "pmt001",
            payoutId: "PAYOUT173001",
            amount: 5000,
            payoutType: "Bank Transfer",
            paymentMethod: "NEFT",
            status: "Completed",
            date: "2025-10-20T10:00:00Z",
            store: "Pizza Hub",
            notes: "Monthly payout for September",
        },
        {
            _id: "pmt002",
            payoutId: "PAYOUT173002",
            amount: 3200,
            payoutType: "UPI",
            paymentMethod: "Google Pay",
            status: "Completed",
            date: "2025-09-20T12:30:00Z",
            store: "Pizza Hub",
            notes: "Weekly payout",
        },
        {
            _id: "pmt003",
            payoutId: "PAYOUT173003",
            amount: 4200,
            payoutType: "Wallet",
            paymentMethod: "Paytm Wallet",
            status: "Pending",
            date: "2025-10-15T15:45:00Z",
            store: "Pizza Hub",
            notes: "Pending settlement",
        },
        {
            _id: "pmt003",
            payoutId: "PAYOUT173003",
            amount: 4200,
            payoutType: "Wallet",
            paymentMethod: "Paytm Wallet",
            status: "Pending",
            date: "2025-10-15T15:45:00Z",
            store: "Pizza Hub",
            notes: "Pending settlement",
        },
        {
            _id: "pmt003",
            payoutId: "PAYOUT173003",
            amount: 4200,
            payoutType: "Wallet",
            paymentMethod: "Paytm Wallet",
            status: "Pending",
            date: "2025-10-15T15:45:00Z",
            store: "Pizza Hub",
            notes: "Pending settlement",
        },
        {
            _id: "pmt003",
            payoutId: "PAYOUT173003",
            amount: 4200,
            payoutType: "Wallet",
            paymentMethod: "Paytm Wallet",
            status: "Pending",
            date: "2025-10-15T15:45:00Z",
            store: "Pizza Hub",
            notes: "Pending settlement",
        },
        {
            _id: "pmt003",
            payoutId: "PAYOUT173003",
            amount: 4200,
            payoutType: "Wallet",
            paymentMethod: "Paytm Wallet",
            status: "Pending",
            date: "2025-10-15T15:45:00Z",
            store: "Pizza Hub",
            notes: "Pending settlement",
        },
        {
            _id: "pmt003",
            payoutId: "PAYOUT173003",
            amount: 4200,
            payoutType: "Wallet",
            paymentMethod: "Paytm Wallet",
            status: "Pending",
            date: "2025-10-15T15:45:00Z",
            store: "Pizza Hub",
            notes: "Pending settlement",
        },
        {
            _id: "pmt003",
            payoutId: "PAYOUT173003",
            amount: 4200,
            payoutType: "Wallet",
            paymentMethod: "Paytm Wallet",
            status: "Pending",
            date: "2025-10-15T15:45:00Z",
            store: "Pizza Hub",
            notes: "Pending settlement",
        },
        {
            _id: "pmt003",
            payoutId: "PAYOUT173003",
            amount: 4200,
            payoutType: "Wallet",
            paymentMethod: "Paytm Wallet",
            status: "Pending",
            date: "2025-10-15T15:45:00Z",
            store: "Pizza Hub",
            notes: "Pending settlement",
        },
        {
            _id: "pmt003",
            payoutId: "PAYOUT173003",
            amount: 4200,
            payoutType: "Wallet",
            paymentMethod: "Paytm Wallet",
            status: "Pending",
            date: "2025-10-15T15:45:00Z",
            store: "Pizza Hub",
            notes: "Pending settlement",
        },
        {
            _id: "pmt003",
            payoutId: "PAYOUT173003",
            amount: 4200,
            payoutType: "Wallet",
            paymentMethod: "Paytm Wallet",
            status: "Pending",
            date: "2025-10-15T15:45:00Z",
            store: "Pizza Hub",
            notes: "Pending settlement",
        },
        {
            _id: "pmt003",
            payoutId: "PAYOUT173003",
            amount: 4200,
            payoutType: "Wallet",
            paymentMethod: "Paytm Wallet",
            status: "Pending",
            date: "2025-10-15T15:45:00Z",
            store: "Pizza Hub",
            notes: "Pending settlement",
        },
        {
            _id: "pmt003",
            payoutId: "PAYOUT173003",
            amount: 4200,
            payoutType: "Wallet",
            paymentMethod: "Paytm Wallet",
            status: "Pending",
            date: "2025-10-15T15:45:00Z",
            store: "Pizza Hub",
            notes: "Pending settlement",
        },
        {
            _id: "pmt003",
            payoutId: "PAYOUT173003",
            amount: 4200,
            payoutType: "Wallet",
            paymentMethod: "Paytm Wallet",
            status: "Pending",
            date: "2025-10-15T15:45:00Z",
            store: "Pizza Hub",
            notes: "Pending settlement",
        },
        {
            _id: "pmt003",
            payoutId: "PAYOUT173003",
            amount: 4200,
            payoutType: "Wallet",
            paymentMethod: "Paytm Wallet",
            status: "Pending",
            date: "2025-10-15T15:45:00Z",
            store: "Pizza Hub",
            notes: "Pending settlement",
        },
        {
            _id: "pmt003",
            payoutId: "PAYOUT173003",
            amount: 4200,
            payoutType: "Wallet",
            paymentMethod: "Paytm Wallet",
            status: "Pending",
            date: "2025-10-15T15:45:00Z",
            store: "Pizza Hub",
            notes: "Pending settlement",
        },
        {
            _id: "pmt003",
            payoutId: "PAYOUT173003",
            amount: 4200,
            payoutType: "Wallet",
            paymentMethod: "Paytm Wallet",
            status: "Pending",
            date: "2025-10-15T15:45:00Z",
            store: "Pizza Hub",
            notes: "Pending settlement",
        },
        {
            _id: "pmt003",
            payoutId: "PAYOUT173003",
            amount: 4200,
            payoutType: "Wallet",
            paymentMethod: "Paytm Wallet",
            status: "Pending",
            date: "2025-10-15T15:45:00Z",
            store: "Pizza Hub",
            notes: "Pending settlement",
        },
        {
            _id: "pmt003",
            payoutId: "PAYOUT173003",
            amount: 4200,
            payoutType: "Wallet",
            paymentMethod: "Paytm Wallet",
            status: "Pending",
            date: "2025-10-15T15:45:00Z",
            store: "Pizza Hub",
            notes: "Pending settlement",
        },
        {
            _id: "pmt003",
            payoutId: "PAYOUT173003",
            amount: 4200,
            payoutType: "Wallet",
            paymentMethod: "Paytm Wallet",
            status: "Pending",
            date: "2025-10-15T15:45:00Z",
            store: "Pizza Hub",
            notes: "Pending settlement",
        },
        {
            _id: "pmt003",
            payoutId: "PAYOUT173003",
            amount: 4200,
            payoutType: "Wallet",
            paymentMethod: "Paytm Wallet",
            status: "Pending",
            date: "2025-10-15T15:45:00Z",
            store: "Pizza Hub",
            notes: "Pending settlement",
        },
        {
            _id: "pmt003",
            payoutId: "PAYOUT173003",
            amount: 4200,
            payoutType: "Wallet",
            paymentMethod: "Paytm Wallet",
            status: "Pending",
            date: "2025-10-15T15:45:00Z",
            store: "Pizza Hub",
            notes: "Pending settlement",
        },
        {
            _id: "pmt003",
            payoutId: "PAYOUT173003",
            amount: 4200,
            payoutType: "Wallet",
            paymentMethod: "Paytm Wallet",
            status: "Pending",
            date: "2025-10-15T15:45:00Z",
            store: "Pizza Hub",
            notes: "Pending settlement",
        },
        {
            _id: "pmt003",
            payoutId: "PAYOUT173003",
            amount: 4200,
            payoutType: "Wallet",
            paymentMethod: "Paytm Wallet",
            status: "Pending",
            date: "2025-10-15T15:45:00Z",
            store: "Pizza Hub",
            notes: "Pending settlement",
        },
        {
            _id: "pmt003",
            payoutId: "PAYOUT173003",
            amount: 4200,
            payoutType: "Wallet",
            paymentMethod: "Paytm Wallet",
            status: "Pending",
            date: "2025-10-15T15:45:00Z",
            store: "Pizza Hub",
            notes: "Pending settlement",
        },
        {
            _id: "pmt003",
            payoutId: "PAYOUT173003",
            amount: 4200,
            payoutType: "Wallet",
            paymentMethod: "Paytm Wallet",
            status: "Pending",
            date: "2025-10-15T15:45:00Z",
            store: "Pizza Hub",
            notes: "Pending settlement",
        },
        {
            _id: "pmt003",
            payoutId: "PAYOUT173003",
            amount: 4200,
            payoutType: "Wallet",
            paymentMethod: "Paytm Wallet",
            status: "Pending",
            date: "2025-10-15T15:45:00Z",
            store: "Pizza Hub",
            notes: "Pending settlement",
        },
        {
            _id: "pmt003",
            payoutId: "PAYOUT173003",
            amount: 4200,
            payoutType: "Wallet",
            paymentMethod: "Paytm Wallet",
            status: "Pending",
            date: "2025-10-15T15:45:00Z",
            store: "Pizza Hub",
            notes: "Pending settlement",
        },
        {
            _id: "pmt003",
            payoutId: "PAYOUT173003",
            amount: 4200,
            payoutType: "Wallet",
            paymentMethod: "Paytm Wallet",
            status: "Pending",
            date: "2025-10-15T15:45:00Z",
            store: "Pizza Hub",
            notes: "Pending settlement",
        },
        {
            _id: "pmt003",
            payoutId: "PAYOUT173003",
            amount: 4200,
            payoutType: "Wallet",
            paymentMethod: "Paytm Wallet",
            status: "Pending",
            date: "2025-10-15T15:45:00Z",
            store: "Pizza Hub",
            notes: "Pending settlement",
        },
        {
            _id: "pmt003",
            payoutId: "PAYOUT173003",
            amount: 4200,
            payoutType: "Wallet",
            paymentMethod: "Paytm Wallet",
            status: "Pending",
            date: "2025-10-15T15:45:00Z",
            store: "Pizza Hub",
            notes: "Pending settlement",
        },
        {
            _id: "pmt003",
            payoutId: "PAYOUT173003",
            amount: 4200,
            payoutType: "Wallet",
            paymentMethod: "Paytm Wallet",
            status: "Pending",
            date: "2025-10-15T15:45:00Z",
            store: "Pizza Hub",
            notes: "Pending settlement",
        },
    ];

    useEffect(() => {
        // Simulate API fetch
        setTimeout(() => setPayments(tempData), 1000);
    }, []);

    if (payments.length === 0) {
        return (
            <div className="text-center mt-10 text-gray-500 text-lg">
                Loading payouts...
            </div>
        );
    }

    // Calculate total completed payouts
    const totalPayout = payments
        .filter((p) => p.status === "Completed")
        .reduce((sum, p) => sum + p.amount, 0);

    return (
        <div className="w-[83vw] h-screen mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl  overflow-scroll no-scrollbar">
            <h2 className="text-2xl font-bold text-center mb-6">Store Payout Dashboard</h2>

            {/* Total Payout */}
            <div className="bg-green-100 text-green-800 font-semibold p-4 rounded-xl mb-6 text-center">
                Total Completed Payout: ₹{totalPayout}
            </div>

            {/* Payment History */}
            <h3 className="text-xl font-semibold mb-4">Previous Payouts</h3>

            <div className="h-screen overflow-scroll no-scrollbar grid gap-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                {payments.map((p) => (
                    <div
                        key={p._id}
                        className="border border-gray-200 rounded-xl p-4 mb-4 hover:shadow-md transition"
                    >
                        <div className="flex justify-between items-center mb-2">
                            <h4 className="font-semibold">{p.payoutId}</h4>
                            <span
                                className={`text-sm font-semibold ${p.status === "Completed" ? "text-green-600" : "text-yellow-600"
                                    }`}
                            >
                                {p.status}
                            </span>
                        </div>

                        <p className="text-sm text-gray-500 mb-2">
                            Date: {new Date(p.date).toLocaleString()}
                        </p>

                        <p className="text-sm text-gray-700 mb-2">
                            Amount: ₹{p.amount} ({p.paymentMethod})
                        </p>

                        <p className="text-sm text-gray-700 mb-2">
                            Payout Type: {p.payoutType}
                        </p>

                        {p.notes && (
                            <p className="text-sm text-gray-500 mb-2">
                                Notes: {p.notes}
                            </p>
                        )}

                        <button className="mt-2 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                            Download Payout Receipt
                        </button>
                    </div>
                ))}

            </div>
            <div>
                {/* footer */}
                <div className="bg-gray-200 p-4 text-center mb-40">
                    <p className="text-gray-600">&copy; 2024 Store Dashboard. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default StorePaymentPage;
