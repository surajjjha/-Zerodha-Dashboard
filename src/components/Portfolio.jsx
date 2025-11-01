import React, { useState } from "react";
import Header from "../components/Headers";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("Holdings");

  return (
    <div className="pb-24 px-4 bg-gray-50 min-h-screen">
        <Header/>
      {/* Tabs */}
      <div className="flex justify-around bg-white rounded-md shadow-sm mt-4">
        {["Holdings", "Positions"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 text-sm font-medium rounded-md ${
              activeTab === tab
                ? "text-blue-600 border-b-2 border-blue-500"
                : "text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex flex-col items-center justify-center min-h-[75vh] text-gray-600 px-3">
        <img
          src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
          alt="portfolio"
          className="w-16 h-16 mb-3 opacity-70"
        />

        {activeTab === "Holdings" ? (
          <>
            <h2 className="text-base font-semibold">No holdings</h2>
            <p className="text-xs text-gray-500 text-center mt-1">
              Buy equities from your watchlist
            </p>
          </>
        ) : (
          <>
            <h2 className="text-base font-semibold">No open positions</h2>
            <p className="text-xs text-gray-500 text-center mt-1">
              Your intraday or F&O positions will appear here
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
