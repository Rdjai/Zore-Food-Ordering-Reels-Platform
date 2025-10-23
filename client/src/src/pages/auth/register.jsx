import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../../redux/features/auth/authslice";

export default function RegisterPage() {
    const [inputName, setInputName] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    const [inputConfirmPassword, setInputConfirmPassword] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [err, setErr] = useState("");
    const { loading, error, user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const HandleRegister = async (e) => {
        e.preventDefault();

        if (!inputName || !inputEmail || !inputPassword || !inputConfirmPassword) {
            setErr("⚠️ Please fill all the fields");
            return;
        }

        if (inputPassword !== inputConfirmPassword) {
            setErr("❌ Passwords do not match");
            return;
        }

        setErr("");

        dispatch(
            userRegister({
                name: inputName,
                email: inputEmail,
                password: inputPassword,
            })
        );
    };

    useEffect(() => {
        if (localStorage.getItem("userToken")) {
            window.location.href = "/";
        }

    },)

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-r from-yellow-200 to-yellow-400">
            <main className="flex-grow flex items-center justify-center p-6">
                <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 relative">
                    {loading && (
                        <div className="absolute inset-0 bg-white/70 flex items-center justify-center rounded-2xl">
                            <div className="w-10 h-10 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
                        </div>
                    )}

                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
                        Create Account ✨
                    </h2>
                    <p className="text-center text-gray-600 mb-6">
                        Join{" "}
                        <span className="font-semibold text-green-600">Zore App</span> and start your foodie journey 🍔🍕
                    </p>

                    {err && (
                        <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-center">
                            {err}
                        </div>
                    )}
                    {error && (
                        <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-center">
                            {error}
                        </div>
                    )}

                    <form className="space-y-4" onSubmit={HandleRegister}>
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-green-500"
                            value={inputName}
                            onChange={(e) => setInputName(e.target.value)}
                        />
                        <input
                            value={inputEmail}
                            onChange={(e) => setInputEmail(e.target.value)}
                            type="email"
                            placeholder="Email"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-green-500"
                        />
                        <input
                            type="password"
                            value={inputPassword}
                            onChange={(e) => setInputPassword(e.target.value)}
                            placeholder="Password"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-green-500"
                        />
                        <input
                            type="password"
                            value={inputConfirmPassword}
                            onChange={(e) => setInputConfirmPassword(e.target.value)}
                            placeholder="Confirm Password"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-green-500"
                        />
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full text-white font-semibold py-2 px-4 rounded-lg transition ${loading
                                ? "bg-green-400 cursor-not-allowed"
                                : "bg-green-500 hover:bg-green-600"
                                }`}
                        >
                            {loading ? "Creating Account..." : "Sign Up"}
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
                            <FaFacebookF className="text-blue-600" />
                            Sign Up with Facebook
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}
