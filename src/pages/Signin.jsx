import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import axios from "axios";
import LoadingSpinner from "../components/common/LoadingSpinner";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [showPassword, setShowPasswors] = useState(false);

  const handleSignin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        { email, password },
      );

      console.log("Full Backend Response:", response.data); // IMPORTANT: Check this in browser console

      if (response.status === 200) {
        // Extract data carefully
        const token = response.data.token;
        const userData = response.data.user;

        if (token) {
          localStorage.setItem("token", token);
          console.log("Token Saved successfully");
        } else {
          console.error("Token was undefined in response data");
        }
        // Only stringify if user exists to prevent errors
        if (userData) {
          localStorage.setItem("user", JSON.stringify(userData));
        }

        alert("Signin Successful");
        setTimeout(() => {
          navigate("/profile");
        }, 100);
      } else {
        alert("Server did not return a token. Check backend deployment.");
      }
    } catch (error) {
      console.error("Login Error Details:", error.response?.data);
      const message = error.response?.data || "Login failed.";
      alert(message);
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return <LoadingSpinner message="Connecting to secure vault..." />;
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center pt-8 px-6 font-sans">
      {/* Header with White "C" Logo */}
      <div className="w-full max-w-7xl mb-24">
        <Link to="/">
          <img src={logo} alt="Coinbase" className="h-8 w-8 invert-50" />
        </Link>
      </div>

      <div className="w-full max-w-100">
        <h1 className="text-[32px] font-bold mb-8 tracking-tight text-center md:text-left">
          Sign in to Coinbase
        </h1>

        <form onSubmit={handleSignin} className="flex flex-col gap-2 mb-6">
          <label className="text-sm font-bold">Email</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="w-full bg-black border border-[#2d2d2d] rounded-lg p-4 text-white focus:border-[#0052FF] focus:ring-1 focus:ring-[#0052FF] outline-none transition-all placeholder:text-[#575757]"
          />
          <label className="text-sm font-bold">Password</label>
          <div>
            <input
              type={showPassword ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full bg-black border border-[#2d2d2d] rounded-lg p-4 text-white focus:border-[#0052FF] focus:ring-1 focus:ring-[#0052FF] outline-none transition-all placeholder:text-[#575757]"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              )}
            </button>
          </div>
          <button
            disabled={loading}
            className={`w-full bg-[#1e2b4d] text-[#4d66a8] py-4 rounded-full font-bold text-lg mb-8 ${loading ? "bg-gray-800 text-gray-500 cursor-not-allowed" : "bg-[#1e2b4d] text-[#4d66a8]"}`}
          >
            {loading ? "verifying..." : "Continue"}
          </button>
        </form>

        {/* OR Divider */}
        <div className="relative flex items-center justify-center mb-8">
          <div className="grow border-t border-[#2d2d2d]"></div>
          <span className="shrink mx-4 text-[12px] font-bold text-[#8c8c8c]">
            OR
          </span>
          <div className="grow border-t border-[#2d2d2d]"></div>
        </div>

        {/* Social & Passkey Buttons */}
        <div className="flex flex-col gap-3">
          <button className="flex items-center justify-center gap-3 w-full bg-[#121212] border border-[#2d2d2d] py-4 rounded-full font-bold hover:bg-[#1c1c1c] transition-all">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
            </svg>
            Sign in with Passkey
          </button>
          <button className="flex items-center justify-center gap-3 w-full bg-[#121212] border border-[#2d2d2d] py-4 rounded-full font-bold hover:bg-[#1c1c1c] transition-all">
            <img
              src="https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png"
              className="w-5 h-5"
              alt="Google"
            />
            Sign in with Google
          </button>
          <button className="flex items-center justify-center gap-3 w-full bg-[#121212] border border-[#2d2d2d] py-4 rounded-full font-bold hover:bg-[#1c1c1c] transition-all">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
              <path d="M17.05 20.28c-.96.95-2.15 1.51-3.39 1.6-1.58.1-2.91-.77-4.48-.77-1.57 0-3.13.84-4.48.77-1.24-.09-2.43-.65-3.39-1.6-1.92-1.93-2.39-5.18-.84-7.58.76-1.18 2-1.91 3.32-1.91 1.05 0 1.95.49 2.76.49s1.71-.49 2.76-.49c1.32 0 2.56.73 3.32 1.91 1.55 2.4 1.08 5.65-.84 7.58zM12.03 7.25c-.02-2.13 1.7-3.95 3.82-4.14.23 2.15-1.74 4.14-3.82 4.14z" />
            </svg>
            Sign in with Apple
          </button>
        </div>

        {/* Footer Link to Signup */}
        <div className="mt-10 text-center text-[15px]">
          <span className="text-[#8c8c8c]">Don't have an account? </span>
          <Link
            to="/signupMain"
            className="text-[#0052FF] hover:underline font-medium"
          >
            Sign up
          </Link>
        </div>

        <p className="mt-16 text-center text-[12px] text-[#575757] leading-relaxed">
          Not your device? Use a private window. See our
          <span className="text-white cursor-pointer"> Privacy Policy</span> for
          more info.
        </p>
        <p className="warning text-center">
          Demo app – do not use your real password.
        </p>
      </div>
    </div>
  );
}
