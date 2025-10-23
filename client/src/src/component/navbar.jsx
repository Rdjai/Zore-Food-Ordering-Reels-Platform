import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import { logout } from "../redux/features/auth/authslice";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    const handleLogout = () => {
        dispatch(logout());
    };

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
                                {/* <img
                                    src={user.image || "https://cdn-icons-png.flaticon.com/512/847/847969.png"}
                                    alt="User"
                                    className="w-8 h-8 rounded-full border border-gray-300 group-hover:scale-105 transition-transform"
                                /> */}
                                <span className="font-medium text-gray-700 group-hover:text-red-600 transition">
                                    {user.name || "Profile"}
                                </span>
                            </Link>

                            <button
                                onClick={handleLogout}
                                className="text-red-600 border border-red-600 px-3 py-1 rounded-lg hover:bg-red-600 hover:text-white transition"
                            >
                                Logout
                            </button>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
