import React, { useState } from "react";
import { services } from "../../utils";
import backgroundimage from "../../assets/company/bgofourservices.png";

const ServicesSection = () => {
    const [showAll, setShowAll] = useState(false);

  const visibleServices = showAll ? services : services.slice(0, 10);
  return (
    <section className="relative  bg-[#5A1EDC]  text-white py-10 lg:py-20 px-4 md:px-16 lg:px-24 overflow-hidden">

      {/* 🔥 Background Overlay (ONLY background affected) */}
      <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(106.52deg, rgba(0, 153, 102, 0.5) 12.59%, rgba(0, 188, 125, 0) 61.68%, rgba(0, 166, 62, 0.5) 99.8%),
              url(${backgroundimage})
            `,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.3, // 🔥 only this overlay has opacity
            pointerEvents: "none",
          }}
        ></div>
      {/* 🔝 Foreground Content */}
      <div className="relative z-10 max-w-full mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-2">
          Our Services
        </h2>

        <p className="mb-12 text-sm md:text-base text-white/90">
          Partnering across diverse project categories to serve every need
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-8 gap-y-12">
        {visibleServices.map((service, idx) => {

            const IconComponent = service.icon;

            return (
             <div key={idx} className="flex flex-col items-center w-full">

              <div
  className="
    bg-white
    w-full max-w-[160px]
   h-[90px] lg:h-[100px] sm:h-[110px]
    rounded-2xl
    border border-gray-200
    flex items-center justify-center
  "
>
              <div className="w-[56px] h-[56px]">
                    <IconComponent />
                  </div>
                </div>

               
               <span className="mt-4 text-[15px] md:text-[20px] font-medium text-white">
  {service.title}
</span>

              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12">
          <p className="text-sm text-white/80 mb-3">
            Can’t find what you’re looking for?
          </p>

         {/* CTA */}
<div className="mt-12">
  {!showAll && services.length > 10 && (
    <>
    

      <button
        onClick={() => setShowAll(true)}
        className="bg-white text-purple-700 font-semibold px-6 py-2 rounded-lg shadow hover:bg-white/90 transition flex items-center gap-2 mx-auto"
      >
        View All Services <span className="text-xl">→</span>
      </button>
    </>
  )}
</div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
