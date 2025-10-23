import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/features/auth/authslice";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, user } = useSelector((state) => state.auth);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErr("⚠️ Please fill all the fields");
      return;
    }

    setErr("");

    dispatch(loginUser({ email, password }))
      .unwrap()
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        setErr(err || "Invalid credentials");
      });
  };

  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      navigate("/");
    }
  })
  if (user) {
    navigate("/");
  }
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-br from-amber-200 to-orange-300 px-4">
      <div className="relative w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        {loading && (
          <div className="absolute inset-0 bg-white/70 flex items-center justify-center rounded-2xl">
            <div className="w-10 h-10 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Welcome Back 👋
        </h2>
        <p className="text-gray-500 text-center mb-8">
          Login to continue using{" "}
          <span className="font-semibold">Zore App</span>
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

        <form className="space-y-5" onSubmit={handleLogin}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-400 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-400 focus:outline-none"
              required
            />
          </div>

          <div className="flex justify-end">
            <a href="#" className="text-sm text-amber-600 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full font-semibold py-3 rounded-xl shadow-md transition ${loading
              ? "bg-amber-400 cursor-not-allowed text-white"
              : "bg-amber-500 hover:bg-amber-600 text-white"
              }`}
          >
            {loading ? "Logging In..." : "Login"}
          </button>
        </form>

        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-500 text-sm">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <div className="space-y-3">
          <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-xl hover:bg-gray-100 transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
              alt="Google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>
          <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-xl hover:bg-gray-100 transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
              alt="Facebook"
              className="w-5 h-5"
            />
            Continue with Facebook
          </button>
        </div>

        <p className="text-center text-gray-600 text-sm mt-6">
          Don’t have an account?{" "}
          <a
            href="/register"
            className="text-amber-600 font-semibold hover:underline"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
