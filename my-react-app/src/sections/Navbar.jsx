// ADD PT-16 TO PREVENT STUFF GETTING COVERED BY NAVBAR

import React from 'react';
import logo from '../images/logo.jpg'; // Adjust path to your local logo image

const Navbar = () => {
    return (
        <nav className="bg-white shadow-lg fixed top-0 left-0 w-full z-50 border-b-2 border-[#B81F77]">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <img src={logo} alt="JustAcademy Logo" className="h-12 w-auto" />
                </div>

                {/* Navigation Links */}
                <ul className="hidden md:flex space-x-10 text-gray-700 font-semibold text-lg">
                    <li>
                        <a href="#home" className="hover:text-[#B51D74] transition-colors duration-300">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#why-choose-us" className="hover:text-[#B51D74] transition-colors duration-300">
                            Why Choose us
                        </a>
                    </li>
                    <li>
                        <a href="#curriculum" className="hover:text-[#B51D74] transition-colors duration-300">
                            Curriculum
                        </a>
                    </li>
                    <li>
                        <a href="#about-us" className="hover:text-[#B51D74] transition-colors duration-300">
                            About Us
                        </a>
                    </li>
                    <li>
                        <a href="#contact-us" className="hover:text-[#B51D74] transition-colors duration-300">
                            Contact Us
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
