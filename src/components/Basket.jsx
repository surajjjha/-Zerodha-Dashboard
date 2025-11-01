import React from "react";
import Header from "../components/Headers";

const Basket = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-[85vh] bg-gray-50 px-4 sm:px-6 md:px-8 text-gray-700">
        <img
          src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
          alt="basket"
          className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mb-4 opacity-80"
        />
        <h2 className="text-lg sm:text-xl font-semibold text-center text-gray-800">
          No items in basket
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-gray-500 text-center mt-2 max-w-xs sm:max-w-sm md:max-w-md">
          Use the search bar to add orders to your basket.
        </p>
      </div>
    </>
  );
};

export default Basket;
