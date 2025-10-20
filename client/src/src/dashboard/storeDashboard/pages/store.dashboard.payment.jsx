import React, { useState, useEffect } from "react";

const StoreTransactionPage = () => {
    const [transactions, setTransactions] = useState([]);

    // temporary JSON data
    const tempData = [
        {
            _id: "672adf2921f0aab0022d948d",
            transactionId: "TXN1734730133",
            amount: 499,
            paymentMethod: "UPI",
            status: "Completed",
            date: "2025-10-20T11:00:00Z",
            userId: {
                _id: "672adce321f0aab0022d92f0",
                name: "Jay Kashyap",
                email: "jay@example.com",
                phone: "+91 9876543210",
            },
            orderId: {
                _id: "672adea621f0aab0022d940a",
                restaurant: "Pizza Hub",
                items: [
                    { name: "Margherita Pizza", quantity: 1, price: 299 },
                    { name: "Garlic Bread", quantity: 1, price: 200 },
                ],
                totalPrice: 499,
                orderStatus: "Delivered",
            },
            paymentDetails: {
                provider: "Google Pay",
                transactionType: "Online",
                upiId: "jay@ybl",
                currency: "INR",
            },
        },
        {
            _id: "672ae02921f0aab0022d949e",
            transactionId: "TXN1734730188",
            amount: 299,
            paymentMethod: "Card",
            status: "Pending",
            date: "2025-10-19T14:30:00Z",
            userId: {
                _id: "672adce321f0aab0022d92f0",
                name: "Jay Kashyap",
                email: "jay@example.com",
                phone: "+91 9876543210",
            },
            orderId: {
                _id: "672adeb621f0aab0022d940b",
                restaurant: "Burger Point",
                items: [
                    { name: "Cheese Burger", quantity: 1, price: 199 },
                    { name: "Cold Coffee", quantity: 1, price: 100 },
                ],
                totalPrice: 299,
                orderStatus: "Preparing",
            },
            paymentDetails: {
                provider: "HDFC Bank",
                transactionType: "Card",
                cardType: "Credit",
                last4Digits: "4321",
                currency: "INR",
            },
        },
        {
            _id: "672ae12a21f0aab0022d94bf",
            transactionId: "TXN1734730234",
            amount: 179,
            paymentMethod: "Wallet",
            status: "Completed",
            date: "2025-10-18T18:15:00Z",
            userId: {
                _id: "672adce321f0aab0022d92f0",
                name: "Jay Kashyap",
                email: "jay@example.com",
                phone: "+91 9876543210",
            },
            orderId: {
                _id: "672adec621f0aab0022d940c",
                restaurant: "Green Leaf Salad Bar",
                items: [{ name: "Veg Salad Bowl", quantity: 1, price: 179 }],
                totalPrice: 179,
                orderStatus: "Delivered",
            },
            paymentDetails: {
                provider: "Paytm Wallet",
                transactionType: "Wallet",
                walletId: "jay@paytm",
                currency: "INR",
            },
        },
        {
            _id: "672ae22c21f0aab0022d94d2",
            transactionId: "TXN1734730312",
            amount: 99,
            paymentMethod: "Cash",
            status: "Completed",
            date: "2025-10-17T09:00:00Z",
            userId: {
                _id: "672adce321f0aab0022d92f0",
                name: "Jay Kashyap",
                email: "jay@example.com",
                phone: "+91 9876543210",
            },
            orderId: {
                _id: "672aded621f0aab0022d940d",
                restaurant: "Sweet Corner",
                items: [{ name: "Gulab Jamun", quantity: 2, price: 99 }],
                totalPrice: 99,
                orderStatus: "Delivered",
            },
            paymentDetails: {
                provider: "COD",
                transactionType: "Offline",
                currency: "INR",
            },
        },
        {
            _id: "672ae22c21f0aab0022d94d2",
            transactionId: "TXN1734730312",
            amount: 99,
            paymentMethod: "Cash",
            status: "Completed",
            date: "2025-10-17T09:00:00Z",
            userId: {
                _id: "672adce321f0aab0022d92f0",
                name: "Jay Kashyap",
                email: "jay@example.com",
                phone: "+91 9876543210",
            },
            orderId: {
                _id: "672aded621f0aab0022d940d",
                restaurant: "Sweet Corner",
                items: [{ name: "Gulab Jamun", quantity: 2, price: 99 }],
                totalPrice: 99,
                orderStatus: "Delivered",
            },
            paymentDetails: {
                provider: "COD",
                transactionType: "Offline",
                currency: "INR",
            },
        },
        {
            _id: "672ae22c21f0aab0022d94d2",
            transactionId: "TXN1734730312",
            amount: 99,
            paymentMethod: "Cash",
            status: "Completed",
            date: "2025-10-17T09:00:00Z",
            userId: {
                _id: "672adce321f0aab0022d92f0",
                name: "Jay Kashyap",
                email: "jay@example.com",
                phone: "+91 9876543210",
            },
            orderId: {
                _id: "672aded621f0aab0022d940d",
                restaurant: "Sweet Corner",
                items: [{ name: "Gulab Jamun", quantity: 2, price: 99 }],
                totalPrice: 99,
                orderStatus: "Delivered",
            },
            paymentDetails: {
                provider: "COD",
                transactionType: "Offline",
                currency: "INR",
            },
        },
        {
            _id: "672ae22c21f0aab0022d94d2",
            transactionId: "TXN1734730312",
            amount: 99,
            paymentMethod: "Cash",
            status: "Completed",
            date: "2025-10-17T09:00:00Z",
            userId: {
                _id: "672adce321f0aab0022d92f0",
                name: "Jay Kashyap",
                email: "jay@example.com",
                phone: "+91 9876543210",
            },
            orderId: {
                _id: "672aded621f0aab0022d940d",
                restaurant: "Sweet Corner",
                items: [{ name: "Gulab Jamun", quantity: 2, price: 99 }],
                totalPrice: 99,
                orderStatus: "Delivered",
            },
            paymentDetails: {
                provider: "COD",
                transactionType: "Offline",
                currency: "INR",
            },
        },
        {
            _id: "672ae22c21f0aab0022d94d2",
            transactionId: "TXN1734730312",
            amount: 99,
            paymentMethod: "Cash",
            status: "Completed",
            date: "2025-10-17T09:00:00Z",
            userId: {
                _id: "672adce321f0aab0022d92f0",
                name: "Jay Kashyap",
                email: "jay@example.com",
                phone: "+91 9876543210",
            },
            orderId: {
                _id: "672aded621f0aab0022d940d",
                restaurant: "Sweet Corner",
                items: [{ name: "Gulab Jamun", quantity: 2, price: 99 }],
                totalPrice: 99,
                orderStatus: "Delivered",
            },
            paymentDetails: {
                provider: "COD",
                transactionType: "Offline",
                currency: "INR",
            },
        },
        {
            _id: "672ae22c21f0aab0022d94d2",
            transactionId: "TXN1734730312",
            amount: 99,
            paymentMethod: "Cash",
            status: "Completed",
            date: "2025-10-17T09:00:00Z",
            userId: {
                _id: "672adce321f0aab0022d92f0",
                name: "Jay Kashyap",
                email: "jay@example.com",
                phone: "+91 9876543210",
            },
            orderId: {
                _id: "672aded621f0aab0022d940d",
                restaurant: "Sweet Corner",
                items: [{ name: "Gulab Jamun", quantity: 2, price: 99 }],
                totalPrice: 99,
                orderStatus: "Delivered",
            },
            paymentDetails: {
                provider: "COD",
                transactionType: "Offline",
                currency: "INR",
            },
        },
        {
            _id: "672ae22c21f0aab0022d94d2",
            transactionId: "TXN1734730312",
            amount: 99,
            paymentMethod: "Cash",
            status: "Completed",
            date: "2025-10-17T09:00:00Z",
            userId: {
                _id: "672adce321f0aab0022d92f0",
                name: "Jay Kashyap",
                email: "jay@example.com",
                phone: "+91 9876543210",
            },
            orderId: {
                _id: "672aded621f0aab0022d940d",
                restaurant: "Sweet Corner",
                items: [{ name: "Gulab Jamun", quantity: 2, price: 99 }],
                totalPrice: 99,
                orderStatus: "Delivered",
            },
            paymentDetails: {
                provider: "COD",
                transactionType: "Offline",
                currency: "INR",
            },
        },
        {
            _id: "672ae22c21f0aab0022d94d2",
            transactionId: "TXN1734730312",
            amount: 99,
            paymentMethod: "Cash",
            status: "Completed",
            date: "2025-10-17T09:00:00Z",
            userId: {
                _id: "672adce321f0aab0022d92f0",
                name: "Jay Kashyap",
                email: "jay@example.com",
                phone: "+91 9876543210",
            },
            orderId: {
                _id: "672aded621f0aab0022d940d",
                restaurant: "Sweet Corner",
                items: [{ name: "Gulab Jamun", quantity: 2, price: 99 }],
                totalPrice: 99,
                orderStatus: "Delivered",
            },
            paymentDetails: {
                provider: "COD",
                transactionType: "Offline",
                currency: "INR",
            },
        },
    ];
    useEffect(() => {
        // simulate API load
        setTimeout(() => setTransactions(tempData), 1000);
    }, []);

    // Show loading while transactions are empty
    if (transactions.length === 0) {
        return (
            <div className="text-center mt-10 text-gray-500 text-lg">
                Loading transactions...
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl ">
            <h2 className="text-2xl font-bold text-center mb-6">Payment & Transaction History</h2>
            <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-screen overflow-scroll no-scrollbar pb-55">

                {transactions.map((t) => (
                    <div
                        key={t._id}
                        className="border border-gray-200 rounded-xl p-4 mb-6 hover:shadow-md transition"
                    >
                        {/* Transaction Header */}
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="text-lg font-semibold">{t.orderId.restaurant}</h3>
                            <span
                                className={`text-sm font-semibold ${t.status === "Completed" ? "text-green-600" : "text-yellow-600"
                                    }`}
                            >
                                {t.status}
                            </span>
                        </div>

                        <p className="text-sm text-gray-500 mb-3">
                            {new Date(t.date).toLocaleString()}
                        </p>

                        {/* Items */}
                        <ul className="space-y-1 text-gray-700 mb-3">
                            {t.orderId.items.map((item, idx) => (
                                <li key={idx} className="flex justify-between">
                                    <span>{item.name} × {item.quantity}</span>
                                    <span>₹{item.price}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Totals */}
                        <p className="text-right font-semibold">
                            Total: ₹{t.orderId.totalPrice}
                        </p>

                        {/* Payment Info */}
                        <div className="mt-3 text-sm text-gray-600">
                            <p>
                                <strong>Payment:</strong> {t.paymentMethod} ({t.paymentDetails.provider})
                            </p>
                            <p>
                                <strong>Transaction ID:</strong> {t.transactionId}
                            </p>
                            <p>
                                <strong>Amount Paid:</strong> ₹{t.amount} {t.paymentDetails.currency}
                            </p>
                        </div>

                        <button className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600">
                            Download Receipt
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StoreTransactionPage;