import React, { useState } from "react";
import Header from "../components/Headers"; // adjust the path if needed

const Orders = () => {
  const tabs = ["Open", "Executed", "GTT", "Baskets", "SIPs", "Alerts"];
  const [activeTab, setActiveTab] = useState("Open");

  return (
    <div className="pb-24 bg-gray-50 min-h-screen">
      {/* Header */}
      <Header />

      {/* Tabs Section */}
      <div className="flex overflow-x-auto bg-white rounded-md shadow-sm mt-2 mx-4 scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-shrink-0 px-4 py-2 text-sm font-medium transition-all ${
              activeTab === tab
                ? "text-blue-600 border-b-2 border-blue-500"
                : "text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-gray-600 px-3">
        <img
          src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
          alt="orders"
          className="w-16 h-16 mb-3 opacity-70"
        />
        <h2 className="text-base font-semibold">
          {activeTab === "Open"
            ? "No pending orders"
            : activeTab === "Executed"
            ? "No executed orders"
            : activeTab === "GTT"
            ? "No GTT orders"
            : activeTab === "Baskets"
            ? "No baskets available"
            : activeTab === "SIPs"
            ? "No SIPs created"
            : "No alerts set"}
        </h2>
        <p className="text-xs text-gray-500 text-center mt-1">
          {activeTab === "Open"
            ? "Place an order from your watchlist"
            : activeTab === "Executed"
            ? "Your executed orders will appear here"
            : activeTab === "GTT"
            ? "Create GTT orders from the watchlist"
            : activeTab === "Baskets"
            ? "You can create baskets from multiple orders"
            : activeTab === "SIPs"
            ? "Start a SIP to automate your investments"
            : "Set alerts to track price changes"}
        </p>
      </div>
    </div>
  );
};

export default Orders;
