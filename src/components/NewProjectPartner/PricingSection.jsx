import React, { useEffect, useState } from "react";
import axios from "axios";

export default function PricingSection({ auth }) {
  const [billing, setBilling] = useState("monthly");
  const [plans, setPlans] = useState([]);
const [showAll, setShowAll] = useState(false);
const [expandedPlans, setExpandedPlans] = useState({});
const toggleFeatures = (id) => {
  setExpandedPlans(prev => ({
    ...prev,
    [id]: !prev[id],
  }));
};

  useEffect(() => {
    fetchPlans();
  }, []);

 const fetchPlans = async () => {
  try {
    const res = await axios.get(
      "https://api.reparv.in/admin/subscription/pricing/plans/Project%20Partner",
      {
        headers: {
          Authorization: `Bearer ${auth?.token}`,
        },
      }
    );

    // filter active project partner plans
    const activePlans = res.data.filter(
      p => p.partnerType === "Project Partner" && p.status === "Active"
    );

    // 🔹 remove duplicate plans based on planDuration
    const uniquePlansMap = new Map();

    activePlans.forEach(plan => {
      const durationKey = plan.planDuration;

      // priority: highlighted plan replaces normal one
      if (
        !uniquePlansMap.has(durationKey) ||
        plan.highlight === "True"
      ) {
        uniquePlansMap.set(durationKey, plan);
      }
    });

    const uniquePlans = Array.from(uniquePlansMap.values());

    const formattedPlans = uniquePlans.map((item, index) => {
      const featureList = item.features
        ? item.features.split(",").map(f => f.trim())
        : [];

      const durationInMonths = parseInt(item.planDuration) || 1;

      // monthly calculation (₹44,999 / 3 ≈ ₹15,000)
      const monthlyPrice = Math.round(item.totalPrice / durationInMonths);

      // yearly equivalent
      const yearlyPrice = monthlyPrice * 12;

      return {
        id: item.id,
        name: item.planName,
        description: `${item.planDuration} Months`,

        monthlyPrice: `₹${monthlyPrice}`,
        yearlyPrice: `₹${yearlyPrice}`,
        billPrice: `₹${item.totalPrice}`,

        features: featureList,
        mostPopular: item.highlight === "True",

        iconBg:
          index === 0
            ? "linear-gradient(135deg, #AD46FF 0%, #9810FA 100%)"
            : index === 1
            ? "linear-gradient(135deg, #5E23DC 0%, #854DFB 100%)"
            : "linear-gradient(135deg, #AD46FF 0%, #9810FA 100%)",

        buttonText: "Choose Plan",
        buttonClass:
          item.highlight === "True"
            ? "bg-[#5E23DC] text-white"
            : "border border-[#5E23DC] text-[#5E23DC] hover:bg-[#5E23DC] hover:text-white",

        icons:
          item.highlight === "True" ? (
            /* crown */
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M11.56 3.26L15.39 8.87L21.18 5.5L19.15 16.26H5.81L2.02 6.02L7.09 9.16L11.56 3.26Z"
                stroke="white"
                strokeWidth="2.9"
              />
              <path d="M5 21H19" stroke="white" strokeWidth="2.9" />
            </svg>
          ) : (
            /* lightning */
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 14L13 2L11 10H20L11 22L13 14H4Z"
                stroke="white"
                strokeWidth="2.6"
              />
            </svg>
          ),
      };
    });

    setPlans(formattedPlans);
  } catch (err) {
    console.error("Error fetching plans:", err);
  }
};


  return (
    <section className="w-full bg-[#F8FAFF] py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A]">
          Choose Your Plan
        </h2>

        <p className="mt-2 text-gray-600 text-[13px] lg:text-lg">
          Flexible pricing designed to scale with your business
        </p>

        {/* Toggle */}
        <div className="mt-8 inline-flex items-center bg-white shadow-md rounded-full p-1">
          <button
            onClick={() => setBilling("monthly")}
            className={`px-6 py-2 rounded-full text-sm font-medium ${
              billing === "monthly"
                ? "bg-[#5E23DC] text-white"
                : "text-gray-600"
            }`}
          >
            Monthly
          </button>

          <button
            onClick={() => setBilling("yearly")}
            className={`px-6 py-2 rounded-full text-sm font-medium relative ${
              billing === "yearly"
                ? "bg-[#5E23DC] text-white"
                : "text-gray-600"
            }`}
          >
            Yearly
            <span className="absolute -right-10 -top-3 bg-yellow-300 text-black text-[11px] px-2 py-[2px] rounded-full">
              Save 17%
            </span>
          </button>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl shadow-lg p-8 border flex flex-col ${
                plan.mostPopular
                  ? "border-2 border-[#5E23DC] shadow-2xl"
                  : "border-gray-200"
              }`}
            >
              {plan.mostPopular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#5E23DC] to-[#854DFB] text-white px-6 py-2 rounded-full text-sm">
                  Most Popular
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-14 h-14 flex items-center justify-center rounded-xl"
                  style={{ background: plan.iconBg }}
                >
                  {plan.icons}
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold">{plan.name}</h3>
                  <p className="text-sm text-gray-500">{plan.description}</p>
                </div>
              </div>

              <div className="text-3xl font-bold text-left">
                {billing === "monthly"
                  ? plan.monthlyPrice
                  : plan.yearlyPrice}
                <span className="text-base font-normal text-gray-500">
                  /{billing === "monthly" ? "month" : "year"}
                </span>
                {billing === "yearly" && (
                  <p className="text-sm text-[#5E23DC]">
                    Billed {plan.billPrice} annually
                  </p>
                )}
              </div>

              <button
                className={`mt-6 w-full py-3 rounded-xl ${plan.buttonClass}`}
              >
                {plan.buttonText}
              </button>

             <ul className="mt-6 space-y-2 text-left">
  {(expandedPlans[plan.id]
    ? plan.features
    : plan.features.slice(0, 6)
  ).map((feature, idx) => (
    <li key={idx} className="flex items-start gap-3">
      <span className="text-[#5E23DC]">✔</span>
      <span className="text-sm text-[#364153]">{feature}</span>
    </li>
  ))}
</ul>
{/* Show more / less */}
                {plan.features.length > 6 && (
                  <button
                    onClick={() => toggleFeatures(plan.id)}
                    className="mt-3 text-sm font-medium text-[#7C3AED] hover:underline self-start"
                  >
                    {expandedPlans[plan.id]
                      ? "Show less"
                      : `View all ${plan.features.length} features`}
                  </button>
                )}


            </div>
            
          ))}
          
        </div>

        <p className="mt-12 text-gray-700 text-sm">
          Need a custom plan for your organization?
        </p>
     <a
  href="#"
  className="
  mt-3
    inline-flex items-center justify-center
    w-[295px] h-[46px]
    px-[62px] py-[11px]
    bg-[#5E23DC]
    rounded-[11px]
    font-['Segoe_UI']
    text-[16px] font-semibold leading-[24px]
    text-white
    transition
    whitespace-nowrap
    hover:bg-[#4b1bb4]
  "
>
  Contact Reparv Sales →
</a>

      </div>
    </section>
  );
}

/* ICONS */
const StarterIcon = () => (
  <svg width="24" height="24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
  </svg>
);

const ProfessionalIcon = () => (
  <svg width="24" height="24" fill="none">
    <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8Z" stroke="white" strokeWidth="2" />
  </svg>
);
