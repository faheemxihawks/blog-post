import React from "react";
import Button from "../ui/Button";

const Header: React.FC = () => {
    return (
        <nav className="bg-[#232536] text-white w-full flex items-center justify-between px-6 md:px-16 py-3">
            {/* Left Section - Logo */}
            <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white"></div>
                <span className="text-sm tracking-wide">LOGO</span>
            </div>

            <div className="flex h-full items-center gap-5">
                {/* Center Nav Links */}
                <ul className="hidden md:flex items-center gap-10 text-sm">
                    <li className="font-semibold">Home</li>
                    <li className="hover:text-gray-300 cursor-pointer">Blogs</li>
                    <li className="hover:text-gray-300 cursor-pointer">About</li>
                    <li className="hover:text-gray-300 cursor-pointer">Contact Us</li>
                </ul>

                {/* Subscribe Button */}
                <Button text="Subscribe" className="hidden md:block" variant="white" />
            </div>


            {/* Mobile Menu (Optional) */}
            <div className="md:hidden flex items-center">
                <button className="text-white focus:outline-none">
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>
        </nav>
    );
};

export default Header;