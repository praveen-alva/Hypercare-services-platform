import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaMapMarkerAlt, FaTools, FaClipboardList } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

const Register = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Create Account
        </h1>

        {/* Form */}
        <form className="flex flex-col gap-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <div className="relative">
              <FaUser className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full pl-10 pr-4 border border-gray-300 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <div className="relative">
              <MdEmail className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 border border-gray-300 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <div className="relative">
              <FiPhone className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="number"
                placeholder="+91 1234567890"
                className="w-full pl-10 pr-4 border border-gray-300 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <div className="relative">
              <FaMapMarkerAlt className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Enter Location"
                className="w-full pl-10 pr-4 border border-gray-300 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Radio Options */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              I want to
            </label>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="role"
                  value="Book Services"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <FaClipboardList className="text-gray-500" />
                <span className="text-gray-700">Book Services</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="role"
                  value="Provide Services"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <FaTools className="text-gray-500" />
                <span className="text-gray-700">Provide Services</span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold transition-all duration-300"
          >
            Create Account
          </button>
        </form>

        {/* Already have account */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="text-blue-500 font-medium hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
