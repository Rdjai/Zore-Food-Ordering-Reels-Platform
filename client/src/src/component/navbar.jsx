import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import { logout } from "../redux/features/auth/authslice";
import { useDispatch, useSelector } from "react-redux";
import { ShoppingCart } from "lucide-react"; // npm install lucide-react

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
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-2">
                    <img src={logo} alt="Logo" className="w-[110px]" />
                </Link>

                {/* Search */}
                <div className="hidden md:flex flex-1 mx-6">
                    <input
                        type="text"
                        placeholder="Search for restaurants, dishes, cuisines..."
                        className="w-full rounded-lg px-4 py-2 text-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                </div>

                {/* Nav Links + Cart + Auth */}
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
                            <Link to="/profile" className="flex items-center space-x-2 group">
                                <span className="font-medium text-gray-700 group-hover:text-red-600 transition">
                                    {user.name || "Profile"}
                                </span>
                            </Link>


                        </>
                    )}
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
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
