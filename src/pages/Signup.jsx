import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg'

export default function Signup() {
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center pt-8 px-6 font-sans">
      {/* 1. Header with White "C" Logo */}
      <div className="w-full max-w-7xl mb-20">
        <Link to="/">
          <img src={logo} alt="Coinbase" className="h-8 w-8 invert-50" /> 
        </Link>
      </div>

      <div className="w-full max-w-100">
        {/* 2. Main Heading & Subtext */}
        <h1 className="text-[32px] font-bold mb-2 tracking-tight">Create your account</h1>
        <p className="text-[#8c8c8c] text-[16px] mb-8">
          Access all that Coinbase has to offer with a single account.
        </p>

        {/* 3. Email Input Form */}
        <form className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold">Email</label>
            <input
              type="email"
              placeholder="Your email address"
              className="w-full bg-black border border-[#2d2d2d] rounded-lg p-4 text-white focus:border-[#0052FF] outline-none transition-all placeholder:text-[#575757]"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button className="w-full bg-[#1e2b4d] text-[#4d66a8] py-4 rounded-full font-bold text-lg cursor-not-allowed">
            Continue
          </button>
        </form>

        {/* 4. "OR" Divider */}
        <div className="relative flex items-center justify-center my-8">
          <div className="grow border-t border-[#2d2d2d]"></div>
          <span className="shrink mx-4 text-[12px] font-bold text-[#8c8c8c]">OR</span>
          <div className="grow border-t border-[#2d2d2d]"></div>
        </div>

        {/* 5. Social Auth Buttons */}
        <div className="flex flex-col gap-3">
          <button className="flex items-center justify-center gap-3 w-full bg-[#121212] border border-[#2d2d2d] py-4 rounded-full font-bold hover:bg-[#1c1c1c] transition-all">
            <img src="https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png" className="w-5 h-5" alt="Google" />
            Sign up with Google
          </button>
          <button className="flex items-center justify-center gap-3 w-full bg-[#121212] border border-[#2d2d2d] py-4 rounded-full font-bold hover:bg-[#1c1c1c] transition-all">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white"><path d="M17.05 20.28c-.96.95-2.15 1.51-3.39 1.6-1.58.1-2.91-.77-4.48-.77-1.57 0-3.13.84-4.48.77-1.24-.09-2.43-.65-3.39-1.6-1.92-1.93-2.39-5.18-.84-7.58.76-1.18 2-1.91 3.32-1.91 1.05 0 1.95.49 2.76.49s1.71-.49 2.76-.49c1.32 0 2.56.73 3.32 1.91 1.55 2.4 1.08 5.65-.84 7.58zM12.03 7.25c-.02-2.13 1.7-3.95 3.82-4.14.23 2.15-1.74 4.14-3.82 4.14z"/></svg>
            Sign up with Apple
          </button>
        </div>

        {/* 6. Footer Links */}
        <div className="mt-8 text-center text-[15px]">
          <span className="text-white">Already have an account? </span>
          <Link to="/signin" className="text-[#0052FF] hover:underline font-medium">Sign in</Link>
        </div>

        <p className="mt-12 text-center text-[13px] text-[#575757] leading-relaxed">
          By creating an account you certify that you are over the age of 18 and agree to our 
          <span className="text-white"> Privacy Policy</span> and <span className="text-white"> Cookie Policy</span>.
        </p>
      </div>
    </div>
  );
}