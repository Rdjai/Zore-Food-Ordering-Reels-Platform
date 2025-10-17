import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";


export default function RegisterPage() {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-r from-yellow-200 to-yellow-400">

            <main className="flex-grow flex items-center justify-center p-6">
                <div className="w-full max-w-md bg-white shadow-card rounded-2xl p-8">
                    <h2 className="text-3xl font-heading font-bold text-center text-neutral-dark mb-3">
                        Create Account ✨
                    </h2>
                    <p className="text-center text-gray-600 mb-6">
                        Join <span className="font-semibold text-primary">Zore App</span> and start your foodie journey 🍔🍕
                    </p>

                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
                        />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
                        />
                        <button
                            type="submit"
                            className="w-full bg-primary text-white font-medium py-2 px-4 rounded-lg hover:bg-primary-dark transition"
                        >
                            Sign Up
                        </button>
                    </form>

                    <div className="my-6 flex items-center">
                        <hr className="flex-grow border-gray-300" />
                        <span className="px-2 text-gray-500">or</span>
                        <hr className="flex-grow border-gray-300" />
                    </div>

                    <div className="space-y-3">
                        <button className="w-full border border-gray-300 rounded-lg px-4 py-2 flex items-center justify-center gap-2 hover:bg-gray-50">
                            <FcGoogle />
                            Sign Up with Google
                        </button>
                        <button className="w-full border border-gray-300 rounded-lg px-4 py-2 flex items-center justify-center gap-2 hover:bg-gray-50">
                            <FaFacebookF />


                            Sign Up with Facebook
                        </button>
                    </div>
                </div>
            </main>


        </div>
    )
}
