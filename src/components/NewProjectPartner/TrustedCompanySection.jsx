// import React from "react";

// // Example logos
// import davitaLogo from "../../assets/company/c1.png";
// import doverLogo from "../../assets/company/c2.png";
// import bxpLogo from "../../assets/company/c3.png";
// import aesLogo from "../../assets/company/c4.png";
// import capitalOneLogo from "../../assets/company/c5.png";
// import capitalOneLogo3 from "../../assets/company/c6.png";
// import capitalOneLogo4 from "../../assets/company/c7.png";

// export default function TrustedSection() {
//   const logos = [
//     { src: davitaLogo, alt: "Davita" },
//     { src: doverLogo, alt: "Dover" },
//     { src: bxpLogo, alt: "BXP" },
//     { src: aesLogo, alt: "AES" },
//     { src: capitalOneLogo, alt: "Capital One" },
//     { src: capitalOneLogo3, alt: "Capital One" },
//     { src: capitalOneLogo4, alt: "Capital One" },
//   ];

//   const stats = [
//     { number: "495+", label: "Active Partners" },
//     { number: "44+", label: "Enterprise Clients" },
//     { number: "18+", label: "Cities Covered" },
//     { number: "4.1", label: "Average Rating" },
//   ];

//   const certifications = [
//     "ISO 9001:2015",
//     "NSIC Certified",
//     "MSME Registered",
//     "Startup India",
//   ];

//   return (
//     <section className="px-4 md:px-16 py-6 lg:py-16 bg-white text-center">

//       {/* Heading */}
//       <h2 className="text-2xl lg:text-3xl md:text-4xl font-bold mb-2 text-gray-900">
//         Trusted by Leading Organizations
//       </h2>
//       <p className="text-[14px] text-gray-500 mb-20">
//         Join a network of industry leaders and innovators
//       </p>

//       {/* Logos - horizontal scroll */}
//    <div className="overflow-hidden relative mb-20">
//   <div className="flex gap-24 md:gap-24 animate-marquee whitespace-nowrap">

//     {logos.concat(logos).map((logo, idx) => (
//       <div
//         key={idx}
//         className="bg-gray-100 p-3 rounded-lg flex items-center justify-center
//                    w-28 md:w-32 h-14 md:h-20"
//       >
//         <img
//           src={logo.src}
//           alt={logo.alt}
//           className="h-full w-full object-contain mx-auto filter grayscale"
//         />
//       </div>
//     ))}

//   </div>
// </div>

//       <style>
//         {`
//           @keyframes marquee {
//             0% { transform: translateX(0%); }
//             100% { transform: translateX(-50%); }
//           }
//           .animate-marquee {
//             display: inline-flex;
//             animation: marquee 8s linear infinite;
//           }
//         `}
//       </style>

//       {/* Stats Section */}
//     <div className="w-full flex justify-center mb-10">
//   <div
//     className="
//       text-white rounded-[24px]
//       flex flex-wrap items-center justify-between
//       gap-6
//       px-6 md:px-12
//       pt-10 md:pt-16
//       pb-10 md:pb-12
//       max-w-full w-full
//     "
//     style={{
//       background:
//         "linear-gradient(91.29deg, #0BB501 -3.9%, #009966 -2.84%, #00A63E 106.64%)",
//     }}
//   >
//     {stats.map((stat, idx) => (
//       <div
//         key={idx}
//         className="
//           flex flex-col items-center text-center
//           w-1/2               /* 2 items per row on mobile */
//           md:w-auto           /* original layout from tablet upward */
//           flex-1 md:flex-none
//         "
//       >
//         <span className="text-3xl md:text-4xl font-bold">{stat.number}</span>
//         <span className="text-sm md:text-base">{stat.label}</span>
//       </div>
//     ))}
//   </div>
// </div>

