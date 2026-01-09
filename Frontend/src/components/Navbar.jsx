import React from "react";
import { FaUser } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo and Brand */}
        <button
          onClick={() => navigate('/home')}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">RQ</span>
          </div>
          <span className="text-2xl font-bold text-gray-900 hidden sm:inline">Royal Queen</span>
        </button>

        {/* Action Buttons */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => navigate('/cart')}
            className="relative p-2 text-gray-600 hover:text-orange-600 transition-colors"
            aria-label="Shopping cart"
          >
            <FiShoppingBag size={24} />
            <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">0</span>
          </button>
          <button
            onClick={() => navigate('/account')}
            className="p-2 text-gray-600 hover:text-orange-600 transition-colors"
            aria-label="User account"
          >
            <FaUser size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;