// import React from "react";
// import { AiOutlineUser } from "react-icons/ai";
// import { FiArrowRight } from "react-icons/fi";
// import { FaUsers } from "react-icons/fa6";
// import { GoLocation } from "react-icons/go";
// import { HiOutlineShieldCheck } from "react-icons/hi2";
// import { AiOutlineCheckCircle } from "react-icons/ai";
// import { PiMedalLight } from "react-icons/pi";
// import bg from '../../assets/bg.png'
// export default function HeroSection() {
    
//   return (
//    <div
//   className="
//     relative w-full min-h-screen 
//     px-3 md:px-16 lg:px-24 
//     lg:py-40 py-20 text-white
//     flex flex-wrap justify-between items-start
//   "
//   style={{
//     background: `linear-gradient(135deg, #009966 0%, #00BC7D 50%, #00A63E 100%)`,
//   }}
// >

//   {/* overlay layer for image + gradient on top */}
//   <div
//     className="absolute inset-0"
//     style={{
//       background: `
//         linear-gradient(106.52deg, rgba(0, 153, 102, 0.5) 12.59%, rgba(0, 188, 125, 0) 61.68%, rgba(0, 166, 62, 0.5) 99.8%),
//         url(${bg})
//       `,
//       backgroundSize: "cover",
//       backgroundPosition: "center",
//       opacity: 0.1, // 🔥 only this overlay has opacity
//       pointerEvents: "none",
//     }}
//   ></div>

//   {/* your actual content */}
//   <div className="relative z-10 w-full">
//     {/* all your hero content here */}
//   </div>
//       {/* LEFT SIDE */}
//       <div className="max-w-xl">
//         {/* Top Label */}
//         {/* Tag */}
//           <div className="bg-white/20 text-white px-5 py-2 rounded-full inline-flex items-center gap-2 backdrop-blur-md border border-white/30">
//             <HiOutlineShieldCheck className="text-lg" />
//             <span className="text-sm font-medium">Industry Verified Platform</span>
//           </div>
//         {/* Heading */}
//     <h1
//   className="
//     font-[700]
//     text-[42px] leading-[52px]
//     md:text-[60px] md:leading-[75px]
//     font-['Segoe UI']
//     mt-6
//     text-white
//   "
// >
//   <span className="text-white">Become a </span>

//   <span
//     className="
//       bg-gradient-to-r from-[#00BC7D] via-[#ECFDF5] to-[#00BC7D]
//       bg-clip-text text-transparent
//       animate-gradient
//       font-[700]  text-shadow-custom
//     "
//   >
//     Project
//   </span>
//   <br />

//   <span
//     className="
//       bg-gradient-to-r from-[#00BC7D] via-[#ECFDF5] to-[#00BC7D]
//       bg-clip-text text-transparent
//       animate-gradient
//       font-[700]  text-shadow-custom
//     "
//   >
//     Partner{" "}
//   </span>

//   <span className="text-white">Today</span>
// </h1>





//         <p className="mt-4 text-lg opacity-90 leading-relaxed">
//           Connect with premium projects, grow your business, and earn more with
//           India's most trusted partner network.
//         </p>

//         {/* Buttons */}
//         {/* <div className="flex gap-4 mt-8">
//           <button
//             className="
//               bg-white text-[#0a9447]
//               px-6 py-3 rounded-lg font-semibold
//               flex items-center gap-2 shadow
//             "
//           >
//             Join as Partner <FiArrowRight size={18} />
//           </button>

//          <button
//   className="
//     border-2 border-white px-6 py-3 rounded-lg font-semibold
//     flex items-center gap-2 whitespace-nowrap
//   "
// >
//   Learn More
//   <svg
//     width="20"
//     height="20"
//     viewBox="0 0 20 20"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//     className="flex-shrink-0"
//   >
//     <g clipPath="url(#clip0_406_1132)">
//       <path
//         d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
//         stroke="#F4F8F5"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//       <path
//         d="M8.5 7L13 10L8.5 13V7Z"
//         stroke="#F4F8F5"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </g>

//     <defs>
//       <clipPath id="clip0_406_1132">
//         <rect width="18" height="18" fill="white" transform="translate(1 1)" />
//       </clipPath>
//     </defs>
//   </svg>
// </button>

//         </div> */}
//        <div className="flex gap-1 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-6 mt-8 justify-start w-full max-w-sm">

//   {/* JOIN AS PARTNER */}
//   <button
//     className="
//       bg-white text-[#0a9447]
//       px-1 lg:px-3 sm:px-5 py-3 rounded-lg font-semibold
//       flex items-center gap-2 shadow
//       whitespace-nowrap
//     "
//   >
//     Join as Partner
//     <FiArrowRight size={18} className="flex-shrink-0" />
//   </button>