//       {/* Certifications */}
//       <p className="text-gray-500 mb-4">Certified and recognized by</p>
//       <div className="flex flex-wrap justify-center gap-4">
//         {certifications.map((cert, idx) => (
//           <div
//             key={idx}
//             className="flex items-center gap-2 border border-gray-200 bg-[#F9FAFB] rounded-lg px-4 py-2 text-sm md:text-base "
//           >

//             <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 10.9849 17.306 11.9602 16.9291 12.8701C16.5522 13.7801 15.9997 14.6069 15.3033 15.3033C14.6069 15.9997 13.7801 16.5522 12.8701 16.9291C11.9602 17.306 10.9849 17.5 10 17.5C9.01509 17.5 8.03982 17.306 7.12987 16.9291C6.21993 16.5522 5.39314 15.9997 4.6967 15.3033C4.00026 14.6069 3.44781 13.7801 3.0709 12.8701C2.69399 11.9602 2.5 10.9849 2.5 10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5C11.9891 2.5 13.8968 3.29018 15.3033 4.6967C16.7098 6.10322 17.5 8.01088 17.5 10Z" stroke="#009966" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
// </svg>

//              <span
//     className="
//       font-semibold
//       text-[#364153]
//       whitespace-nowrap
//   font-normal
//       text-[12.5px] leading-[18px]
//       sm:text-[16px] sm:leading-[24px]
//     "
//   >
//     {cert}
//   </span>
//           </div>
//         ))}
//       </div>

//     </section>
//   );
// }

// import React from "react";
// import davitaLogo from "../../assets/company/c1.png";
// import doverLogo from "../../assets/company/c2.png";
// import bxpLogo from "../../assets/company/c3.png";
// import aesLogo from "../../assets/company/c4.png";
// import capitalOneLogo from "../../assets/company/c5.png";
// import capitalOneLogo3 from "../../assets/company/c6.png";
// import capitalOneLogo4 from "../../assets/company/c7.png";
// import personImg from "../../assets/company/person.png";

// export default function TrustedSection() {
//   const logos = [
//     davitaLogo,
//     doverLogo,
//     bxpLogo,
//     aesLogo,
//     capitalOneLogo,
//     capitalOneLogo3,
//     capitalOneLogo4,
//     davitaLogo,
//     doverLogo,
//     bxpLogo,
//     aesLogo,
//     capitalOneLogo,
//   ];

//   const stats = [
//     {
//       number: "495+",
//       label: "Active Partners",
//       icon: (
//        <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

