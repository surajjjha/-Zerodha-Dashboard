import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Watchlist from "./components/Watchlist";
import Orders from "./components/Orders";
import Portfolio from "./components/Portfolio";
import Bids from "./components/Bids";
import Profile from "./components/Profile";
import Basket from "./components/Basket";

const App = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#1f4037] to-[#99f2c8] p-4">
      <div
        className="
          bg-gradient-to-br from-[#43c6ac] to-[#f8ffae]
          relative shadow-2xl rounded-2xl overflow-hidden border border-gray-300
          w-full max-w-[420px] h-[90vh] sm:h-[600px] md:h-[700px]
        "
      >
        <Routes>
          <Route path="/" element={<Watchlist />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/bids" element={<Bids />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>

        {/* Bottom Navbar */}
        <Navbar />
      </div>
    </div>
  );
};

export default App;
