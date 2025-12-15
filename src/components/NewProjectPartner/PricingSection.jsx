import React, { useEffect, useState } from "react";
import axios from "axios";

import { FiArrowUpLeft } from "react-icons/fi";
import RegistrationForm from "../ProjectPartnerUpdated/RegistartionForm";
import { planIcons } from "../../utils";

export default function PricingSection({ auth }) {
  const [billing, setBilling] = useState("monthly");
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedPlans, setExpandedPlans] = useState({});
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const toggleFeatures = (id) => {
    setExpandedPlans((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  useEffect(() => {
    fetchPlans();
  }, []);

 

const fetchPlans = async () => {
  try {
    setLoading(true);

    const res = await axios.get(
      "https://api.reparv.in/admin/subscription/pricing/plans/Project%20Partner",
      {
        headers: {
          Authorization: `Bearer ${auth?.token}`,
        },
      }
    );

    // Filter active Project Partner plans
    const activePlans = res.data.filter(
      (p) => p.partnerType === "Project Partner" && p.status === "Active"
    );

    // Keep only unique plan durations or highlight plan
    const uniquePlansMap = new Map();
    activePlans.forEach((plan) => {
      if (!uniquePlansMap.has(plan.planDuration) || plan.highlight === "True") {
        uniquePlansMap.set(plan.planDuration, plan);
      }
    });

    // Format plans
    let formattedPlans = Array.from(uniquePlansMap.values()).map((item, index) => {
      const features = item.features
        ? item.features.split(",").map((f) => f.trim())
        : [];

      return {
        id: item.id,
        name: item.planName,
        description: `${item.planDuration} Months`,
        monthlyPrice: `₹${item.totalPrice}`,
        totalPrice: `${item.totalPrice}`,
        yearlyPrice: `₹${Math.round((item.totalPrice / parseInt(item.planDuration)) * 12)}`,
        billPrice: `${item.totalPrice}`,
        features,
        mostPopular: item.highlight === "True",
        iconBg:
          index === 1
            ? "linear-gradient(135deg, #5E23DC 0%, #854DFB 100%)"
            : "linear-gradient(135deg, #AD46FF 0%, #9810FA 100%)",
        buttonText: "Choose Plan",
        buttonClass:
          item.highlight === "True"
            ? "bg-[#5E23DC] text-white"
            : "border border-[#5E23DC] text-[#5E23DC] hover:bg-[#5E23DC] hover:text-white",
        icons:
          planIcons[item.planDuration] || (
            <svg width="24" height="24" fill="none">
              <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="2.5" />
            </svg>
          ),
      };
    });

    // ✅ Add 7-Day Free Trial Plan at the beginning
    formattedPlans.unshift({
      id: "free-trial",
      name: "7-Day Free Trial",
      description: "7 Days",
      monthlyPrice: "Free",
      totalPrice: "0",
      yearlyPrice: "Free",
      billPrice: "0",
      features: ["Access all basic features", "No payment required", "Try before subscribing"],
      mostPopular: false,
      iconBg: "linear-gradient(135deg, #5E23DC 0%, #854DFB 100%)",
      buttonText: "Start Free Trial",
     buttonClass:
          "border border-[#5E23DC] text-[#5E23DC] hover:bg-[#5E23DC] hover:text-white",
  
      icons: (
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.9" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-aperture-icon lucide-aperture"><circle cx="12" cy="12" r="10"/><path d="m14.31 8 5.74 9.94"/><path d="M9.69 8h11.48"/><path d="m7.38 12 5.74-9.94"/><path d="M9.69 16 3.95 6.06"/><path d="M14.31 16H2.83"/><path d="m16.62 12-5.74 9.94"/></svg>
      ),
    });

    // --- Reorder plans ---
// 1. Free plan
const freePlan = formattedPlans.find(p => p.totalPrice === "0");

// 2. Most popular (excluding free)
const mostPopularPlan = formattedPlans.find(
  p => p.mostPopular && p.totalPrice !== "0"
);

// 3. Remaining plans
const remainingPlans = formattedPlans.filter(
  p =>
    p !== freePlan &&
    p !== mostPopularPlan
);

// Final ordered list
const orderedPlans = [
  ...(freePlan ? [freePlan] : []),
  ...(mostPopularPlan ? [mostPopularPlan] : []),
  ...remainingPlans,
];

setPlans(orderedPlans);

  } catch (err) {
    console.error("Error fetching plans:", err);
  } finally {
    setLoading(false);
  }
};


  const Card = ({ plan, onChoose }) => (
    <div
      className={`
      relative overflow-visible 
      rounded-2xl p-8 border flex flex-col
      transition-all duration-300
      hover:-translate-y-2 hover:shadow-2xl
      ${
        plan.mostPopular
          ? "border-2 border-[#5E23DC] shadow-xl"
          : "border-gray-200"
      }
    `}
    >
      {/* MOST POPULAR BADGE */}
      {plan.mostPopular && (
        <div
          className="
          absolute z-20
          -top-1 sm:-top-6
          left-1/2 -translate-x-1/2
          bg-gradient-to-r from-[#5E23DC] to-[#854DFB]
          text-white
          px-5 py-2
          rounded-full
          text-xs sm:text-sm
          font-medium
          whitespace-nowrap
          shadow-lg
        "
        >
          Most Popular
        </div>
      )}

      {/* HEADER */}
      <div className="flex items-center gap-3 mb-4 mt-2">
        <div
          className="w-14 h-14 flex items-center justify-center rounded-xl shrink-0"
          style={{ background: plan.iconBg }}
        >
          {plan.icons}
        </div>

        <div className="text-left">
          <h3 className="text-xl font-semibold">{plan.name}</h3>
          <p className="text-sm text-gray-500">{plan.description}</p>
        </div>
      </div>

      {/* PRICE */}
      <div className="text-3xl font-bold text-left">
        {plan.monthlyPrice}
        <span className="text-base font-normal text-gray-500">/month</span>
      </div>

      {/* CTA */}
      <button
        onClick={() => onChoose(plan)}
        className={`
    mt-6 w-full py-3 rounded-xl
    transition font-medium
    ${plan.buttonClass}
  `}
      >
        {plan.buttonText}
      </button>

      {/* FEATURES */}
      <ul className="mt-6 space-y-2 text-left">
        {(expandedPlans[plan.id]
          ? plan.features
          : plan.features.slice(0, 6)
        ).map((feature, idx) => (
          <li key={idx} className="flex gap-3">
            <span className="text-[#5E23DC]">
              {plan.mostPopular ? (
                <svg width="27" height="29" viewBox="0 0 27 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="2" width="26.4" height="26.4" rx="13.2" fill="#DFD0FF" fill-opacity="0.28"/>
<path d="M19.0663 10.7998L10.9997 18.8665L7.33301 15.1998" stroke="#5E23DC" stroke-width="1.46667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              ):(<svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="2" width="24" height="24" rx="12" fill="#EFF6FF"/>
<path d="M17.3334 10L10.0001 17.3333L6.66675 14" stroke="#4A5565" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
)}
            </span>
            <span className="text-sm text-[#364153]">{feature}</span>
          </li>
        ))}
      </ul>

      {/* SHOW MORE */}
      {plan.features.length > 6 && (
        <button
          onClick={() => toggleFeatures(plan.id)}
          className="
          mt-3 text-sm font-medium text-[#7C3AED]
          hover:underline self-start
        "
        >
          {expandedPlans[plan.id]
            ? "Show less"
            : `View all ${plan.features.length} features`}
        </button>
      )}
    </div>
  );
  const handleChoosePlan = (plan) => {
    setSelectedPlan(plan);
  };
  if (selectedPlan) {
    return (
      <div className="bg-white min-h-screen w-full py-10 sm:py-10">
        <div className="w-full sm:max-w-6xl mx-auto bg-white px-0 sm:px-6">
          {/* HEADER */}
          <div className="flex flex-col items-center text-center mb-6 px-4 sm:px-0">
            <button
              type="button"
              onClick={() => setSelectedPlan(null)}
              className="
              max-w-[220px]
              flex gap-1 items-center justify-center
              mb-4
              bg-[#5E23DC]
              px-4 pl-5 py-1.5
              rounded-full
              text-white
              cursor-pointer
              transition
              hover:scale-105
              active:scale-95
            "
            >
              <span className="font-semibold">Go Back to Plans</span>
              <FiArrowUpLeft className="w-5 h-5" />
            </button>

            <h2 className="text-lg sm:text-xl lg:text-3xl font-bold text-black mb-2">
              You selected the{" "}
              <span className="text-[#5E23DC]">{selectedPlan.name}</span> plan
            </h2>

            <p className="text-gray-600 text-sm sm:text-base mb-1">
              Fill out the form below to register as a Project Partner
            </p>

            <p className="text-center text-black font-semibold text-sm sm:text-base">
              Duration: {selectedPlan.description} | Price:₹{""}
              {selectedPlan.billPrice}
            </p>

            <div className="w-16 sm:w-20 h-1 bg-[#5E23DC] mx-auto mt-3 rounded" />
          </div>

          {/* REGISTRATION FORM */}
          <div className="w-full">
            <RegistrationForm plan={selectedPlan} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <section id="pricing" className="w-full bg-[#F8FAFF] py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A]">
          Choose Your Plan
        </h2>

        <p className="mt-2 text-gray-600 text-sm lg:text-lg">
          Flexible pricing designed to scale with your business
        </p>

        {/* MOBILE SLIDER */}
        <div className="mt-10 md:hidden">
          {loading ? (
            <div className="flex gap-4">
              {[1, 2].map((i) => (
                <div
                  key={i}
                  className="min-w-[85%] bg-white rounded-2xl p-8 border animate-pulse"
                >
                  <div className="h-6 bg-gray-200 rounded mb-4" />
                  <div className="h-10 bg-gray-200 rounded mb-6" />
                  <div className="space-y-3">
                    {[1, 2, 3].map((j) => (
                      <div key={j} className="h-4 bg-gray-200 rounded" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>
              <div
                className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
                onScroll={(e) =>
                  setActiveIndex(
                    Math.round(e.target.scrollLeft / e.target.clientWidth)
                  )
                }
              >
                {plans.map((plan) => (
                  <div key={plan.id} className="min-w-[100%] snap-center">
                    <Card plan={plan} onChoose={handleChoosePlan} />
                  </div>
                ))}
              </div>

              <div className="flex justify-center gap-2 mt-6">
                {plans.map((_, i) => (
                  <span
                    key={i}
                    className={`h-2 rounded-full transition-all ${
                      i === activeIndex
                        ? "bg-[#5E23DC] w-6"
                        : "bg-[#D6C8FA] w-2"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* DESKTOP / TABLET GRID */}
        <div className="hidden md:grid mt-10 grid-cols-1 md:grid-cols-3 gap-8">
          {loading
            ? [1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-8 border animate-pulse"
                >
                  <div className="h-6 bg-gray-200 rounded mb-4" />
                  <div className="h-10 bg-gray-200 rounded mb-6" />
                  <div className="space-y-3">
                    {[1, 2, 3].map((j) => (
                      <div key={j} className="h-4 bg-gray-200 rounded" />
                    ))}
                  </div>
                </div>
              ))
            : plans.map((plan) => (
                <Card key={plan.id} plan={plan} onChoose={handleChoosePlan} />
              ))}
        </div>

        <p className="mt-12 text-gray-700 text-sm">
          Need a custom plan for your organization?
        </p>

        <a
          href="https://www.reparv.in/contact-us"
          className="mt-3 inline-flex items-center justify-center w-[295px] h-[46px] bg-[#5E23DC] rounded-[11px] text-white font-semibold hover:bg-[#4b1bb4]"
        >
          Contact Reparv Sales →
        </a>
      </div>
    </section>
  );
}
