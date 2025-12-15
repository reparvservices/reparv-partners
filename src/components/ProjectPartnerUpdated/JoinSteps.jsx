import React from "react";
import manImg from "../../assets/company/man2.png";

const steps = [
  {
    step: "STEP-1",
    title: "Sign Up",
    desc: "Create your partner account in under 5 minutes with basic details",
  },
  {
    step: "STEP-2",
    title: "Choose Plan",
    desc: "Select the perfect subscription plan that fits your business needs",
  },
  {
    step: "STEP-3",
    title: "Start Earning",
    desc: "Get verified and start receiving premium projects immediately",
  },
];

const JoinStepsSection = () => {
  return (
  <section className="relative  w-full bg-white overflow-hidden lg:px-24 px-4 py-16 lg:py-24">
  <div className="max-w-3xl mx-auto relative">
    {/* DESKTOP IMAGE */}
    <div
      className="
        hidden lg:block
        absolute left-60 bottom-0
        w-[420px] h-[420px]
        sm:w-[600px] sm:h-[600px]
        md:w-[680px] md:h-[680px]
        lg:w-[720px] lg:h-[720px]
        xl:w-[750px] xl:h-[800px]
        z-0 pointer-events-none
      "
      style={{
        backgroundImage: `url(${manImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center bottom",
        backgroundSize: "contain",
      }}
    />

    {/* MOBILE IMAGE */}
    {/* <div
      className="block lg:hidden w-full h-64 sm:h-80 mb-6"
      style={{
        backgroundImage: `url(${manImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "contain",
      }}
    /> */}

    {/* CARD */}
    <div
  className="
    relative
    w-full
    lg:static lg:w-[480px]
    bg-white

    /* Mobile */
    rounded-t-[28px]
     rounded-b-[28px]
    px-5 py-10
    border-[10px]
    shadow-xl

    /* Tablet */
    sm:rounded-t-[40px]
    sm:px-8 sm:py-14
    sm:border-[14px]
    sm:shadow-lg

    /* Desktop */
    lg:rounded-[49px]
    lg:px-10 lg:py-16
    lg:border-[18px]
    lg:shadow-none

    border-[#E2D6FB]
  "
>
  {/* TITLE */}
  <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#0F172A]">
    Join in 3 Easy Steps
  </h2>

  <p className="mt-2 text-sm sm:text-base text-[#64748B] max-w-md leading-relaxed">
    Start your partnership journey today and unlock new opportunities
  </p>

  {/* STEPS */}
  <div className="mt-7 sm:mt-10 space-y-6 sm:space-y-8">
    {steps.map((item, index) => (
      <div key={index} className="flex gap-4 sm:gap-6 items-start">
        {/* ICON */}
        <div className="flex flex-col items-center pt-1">
          <div
            className="
              w-7 h-7 sm:w-8 sm:h-8
              rounded-full
              bg-[#6D28D9]
              flex items-center justify-center
              text-white text-xs sm:text-sm font-bold
              shadow-md
            "
          >
            ✓
          </div>

          {index !== steps.length - 1 && (
            <div className="w-[2px] h-20 sm:h-20 bg-[#6D28D9]/40 mt-2" />
          )}
        </div>

        {/* TEXT */}
        <div>
          <span className="text-[11px] sm:text-xs text-[#6B7280] font-medium tracking-wide">
            {item.step}
          </span>

          <h4 className="text-base sm:text-lg font-semibold text-[#0F172A]">
            {item.title}
          </h4>

          <p className="text-sm text-[#64748B] mt-1 leading-relaxed max-w-sm">
            {item.desc}
          </p>
        </div>
      </div>
    ))}
  </div>

  {/* CTA */}
  <button
  onClick={() =>
    document.getElementById("pricing")?.scrollIntoView({
      behavior: "smooth",
    })}
    className="
      mt-8 sm:mt-10
      w-full sm:w-auto
      bg-[#6D28D9]
      text-white
      px-6 sm:px-8
      py-3.5
      rounded-xl
      font-semibold
      shadow-lg
      hover:bg-[#5B21B6]
      transition
    "
  >
    Get Started Now →
  </button>

  <p className="mt-3 text-xs text-[#6B7280] text-center sm:text-left">
    No credit card required • Free 14-day trial
  </p>
</div>

  </div>
</section>

  );
};

export default JoinStepsSection;
