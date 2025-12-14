import React, { useEffect, useState } from "react";
import axios from "axios";

export default function PricingSection({ auth }) {
  const [billing, setBilling] = useState("monthly");
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedPlans, setExpandedPlans] = useState({});
  const [activeIndex, setActiveIndex] = useState(0);

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

      const activePlans = res.data.filter(
        (p) => p.partnerType === "Project Partner" && p.status === "Active"
      );

      const uniquePlansMap = new Map();
      activePlans.forEach((plan) => {
        if (
          !uniquePlansMap.has(plan.planDuration) ||
          plan.highlight === "True"
        ) {
          uniquePlansMap.set(plan.planDuration, plan);
        }
      });

      const formattedPlans = Array.from(uniquePlansMap.values()).map(
        (item, index) => {
          const features = item.features
            ? item.features.split(",").map((f) => f.trim())
            : [];

          return {
            id: item.id,
            name: item.planName,
            description: `${item.planDuration} Months`,
            monthlyPrice: `₹${item.totalPrice}`,
            yearlyPrice: `₹${Math.round(
              (item.totalPrice / item.planDuration) * 12
            )}`,
            billPrice: `₹${item.totalPrice}`,
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
              item.highlight === "True" ? (
                <svg width="24" height="24" fill="none">
                  <path
                    d="M11.56 3.26L15.39 8.87L21.18 5.5L19.15 16.26H5.81L2.02 6.02L7.09 9.16L11.56 3.26Z"
                    stroke="white"
                    strokeWidth="2.9"
                  />
                  <path d="M5 21H19" stroke="white" strokeWidth="2.9" />
                </svg>
              ) : (
                <svg width="24" height="24" fill="none">
                  <path
                    d="M4 14L13 2L11 10H20L11 22L13 14H4Z"
                    stroke="white"
                    strokeWidth="2.6"
                  />
                </svg>
              ),
          };
        }
      );

      setPlans(formattedPlans);
    } catch (err) {
      console.error("Error fetching plans:", err);
    } finally {
      setLoading(false);
    }
  };

 const Card = ({ plan }) => (
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
          <span className="text-[#5E23DC]">✔</span>
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


  return (
    <section  id="pricing" className="w-full bg-[#F8FAFF] py-20 px-4">
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
                    <Card plan={plan} />
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
            : plans.map((plan) => <Card key={plan.id} plan={plan} />)}
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