// <g mask="url(#mask0_297_2835)">
// <rect y="-7.26807" width="35.2149" height="42.4604" fill="white"/>
// </g>
// <defs>
// <pattern id="pattern0_297_2835" patternContentUnits="objectBoundingBox" width="1" height="1">
// <use xlink:href="#image0_297_2835" transform="scale(0.0078125)"/>
// </pattern>
// <image id="image0_297_2835" width="128" height="128" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADsQAAA7EB9YPtSQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAABKMSURBVHic7Z15nF1Flce/3Z00TRowMSQhEAwEMxLABZzgAgIjOCroQKJCJGI+zrjBTMBhBHdF/SibG4gaxUhwwRUCKuCCLBowM4EJS1jMMAEJAQwhm4Sk0+l+/nH62nXPrbq37vbue537+3zqk/c6VafOrXteVZ1T55zqoPXQCRwJHAscDrwIeD7wvJx0B4DNwGrgIeB24Ebg/3LSrVEQxgGfAB4DGk0sfwTmAF3lP2ING7qAM4GNNPfF67ICOLrkZ205dFTc/z7AVcBRMXW2AI8DfwG25+irF5gCTAK6HXUawBeAjwH9Ofqq4YFDkBdr+zXeAswHppbQbweyt/gcsNLR/6+A3Urou8YQZgDriA78EuDVTeSjC3g3dkG8DehpIi87DfYE/kx4sHcA/1khT7sB1xAVgh9VyNOIxfWEB/mvwBsq5UjQCXyeqBCcXiVTIw2nEh7cQeDkSjmKYgFhHjcjm9UaOdFNVMf/eKUc2TEa+ANhPr9VKUcjBO8iPKgPAaMq5ciNQ5B9ScBrH/UskBu3ExaAk6plJxELCfP7oWrZaW/sg6z3wWA+QvVGqCQcQlgA7qyWnfbGXMKD+ZVq2fHGwwzzPICcV4wodDapn0PV9+ub1G9emHx2Ai+tipGy0CwBmK6+P9ykfvNCHxXr52h7NEsAzKmzATzZpH7zQvP5/Eq4KBHNEoBdjc9bgG1N6jcv1qrvvZVwUSKapYebO/7BmHq7Ay9D1tpdEDPxo8BSxCKXF73Aq5Aj4V7gGeBuYBUyM2nY/lYjA+5keDe9yfL/RyIHL9sJawvmYdFtwFtJL7SjEI+f22LoPwp8BJhg4cus95mUfdcYgksAJgI/xv5SXGUVcIJnv3NJ52K2AXgPwzNWLQAFwSYAxyBrbFrXraD8EPembBrw2xy0f4NsXEe8AFRli5+FuIJph4s+4FrEUXMrMkP8EyIsesM6B9gPcSAx1+r9gWXYhWMTsBi4A/FBnAqcCBxBeJ/yOsR0fX6ah6rhhjkDDBA+aAnKQmCyo/1+wCWI9qDbjVd1T7fUeQZZ43d30H854o2k2+k9w4ibAZoFUwBs5Z2edPZFjmaDF/MrS51piMbQQFTO84GxHrS7E3isBSAjepGj37iB3T8lzcnI1O/y5Z8CzEbUPV+MTuCxAXw2JZ87Pd4HrCd5YNMKQBnwEYBNwBk0z4DW1rgU/113uwhAUK6g9Y+zK8W/kU7tajcBaFA7iDjRQ1S/X4YYb/ZG9Ovv0/oCcAvC6yRELbxJ/f9G8gesjkicRHiglhMNxdLuVq0oAL9R/9+BaB1mnX9vJoNloIzNzEz1/XzyxfS1Cmxq4OFVMFIkyrAEasPMipz0ehH7/HZk5uhL2X4UMA+Zzr+NTN1ZcZ/6rp+17VCGAOjdcd4o2+8wHDxyCKKGpcF5SLQvwD8PlazQz9L26mA7PMCRxufXZGhvtokLQ98p0Q4C0OX47AvzGessIAplCICeJvO6UTUcn5vV3oR+lrZPIlGGAGhHylfmpLfc+HxXBe1NvEp9X5OT3oiEdqJ4EjmcMZHGDjAJ+BJwAX6nehq7AZ8Gvgq8IKZekh1gHPCgqnNKBn5GPDqBewkP1HrkJG0O8DbgZlrfEHQPwuvJSBTzGvX/a4AxlXDaBjgKtwPmSDgLGEQcVGvEYC52D552F4ABqk1n01Y4jOh0384CsAzxTxwxaNaZ9lREG5iMBHzMJmxHn4aEjFeJ0YTPLFYiVsh+4CnErW1lBXyNSFxG688Ai6tlpzmoyhL4nPruy0cPcCWijs2PqXcqcgh1Df4BndpKuMWzXY0MOJvwr8037v79RptB7JlEdyW8+fR15JygeLrIs11bo6oZQOcH0DF5LuxhfA5SvmociuwzbG3ioHlY5dmurVGVADyovs/wbKc3Ye8jupF9f0IbFzQPmscaBeMJhqfbH3i26SWaVv7XSHjXG4kGmm4naoZ24QtGu22EcxrUKAHmy3oa2YX74Byi+rmrfCkFP6ad//cp2tXIiLcRfllv8WzXieQSSHr5vyO8F4hDEGAalDM929XIgR4kHj8Y9KX4G6Y6Eb/8IAbQLFsRR1TXpRA2XGu07yddSFmNHPgi4Zf3jpTt90Bmkk8ivn/vIL2j5usUDz9M2b5GDuyFGIWCwd9AObeEuDAeuUXMPOg5uIn91yCao/9+mpOObQzR/MVXNKHfGgo9RD1t7kXCyMrCOKIp4Z9kBOYBbBfMJLwUNJD4wjkl9PUG7FfWvLGEvmqkwGxkDda7+sXAgQXQ3w+Z4m0qY9pgkxolYR52V7JBxEnzRNJZ6LqRSKBrseclGgTOLYj3tkQrJjk4FvnVuxI6bUecM25HkjmvY/gKuvHIrWTTkMxfh+MWmH7gNMQiWaPF8Ef8zb1Zy+NNe5oWRjuEhtUoEe0gAH3AK5A8gVl88v6MpJY7hp3kjD8NWvXWLo3/GSofQLKHHoas8/siuvsYZD+zBTkfeAxxMl1OOHwrLlP5Tol2EQATa7EniKyRAe2wBNQoEbUA7ORoNQHYE/HpO8D4Wwf+jh1x6CLsIzAO2VPUN4JWjLFIsuhf4A4o/V/ghTn6mEA0xZt5BLwEOAs5nq7RBOwKvBn4Cf4BpJvJFo9/NNHQblcxhWFipier4cSuiN/fT4me/NnKU46/X4rfktAJfAL7GYCLtln6gF8i5mLf2IIaCt3IL/372P33bOXnSCBpBxLi9VdLnWXExxNORA6PbC/1rCHaLwEWefK0FQkzO5k6KUQiRiEncAvxSxXfp77rwI4XEc040kDcx2ZZ+ndN+Y8QjSR6UwIvtvIs4jd4IsVsTkcEOpHcQJcgnjVJg7gB+C4yO+iLpbUAgHgNXeKg9U1kpulAft22jeTPsXv7aAH4IOITeAF++4aNxnOk8UIeMZgBfBm/wdqEDNYJhAfrFJIFIMBpyC9Q016KfZe/HQlEdR172wQgQBdyYdUCJHAl6fnWIcL4ihj+RwymIWrbIPGDsgUJ4phF9IawAGkEAEToViT020AOgXRaN404ATAxCnElu4JwLIOr/B74x4S+2xbzkBfrevhtiAfOHPySRKYVAJCN2OIYHpbgFx/gKwAmdgH+Bbn2zrZBDUo/8GHVtnOIrwMQATkaubFsOm2ynzgX+69+O3ADIhxpL1FIKwCjkRdlWwqC0oe4myft2LMIgIkxSGDK1bhV2yuRwNNbkWXQxfMgMmstRuIfX5ySl9Ixh+jL34Rk4vaN77chjQC8BknZnjQFB+UR5NfqQl4BMLEHElOY5zZUXVYi41t5qNo+RPX4ZfiHXsfBRwAmIOuvbfZ5DjH4zCcaOh6U67BHHBUpACD+jPc4eMhT+oCvU26sRCz0HT9343baTIs4AehEkkA8g31gbiB8cLQXkmvAVncLsiabYehFCcCBwPWOfoPSDzyAGJQuQ1TNzwz9uwhZItYl0Hhu6Bma6sexN2Hdeiv5DmY0XAJwKKLe2QZiNRJH4MJriUYbBeUBhnP9FSEA/4p7U7weUSNPwO8H04EI01mIJuHSsu6i2HcQC53Q6YsF09cCcC5i9LHZ8BvI5s9nh78L4vlrozEIfI/o9XZpBGAMssGz0f8T8C7y7+xnILYFm3FrI2KAKh3XqY4PKpi+FgBbdJAu53jQneNBR/flKwC7Ib9QTW8DEmVU9MUUByB2F93fDkSIS8Uqo8OnSqCvBUCXtUiqFy39cZpHD/CoarPA8jddfATA9fJvonx/grlEN+ODwLvL7NTscFkJ9F0CMIBMf4EN/0b1/1+LoflhVfdu5FfZi2y6XI4nSQIwCnvu4wtonnfVgUhElJ4JTiqrQ3OavLUE+rOIDuhyojeNHIzspIM6/cjx7HGqHE/U4HKconUQ8iy636TcQBeo+oNUkzl8EjJGJi+bKSaINoKyBWAcw9fLb0J2wK419BtEX1pS+YWDVgdyuBQ4h6whPjvJ8UR35R/xeL6yMBHZbJr83EsJp5JlCwDIjvrVJHveTCTenKpLP8lJKIO+40zYzwP+omh/K4FuXkwHPoUEr16FCJu+8uaFRI1f5xXNSDMEIA3uwl8A1hbU5/mK7j2Ul0iyE1lqbNrQVuC/VP23qDp9FJx9vdUEwPTnewpJF2cWc1ocJL8uPhUZeHPDdVhOmnH4MsmCrTerOkPqlUUy1EoC0E2Yn1ssdb5HeDDy/hoWKHqX5aQXhySV2PyVm8vBFMKnkTuQjCiJ8FFd/mR8fsiH6BDKsFdPJsyz7d4+/bc8gR9jgLcb34Nj5jIwnei+4jpknT8I8XEI0I3EUgR4HNkgB+gCTi+KsZciZ9SX45+EcR5isl1DsVes65SuF1rqzFd18tztd5qidXkOWnHoQYJfzL6WE/aimq7+/2pFYyph8/mTVBj5Ze6YryuQrs4vbNPbZ6s6Z+fo77eKVpKLWVZ8XfWzGXnhJqaoOtda6PxS1TkiqeOyJGSc8bnI3Ht6Oi9zCRhNeABXIalrisYpRKfr9yLWPhMfUt9t9xnoWeH4HHzlgmlq/UOBdC8mLOG2e4n1L+VHGfuaqegsSKi/N3LNzL3Iuf79yHW102LaTCdq1/iGpd4swkaoAewuY5MUrVsTeC4NZQnAVYQfcF9LnVGE18Ks/Z+p+jo1pu7rcXsjbXW09Vn3QbQY7YkcJ4zmOcGGmHremIncyvED/H3TyhKA2wj/ClyXTJhxClnzAn2T8KC7LrZ6MfFe0gGv+sTOZ93vRlLjmPVWEO/sas6Sd8Q/oh9WGgS/7dmmLAF42KD7REw9c9C2kS0f4s8ID7xr0LUr2A5EddYnjgPAe4ba2PR9W1rcr6g6z5Lsj7ELYja+EFGbcyOLIagMAeggbJGLO5rWMQNZvJbNY9+tjjpjCZ9QrkeCTkHWfu3BPIDY6rOs+w3Cun/T0CoCMJ7wYNjUoAD6ZtKXZejvbqP90446h6l+tJVwIslu7L7r/ncyPEMiWi1FTBy0C3pcps8iVMEdxmfX8XSf+q49gtYiruIrHO03Iz4N24y/dSO2/bHG3+4H/iOO2axoJwHwsQG4/i+LAGw0Prs8elci03mA2UTX8jghsOn7FyEb7wBbECHR1+0WgnYWgLhNYBECYKpQo7DvI/qRPAgBOpDDKG1+tgnB14gmqp5F1Lp5BuLK7osZyLKyioLcxFplD3Ae4TVRu3mZOFDV9dVeTGhH1CMd9fZApmizbj/2M4he5IW+nahmUtS6f7XRvpCE2K0iAJcTHpw4T5/dVd0bM/SnE1fE3VY+Bbujpu8taKMRnT2Nvm9DB+Hoorhl0hutIgA3EB6gJPcxU9W6L0N/eha5JqF+HiHIou/bcLCio88GMqFVBMAMutzsUf8Bo/76DP11Es4MspFkN7AsQvAmovr+vAz8AnxU0flARjohtIoAmFObz83e+ig3S3YvbQ728S1IIwQvIBr4utBSzxfa5lCIb2ArCEAP4V/JTR5tFhEeDG1n98FrFY1bPdtNIWy2tm0Me4ja+e8jexq6oxStuzLSiaAVBOAAwg/n4/T4OdXmmAz9dhG9Yi7RyWIINiHYgQS+zieaR+BZkl3Y46Ajp96bg1YIrSAAWrp9/PLOUG3mZuxb01mC/+GSbTlwlazrPkg2M5PWOvzyM7WNISiNFTCA1oGzegYtVP0dgeQE8MHjyMtJuurmQrK7cvcgR8smLkYsiIWgFWaADxKWcB8L18tVm0ty9K/zCGwG/iFF+7FIihvz5LCBWDN9hckFrUKupuB0tq0gADpYYmZ8dUAOZsw2P8vRfwdRreIe0ieRnoCofacgHs55XedtORAKTxrRCgLwE8IP6ZMsqVPxkdehcz+isfm/o7r8fscRTbW/qIyOWkEATDNpP/4ZOB4z2j1WAB8nEE1dczPNTyd/HNEklXlUyFi0ggA8atBbnaKdFpwiNr06Z1IDce6M8/4tEvOJups9QcEBoSaqFoBOwmncl6Zo+1PCA1WIjxzRRBENxFTse/iTBXsh5xG633WUnFW0agHQvu5pDjj0DrnIBM5nY0/jdjPFRg/3IDZ9290Lqyk+aVcEVQuA9ru7NEXbc1TbE3PyojEH+00og0iY1vFk3+nvhaSJdaW6u4NiMrUmomoBeDPhB9chUnE4VbU9IycvNuyPXGVve0kNJIfBFUig6QzcKVz2RMzVH0OykLnyJPYjS5ArJiIVfEyaAwxvnjbgd8hwrEF7I3Bnetb+jsnIOXeAB/F3dBiPZBwN8P9IAumi0YWYq320kx2Ii9iziLv57gifPlnWlyLOoYUd9PjAJ3FjXcot/03xyxfgtz49TQukK98J8QQS+7CIcvIzAn5LwMlIlGt9kWLxaCBL5BZkaXoYmd6XIIad0q+7/xvvLoshP9HCugAAAABJRU5ErkJggg=="/>
// </defs>
// </svg>

