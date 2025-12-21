import React, { useState } from "react";
import bg from "../../assets/company/man.png";
import backgroundimage from "../../assets/company/bg.png";

import { HiOutlineShieldCheck } from "react-icons/hi";
import { GoLocation } from "react-icons/go";
import { FaUsers } from "react-icons/fa";

const HeroSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative bg-[#5A1EDC] text-white overflow-hidden py-1 md:py-20 lg:py-20  md:px-16 lg:px-24">
      <div
        className="absolute inset-0"
        style={{
          background: `
        linear-gradient(106.52deg, rgba(0, 153, 102, 0.5) 12.59%, rgba(0, 188, 125, 0) 61.68%, rgba(0, 166, 62, 0.5) 99.8%),
        url(${backgroundimage})
      `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.1, // 🔥 only this overlay has opacity
          pointerEvents: "none",
        }}
      ></div>
      <div className="max-w-[1350px] mx-auto px-3 sm:px-6 md:px-10 pt-20  relative z-10">
        {/* Top Badge */}
        <div className="bg-white text-black px-5 py-2 rounded-full inline-flex items-center gap-2 backdrop-blur-md  border border-white/30">
          <HiOutlineShieldCheck className="text-lg" />
          <span className="text-sm font-medium">
            Industry Verified Platform
          </span>
        </div>

        {/* Heading */}
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] mt-6 max-w-2xl  font-['Segoe_UI']
    font-black
    text-white
    leading-auto
    sm:leading-[75px]"
        >
          Become a Project <br /> Partner Today
        </h1>

        {/* Description */}
        <p className="mt-6 text-sm sm:text-lg leading-relaxed max-w-xl text-white/90">
          Connect with premium projects, grow your business, and earn more with
          India's most trusted partner network.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-row gap-1 sm:gap-4 sm:flex-row sm:items-center">
          {/* JOIN BUTTON */}
          <button
            onClick={() =>
              document.getElementById("pricing")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="
      w-full sm:w-auto
      bg-white text-[#5A1EDC]
      text-[13px] sm:text-base
      whitespace-nowrap
      font-semibold px-3 py-3 sm:px-8 sm:py-3
      rounded-lg shadow
      hover:bg-white/90 transition
      flex items-center justify-center gap-2
    "
          >
            JOIN AS PARTNER
            <svg
              viewBox="0 0 10 16"
              fill="none"
              className="w-[6px] h-[16px] sm:w-[16px]"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 14L6 8L0 2L2 0L10 8L2 16L0 14Z"
                fill="#5E23DC"
              />
            </svg>
          </button>

          {/* LEARN MORE BUTTON */}
          <button
            onClick={() => setShowVideo(true)}
            className="
    group
    w-full sm:w-auto
    border border-white/30
    text-[13px] sm:text-base text-white font-semibold
     sm:px-8 py-2.5 sm:py-3
    rounded-lg
    flex items-center justify-center gap-2
    transition-all duration-300 ease-out
    hover:border-white/60
    hover:bg-white/10
    hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]
    active:scale-95
  "
          >
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              Learn More
            </span>

            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110"
            >
              <path
                d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
                stroke="#F4F8F5"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.5 7L13 10L8.5 13V7Z"
                stroke="#F4F8F5"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div
          className="
    flex flex-wrap gap-6 mt-5 sm:mt-14 pt-8 border-t
    sm:gap-10 max-w-lg
  "
          style={{ borderColor: "rgba(255, 255, 255, 0.2)" }}
        >
          <div className="gap-5 flex flex-row">
            {/* 500+ */}
            <div className="flex items-center gap-2 w-1/2 sm:w-auto">
              <FaUsers size={20} className="sm:size-[22px]" />
              <div>
                <h4 className="text-base sm:text-xl font-bold">500+</h4>
                <p className="text-xs sm:text-sm opacity-80">Active Partners</p>
              </div>
            </div>

            {/* Nationwide */}
            <div className="flex items-center gap-2 w-1/2 sm:w-auto">
              <GoLocation size={20} className="sm:size-[22px]" />
              <div>
                <h4 className="text-base sm:text-xl font-bold">Nationwide</h4>
                <p className="text-xs sm:text-sm opacity-80">Operating</p>
              </div>
            </div>
          </div>

          {/* Verified */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <HiOutlineShieldCheck size={20} className="sm:size-[22px]" />
            <div>
              <h4 className="text-base sm:text-xl font-bold">Verified</h4>
              <p className="text-xs sm:text-sm opacity-80">Industry Leader</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="
   mt-10
      sm:hidden 
  z-20
  pb-10
  "
      >
        <div className="w-[96%] mx-auto rounded-[28px] bg-[rgba(255,255,255,0.2)] p-5 shadow-xl">
          {/* Top Row */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-[35px] h-[35px] rounded-full bg-white flex items-center justify-center">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.73939 16.0222C12.7616 16.0222 16.0222 12.7616 16.0222 8.73939C16.0222 4.71719 12.7616 1.45654 8.73939 1.45654C4.71719 1.45654 1.45654 4.71719 1.45654 8.73939C1.45654 12.7616 4.71719 16.0222 8.73939 16.0222Z"
                  stroke="#5E23DC"
                  stroke-width="1.45657"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.55469 8.73941L8.01126 10.196L10.9244 7.28284"
                  stroke="#5E23DC"
                  stroke-width="1.45657"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <div>
              <p className="text-white text-[11.6px] font-semibold">
                Partner Dashboard
              </p>
              <p className="text-white/80 text-[10.2px]">Track your earnings</p>
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-3 mb-4">
            <div className="flex-1 bg-[#E5D9FF] rounded-[6.6px] p-3">
              <p className="text-[#5E23DC] text-[17.5px] font-bold">₹2.5L</p>
              <p className="text-[#4A5565] text-[10.2px]">Avg. Monthly</p>
            </div>

            <div className="flex-1 bg-white rounded-[6.6px] p-3">
              <p className="text-[#5E23DC] text-[17.5px] font-bold">98%</p>
              <p className="text-[#4A5565] text-[10.2px]">Satisfaction</p>
            </div>
          </div>

          {/* Progress */}
          <div className="w-full h-[6px] bg-white rounded-full overflow-hidden">
            <div className="h-full w-[75%] bg-[#5E23DC]" />
          </div>
        </div>
      </div>
      {/* Floating Dashboard Card */}
      <div
        className="
    absolute
    right-[25%]
    bottom-[35%]
    hidden  xl:block
  z-20
  "
      >
        <div className="w-[414px] rounded-[48px] bg-white/20 backdrop-blur-xl p-8 shadow-xl">
          {/* Top Row */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-[35px] h-[35px] rounded-full bg-white flex items-center justify-center">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.73939 16.0222C12.7616 16.0222 16.0222 12.7616 16.0222 8.73939C16.0222 4.71719 12.7616 1.45654 8.73939 1.45654C4.71719 1.45654 1.45654 4.71719 1.45654 8.73939C1.45654 12.7616 4.71719 16.0222 8.73939 16.0222Z"
                  stroke="#5E23DC"
                  stroke-width="1.45657"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.55469 8.73941L8.01126 10.196L10.9244 7.28284"
                  stroke="#5E23DC"
                  stroke-width="1.45657"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <div>
              <p className="text-white text-[11.6px] font-semibold">
                Partner Dashboard
              </p>
              <p className="text-white/80 text-[10.2px]">Track your earnings</p>
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-3 mb-4">
            <div className="flex-1 bg-[#E5D9FF] rounded-[6.6px] p-3">
              <p className="text-[#5E23DC] text-[17.5px] font-bold">₹2.5L</p>
              <p className="text-[#4A5565] text-[10.2px]">Avg. Monthly</p>
            </div>

            <div className="flex-1 bg-white rounded-[6.6px] p-3">
              <p className="text-[#5E23DC] text-[17.5px] font-bold">98%</p>
              <p className="text-[#4A5565] text-[10.2px]">Satisfaction</p>
            </div>
          </div>

          {/* Progress */}
          <div className="w-full h-[6px] bg-white rounded-full overflow-hidden">
            <div className="h-full w-[75%] bg-[#5E23DC]" />
          </div>
        </div>
      </div>
      {/* Right Image - Positioned from bottom for Figma style */}
      <img
        src={bg}
        alt="Partner"
        className="
    absolute
    hidden
    lg:block
    right-0
    top-13
    bottom-[-140px]           /* crop lower body like Figma */
    w-[95%]     
    right-[-90px]             /* zoomed in */
    md:w-[52%]
    lg:w-[55%]
    max-w-[900px]
    object-cover             /* important for Figma crop */
    object-top               /* keeps face visible */
    pointer-events-none
    select-none
    z-10
  "
      />
      {/* VIDEO MODAL */}
      {showVideo && (
        <div
          className="
      fixed inset-0 z-[999]
      flex items-center justify-center
      bg-black/80 backdrop-blur-sm
      px-4
      animate-fadeIn
    "
        >
          {/* SCREEN FRAME */}
          <div
            className="
        relative
        w-full max-w-4xl
        rounded-[28px]
        bg-gradient-to-b from-[#1a1a1a] to-[#000]
        shadow-[0_30px_80px_rgba(0,0,0,0.8)]
        animate-screenPop
      "
          >
            {/* TOP BAR (Laptop style) */}
            <div className="flex items-center justify-between px-5 py-3 bg-[#111] rounded-t-[28px]">
              <div className="flex gap-2">
                <span className="w-3 h-3 bg-red-500 rounded-full" />
                <span className="w-3 h-3 bg-yellow-400 rounded-full" />
                <span className="w-3 h-3 bg-green-500 rounded-full" />
              </div>

              <button
                onClick={() => setShowVideo(false)}
                className="text-white/80 hover:text-white text-lg font-bold"
              >
                ✕
              </button>
            </div>

            {/* VIDEO AREA */}
            <div className="relative pt-[56.25%] bg-black rounded-b-[28px] overflow-hidden">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/hl8MF7-LlCc?autoplay=1"
                title="Partner Program Video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>

            {/* GLOW */}
            <div className="absolute inset-0 rounded-[28px] ring-1 ring-white/10 pointer-events-none" />
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
