import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import MianSignup from "../../pages/MainSignup";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className=" font-sans text-slate-900">
      {/* Navigation bar*/}
      <nav className="sticky top-0 w-full z-50 flex items-center justify-between px-6 py-4 gap-8 bg-white border-b border-gray-300 md:px-8">
        <div className="flex gap-2">
          <div>
            <img src={logo} alt="coinbase Logo" className="h-11 w-auto" />
          </div>

          {/* Desktop Links (Hidden on mobile)*/}
          <div className="hidden lg:flex items-center gap-8 font-medium text-[16px]">
            <Link to="/" className="py-2.5 px-3 rounded-full transition-colors hover:bg-[#f7f7f7]">
              Cryptocurrencies
            </Link>
            <Link to="/" className=" py-2.5 px-3 rounded-full transition-colors  hover:bg-[#f7f7f7]">
              Individuals
            </Link>
            <Link to="/" className="py-2.5 px-3 rounded-full transition-colors hover:bg-[#f7f7f7]">
              Businesses
            </Link>
            <Link to="/" className="py-2.5 px-3 rounded-full transition-colors hover:bg-[#f7f7f7]">
              Institutions
            </Link>
            <Link to="/" className="py-2.5 px-3 rounded-full transition-colors hover:bg-[#f7f7f7]">
              Developers
            </Link>
            <Link to="/" className="py-2.5 px-3 rounded-full transition-colors hover:bg-[#f7f7f7]">
              Company
            </Link>
          </div>
        </div>

        {/* Action Buttons*/}
        <div className="flex items-center gap-4">
          <button className="p-2 text-slate-900 h-10 w-10 bg-[#f0f0f0] hover:bg-[#e9e9e9] rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
          <button className="hidden md:block p-2 text-slate-900 h-10 w-10 bg-[#f0f0f0] hover:bg-[#e9e9e9] rounded-full  items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path d="M15.75 8.25a.75.75 0 0 1 .75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 1 1-.992-1.124A2.243 2.243 0 0 0 15 9a.75.75 0 0 1 .75-.75Z" />
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM4.575 15.6a8.25 8.25 0 0 0 9.348 4.425 1.966 1.966 0 0 0-1.84-1.275.983.983 0 0 1-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 0 1 2.328-.377L16.5 15h.628a2.25 2.25 0 0 1 1.983 1.186 8.25 8.25 0 0 0-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.575 15.6Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <Link to='/signin' className=" bg-[#f0f0f0] hidden md:block px-6 py-2.5 rounded-full font-medium text -[15.5px] hover:bg-[#e9e9e9]">
            Sign in
          </Link>
          <Link to='/signupMain' className="bg-[#0052FF] text-white px-6 py-2.5 rounded-full font-bold text-[15.5px] hover:bg-blue-700 transition-all">
            Sign up
          </Link>

          {/* Mobile Menu Icon(hamburger) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-slate-900 h-10 w-10 bg-[#f0f0f0] hover:bg-[#e9e9e9] rounded-full flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu - only shows when isMenuOpen is true*/}
        {isMenuOpen && (
          <div className="lg:hidden fixed top-27 left-0 w-full h-full bg-white border-b flex flex-col gap-48 px-5 z-50">
            <div className="flex-col flex gap-2 ">
              <div className=" hover:bg-[#f9f9f9] py-3  rounded-full">
                <a
                  to="/"
                  className=" text-2xl font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Cryptocurrencies
                </a>
              </div>
              <div className=" hover:bg-[#f9f9f9] py-3  rounded-full flex items-center justify-between">
                <a
                  to="/"
                  className=" text-2xl font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Individuals
                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
              <div className=" hover:bg-[#f9f9f9] py-3 rounded-full flex items-center justify-between">
                <a
                  to="/"
                  className=" text-2xl font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Businesses
                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
              <div className=" hover:bg-[#f9f9f9] py-3 rounded-full flex items-center justify-between">
                <a
                  to="/"
                  className=" text-2xl font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Institutions
                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
              <div className=" hover:bg-[#f9f9f9] py-3  rounded-full flex items-center justify-between">
                <a
                  to="/"
                  className=" text-2xl font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Developers
                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
              <div className=" hover:bg-[#f9f9f9] py-3 rounded-full flex items-center justify-between">
                <a
                  to="/"
                  className=" text-2xl font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Company
                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <button className="p-2 text-slate-900 h-10 w-10 bg-[#f0f0f0] hover:bg-[#e9e9e9] rounded-full  items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path d="M15.75 8.25a.75.75 0 0 1 .75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 1 1-.992-1.124A2.243 2.243 0 0 0 15 9a.75.75 0 0 1 .75-.75Z" />
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM4.575 15.6a8.25 8.25 0 0 0 9.348 4.425 1.966 1.966 0 0 0-1.84-1.275.983.983 0 0 1-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 0 1 2.328-.377L16.5 15h.628a2.25 2.25 0 0 1 1.983 1.186 8.25 8.25 0 0 0-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.575 15.6Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button className=" bg-[#f0f0f0] px-6 py-2.5 rounded-full font-medium text -[15.5px] hover:bg-[#e9e9e9]">
                Sign in
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
