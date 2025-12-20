import React, { useState, useEffect } from "react";
import { useAuth } from "../../store/auth";
import { FiPlus, FiMinus } from "react-icons/fi";
import ContactForm from "../ContactForm";
import ScheduleForm from "../ScheduleForm";

export default function FaqSection() {
  const { URI } = useAuth();
  const location = "Partners Project Partner Page";

  const [faqs, setFaqs] = useState([]);
  const [openIndex, setOpenIndex] = useState({ group: null, item: null });
  const [showContactForm, setShowContactForm] = useState(false);
  const [showScheduleForm, setShowScheduleForm] = useState(false);

  /* ================= FETCH FAQ DATA ================= */
  const fetchData = async () => {
    try {
      const response = await fetch(`${URI}/admin/faqs/location/${location}`, {
        method: "GET",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) throw new Error("Failed to fetch FAQs");

      const data = await response.json();
      setFaqs(data);
    } catch (err) {
      console.error("Error fetching FAQs:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  /* ================= GROUP FAQS BY TYPE ================= */
  const groupedFaqs = faqs.reduce((acc, faq) => {
    if (!acc[faq.type]) acc[faq.type] = [];
    acc[faq.type].push(faq);
    return acc;
  }, {});

  /* ================= TOGGLE FAQ ================= */
  const toggleFAQ = (groupIndex, itemIndex) => {
    setOpenIndex((prev) => ({
      group:
        prev.group === groupIndex && prev.item === itemIndex
          ? null
          : groupIndex,
      item:
        prev.group === groupIndex && prev.item === itemIndex ? null : itemIndex,
    }));
  };

  return (
    <section className="w-full px-4 md:px-10 lg:px-20 py-12">
      {/* ================= HEADING ================= */}
      <div className="text-center mb-12">
        <h2 className="text-[24px] md:text-[42px] font-bold text-[#101828]">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-500 text-[15px] md:text-lg mt-2">
          Everything you need to know about becoming a partner
        </p>
      </div>

      {/* ================= FAQ GROUPS ================= */}
      <div className="max-w-5xl mx-auto w-full">
        {Object.entries(groupedFaqs).map(([type, items], groupIndex) => (
          <div
            key={type}
            className="rounded-[20px] p-3 lg:p-6 md:p-8 mb-10 shadow-sm"
            style={{
              background: type === "Getting Started" ? "#EDEDED" : "#F8F9FA",
            }}
          >
            {/* Group Title */}
            <h3 className="text-xl md:text-2xl font-semibold text-[#101828] mb-6">
              {type}
            </h3>

            {/* FAQ ITEMS */}
            {items.map((item, itemIndex) => {
              const isOpen =
                openIndex.group === groupIndex && openIndex.item === itemIndex;

              return (
                <div key={item.id} className="mb-3">
                  <button
                    onClick={() => toggleFAQ(groupIndex, itemIndex)}
                    className="w-full bg-white rounded-xl px-5 py-4 flex justify-between items-center shadow-sm text-left"
                  >
                    <span className="font-medium text-[#101828] text-[15px] md:text-base">
                      {item.question}
                    </span>

                    {isOpen ? (
                      <FiMinus className="text-[#5E23DC]" size={22} />
                    ) : (
                      <FiPlus className="text-[#5E23DC]" size={22} />
                    )}
                  </button>

                  {isOpen && (
                    <div className="mt-2 bg-white rounded-xl px-5 py-4 shadow-sm text-gray-600 text-[15px] leading-relaxed">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}

        {/* ================= STILL HAVE QUESTIONS ================= */}
        <div
          className="w-full mt-16 rounded-[24px] px-6 md:px-12 py-10 text-center"
          style={{
            background: "linear-gradient(90deg, #5E23DC47 0%, #5E23DC47 100%)",
          }}
        >
          <h3 className="text-xl md:text-2xl font-semibold text-[#101828]">
            Still have questions?
          </h3>
          <p className="text-gray-600 mt-2 mb-6 text-[13px] md:text-lg">
            Our support team is here to help you get started
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => setShowContactForm(true)}
              className="px-6 py-3 rounded-xl bg-[#5E23DC] text-white font-medium shadow-md hover:opacity-90"
            >
              Contact Support
            </button>

            <button
              onClick={() => setShowScheduleForm(true)}
              className="px-6 py-3 rounded-xl border border-[#5E23DC] text-[#5E23DC] font-medium bg-white shadow-md hover:bg-[#F0FFF8]"
            >
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>

      {/* ================= MODALS ================= */}
      {showContactForm && (
        <ContactForm onClose={() => setShowContactForm(false)} />
      )}

      {showScheduleForm && (
        <ScheduleForm onClose={() => setShowScheduleForm(false)} />
      )}
    </section>
  );
}
