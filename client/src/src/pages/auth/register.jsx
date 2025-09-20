import React from "react";

export default function RegisterPage() {
    return (
        <div className="flex h-screen items-center justify-center bg-gradient-to-br from-orange-200 to-amber-300 px-4">
            <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
                {/* Title */}
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
                    Create Account ✨
                </h2>
                <p className="text-gray-500 text-center mb-8">
                    Join <span className="font-semibold">Zore App</span> and start your foodie journey 🍔🍕
                </p>

                {/* Form */}
                <form className="space-y-5">
                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name
                        </label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-400 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-400 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="********"
                            className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-400 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            placeholder="********"
                            className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-400 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Register button */}
                    <button
                        type="submit"
                        className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 rounded-xl shadow-md transition"
                    >
                        Sign Up
                    </button>
                </form>

                {/* Divider */}
                <div className="flex items-center my-6">
                    <hr className="flex-grow border-gray-300" />
                    <span className="px-2 text-gray-500 text-sm">or</span>
                    <hr className="flex-grow border-gray-300" />
                </div>

                {/* Social Register */}
                <div className="space-y-3">
                    <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-xl hover:bg-gray-100 transition">
                        <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="Google" className="w-5 h-5" />
                        Sign Up with Google
                    </button>
                    <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-xl hover:bg-gray-100 transition">
                        <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" className="w-5 h-5" />
                        Sign Up with Facebook
                    </button>
                </div>

                {/* Already have account */}
                <p className="text-center text-gray-600 text-sm mt-6">
                    Already have an account?{" "}
                    <a href="/login" className="text-amber-600 font-semibold hover:underline">
                        Login
                    </a>
                </p>
            </div>
        </div>
    );
}
