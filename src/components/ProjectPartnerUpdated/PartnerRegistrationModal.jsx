import React, { useState } from "react";
import houseImage from "../../assets/company/house.png";
import RegistrationForm from "./SalesRegister";
import TRegistrationForm from "./TerritoryRegister";

const PartnerRegistrationPage = () => {
  const [activeTab, setActiveTab] = useState("sales");

  return (
    <section className="bg-white py-20 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E1B4B] leading-tight">
            Become a Reparv Partner
          </h1>
          <p className="mt-4 text-gray-600 text-sm sm:text-base lg:text-lg">
            Join our trusted partner ecosystem and unlock sustainable earning opportunities with Reparv.
          </p>
        </div>

        {/* HERO */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg mb-12">
          <img
            src={houseImage}
            alt="Reparv Partner"
            className="w-full h-[220px] sm:h-[300px] lg:h-[360px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60 flex items-center justify-center">
            <h2 className="text-white text-xl sm:text-3xl lg:text-4xl font-semibold tracking-wide">
              Grow with Reparv 🚀
            </h2>
          </div>
        </div>

        {/* TAB SWITCH */}
        <div className="flex justify-center mb-10">
          <div className="flex bg-[#2D136B] rounded-full p-1 w-full max-w-lg shadow-md">
            <button
              onClick={() => setActiveTab("sales")}
              className={`flex-1 py-3 sm:py-3.5 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                activeTab === "sales"
                  ? "bg-[#5E23DC] text-white shadow-md"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Sales Partner
            </button>

            <button
              onClick={() => setActiveTab("territory")}
              className={`flex-1 py-3 sm:py-3.5 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                activeTab === "territory"
                  ? "bg-[#5E23DC] text-white shadow-md"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Territory Partner
            </button>
          </div>
        </div>

        {/* FORM CONTAINER */}
        <div className="bg-white w-[100%] sm:p-8 lg:p-10 max-w-4xl mx-auto">
          {activeTab === "sales" && <RegistrationForm />}
          {activeTab === "territory" && <TRegistrationForm />}
        </div>

      </div>
    </section>
  );
};

export default PartnerRegistrationPage;
