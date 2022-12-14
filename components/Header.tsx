import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header
      className={`fixed w-full md:bg-opacity-90 transition duration-300 ease-in-out backdrop-blur-lg bg-white/60 z-[199]
${!true && "bg-white backdrop-blur-sm shadow-lg"}`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <div className="w-[50px] h-[50px] bg-black/60 rounded-2xl"></div>
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <Link href="/">
                <li className="cursor-pointer px-2">Home</li>
              </Link>
              <Link href="/about-us">
                <li className="cursor-pointer px-2">About Us</li>
              </Link>
              <li className="cursor-pointer">
                <a className="flex items-center rounded-xl font-[500] btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3 px-5 py-3">
                  <span>Get in touch</span>
                  <svg
                    className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                      fillRule="nonzero"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
