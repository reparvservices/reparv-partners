import React, { useState } from "react";
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
import PartnerRegistrationModal from "../ProjectPartnerUpdated/PartnerRegistrationModal";
import { Link } from "react-router-dom";

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
  const [openModal, setOpenModal] = useState(false);
  return (
    <section className="bg-[#5E23DC] mx-auto text-white w-[100%] lg:w-[90%] lg:rounded-[48px] overflow-hidden">
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
              <Link
                key={i}
                to="/newpartner/joinPartner"
                className="
    w-full
    sm:w-[120px]
    md:w-[140px]
    h-[64px]
    sm:h-[72px]
    md:h-[76px]
    rounded-[10px]
    bg-[linear-gradient(135deg,#ECFDF5_0%,#E5E7EB_100%)]
    flex items-center justify-center
    transition
    hover:scale-[1.03]
    hover:shadow-md
    active:scale-95
  "
              >
                <img
                  src={logo}
                  alt="logo"
                  className="
      w-[80px]
      sm:w-[88px]
      md:w-[92px]
      h-auto
      object-contain
    "
                  style={{
                    filter:
                      "brightness(0) saturate(100%) invert(19%) sepia(83%) saturate(2636%) hue-rotate(252deg) brightness(92%) contrast(101%)",
                  }}
                />
              </Link>
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

        <div className="max-w-5xl mx-auto px-2  grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 ml-0 md:ml-[40%]">
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
          {[
            "ISO 9001:2015",
            "NSIC Certified",
            "MSME Registered",
            "Startup India",
          ].map((item, i) => (
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

              <span className="whitespace-nowrap text-black text-xs sm:text-sm">
                {item}
              </span>
            </div>
          ))}
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
        <p className="text-[12px] opacity-80 whitespace-normal  text-black">
          {label}
        </p>
      </div>
    </div>
  );
}
