import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const FAQ_DATA = [
  {
    title: "Getting Started",
    bg: "#EDEDED", // LIGHT GRAY BG ONLY FOR THIS GROUP
    items: [
      {
        q: "How do I become a Project Partner?",
        a: "Simply sign up on our platform, complete your profile with relevant details, choose a subscription plan, and submit your documents for verification. Once approved (usually within 24 hours), you can start receiving projects.",
      },
      {
        q: "What documents are required for registration?",
        a: "You need a valid ID proof, business registration certificate (if applicable), and bank details for payments.",
      },
      {
        q: "Is there a verification process?",
        a: "Yes, our team verifies your uploaded documents to ensure authenticity and quality standards.",
      },
    ],
  },

  {
    title: "Payments & Earnings",
    bg: "#F8F9FA",
    items: [
      {
        q: "How and when do I get paid?",
        a: "Payments are released within 48 hours after project completion and client approval.",
      },
      {
        q: "What are the commission rates?",
        a: "Commission rates depend on your subscription plan and project category.",
      },
      {
        q: "Are there any hidden charges?",
        a: "No, we maintain complete transparency. All charges are clearly mentioned in your dashboard.",
      },
    ],
  },

  {
    title: "Partnership & Support",
    bg: "#F8F9FA",
    items: [
      {
        q: "What kind of support do partners get?",
        a: "You get dedicated support for onboarding, project management, and issue resolution.",
      },
      {
        q: "Can I upgrade or downgrade my plan?",
        a: "Yes, you can easily switch between plans anytime from your dashboard.",
      },
      {
        q: "How many projects can I take on?",
        a: "You can take on as many projects as you can manage based on your subscription plan.",
      },
    ],
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState({
    group: null,
    item: null,
  });

  const toggleFAQ = (groupIndex, itemIndex) => {
    setOpenIndex((prev) => ({
      group:
        prev.group === groupIndex && prev.item === itemIndex ? null : groupIndex,
      item:
        prev.group === groupIndex && prev.item === itemIndex ? null : itemIndex,
    }));
  };

  return (
    <section className="w-full px-4 md:px-10 lg:px-20 py-12">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-[24px] md:text-[42px] font-bold text-[#101828]">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-500 lg:text-lg md:text-lg sm:text-lg text-[15px] mt-2">
          Everything you need to know about becoming a partner
        </p>
      </div>

      {/* FAQ Wrapper */}
      <div className="max-w-5xl mx-auto w-full">
        {FAQ_DATA.map((group, groupIndex) => (
          <div
            key={groupIndex}
            className="rounded-[20px] p-3 lg:p-6 md:p-8 mb-10 shadow-sm"
            style={{ background: group.bg }} // GROUP BACKGROUND CONTROL
          >
            {/* Group Title */}
            <h3 className="text-xl md:text-2xl font-semibold text-[#101828] mb-6">
              {group.title}
            </h3>

            {/* FAQ Items */}
            {group.items.map((item, itemIndex) => {
              const isOpen =
                openIndex.group === groupIndex &&
                openIndex.item === itemIndex;

              return (
                <div key={itemIndex} className="mb-3">
                  <button
                    onClick={() => toggleFAQ(groupIndex, itemIndex)}
                    className="w-full bg-white rounded-xl px-5 py-4 flex justify-between items-center shadow-sm text-left"
                  >
                    <span className="font-medium text-[#101828] text-[15px] md:text-base">
                      {item.q}
                    </span>
                    {isOpen ? (
                      <FiMinus className="text-[#5E23DC]" size={22} />
                    ) : (
                      <FiPlus className="text-[#5E23DC]" size={22} />
                    )}
                  </button>

                  {/* Answer */}
                  {isOpen && (
                    <div className="mt-2 bg-white rounded-xl px-5 py-4 shadow-sm text-gray-600 text-[15px] leading-relaxed">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}

        {/* STILL HAVE QUESTIONS (Gradient Box) */}
        <div className="w-full mt-16 rounded-[24px] px-6 md:px-12 py-10 text-center"
          style={{
            background: "linear-gradient(90deg, #5E23DC47 0%, #5E23DC47 100%)",
          }}
        >
          <h3 className="lg:text-2xl md:text-2xl sm:text-2xl text-xl font-semibold text-[#101828]">
            Still have questions?
          </h3>
          <p className="text-[13px] lg:text-lg md:text-lg text-gray-600 mt-2 mb-6">
            Our support team is here to help you get started
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* Contact Support */}
            <button onClick={()=>{
              window.open("https://www.reparv.in/contact-us")
            }} className="px-6 py-3 rounded-xl bg-[#5E23DC] text-white font-medium shadow-md hover:opacity-90">
              Contact Support
            </button>

            {/* Schedule Demo */}
            <button onClick={()=>{
              window.open("https://www.reparv.in/contact-us")
            }}  className="px-6 py-3 rounded-xl border border-[#5E23DC] text-[#5E23DC] font-medium bg-white shadow-md hover:bg-[#F0FFF8]">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
