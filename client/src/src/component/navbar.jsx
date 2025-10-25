import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import { logout } from "../redux/features/auth/authslice";
import { useDispatch, useSelector } from "react-redux";
import { ShoppingCart, User } from "lucide-react";

const Navbar = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const { cartItems } = useSelector((state) => state.cart); // 👈 cart data

    const handleLogout = () => {
        dispatch(logout());
    };
    console.log("cart items in navbar:", cartItems);

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
                <Link to="/" className="flex items-center space-x-2">
                    <img src={logo} alt="Logo" className="w-[110px]" />
                </Link>

                <div className="hidden md:flex flex-1 mx-6">
                    <input
                        type="text"
                        placeholder="Search for restaurants, dishes, cuisines..."
                        className="w-full rounded-lg px-4 py-2 text-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                </div>

                <div className="flex items-center space-x-6">
                    <Link to="/" className="colors-primary hover:text-red-600 font-medium transition">
                        Home
                    </Link>
                    <Link to="/about" className="colors-primary hover:text-red-600 font-medium transition">
                        About
                    </Link>
                    <Link to="#" className="colors-primary hover:text-red-600 font-medium transition">
                        Services
                    </Link>
                    <Link to="#" className="colors-primary hover:text-red-600 font-medium transition">
                        Contact
                    </Link>
                    <Link to="/cart" className="relative">
                        <ShoppingCart size={24} className="text-red-600 hover:scale-110 transition-transform hover:text-black" />
                        {cartItems.length > 0 && (
                            <span
                                className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full shadow-md"
                            >
                                {cartItems.length}
                            </span>
                        )}
                    </Link>

                    {!user ? (
                        <>
                            <Link
                                to="/signup"
                                className="cursor-pointer px-4 py-1 rounded-xl bg-transparent text-red-600 border border-red-600 font-medium 
                hover:border-black hover:text-black hover:shadow-soft transition"
                            >
                                Register
                            </Link>

                            <Link
                                to="/login"
                                className="px-4 py-1 font-medium transition cursor-pointer rounded-lg front-semibold duration-300 focus:outline-none bg-red-500 text-white hover:bg-red-600 shadow-md hover:shadow-lg"
                            >
                                Login
                            </Link>
                        </>
                    ) : (
                        <>
                            <div className="relative group">
                                <Link
                                    to="/profile"
                                    className="flex items-center justify-center bg-gradient-to-r from-red-500 to-red-700 h-[45px] w-[45px] rounded-full shadow-md hover:scale-105 transition-all duration-300 overflow-hidden"
                                >
                                    {user?.image ? (
                                        <img
                                            src={user.image}
                                            alt="Profile"
                                            className="h-full w-full object-cover rounded-full border-2 border-white"
                                        />
                                    ) : (
                                        <User className="text-white w-6 h-6" />
                                    )}
                                </Link>

                                {/* Dropdown Menu */}
                                <div className="absolute right-0 mt-3 w-48 bg-white border border-gray-200 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-300 origin-top-right z-50">
                                    <div className="p-3 border-b border-gray-100">
                                        <p className="text-sm font-semibold text-gray-800">
                                            {user?.name || "Guest User"}
                                        </p>
                                        <p className="text-xs text-gray-500 truncate">{user?.email || "guest@example.com"}</p>
                                    </div>

                                    <ul className="py-2 text-gray-700 text-sm">
                                        <li>
                                            <Link
                                                to="/orders"
                                                className="block px-4 py-2 hover:bg-red-50 hover:text-red-600 transition"
                                            >
                                                🛒 My Orders
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/settings"
                                                className="block px-4 py-2 hover:bg-red-50 hover:text-red-600 transition"
                                            >
                                                ⚙️ Settings
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/help"
                                                className="block px-4 py-2 hover:bg-red-50 hover:text-red-600 transition"
                                            >
                                                💬 Help & Support
                                            </Link>
                                        </li>
                                    </ul>

                                    <div className="border-t border-gray-100">
                                        <button
                                            className="w-full text-left px-4 py-2 text-sm text-red-600 font-semibold hover:bg-red-100 transition"
                                        >
                                            🚪 Logout
                                        </button>
                                    </div>
                                </div>
                            </div>


                        </>
                    )}

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
