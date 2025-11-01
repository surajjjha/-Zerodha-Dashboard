import React, { useState } from "react";
import Header from "../components/Headers";

const stocks = [
  { name: "HDFCBANK", price: 1003.55, change: +0.65, percent: "+0.06%", isUp: true },
  { name: "INFY", price: 1495.8, change: +2.0, percent: "+0.13%", isUp: true },
  { name: "TCS", price: 3056.85, change: -27.7, percent: "-0.89%", isUp: false },
  { name: "ONGC", price: 250.54, change: -2.73, percent: "-1.07%", isUp: false },
  { name: "HINDUNILVR", price: 2499.4, change: -12.5, percent: "-0.49%", isUp: false },
  { name: "GOLDBEES", price: 96.84, change: -3.3, percent: "-3.29%", isUp: false },
];

const Watchlist = () => {
  const [selectedStock, setSelectedStock] = useState(null);

  const handleStockClick = (stock) => setSelectedStock(stock);
  const closeModal = () => setSelectedStock(null);

  return (
    <div className="pb-24 pt-3 bg-gray-50 min-h-screen overflow-hidden text-black">
      <Header />

      {/* Index summary */}
      <div className="flex flex-col sm:flex-row sm:justify-between px-4 text-xs sm:text-sm text-black gap-2 sm:gap-0">
        <div>
          <p>NIFTY 50</p>
          <p className="font-medium text-green-600">
            25,924.25 <span className="text-[10px]">(+0.17%)</span>
          </p>
        </div>
        <div>
          <p>NIFTY BANK</p>
          <p className="font-medium text-green-600">
            58,179.60 <span className="text-[10px]">(+0.25%)</span>
          </p>
        </div>
      </div>

      {/* Watchlist header */}
      <div className="flex justify-between items-center mt-3 px-4">
        <h2 className="text-base sm:text-lg font-semibold text-black">Watchlist 1</h2>
        <button className="text-black text-sm sm:text-base">6/100</button>
      </div>

      <div className="mt-2 border-b border-gray-200"></div>

      {/* Stock list */}
      <div className="mt-1">
        {stocks.map((stock, index) => (
          <div
            key={index}
            onClick={() => handleStockClick(stock)}
            className="flex justify-between items-center px-4 py-2 border-b border-gray-200 bg-white rounded-md my-1 hover:bg-gray-50 active:bg-gray-100 cursor-pointer transition-colors duration-150"
          >
            <div>
              <h3 className="font-semibold text-sm sm:text-base text-black">{stock.name}</h3>
              <p className="text-[11px] sm:text-xs text-gray-600">NSE</p>
            </div>
            <div className="text-right">
              <p
                className={`font-semibold text-sm sm:text-base ${
                  stock.isUp ? "text-green-600" : "text-red-500"
                }`}
              >
                ₹{stock.price}
              </p>
              <p
                className={`text-[11px] sm:text-xs ${
                  stock.isUp ? "text-green-600" : "text-red-500"
                }`}
              >
                {stock.change > 0 ? "+" : ""}
                {stock.change} ({stock.percent})
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedStock && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/30 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="bg-white w-full sm:w-[90%] md:w-[70%] lg:w-[50%] max-w-md rounded-t-3xl shadow-lg p-4 pt-2 animate-slideUp 
           max-h-[85vh] overflow-y-auto overscroll-contain touch-pan-y scrollbar-hide pb-20 text-black"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-3"></div>

            <div className="text-center mb-3">
              <h2 className="text-lg sm:text-xl font-semibold text-black">{selectedStock.name}</h2>
              <p className="text-sm text-gray-700">NSE</p>
            </div>

            <div className="text-center mt-2">
              <p
                className={`text-2xl sm:text-3xl font-bold ${
                  selectedStock.isUp ? "text-green-600" : "text-red-500"
                }`}
              >
                ₹{selectedStock.price.toFixed(2)}
              </p>
              <p
                className={`text-sm sm:text-base ${
                  selectedStock.isUp ? "text-green-600" : "text-red-500"
                }`}
              >
                {selectedStock.change > 0 ? "+" : ""}
                {selectedStock.change} ({selectedStock.percent})
              </p>
            </div>

            <div className="flex justify-around mt-5 flex-wrap gap-2">
              <button className="bg-blue-600 text-white px-8 py-2 rounded-lg font-semibold w-[45%] sm:w-auto">
                BUY
              </button>
              <button className="bg-red-600 text-white px-8 py-2 rounded-lg font-semibold w-[45%] sm:w-auto">
                SELL
              </button>
            </div>

            {/* Bid/Offer Table */}
            <div className="mt-6">
              <div className="flex justify-between text-xs sm:text-sm font-semibold text-black border-b pb-1">
                <p>Bid</p>
                <p>Offer</p>
              </div>
              {[1495.7, 1495.6, 1495.5, 1495.4, 1495.3].map((bid, i) => (
                <div
                  key={i}
                  className="flex justify-between text-sm py-1 border-b text-black"
                >
                  <span className="text-blue-600">{bid.toFixed(2)}</span>
                  <span className="text-red-500">{(bid + 0.1).toFixed(2)}</span>
                </div>
              ))}
            </div>

            {/* Day's Range */}
            <div className="mt-6 mb-3">
              <p className="text-sm sm:text-base font-medium text-black mb-1">Day's Range</p>
              <div className="flex justify-between text-sm sm:text-base text-black">
                <span>1,487.00</span>
                <span>1,496.50</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full mt-1 relative">
                <div
                  className="h-2 bg-green-500 rounded-full"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>

            {/* Extra Info */}
            <div className="mt-6 space-y-3 text-center text-black text-sm sm:text-base">
              <p>Additional stock info…</p>
              <p>More insights…</p>
              <p>Volume data…</p>
              <p>Market cap details…</p>
              <p>52-week high / low…</p>
              <p>Analyst ratings…</p>
              <p>Company profile summary…</p>
              <p>Long term forecast…</p>
              <p>Institutional holdings…</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Watchlist;
