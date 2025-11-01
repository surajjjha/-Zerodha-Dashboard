import React, { useState } from "react";
import Header from "../components/Headers";

const Profile = () => {
  const [activeSection, setActiveSection] = useState(null);

  const renderContent = () => {
    switch (activeSection) {
      case "Funds":
        return (
          <div className="p-4 sm:p-6 text-black">
            <div className="flex items-center space-x-2 mb-4">
              <button
                onClick={() => setActiveSection(null)}
                className="text-black hover:text-gray-800 text-xl"
              >
                ←
              </button>
              <h3 className="text-lg sm:text-xl font-semibold">Funds</h3>
            </div>

            <div className="bg-gray-50 border rounded-xl p-4 text-center shadow-sm">
              <p className="text-sm sm:text-base text-black">
                Available margin (Cash + Collateral)
              </p>
              <h1 className="text-2xl sm:text-3xl font-semibold text-black mt-1">₹0.00</h1>
              <button className="mt-1 text-black text-sm font-medium hover:underline">
                View statement
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <button className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-medium text-sm">
                + Add Funds
              </button>
              <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-medium text-sm">
                ↻ Withdraw
              </button>
            </div>

            <div className="flex justify-between text-xs sm:text-sm text-black mt-4 px-1">
              <div className="text-center flex-1">
                <p className="text-xs">Available cash</p>
                <p className="font-semibold mt-1">0.00</p>
              </div>
              <div className="text-center flex-1">
                <p className="text-xs">Used margin</p>
                <p className="font-semibold mt-1">0.00</p>
              </div>
            </div>

            <hr className="my-4 border-black/30" />

            <div className="text-xs sm:text-sm text-black space-y-2">
              {[
                "Opening balance",
                "Payin",
                "Payout",
                "SPAN",
                "Delivery margin",
                "Exposure",
                "Option premium",
              ].map((label) => (
                <div key={label} className="flex justify-between border-b pb-1 border-black/10">
                  <span>{label}</span>
                  <span>0.00</span>
                </div>
              ))}

              <div className="h-3"></div>

              {[
                "Collateral (Liquid funds)",
                "Collateral (Equity)",
                "Total collateral",
              ].map((label) => (
                <div key={label} className="flex justify-between border-b pb-1 border-black/10">
                  <span>{label}</span>
                  <span>0.00</span>
                </div>
              ))}
            </div>
          </div>
        );

      case "App Code":
        return (
          <div className="p-4 sm:p-6 text-black">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">App Code</h3>
            <p className="text-sm sm:text-base">
              Your app code is used to link your account with third-party services.
            </p>
            <div className="bg-gray-100 p-3 rounded-md mt-3 text-center font-mono text-sm sm:text-base text-black">
              XYZ-1234-APP
            </div>
            <button
              onClick={() => setActiveSection(null)}
              className="mt-4 bg-blue-500 text-white text-sm px-4 py-2 rounded-lg"
            >
              Back
            </button>
          </div>
        );

      case "Profile":
        return (
          <div className="p-4 sm:p-6 text-black">
            <div className="flex items-center space-x-2 mb-4">
              <button
                onClick={() => setActiveSection(null)}
                className="text-black hover:text-gray-800 text-xl"
              >
                ←
              </button>
              <h3 className="text-lg sm:text-xl font-semibold">Profile</h3>
            </div>

            <div className="text-center mb-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto bg-blue-500 rounded-full flex items-center justify-center text-2xl sm:text-3xl font-semibold text-white shadow-md">
                SK
              </div>
              <h2 className="mt-2 text-lg sm:text-xl font-semibold text-black">
                Suraj Kumar Jha
              </h2>
              <p className="text-xs sm:text-sm text-black">NDE449</p>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-black">
              <div>
                <p className="text-xs mb-1 text-black/70">E-mail</p>
                <p>surajkumar12244@gmail.com</p>
              </div>
              <div>
                <p className="text-xs mb-1 text-black/70">Phone</p>
                <p>*8668</p>
              </div>
              <div>
                <p className="text-xs mb-1 text-black/70">PAN</p>
                <p>*965J</p>
              </div>
              <div>
                <p className="text-xs mb-1 text-black/70">Demat (BO)</p>
                <a href="#" className="text-black font-medium hover:underline break-all">
                  1208160191523430
                </a>
              </div>

              <div className="mt-2">
                <a href="#" className="text-black font-medium hover:underline">
                  Manage account
                </a>
              </div>

              <hr className="my-4 border-black/30" />

              <div>
                <p className="text-xs mb-1 text-black/70">Bank accounts</p>
                <p>KOTAK MAHINDRA BANK LTD • *9337</p>
              </div>

              <div>
                <p className="text-xs mb-1 text-black/70">Segments</p>
                <p>
                  <span className="font-medium">BSE</span>,{" "}
                  <span className="font-medium">MF</span>,{" "}
                  <span className="font-medium">NSE</span>
                </p>
              </div>

              <div>
                <p className="text-xs mb-1 text-black/70">Demat authorisation</p>
                <a href="#" className="text-black font-medium hover:underline">
                  eDIS
                </a>
              </div>

              <div className="mt-2">
                <a href="#" className="text-black font-medium hover:underline">
                  View active sessions
                </a>
              </div>

              <hr className="my-4 border-black/30" />

              <div>
                <p className="text-xs mb-1 text-black/70">Account closure</p>
                <p className="text-xs sm:text-sm">
                  Account closure is permanent and irreversible. Please read this before proceeding.
                </p>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <>
            <div className="text-center text-black">
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto bg-blue-500 rounded-full flex items-center justify-center text-2xl sm:text-3xl font-semibold text-white shadow-md">
                SK
              </div>
              <h2 className="mt-2 text-lg sm:text-xl font-semibold">Suraj Kumar Jha</h2>
              <p className="text-xs sm:text-sm break-all">surajkumar12244@gmail.com</p>
            </div>

            <div className="bg-yellow-100 border-l-4 border-yellow-400 p-3 mt-5 rounded-md text-xs sm:text-sm text-black">
              Your account verification is in process. It may take up to 24 working hours.
            </div>

            {/* Section Lists */}
            <div className="mt-6 text-black space-y-6">
              {[
                { title: "Account", items: ["Funds", "App Code", "Profile", "Settings", "Connected Apps", "Logout"] },
                { title: "Console", items: ["Tradebook", "P&L", "Downloads"] },
                { title: "Support", items: ["Support Portal", "User Manual", "Contact"] },
                { title: "Others", items: ["Invite Friends", "Licenses"] },
              ].map((section, idx) => (
                <div key={idx}>
                  <h3 className="font-semibold text-sm sm:text-base mb-2">{section.title}</h3>
                  <div className="space-y-2 text-sm sm:text-base">
                    {section.items.map((item) => (
                      <div
                        key={item}
                        className="border-b pb-2 cursor-pointer hover:text-gray-700"
                        onClick={() => setActiveSection(item)}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </>
        );
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-[75vh] flex justify-center items-center bg-gray-50 p-2 sm:p-6">
        <div className="bg-white shadow-md rounded-2xl w-full max-w-md sm:max-w-lg md:max-w-xl h-[80vh] flex flex-col text-black">
          <div className="overflow-y-auto scrollbar-hide p-4 sm:p-6">
            {renderContent()}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
