import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Password() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  //Grab email passed from previous page
  const email = location.state?.email;

  const handleRegister = async (e) => {
    e.preventDefault();
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
    }
  };

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
            <input
              className="w-full bg-black border border-[#2d2d2d] rounded-lg p-4 text-white focus:border-[#0052FF] outline-none transition-all placeholder:text-[#575757]"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="w-full bg-[#1e2b4d] text-[#4d66a8] py-4 rounded-full font-bold text-lg hover:bg-[#25355c]">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
