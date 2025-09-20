import React from "react";
// import { foo } from 'lucide-react'
import logo from '../../assets/img/logo.png'

import { } from 'radix-ui'
import CButton from "./buttone";
const navLink = {
    home: {
        path: '/',
        name: "Home"
    },
    explore: {
        path: '/explore',
        name: "Explore"
    },
    reels: {
        path: '/reels',
        name: "Reels"
    },
    restaurants: {
        path: '/restaurants',
        name: "Restaurants"
    },
    cart: {
        path: '/cart',
        name: "Cart"
    },
    orders: {
        path: '/orders',
        name: "Orders"
    },
    track: {
        path: '/track',
        name: "Track Order"
    },
    profile: {
        path: '/profile',
        name: "Profile"
    },
    login: {
        path: '/login',
        name: "Login"
    },
    register: {
        path: '/register',
        name: "Register"
    },
    admin: {
        path: '/admin',
        name: "Admin Dashboard"
    },
    rider: {
        path: '/rider',
        name: "Rider Panel"
    },
    support: {
        path: '/support',
        name: "Help & Support"
    }
};

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo */}
                <a href="/" className="flex items-center space-x-2">
                    <img
                        src={logo}
                        alt="Logo"
                        className="w-[110px]"
                    />

                    {/* <span className="text-2xl font-bold colors-primary">Foodie</span> */}
                </a>

                {/* Search bar */}
                <div className="hidden md:flex flex-1 mx-6">
                    <input
                        type="text"
                        placeholder="Search for restaurants, dishes, cuisines..."
                        className="w-full rounded-lg px-4 py-2 text-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                </div>

                {/* Menu + Auth */}
                <div className="flex items-center space-x-6">
                    <a
                        href="#"
                        className="colors-primary hover:text-red-600 font-medium transition"
                    >
                        Home
                    </a>
                    <a
                        href="#"
                        className="colors-primary hover:text-red-600 font-medium transition"
                    >
                        About
                    </a>
                    <a
                        href="#"
                        className="colors-primary hover:text-red-600 font-medium transition"
                    >
                        Services
                    </a>
                    <a
                        href="#"
                        className="colors-primary hover:text-red-600 font-medium transition"
                    >
                        Contact
                    </a>
                    <button className="cursor-pointer px-4 py-1 rounded-xl bg-transparent text-red-600 border border-red-600 font-medium 
                   hover:border-black   hover:text-black hover:shadow-soft transition">
                        Register
                    </button>


                    {/* <CButton label="Sign Up" onClick={() => alert("Ordered!")} /> */}
                    <CButton label="Login" onClick={() => alert("Ordered!")} />

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