//       ),
//     },
//     {
//       number: "44+",
//       label: "Enterprise Clients",
//        icon: (
//        <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

// <g mask="url(#mask0_297_2835)">
// <rect y="-7.26807" width="35.2149" height="42.4604" fill="white"/>
// </g>
// <defs>
// <pattern id="pattern0_297_2835" patternContentUnits="objectBoundingBox" width="1" height="1">
// <use xlink:href="#image0_297_2835" transform="scale(0.0078125)"/>
// </pattern>
// <image id="image0_297_2835" width="128" height="128" preserveAspectRatio="none" xlink:href="data:image/png;base64,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"/>
// </defs>
// </svg>

//       ),
//     },
//     {
//       number: "18+",
//       label: "Cities Covered",
//       icon: (
//        <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

// <g mask="url(#mask0_297_2835)">
// <rect y="-7.26807" width="35.2149" height="42.4604" fill="white"/>
// </g>
// <defs>
// <pattern id="pattern0_297_2835" patternContentUnits="objectBoundingBox" width="1" height="1">
// <use xlink:href="#image0_297_2835" transform="scale(0.0078125)"/>
// </pattern>
// <image id="image0_297_2835" width="128" height="128" preserveAspectRatio="none" xlink:href="data:image/png;base64,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"/>
// </defs>
// </svg>

