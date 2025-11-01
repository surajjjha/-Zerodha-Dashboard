// src/components/Header.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaShoppingBasket, FaUser } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-sm border-b border-gray-200 py-3 px-4 flex justify-between items-center">
      {/* Market Info Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 text-[10px] sm:text-xs md:text-sm font-medium">
        <div className="flex flex-col items-start">
          <p className="text-gray-700 font-semibold">NIFTY 50</p>
          <p className="text-green-500">26,045.10 ▲ +108.90 (+0.41%)</p>
        </div>

        <div className="flex flex-col items-start mt-1 sm:mt-0">
          <p className="text-gray-700 font-semibold">NIFTY BANK</p>
          <p className="text-green-500">58,379.20 ▲ +165.40 (+0.28%)</p>
        </div>
      </div>

      {/* Icons Section */}
      <div className="flex items-center gap-3 sm:gap-4 text-gray-600">
        <FaShoppingBasket
          size={18}
          onClick={() => navigate("/basket")}
          className="cursor-pointer hover:text-blue-600 transition-colors duration-200"
        />
        <FaUser
          size={18}
          onClick={() => navigate("/profile")}
          className="cursor-pointer hover:text-blue-600 transition-colors duration-200"
        />
      </div>
    </div>
  );
};

export default Header;
