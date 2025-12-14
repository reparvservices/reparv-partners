import React from "react";
import mobileAppImage from "../../assets/company/mobile.png"; // your uploaded image
import { AiOutlineLineChart, AiOutlineWallet } from "react-icons/ai";
import ios from "../../assets/company/apple.png";
import android from "../../assets/company/android.png";

const MobileAppSection = () => {
  return (
    <section className="relative mt-[-140px] bg-[#5E23DC] text-white py-16 px-4 md:px-12 lg:px-24 flex flex-col items-center">
     <span className="bg-white text-[#5E23DC] text-xs px-3 py-1 rounded-full mb-4 animate-[fadeUp_0.8s_ease-out_forwards]">
  Mobile App
</span>

<h2 className="text-3xl md:text-4xl font-bold text-center mb-4 animate-[fadeUp_0.8s_ease-out_forwards] [animation-delay:150ms]">
  Manage Everything On The Go
</h2>

<p className="text-center text-sm md:text-base mb-12 max-w-2xl animate-[fadeUp_0.8s_ease-out_forwards] [animation-delay:300ms]">
  Our mobile app puts complete control in your hands with powerful features designed for partners.
</p>


      {/* Main content */}
      <div className="relative flex flex-col md:flex-row items-center md:justify-center w-full space-y-12 md:space-y-0">
        {/* Left Features */}
    <div className="flex flex-col lg:space-y-24 md:space-y-12 space-y-12 md:mr-8 md:text-left text-center
  animate-[pulseSoft_2.5s_ease-in-out_infinite]">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-3 md:space-y-0 md:space-x-3">
            <div className="bg-white p-3 rounded-lg
  transition-all duration-300
  hover:scale-110 hover:rotate-3">

              {/* SVG icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#5E23DC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M9 12L11 14L15 10" stroke="#5E23DC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </svg>
            </div>
            <div>
              <p className="font-semibold">Easy Project Management</p>
              <p className="text-sm text-white/80">Track all your projects in one intuitive dashboard</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start space-y-3 md:space-y-0 md:space-x-3">
            <div className="bg-white p-3 rounded-lg
  transition-all duration-300
  hover:scale-110 hover:rotate-3">

              {/* SVG icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M10.2681 21C10.4436 21.304 10.6961 21.5565 11.0001 21.732C11.3041 21.9075 11.649 21.9999 12.0001 21.9999C12.3511 21.9999 12.696 21.9075 13 21.732C13.3041 21.5565 13.5565 21.304 13.7321 21" stroke="#5E23DC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M3.26176 15.326C3.13112 15.4692 3.04491 15.6472 3.01361 15.8385C2.98231 16.0298 3.00728 16.226 3.08546 16.4034C3.16365 16.5807 3.29169 16.7316 3.45401 16.8375C3.61633 16.9434 3.80594 16.9999 3.99976 17H19.9998C20.1936 17.0001 20.3832 16.9438 20.5456 16.8381C20.708 16.7324 20.8363 16.5817 20.9146 16.4045C20.993 16.2273 21.0182 16.0311 20.9872 15.8398C20.9561 15.6485 20.8702 15.4703 20.7398 15.327C19.4098 13.956 17.9998 12.499 17.9998 8C17.9998 6.4087 17.3676 4.88258 16.2424 3.75736C15.1172 2.63214 13.5911 2 11.9998 2C10.4085 2 8.88234 2.63214 7.75712 3.75736C6.6319 4.88258 5.99976 6.4087 5.99976 8C5.99976 12.499 4.58876 13.956 3.26176 15.326Z" stroke="#5E23DC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </svg>
            </div>
            <div>
              <p className="font-semibold">Real-time Notifications</p>
              <p className="text-sm text-white/80">Never miss an opportunity with instant alerts</p>
            </div>
          </div>
        </div>

        {/* Center Mobile Image */}
       
          <div className="relative animate-[float_4s_ease-in-out_infinite]">
  <img
    src={mobileAppImage}
    alt="Mobile App"
    className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] mx-auto relative z-10"
  />


          {/* Growth Badge */}
        <div className="absolute -left-12 bottom-[220px] md:bottom-[250px]
  bg-white z-20 text-[#5E23DC] px-4 py-2 rounded-[16px] shadow-lg
  animate-[pulseSoft_2.5s_ease-in-out_infinite]
  hover:-translate-y-1 transition">
         <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-[#DBEAFE] rounded-full flex items-center justify-center">
                <AiOutlineLineChart size={20} />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-[12px] font-normal text-[#6A7282]">Growth</span>
                <span className="text-[16px] font-bold text-[#5E23DC]">+24%</span>
              </div>
            </div>
          </div>

          {/* Earned Badge */}
          <div className="absolute -right-12 bottom-[90px] md:bottom-[120px] z-20 bg-white text-[#5E23DC] px-4 py-2 rounded-[16px] flex flex-col items-start shadow-lg">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-[#DBEAFE] rounded-full flex items-center justify-center">
                <AiOutlineWallet size={20} />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-[12px] font-normal text-[#6A7282]">Earned</span>
                <span className="text-[16px] font-bold text-[#5E23DC]">₹2.4L</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Features */} 
        <div className="flex flex-col lg:space-y-24  animate-[pulseSoft_2.5s_ease-in-out_infinite] md:space-y-12 space-y-12 md:ml-8 md:text-left text-center
  animate-[fadeRight_0.8s_ease-out_forwards]">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-3 md:space-y-0 md:space-x-3">
            <div className="bg-white p-3 rounded-lg
  transition-all duration-300
  hover:scale-110 hover:rotate-3">

              {/* SVG icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M3 3V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H21" stroke="#5E23DC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M18 17V9" stroke="#5E23DC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M13 17V5" stroke="#5E23DC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M8 17V14" stroke="#5E23DC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </svg>
            </div>
            <div>
              <p className="font-semibold">Analytics & Insights</p>
              <p className="text-sm text-white/80">Data-driven insights to grow your business</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start space-y-3 md:space-y-0 md:space-x-3">
            <div className="bg-white p-3 rounded-lg
  transition-all duration-300
  hover:scale-110 hover:rotate-3">

              {/* SVG icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M19 7V4C19 3.73478 18.8946 3.48043 18.7071 3.29289C18.5196 3.10536 18.2652 3 18 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5C3 5.53043 3.21071 6.03914 3.58579 6.41421C3.96086 6.78929 4.46957 7 5 7H20C20.2652 7 20.5196 7.10536 20.7071 7.29289C20.8946 7.48043 21 7.73478 21 8V12M21 12H18C17.4696 12 16.9609 12.2107 16.5858 12.5858C16.2107 12.9609 16 13.4696 16 14C16 14.5304 16.2107 15.0391 16.5858 15.4142C16.9609 15.7893 17.4696 16 18 16H21C21.2652 16 21.5196 15.8946 21.7071 15.7071C21.8946 15.5196 22 15.2652 22 15V13C22 12.7348 21.8946 12.4804 21.7071 12.2929C21.5196 12.1054 21.2652 12 21 12Z" stroke="#5E23DC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H20C20.2652 21 20.5196 20.8946 20.7071 20.7071C20.8946 20.5196 21 20.2652 21 20V16" stroke="#5E23DC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </svg>
            </div>
            <div>
              <p className="font-semibold">Seamless Payments</p>
              <p className="text-sm text-white/80">Fast and secure payment processing</p>
            </div>
          </div>
        </div>

         </div>

      {/* Download Buttons */}
      <div className="flex gap-6 mt-12 flex-wrap justify-center">
       <img
  src={ios}
  alt="App Store"
  className="h-12 cursor-pointer transition-transform duration-300 hover:scale-110 active:scale-95"
/>

        <a href="https://play.google.com/store/apps/details?id=com.reparvprojectpartner" target="_blank" rel="noopener noreferrer" className="h-12 cursor-pointer transition-transform duration-300 hover:scale-110 active:scale-95"
>
          <img src={android} alt="Google Play" className="h-12 cursor-pointer" />
        </a>
      </div>
    </section>
  );
};

export default MobileAppSection;