//       ),
//     },
//     {
//       number: "4.1",
//       label: "Average Rating",
//       icon: (
//        <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

// <g mask="url(#mask0_297_2835)">
// <rect y="-7.26807" width="35.2149" height="42.4604" fill="white"/>
// </g>
// <defs>
// <pattern id="pattern0_297_2835" patternContentUnits="objectBoundingBox" width="1" height="1">
// <use xlink:href="#image0_297_2835" transform="scale(0.0078125)"/>
// </pattern>
// <image id="image0_297_2835" width="128" height="128" preserveAspectRatio="none" xlink:href="data:image/png;base64,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"/>
// </defs>
// </svg>

//       ),
//     },
//   ];

//   const certifications = [
//     "ISO 9001:2015",
//     "NSIC Certified",
//     "MSME Registered",
//     "Startup India",
//   ];

//   return (
//     <section className="relative bg-[#5E23DC] w-full lg:w-[80%] mx-auto text-white rounded-[48px] overflow-hidden">
//       {/* TOP CONTENT */}
//       <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-32 grid lg:grid-cols-2 gap-12">
//         {/* LEFT TEXT */}
//         <div className="z-10">
//           <h2 className="text-4xl md:text-5xl font-bold leading-tight">
//             Trusted by Leading <br /> Organizations
//           </h2>
//           <p className="mt-4 text-lg text-white/80 max-w-md">
//             Join a network of industry leaders and innovators
//           </p>
//         </div>