//   {/* LEARN MORE */}
//   <button
//     className="
//       border-2 border-white 
//       px-3 sm:px-5 py-3 rounded-lg font-semibold
//       flex items-center gap-2
//       whitespace-nowrap
//     "
//   >
//     Learn More
//     <svg
//       width="18"
//       height="18"
//       viewBox="0 0 20 20"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       className="flex-shrink-0"
//     >
//       <g clipPath="url(#clip0_406_1132)">
//         <path
//           d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
//           stroke="#F4F8F5"
//           strokeWidth="2"
//         />
//         <path
//           d="M8.5 7L13 10L8.5 13V7Z"
//           stroke="#F4F8F5"
//           strokeWidth="2"
//         />
//       </g>

//       <defs>
//         <clipPath id="clip0_406_1132">
//           <rect width="18" height="18" fill="white" transform="translate(1 1)" />
//         </clipPath>
//       </defs>
//     </svg>
//   </button>
// </div>


//         {/* Stats */}
//     <div
//   className="
//     flex flex-wrap gap-6 mt-14 pt-8 border-t
//     sm:gap-10
//   "
//   style={{ borderColor: "rgba(255, 255, 255, 0.2)" }}
// >
//     <div className="gap-5 flex flex-row">
//   {/* 500+ */}
//   <div className="flex items-center gap-2 w-1/2 sm:w-auto">
//     <FaUsers size={20} className="sm:size-[22px]" />
//     <div>
//       <h4 className="text-base sm:text-xl font-bold">500+</h4>
//       <p className="text-xs sm:text-sm opacity-80">Active Partners</p>
//     </div>
//   </div>

//   {/* Nationwide */}
//   <div className="flex items-center gap-2 w-1/2 sm:w-auto">
//     <GoLocation size={20} className="sm:size-[22px]" />
//     <div>
//       <h4 className="text-base sm:text-xl font-bold">Nationwide</h4>
//       <p className="text-xs sm:text-sm opacity-80">Operating</p>
//     </div>
//   </div>
//   </div>

//   {/* Verified */}
//   <div className="flex items-center gap-2 w-full sm:w-auto">
//     <HiOutlineShieldCheck size={20} className="sm:size-[22px]" />
//     <div>
//       <h4 className="text-base sm:text-xl font-bold">Verified</h4>
//       <p className="text-xs sm:text-sm opacity-80">Industry Leader</p>
//     </div>
//   </div>
// </div>


//       </div>

     
     
//        {/* RIGHT SIDE CARD */}
//       <div
//       className="
//     relative bg-white text-black
//     rounded-2xl p-6 sm:p-8
//     w-full
//     max-w-md

//     lg:w-[604px] lg:max-w-[604px]
//     shadow-xl mt-10 lg:mt-24
//     transition-all duration-300
//     hover:scale-[1.05] hover:-translate-y-2  active:scale-[1.05] active:-translate-y-2
//   "

//       >
//         {/* FLOATING BADGE ICON */}
//         <div
//           className="
//             absolute -top-6 -right-2
//             w-[60px] sm:w-[70px] h-[60px] sm:h-[70px]
//             flex items-center justify-center
//             bg-gradient-to-br from-[#2B7FFF] to-[#9810FA]
//             shadow-lg rounded-2xl
//             rotate-[6deg]
            
//       transition-all duration-300
//       group-hover:scale-110 group-hover:-translate-y-2 group-hover:rotate-[10deg]
//           "
//         >
//           <PiMedalLight size={28} sm={35} className="text-white" />
//         </div>

//         {/* Partner Dashboard */}
//         <div className="flex items-start gap-3 sm:gap-4">
//           <div className="relative w-10 sm:w-13 h-10 sm:h-13 flex items-center justify-center bg-[#D0FAE5] rounded-full">
//             <div className="absolute w-4 sm:w-6 h-4 sm:h-6 border-2 border-[#009966] rounded-full hover:scale-[1.05] hover:-translate-y-2 active:scale-[1.05] active:-translate-y-2 "></div>
//             <svg
//               className="absolute w-3 sm:w-4 h-3 sm:h-4"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="#009966"
//               strokeWidth="3"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <polyline points="20 6 9 17 4 12" />
//             </svg>
//           </div>
//           <div className="flex flex-col">
//             <span className="text-sm sm:text-lg font-semibold">Partner Dashboard</span>
//             <span className="text-xs sm:text-sm text-gray-500 mt-1">Track your earnings</span>
//           </div>
//         </div>

