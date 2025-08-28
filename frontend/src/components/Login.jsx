import React from "react";
import { Link } from "react-router-dom"; 
import { Phone, User, Briefcase, Shield } from "lucide-react"; // ✅ icons

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Sign In
        </h1>

        {/* Phone Input */}
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-2.5 text-gray-400" size={18} />
            <input
              type="number"
              placeholder="+91 1234567890"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Send OTP Button */}
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-md">
          Send OTP
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-1 border-gray-300" />
          <span className="px-3 text-sm text-gray-500">or</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Sign Up Link */}
        <p className="text-center text-sm text-gray-600 mb-6">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-blue-500 hover:underline font-medium"
          >
            Sign up
          </Link>
        </p>

        {/* Quick Demo Login */}
        <h2 className="text-center text-gray-700 font-semibold mb-3">
          Quick Demo Login
        </h2>

        <div className="flex flex-col gap-3">
          <button className="flex items-center justify-center gap-2 w-full border border-green-500 text-green-500 hover:bg-green-500 hover:text-white py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-md">
            <User size={18} />
            Login as Customer
          </button>
          <button className="flex items-center justify-center gap-2 w-full border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-md">
            <Briefcase size={18} />
            Login as Service Provider
          </button>
          <button className="flex items-center justify-center gap-2 w-full border border-red-500 text-red-500 hover:bg-red-500 hover:text-white py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-md">
            <Shield size={18} />
            Login as Admin
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
