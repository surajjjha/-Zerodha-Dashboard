


import React from "react";
import { NavLink } from "react-router-dom";
import { FaUser, FaClipboardList, FaSuitcase, FaListUl, FaGavel } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-300 flex justify-between px-4 py-2 shadow-lg text-gray-700 z-50">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          `flex flex-col items-center text-xs ${
            isActive ? "text-blue-600 font-semibold" : "text-gray-500"
          }`
        }
      >
        <FaListUl size={18} />
        <span>Watchlist</span>
      </NavLink>

      <NavLink
        to="/orders"
        className={({ isActive }) =>
          `flex flex-col items-center text-xs ${
            isActive ? "text-blue-600 font-semibold" : "text-gray-500"
          }`
        }
      >
        <FaClipboardList size={18} />
        <span>Orders</span>
      </NavLink>

      <NavLink
        to="/portfolio"
        className={({ isActive }) =>
          `flex flex-col items-center text-xs ${
            isActive ? "text-blue-600 font-semibold" : "text-gray-500"
          }`
        }
      >
        <FaSuitcase size={18} />
        <span>Portfolio</span>
      </NavLink>

      <NavLink
        to="/bids"
        className={({ isActive }) =>
          `flex flex-col items-center text-xs ${
            isActive ? "text-blue-600 font-semibold" : "text-gray-500"
          }`
        }
      >
        <FaGavel size={18} />
        <span>Bids</span>
      </NavLink>

      <NavLink
        to="/profile"
        className={({ isActive }) =>
          `flex flex-col items-center text-xs ${
            isActive ? "text-blue-600 font-semibold" : "text-gray-500"
          }`
        }
      >
        <FaUser size={18} />
        <span>Profile</span>
      </NavLink>
    </nav>
  );
};

export default Navbar;