//         {/* Stats */}
//         <div className="flex flex-col sm:flex-row gap-4 mt-6">
//           {/* ₹2.5L Avg. Monthly */}
//           <div className="flex flex-col gap-2 bg-[#ECFDF5] rounded-lg p-3 sm:p-4 flex-1">
//             <h2 className="text-[#009966] font-bold text-xl sm:text-2xl md:text-3xl">₹2.5L</h2>
//             <p className="text-gray-600 text-xs sm:text-sm">Avg. Monthly</p>
//           </div>

//           {/* 98% Satisfaction */}
//           <div className="flex flex-col gap-2 bg-[#EFF6FF] rounded-lg p-3 sm:p-4 flex-1">
//             <h2 className="text-[#155DFC] font-bold text-xl sm:text-2xl md:text-3xl">98%</h2>
//             <p className="text-gray-600 text-xs sm:text-sm">Satisfaction</p>
//           </div>
//         </div>

//         {/* Progress Bar */}
//         <div className="w-full h-2 bg-[#A4F4CF] rounded-full mt-6">
//           <div className="w-[80%] h-full bg-[#00BC7D] rounded-full"></div>
//         </div>
//       </div>
 
//     </div>
//   );
// }


import React from "react";
import bg from '../../assets/company/man.png'
import backgroundimage from '../../assets/company/bg.png'

import { HiOutlineShieldCheck } from "react-icons/hi";
import { GoLocation } from "react-icons/go";
import { FaUsers } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="relative bg-[#5A1EDC] text-white overflow-hidden py-5 md:py-20 lg:py-20  md:px-16 lg:px-24">
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
      <div className="max-w-[1350px] mx-auto px-6 md:px-10 pt-20 pb-24 relative z-10">

        {/* Top Badge */}
       <div className="bg-white text-black px-5 py-2 rounded-full inline-flex items-center gap-2 backdrop-blur-md  border border-white/30">
            <HiOutlineShieldCheck className="text-lg" />
             <span className="text-sm font-medium">Industry Verified Platform</span>
           </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-tight mt-6 max-w-2xl  font-['Segoe_UI']
    font-black
    text-white
    leading-[75px]">
          Become a Project <br /> Partner Today
        </h1>

        {/* Description */}
        <p className="mt-6 text-lg leading-relaxed max-w-xl text-white/90">
          Connect with premium projects, grow your business, and earn more with
          India's most trusted partner network.
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-4 mt-8 flex-wrap">
          <button className="bg-white text-[#5A1EDC] font-semibold px-8 py-3 rounded-lg shadow hover:bg-white/90 transition flex items-center gap-2">
  JOIN AS PARTNER
  <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 14L6 8L0 2L2 0L10 8L2 16L0 14Z" fill="#5E23DC"/>
  </svg>
</button>


          <button className="border border-white/30 text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition flex items-center gap-2">
            Learn More <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" stroke="#F4F8F5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.5 7L13 10L8.5 13V7Z" stroke="#F4F8F5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          </button>
        </div>

         <div
  className="
    flex flex-wrap gap-6 mt-14 pt-8 border-t
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
{/* Floating Dashboard Card */}
<div
  className="
    absolute
    right-[26%]
    bottom-[38%]
    hidden md:block
  z-20
  "
>
   <div className="w-[414px] rounded-[48px] bg-white/20 backdrop-blur-xl p-8 shadow-xl">
      {/* Top Row */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-[35px] h-[35px] rounded-full bg-white flex items-center justify-center">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.73939 16.0222C12.7616 16.0222 16.0222 12.7616 16.0222 8.73939C16.0222 4.71719 12.7616 1.45654 8.73939 1.45654C4.71719 1.45654 1.45654 4.71719 1.45654 8.73939C1.45654 12.7616 4.71719 16.0222 8.73939 16.0222Z" stroke="#5E23DC" stroke-width="1.45657" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.55469 8.73941L8.01126 10.196L10.9244 7.28284" stroke="#5E23DC" stroke-width="1.45657" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        </div>

        <div>
          <p className="text-white text-[11.6px] font-semibold">
            Partner Dashboard
          </p>
          <p className="text-white/80 text-[10.2px]">
            Track your earnings
          </p>
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
    hidden md:block
    lg:block
    right-0
    bottom-[-140px]           /* crop lower body like Figma */
    w-[95%]     
    right-[-90px]             /* zoomed in */
    md:w-[52%]
    lg:w-[62%]
    max-w-[900px]
    object-cover             /* important for Figma crop */
    object-top               /* keeps face visible */
    pointer-events-none
    select-none
    z-10
  "
/>

    </section>
  );
};

export default HeroSection;
