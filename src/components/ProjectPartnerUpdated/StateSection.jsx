// import React from "react";
// import backgroundimage from "../../assets/company/image.png";

// // Example SVGs (replace these with your actual SVG paths)
// const PersonSupportIcon = () => (
//   <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
//   </svg>
// );

// const MoneyBagIcon = () => (
//   <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <rect x="4" y="4" width="16" height="16" stroke="white" strokeWidth="2" />
//   </svg>
// );

// const StatsCard = ({ icon, value, label }) => (
//   <div className="flex flex-col items-center gap-2">
    
//     <div className="text-3xl font-bold text-white">{value}</div>
//     <div className="text-sm text-white">{label}</div>
//   </div>
// );

// const StatsSection = () => {
//   return (
//     <section className="bg-[#5E23DC] py-10" >
//         <div
//             className="absolute inset-0"
//             style={{
//               background: `
//                 linear-gradient(106.52deg, rgba(0, 153, 102, 0.5) 12.59%, rgba(0, 188, 125, 0) 61.68%, rgba(0, 166, 62, 0.5) 99.8%),
//                 url(${backgroundimage})
//               `,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               opacity: 0.1, //
//               pointerEvents: "none",
//             }}
//           ></div>
//       <div className="max-w-6xl mx-auto flex justify-between items-center px-4 md:px-10 gap-10">
//         <StatsCard
//           icon={<PersonSupportIcon />}
//           value="500+"
//           label="Active Partners"
//         />
//         <div className="w-px h-16 bg-[#360E8C]" />
//         <StatsCard
//           icon={<MoneyBagIcon />}
//           value="10,000+"
//           label="Projects Completed"
//         />
//         <div className="w-px h-16 bg-[#360E8C]" />
//         <StatsCard
//           icon={<MoneyBagIcon />}
//           value="₹50Cr+"
//           label="Partner Earnings"
//         /> 
//           <div className="w-px h-16 bg-[#360E8C]" />
//           <StatsCard
//           icon={<MoneyBagIcon />}
//           value="4.8/5"
//           label="Partner Rating"
//         /> 
       
//       </div>
//     </section>
//   );
// };

// export default StatsSection;

import React from "react";

// Example Icons (replace with your SVGs or images)
import salesTeamIcon from "../../assets/home/sales.png";
import landingPageIcon from "../../assets/home/f2.png";
import techSupportIcon from "../../assets/home/f3.png";
import extra from "../../assets/home/f4.png";
import brandIcon from "../../assets/home/f5.png";
import growthIcon from "../../assets/home/f6.png";

const stats = [
  { value: "500+", label: "Active Partners" },
  { value: "10,000+", label: "Projects Completed" },
  { value: "₹50Cr+", label: "Partner Earnings" },
  { value: "4.8/5", label: "Partner Rating" },
];

const benefits = [
  {
    icon: salesTeamIcon,
    title: "Build Your Own Sales Team",
    desc: "Scale like a business—hire, manage, and grow your team with Reparv’s training and support.",
  },
  {
    icon: landingPageIcon,
    title: "Personalized Landing Page",
    desc: "Get your personalized brand landing page and attract genuine clients backed by Reparv’s trusted brand.",
    popular: true,
  },
  {
    icon: techSupportIcon,
    title: "Complete Tech Support",
    desc: "Use our dashboard for lead tracking, project management, and transparent sales reporting.",
  },
  {
    icon: extra,
    title: "Guaranteed High-Quality Leads",
    desc: "Reparv provides continuous verified buyer leads so you spend less time searching and more time closing."  },
  {
    icon: brandIcon,
    title: "Strong Brand Backing",
    desc: "Work under a trusted, growing real estate tech brand that enhances your credibility with clients."  },
  {
    icon: growthIcon,
    title: "Growth Tools",
    desc: "Analytics dashboard to track performance and optimization."  },
];

const StatsAndBenefits = () => {
  return (
    <div className="bg-white">
      {/* Stats Section */}
 <div className="bg-[#5E23DC] text-white py-8">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div
      className="
        grid grid-cols-2 gap-y-6 gap-x-4
        md:flex md:flex-row md:justify-between md:items-center md:gap-0
      "
    >
      {stats.map((stat, idx) => (
        <React.Fragment key={idx}>
          {/* Stat */}
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold">
              {stat.value}
            </div>
            <div className="text-sm sm:text-base mt-1">
              {stat.label}
            </div>
          </div>

          {/* Divider – desktop only */}
          {idx !== stats.length - 1 && (
            <div className="hidden md:block w-[1px] h-16 bg-[#360E8C]" />
          )}
        </React.Fragment>
      ))}
    </div>
  </div>
</div>




      {/* Heading Section */}
      <div className="text-center py-10 px-4">
        <span className="bg-[#5E23DC] text-white px-4 py-1 rounded-full text-xs md:text-sm">Exclusive Benefits</span>
        <h2 className="text-2xl md:text-4xl font-bold mt-4">Why Partner with Us?</h2>
        <p className="text-gray-500 mt-2 max-w-xl mx-auto">
          Unlock exclusive benefits designed to accelerate your business growth
        </p>
      </div>

     
{/* Benefits Grid */}
<div className="max-w-7xl mx-auto px-4 pb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {benefits.map((item, idx) => (
    <div
      key={idx}
      className={`
        relative 
        bg-white 
        border ${item.popular ? "border-[#5E23DC]" : "border-gray-200"} 
        rounded-2xl 
        p-6 
        flex flex-col gap-4
        transition-transform duration-300 
        hover:scale-105 
        hover:shadow-lg
           active:scale-105 
        active:shadow-lg
        ${item.popular ? "shadow-[0px_4px_18.6px_rgba(94,35,220,0.28),0px_1px_4px_rgba(12,12,13,0.05)]" : "hover:shadow-[0px_4px_18.6px_rgba(0,0,0,0.1),0px_1px_4px_rgba(12,12,13,0.05)]"}
      `}
    >
      {/* Popular Badge */}
      {item.popular && (
        <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#5E23DC] text-white px-3 py-1 text-xs font-medium rounded-full">
          Most Popular
        </span>
      )}

      {/* Heading + Icon Row */}
      <div className="flex items-center gap-4">
        <img 
          src={item.icon} 
          alt={item.title} 
          className="w-24 h-24 object-cover rounded-lg" 
        />
        <h3 className="text-lg w-[140px] font-semibold text-[#101828]">{item.title}</h3>
      </div>

      {/* Description */}
      <p className="text-gray-500 text-sm leading-[1.625]">
        {item.desc}
      </p>
    </div>


  ))}
</div>



    </div>
  );
};

export default StatsAndBenefits;
