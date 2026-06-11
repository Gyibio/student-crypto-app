import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import LoadingSpinner from "../components/common/LoadingSpinner";

export default function Password() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false)

  //Grab email passed from previous page
  const email = location.state?.email;

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/register`,
        { name, email, password },
      );
      if (response.status === 201) {
        alert("Account created! Please log in.");
        navigate("/signin");
      }
    } catch (error) {
      alert("Registration failed", error);
    }finally{
      setLoading(false)
    }
  };
  if (loading) {
    return <LoadingSpinner message="COnnecting to secure vault..."/>;
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center pt-8 px-6 font-sans">
      <div className="w-full max-w-100">
        <div className="flex flex-col gap-4">
          <h1 className="text-white font-bold text-3xl">
            Finish creating your account
          </h1>
          <p className="font-semibold w-80 text-[#888888]">
            Protect your account by creating a strong password
          </p>
        </div>
        <form onSubmit={handleRegister} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold pt-7">Name</label>
            <input
              className="w-full bg-black border border-[#2d2d2d] rounded-lg p-4 text-white focus:border-[#0052FF] outline-none transition-all placeholder:text-[#575757]"
              type="text"
              placeholder="Full name"
              onChange={(e) => setName(e.target.value)}
            />

            <label className="text-sm font-bold pt-7">Password</label>
            <div className="relative w-full">
              <input
                className="w-full bg-black border border-[#2d2d2d] rounded-lg p-4 text-white focus:border-[#0052FF] outline-none transition-all placeholder:text-[#575757]"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
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
          </div>
          <button className="w-full bg-[#1e2b4d] text-[#4d66a8] py-4 rounded-full font-bold text-lg hover:bg-[#25355c]">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