//         {/* LOGOS GRID */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
//           {logos.map((logo, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-xl flex items-center justify-center
//                          w-[140px] h-[90px] mx-auto shadow-md"
//             >
//               <img
//                 src={logo}
//                 alt="Company Logo"
//                 className="max-h-10 object-contain opacity-90"
//                 style={{
//                   filter:
//                     "brightness(0) saturate(100%) invert(19%) sepia(83%) saturate(2636%) hue-rotate(252deg) brightness(92%) contrast(101%)",
//                 }}
//               />
//             </div>
//           ))}
//         </div>

//         {/* PERSON IMAGE (BIG & OVERLAP) */}
//         <img
//           src={personImg}
//           alt="Happy Client"
//           className="
//             hidden lg:block
//             absolute left-6 bottom-[-120px]
//             w-[420px] xl:w-[480px]
//             z-20
//           "
//         />
//       </div>

//       {/* STATS STRIP */}
//       <div className="bg-white py-10">
//         <div className="max-w-3xl ml-[20%] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
//           {stats.map((stat, index) => (
//             <div key={index} className="flex flex-row items-center gap-4">
//               {/* Blue rounded background with icon */}
//               <div className="w-12 h-12 md:w-14 md:h-14 bg-[#5E23DC] rounded-lg flex items-center justify-center mb-2">
//               {stat.icon}
//             </div>
//               {/* Number and label */}
//               <div className="flex flex-col">
//                 <p className="text-2xl md:text-3xl font-bold text-[#5E23DC]">
//                   {stat.number}
//                 </p>
//                 <p className="text-xs md:text-sm font-medium text-black">
//                   {stat.label}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* CERTIFICATIONS */}
//       <div className="py-14 text-center">
//         <p className="mb-8 text-white/80">Certified and recognized by</p>
//         <div className="flex flex-wrap justify-center gap-6">
//           {certifications.map((item, index) => (
//             <div
//               key={index}
//               className="bg-white text-[#5E23DC] px-8 py-3 rounded-full font-medium shadow-sm"
//             >
//               ✓ {item}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
import React from "react";
import amcor from "../../assets/company/c1.png";
import amgen from "../../assets/company/c2.png";
import davita from "../../assets/company/c3.png";
import dover from "../../assets/company/c4.png";
import bxp from "../../assets/company/c5.png";
import aes from "../../assets/company/c6.png";
import capitalOne from "../../assets/company/c7.png";
import alliant from "../../assets/company/c7.png";
import person from "../../assets/company/person.png";
import handSheck from "../../assets/company/handsheck.png";
import user from "../../assets/company/user.png";
import building from "../../assets/company/building.png";
import like from "../../assets/company/like.png";
import { FaHandshake, FaBuilding, FaCity, FaStar } from "react-icons/fa";

