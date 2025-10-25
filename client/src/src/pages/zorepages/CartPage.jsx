import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    addToCart,
    clearCart,
    removeFromCart,
    decreaseQuantity
} from "../../redux/features/cart/cartSlice";
import { Trash2, Plus, Minus } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import CheckoutModal from "../../component/CheckoutModal";

const CartPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { cartItems, totalAmount } = useSelector((state) => state.cart);
    const { address } = useSelector((state) => state.address);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [userAddress, setUserAddress] = useState(null);

    const handleSaveAddress = (address) => {
        setUserAddress(address);
        alert("Address saved successfully!");
        setIsModalOpen(false);
    };

    const handleRazorPay = async (userAddress) => {
        console.log("Starting Razorpay Payment...");
        if (!userAddress) {
            alert("Please enter delivery address before payment!");
            setIsModalOpen(true);
            return;
        }

        try {
            const res = await fetch("http://localhost:3000/api/payment/create-order", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("userToken")}`,
                },
                body: JSON.stringify({
                    amount: totalAmount,

                }),
            });


            const data = await res.json();

            console.log("Razorpay Order Data:", data);
            if (!data.success) {
                alert("Error creating Razorpay order");
                return;
            }
            console.log("ha bhaoya yahi id hai address ki", address._id);
            const itemsArray = cartItems.map((item) => ({
                itemsIds: item._id,
                quantity: item.quantity
            }));
            const options = {
                key: data.key,
                amount: data.amount,
                currency: data.currency,
                order_id: data.orderId,
                name: "FoodieFiesta 🍽️",
                description: "Delicious food order payment",
                handler: async function (response) {
                    console.log("Razorpay Response:", response);

                    const verifyRes = await fetch("http://localhost:3000/api/payment/verify-payment", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${localStorage.getItem("userToken")}`,
                        },
                        body: JSON.stringify({
                            response: response,
                            orderData: {
                                items: itemsArray,
                                address: address._id,
                                amount: totalAmount
                            }
                        })


                    });
                    console.log("Verifying Payment...", verifyRes);

                    const verifyData = await verifyRes.json();
                    console.log("Verify Data:", verifyData);

                    if (verifyData.success) {
                        dispatch(clearCart());
                        navigate("/orders");
                    } else {
                        alert("❌ Payment Verification Failed!");
                    }
                },
                prefill: {
                    name: userAddress.fullName,
                    contact: userAddress.phone,
                },
                notes: {
                    address: `${userAddress.street}, ${userAddress.city}, ${userAddress.state}`,
                },
                theme: { color: "#EF4444" },
            };

            if (!window.Razorpay) {
                const script = document.createElement("script");
                script.src = "https://checkout.razorpay.com/v1/checkout.js";
                script.async = true;
                document.body.appendChild(script);
                script.onload = () => {
                    const rzp = new window.Razorpay(options);
                    rzp.open();
                };
            } else {
                const rzp = new window.Razorpay(options);
                rzp.open();
            }
        } catch (error) {
            console.error("Error in Razorpay payment:", error);
            alert("Something went wrong while starting payment");
        }
    };

    if (cartItems.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-[80vh] text-gray-600">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
                    alt="Empty Cart"
                    className="w-28 mb-4"
                />
                <h2 className="text-xl font-semibold mb-2">Your cart is empty 😢</h2>
                <Link
                    to="/explore"
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                >
                    Go Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6 text-gray-800">Your Cart 🛒</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 bg-white p-4 rounded-lg shadow-md">
                    {cartItems.map((item) => (
                        <div
                            key={item._id}
                            className="flex items-center justify-between border-b py-4"
                        >
                            <div className="flex items-center space-x-4">
                                <img
                                    src={item.image || "https://cdn-icons-png.flaticon.com/512/1046/1046784.png"}
                                    alt={item.name}
                                    className="w-16 h-16 rounded-md object-cover"
                                />
                                <div>
                                    <h3 className="font-semibold text-gray-800">{item.name}</h3>
                                    <p className="text-gray-500 text-sm">₹{item.price}</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3">
                                <button
                                    onClick={() => dispatch(decreaseQuantity(item._id))}
                                    className="p-1 rounded-full border hover:bg-gray-100"
                                >
                                    <Minus size={16} />
                                </button>
                                <span className="font-medium">{item.quantity}</span>
                                <button
                                    onClick={() => dispatch(addToCart(item))}
                                    className="p-1 rounded-full border hover:bg-gray-100"
                                >
                                    <Plus size={16} />
                                </button>
                            </div>

                            <div className="text-right">
                                <p className="font-semibold text-gray-800">
                                    ₹{item.price * item.quantity}
                                </p>
                                <button
                                    onClick={() => dispatch(removeFromCart(item._id))}
                                    className="text-red-500 hover:text-red-700 mt-1"
                                >
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-white p-4 rounded-lg shadow-md h-fit">
                    <h2 className="text-lg font-semibold mb-4 text-gray-800">
                        Order Summary
                    </h2>

                    <div className="flex justify-between mb-2 text-gray-700">
                        <span>Items:</span>
                        <span>{cartItems.length}</span>
                    </div>

                    <div className="flex justify-between mb-2 text-gray-700">
                        <span>Total Price:</span>
                        <span>₹{totalAmount}</span>
                    </div>

                    <div className="flex justify-between mb-4 text-gray-700">
                        <span>Delivery:</span>
                        <span className="text-green-600">Free</span>
                    </div>

                    <hr className="mb-4" />

                    <div className="flex justify-between text-lg font-bold text-gray-800">
                        <span>Grand Total:</span>
                        <span>₹{totalAmount}</span>
                    </div>


                    <CheckoutModal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        userAddress={userAddress}
                        onSaveAddress={handleSaveAddress}
                        onPay={handleRazorPay}
                    />


                    <button
                        className="w-full mt-3 bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition"
                        onClick={() => dispatch(clearCart())}
                    >
                        Clear Cart
                    </button>
                </div>
            </div>

            {/* Checkout Modal */}

        </div>
    );
};

export default CartPage;
