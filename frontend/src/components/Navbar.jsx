import React from "react";
import { Link } from "react-router-dom"; 
import logo from "../assets/logo.png"; 

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 w-full z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo + Brand */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo"
            className="h-12 w-12 object-contain rounded-full border border-gray-200 shadow-sm"
          />
          <span className="text-2xl font-extrabold text-gray-900 tracking-wide hover:text-blue-600 transition-colors">
            HyperCare
          </span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link 
            to="/home"
            className="text-gray-700 hover:text-blue-500 font-medium transition-colors duration-300"
          >
            Home
          </Link>
          <Link 
            to="/about"
            className="text-gray-700 hover:text-blue-500 font-medium transition-colors duration-300"
          >
            About
          </Link>
          <Link 
            to="/services"
            className="text-gray-700 hover:text-blue-500 font-medium transition-colors duration-300"
          >
            Services
          </Link>
          <Link 
            to="/login"
            className="text-gray-700 hover:text-blue-500 font-medium transition-colors duration-300"
          >
            Login
          </Link>
          <Link 
            to="/dashboard"  
            className="text-gray-700 hover:text-blue-500 font-medium transition-colors duration-300"
          >
            Dashboard
          </Link>
        </div>

        {/* CTA Button */}
        <Link
          to="/signin"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full shadow-md font-semibold transition-all duration-300 hover:shadow-lg"
        >
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