const logos = [
  amcor,
  amgen,
  davita,
  dover,
  bxp,
  aes,
  capitalOne,
  alliant,
  amcor,
  amgen,
  davita,
  dover,
];

export default function TrustedSection() {
  return (
  <section className="bg-[#5E23DC] mx-auto text-white w-[90%] rounded-[48px] overflow-hidden">
  {/* Top Content */}
  <div className="max-w-7xl mx-auto px-4 sm:px-8 py-20">
    {/* Heading + Logos Row */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      {/* LEFT : Heading */}
      <div>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Trusted by Leading <br /> Organizations
        </h2>
        <p className="text-white/80 text-lg max-w-md">
          Join a network of industry leaders and innovators
        </p>
      </div>

      {/* RIGHT : Logos */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
        {logos.map((logo, i) => (
          <div
            key={i}
            className="
              w-full sm:w-[120px] md:w-[140px] h-[76px]
              rounded-[10px]
              bg-[linear-gradient(135deg,#ECFDF5_0%,#E5E7EB_100%)]
              flex items-center justify-center
            "
          >
            <img
              src={logo}
              alt="logo"
              className="w-[92px] h-[28px] object-contain"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(19%) sepia(83%) saturate(2636%) hue-rotate(252deg) brightness(92%) contrast(101%)",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Stats Bar */}
  <div className="bg-white py-14 relative z-0">
    {/* PERSON IMAGE – HIDE ON MOBILE */}
    <img
      src={person}
      alt="Happy Client"
      className="
        hidden md:block
        absolute -top-58 left-10
        w-130 z-10
      "
    />

    <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 ml-0 md:ml-[40%]">
      <Stat icon={handSheck} value="495+" label="Active Partners" />
      <Stat icon={building} value="44+" label="Enterprise Clients" />
      <Stat icon={user} value="18+" label="Cities Covered" />
      <Stat icon={like} value="4.1" label="Average Rating" />
    </div>
  </div>

  {/* Certifications */}
  <div className="py-14 text-center">
    <p className="text-white/80 mb-8">Certified and recognized by</p>
    <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
      {["ISO 9001:2015", "NSIC Certified", "MSME Registered", "Startup India"].map(
        (item, i) => (
          <div
            key={i}
            className="flex flex-row items-center gap-2 bg-white text-[#5E23DC] px-4 sm:px-6 py-2 sm:py-3 rounded-[14px] font-medium"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
            >
              <path
                d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 10.9849 17.306 11.9602 16.9291 12.8701C16.5522 13.7801 15.9997 14.6069 15.3033 15.3033C14.6069 15.9997 13.7801 16.5522 12.8701 16.9291C11.9602 17.306 10.9849 17.5 10 17.5C9.01509 17.5 8.03982 17.306 7.12987 16.9291C6.21993 16.5522 5.39314 15.9997 4.6967 15.3033C4.00026 14.6069 3.44781 13.7801 3.0709 12.8701C2.69399 11.9602 2.5 10.9849 2.5 10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5C11.9891 2.5 13.8968 3.29018 15.3033 4.6967C16.7098 6.10322 17.5 8.01088 17.5 10Z"
                stroke="#5E23DC"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span className="whitespace-nowrap text-black text-xs sm:text-sm">{item}</span>
          </div>
        )
      )}
    </div>
  </div>
</section>

  );
}


function Stat({ icon, value, label }) {
  return (
    <div className="flex items-center gap-4 justify-center w-full">
      <div className="p-3 bg-[#5E23DC] rounded-lg flex items-center justify-center text-xl">
        <img src={icon} alt={label} className="w-9 h-9" />
      </div>
      <div>
        <p className="text-3xl font-bold text-[#5E23DC]">{value}</p>
        <p className="text-[12px] opacity-80 whitespace-normal  text-black">{label}</p>
      </div>
    </div>
  );
}
