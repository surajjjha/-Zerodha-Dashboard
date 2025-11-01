import React, { useState } from "react";
import Header from "../components/Headers";

const ipoList = [
  { name: "ORKLAINDIA", priceRange: "₹695 - ₹730", date: "29th - 31st Oct", status: "Apply", minQty: 20, issueSize: "₹1667Cr" },
  { name: "TRADEUNO", priceRange: "₹96 - ₹102", date: "28th - 30th Oct", status: "Apply", minQty: 15, issueSize: "₹540Cr" },
  { name: "SAFECURE", priceRange: "₹102", date: "29th - 31st Oct", status: "Upcoming", minQty: 10, issueSize: "₹180Cr" },
];

const govtList = [
  { name: "GOVT Bond 2025", rate: "7.5%", date: "Closing 30th Oct", status: "Bid" },
  { name: "Treasury Bill 91D", rate: "6.9%", date: "Closing 31st Oct", status: "Upcoming" },
];

const auctionList = [
  { name: "Gold Auction", date: "1st Nov", status: "Upcoming" },
  { name: "Property Auction", date: "3rd Nov", status: "Bid" },
];

const Bids = () => {
  const [activeTab, setActiveTab] = useState("IPO");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterTab, setFilterTab] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);
  const [investorModal, setInvestorModal] = useState(false);
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);
  const [investorType, setInvestorType] = useState("");

  const getActiveList = () => {
    if (activeTab === "IPO") return ipoList;
    if (activeTab === "Govt Securities") return govtList;
    return auctionList;
  };

  const filteredList = getActiveList().filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    if (filterTab === "All") return matchesSearch;
    if (filterTab === "Applied") return matchesSearch && (item.status === "Apply" || item.status === "Bid");
    if (filterTab === "Upcoming") return matchesSearch && item.status === "Upcoming";
    return matchesSearch;
  });

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setInvestorModal(true);
  };

  const handleInvestorSelect = (type) => {
    setInvestorType(type);
    setInvestorModal(false);
    setBottomSheetOpen(true);
  };

  const closeAll = () => {
    setInvestorModal(false);
    setBottomSheetOpen(false);
    setInvestorType("");
    setSelectedItem(null);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50 text-black">
      <Header />

      {/* Tabs */}
      <div className="flex flex-wrap justify-around bg-white rounded-md shadow-sm mt-3 mx-2 sm:mx-4">
        {["IPO", "Govt Securities", "Auctions"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 min-w-[90px] py-2 text-xs sm:text-sm font-medium border-b-2 transition-colors duration-200 ${
              activeTab === tab ? "border-blue-500 text-blue-600" : "border-transparent text-gray-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-2 mt-3 px-3 sm:px-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full sm:flex-1 px-2 py-2 text-xs sm:text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 bg-white text-black placeholder-gray-400"
        />
        <div className="flex gap-2 w-full sm:w-auto justify-center sm:justify-end">
          {["All", "Applied", "Upcoming"].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilterTab(tab)}
              className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-colors duration-200 ${
                filterTab === tab ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto px-3 sm:px-4 pb-24 scrollbar-hide mt-2">
        {filteredList.map((item, index) => (
          <div
            key={index}
            onClick={() => handleItemClick(item)}
            className="flex justify-between items-center py-3 border-b border-gray-200 bg-white rounded-md px-3 sm:px-4 my-1 cursor-pointer hover:bg-gray-50 active:bg-gray-100"
          >
            <div className="flex flex-col">
              <h3 className="font-semibold text-sm sm:text-base">{item.name}</h3>
              {item.priceRange && <p className="text-xs sm:text-sm">{item.priceRange}</p>}
              {item.rate && <p className="text-xs sm:text-sm">{item.rate}</p>}
              <p className="text-[10px] sm:text-xs text-gray-600">{item.date}</p>
            </div>
            <button
              className={`px-3 py-1 rounded-full text-white text-xs sm:text-sm font-medium ${
                item.status === "Apply" || item.status === "Bid"
                  ? "bg-blue-500"
                  : item.status === "Pre-apply"
                  ? "bg-indigo-400"
                  : "bg-gray-400"
              }`}
            >
              {item.status}
            </button>
          </div>
        ))}
      </div>

      {/* Investor Modal */}
      {investorModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-white/40 backdrop-blur-[1px] px-3">
          <div className="bg-white w-full max-w-sm rounded-2xl shadow-xl p-5 border border-gray-200">
            <h2 className="text-lg sm:text-xl font-semibold text-center mb-3">Investor Type</h2>
            <div
              onClick={() => handleInvestorSelect("Individual Investor")}
              className="border-b border-gray-200 py-3 text-center cursor-pointer hover:bg-gray-100 rounded-t-md"
            >
              Individual Investor
            </div>
            <div
              onClick={() => handleInvestorSelect("Employee")}
              className="py-3 text-center cursor-pointer hover:bg-gray-100 rounded-b-md"
            >
              Employee
            </div>
          </div>
        </div>
      )}

      {/* Bottom Sheet */}
      {bottomSheetOpen && selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/30 backdrop-blur-sm"
          onClick={closeAll}
        >
          <div
            className="bg-white w-full max-w-md rounded-t-3xl shadow-lg p-4 pt-2 animate-slideUp 
                       max-h-[85vh] overflow-y-auto scrollbar-hide text-black"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Handle */}
            <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-3"></div>

            {/* Header */}
            <div className="text-center mb-3">
              <h2 className="text-lg sm:text-xl font-semibold">{selectedItem.name}</h2>
              <p className="text-xs sm:text-sm">{selectedItem.date}</p>
            </div>

            {/* Apply Button */}
            <div className="bg-blue-500 text-white text-center rounded-lg py-2 font-medium mb-4 cursor-pointer hover:bg-blue-600 transition-colors">
              Apply
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm border-b border-gray-200 pb-2 mb-2">
              <p><span className="font-semibold">Min qty:</span> {selectedItem.minQty}</p>
              <p><span className="font-semibold">Price:</span> {selectedItem.priceRange}</p>
              <p><span className="font-semibold">Dates:</span> 29th - 31st Oct, 2025</p>
              <p><span className="font-semibold">Investor type:</span> {investorType}</p>
              <p><span className="font-semibold">Issue size:</span> {selectedItem.issueSize}</p>
              <p><span className="font-semibold">Discount:</span> N/A</p>
              <p><span className="font-semibold">Lot size:</span> {selectedItem.minQty}</p>
            </div>

            {/* About Section */}
            <div className="mt-3 border-b border-gray-200 pb-3 mb-3">
              <h3 className="font-semibold mb-1">About the company</h3>
              <p className="text-xs leading-relaxed">
                {selectedItem.name} is a leading company operating in its respective field.
                The IPO is intended to raise capital for expansion and business growth.
              </p>
            </div>

            {/* Financials */}
            <div className="mb-4">
              <h3 className="font-semibold mb-2 text-sm sm:text-base">Financials (₹ in crores)</h3>

              <div className="space-y-3">
                {[
                  { year: "March 2024", assets: 3375.19, revenue: 2387.99, profit: 226.33 },
                  { year: "March 2025", assets: 3171.3, revenue: 2455.24, profit: 255.69 },
                  { year: "June 2025", assets: 3158.2, revenue: 605.38, profit: 78.92 },
                ].map((item, i) => (
                  <div key={i}>
                    <p className="font-medium text-xs sm:text-sm mb-1">{item.year}</p>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-[70%] bg-blue-300 rounded"></div>
                        <span className="text-[10px] sm:text-xs">{item.assets}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-[55%] bg-amber-200 rounded"></div>
                        <span className="text-[10px] sm:text-xs">{item.revenue}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-[25%] bg-red-300 rounded"></div>
                        <span className="text-[10px] sm:text-xs">{item.profit}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap justify-around text-[10px] sm:text-xs mt-2">
                <span className="flex items-center gap-1"><div className="h-2 w-2 bg-blue-300 rounded-full"></div>Total Assets</span>
                <span className="flex items-center gap-1"><div className="h-2 w-2 bg-amber-200 rounded-full"></div>Revenue</span>
                <span className="flex items-center gap-1"><div className="h-2 w-2 bg-red-300 rounded-full"></div>Profit After Tax</span>
              </div>
            </div>

            {/* IPO Status */}
            <div>
              <h3 className="font-semibold mb-2 text-sm sm:text-base">IPO Status</h3>
              <ol className="relative border-l border-gray-200 ml-2 space-y-3">
                {[
                  { label: "Offer start", date: "2025-10-29" },
                  { label: "Offer end", date: "2025-10-31" },
                  { label: "Allotment", date: "2025-11-03" },
                  { label: "Refund Initiation", date: "2025-11-04" },
                  { label: "Demat transfer", date: "2025-11-04" },
                  { label: "Listing", date: "2025-11-06" },
                  { label: "Mandate end", date: "2025-11-15" },
                ].map((step, i) => (
                  <li key={i} className="ml-4">
                    <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-1.5 border border-white"></div>
                    <p className="text-xs sm:text-sm font-medium">{step.label}</p>
                    <p className="text-[10px] sm:text-xs">{step.date}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bids;
