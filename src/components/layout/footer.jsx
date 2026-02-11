import React, { useState, useEffect, useRef } from "react";
import footerLogo from "../../assets/footerLogo.svg";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

import playStoreLogo from "../../assets/playStore.png";
import { FaRegCopyright } from "react-icons/fa";

function Footer({ footerRef }) {
  return (
    <>
      <div ref={footerRef} className="w-full md:block hidden bg-[#5E23DC]">
        <div className="footer w-full max-w-[1380px] mx-auto md:flex flex-col gap-8 bg-[#5E23DC] text-white py-10 px-10">
          <div className="footerTop flex items-center justify-start ">
            <Link to="/">
              <img src={footerLogo} alt="" className="w-[180px]" />
            </Link>
          </div>

          <div className="footerBody w-full flex justify-between">
            <div className="leftBody flex flex-col gap-4 text-xl">
              <h3 className="text-2xl xl:text-3xl font-bold">Company</h3>
              <p className="cursor-pointer">
                <Link to="/">Home</Link>
              </p>
              <p className="cursor-pointer">
                <Link to="/blogs">Blogs</Link>
              </p>
              <p className="cursor-pointer">
                <Link to="/about-us">About Us</Link>
              </p>
              <p className="cursor-pointer">
                <Link to="/contact-us">Contact Us</Link>
              </p>
            </div>

            <div className="midBody flex flex-col gap-4 text-xl !text-White">
              <h3 className="text-2xl xl:text-3xl font-bold">
                Become a Professional
              </h3>
              <p
                className="cursor-pointer"
                onClick={() => {
                  window.open("https://partners.reparv.in/promoter", "_blank");
                }}
              >
                Promoter
              </p>
              <p
                className="cursor-pointer"
                onClick={() => {
                  window.open("https://partners.reparv.in", "_blank");
                }}
              >
                Project Partner
              </p>

              <p
                className="cursor-pointer"
                onClick={() => {
                  window.open(
                    "https://partners.reparv.in/sales-partner",
                    "_blank",
                  );
                }}
              >
                Sales Partner
              </p>

              <p
                className="cursor-pointer"
                onClick={() => {
                  window.open(
                    "https://partners.reparv.in/territory-partner",
                    "_blank",
                  );
                }}
              >
                Territory Partner
              </p>
            </div>

            <div className="midBody hidden lg:flex flex-col gap-4 text-xl !text-White">
              <h3 className="text-2xl xl:text-3xl font-bold">Download Link</h3>
              <p
                className="cursor-pointer"
                onClick={() => {
                  window.open(
                    "https://play.google.com/store/apps/details?id=com.reparvcustomer",
                    "_blank",
                  );
                }}
              >
                Customer
              </p>
              <p
                className="cursor-pointer"
                onClick={() => {
                  window.open(
                    "https://play.google.com/store/apps/details?id=com.reparvprojectpartner",
                    "_blank",
                  );
                }}
              >
                Project Partner
              </p>
              <p
                className="cursor-pointer"
                onClick={() => {
                  window.open(
                    "https://play.google.com/store/apps/details?id=com.reparvnewsalesapp",
                    "_blank",
                  );
                }}
              >
                Sales Partner
              </p>
              <p
                className="cursor-pointer"
                onClick={() => {
                  window.open(
                    "https://play.google.com/store/apps/details?id=com.newreparvterritory_app",
                    "_blank",
                  );
                }}
              >
                Territory Partner
              </p>
            </div>

            <div className="rightBody flex flex-col gap-7">
              <h3 className="text-2xl xl:text-3xl font-bold">Social Link</h3>
              <div className="socialLink flex gap-3 text-2xl">
                <Link
                  to="https://www.facebook.com/reparv/"
                  className="facebook flex items-center justify-center w-13 h-13 bg-[#ffffff28] rounded-full"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  to="https://www.linkedin.com/company/105339179"
                  className="linkedin flex items-center justify-center w-13 h-13 bg-[#ffffff28] rounded-full"
                >
                  <FaLinkedin />
                </Link>
                <Link
                  to="https://www.instagram.com/reparv_/"
                  className="twitter flex items-center justify-center w-13 h-13 bg-[#ffffff28] rounded-full"
                >
                  <FaInstagram />
                </Link>
                <Link
                  to="https://www.youtube.com/@reparv"
                  className="youtube flex items-center justify-center w-13 h-13 bg-[#ffffff28] rounded-full"
                >
                  <FaYoutube />
                </Link>
              </div>
            </div>
          </div>

          <hr className="w-full h-px bg-[#D1D5DC] border-0" />

          <div className="footerBottom text-sm text-[15px leading-6 flex items-center justify-center gap-4 md:gap-6 lg:gap-12 tracking-[0.6%] text-white ">
            <span className="flex text-[15px]  gap-1 items-center justify-center">
              <FaRegCopyright /> {new Date().getFullYear()} reparv.in All Rights
              Reserved
            </span>
            <Link to="/terms-and-conditions" className="cursor-pointer">
              Terms & Conditions
            </Link>
            <Link to="/privacy-policy" className="cursor-pointer">
              Privacy Policy
            </Link>
            <Link to="/cancellation-policy" className="cursor-pointer">
              Cancellation Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile footer */}
      <div className="footer md:hidden w-full flex flex-col items-center justify-start gap-4 bg-[#5E23DC] !text-white py-8 px-6 mb-[70px]">
        <div className="footerContainer w-full flex flex-col items-start justify-between py-2">
          <div className="footer flex items-center justify-start ">
            <Link to="/">
              <img src={footerLogo} alt="" className="w-[150px]" />
            </Link>
          </div>
        </div>

        <div className="rightBody w-full flex flex-col text-xs gap-3">
          <h3 className="text-2xl xl:text-3xl font-bold">Company</h3>
          <div className="flex flex-wrap gap-4 mb-5">
            <p className="cursor-pointer">
              <Link to="/">Home</Link>
            </p>
            |
            <p className="cursor-pointer">
              <Link to="/blogs">Blogs</Link>
            </p>
            |
            <p className="cursor-pointer">
              <Link to="/about-us">About Us</Link>
            </p>
            |
            <p className="cursor-pointer">
              <Link to="/contact-us">Contact Us</Link>
            </p>
          </div>

          <h3 className="text-2xl xl:text-3xl font-bold">
            Become a Professional
          </h3>
          <div className="flex flex-wrap gap-4 mb-5">
            <p
              className="cursor-pointer"
              onClick={() => {
                window.open("https://partners.reparv.in/promoter", "_blank");
              }}
            >
              Promoter
            </p>
            |
            <p
              className="cursor-pointer"
              onClick={() => {
                window.open("https://partners.reparv.in", "_blank");
              }}
            >
              Project Partner
            </p>
            |
            <p
              className="cursor-pointer"
              onClick={() => {
                window.open(
                  "https://partners.reparv.in/sales-partner",
                  "_blank",
                );
              }}
            >
              Sales Partner
            </p>
            |
            <p
              className="cursor-pointer"
              onClick={() => {
                window.open(
                  "https://partners.reparv.in/territory-partner",
                  "_blank",
                );
              }}
            >
              Territory Partner
            </p>
          </div>

          <h3 className="text-2xl xl:text-3xl font-bold">Download Link</h3>
          <div className="flex flex-wrap gap-4 mb-5">
            <p
              className="cursor-pointer"
              onClick={() => {
                window.open(
                  "https://play.google.com/store/apps/details?id=com.reparvcustomer",
                  "_blank",
                );
              }}
            >
              Customer
            </p>
            |
            <p
              className="cursor-pointer"
              onClick={() => {
                window.open(
                  "https://play.google.com/store/apps/details?id=com.reparvprojectpartner",
                  "_blank",
                );
              }}
            >
              Project Partner
            </p>
            |
            <p
              className="cursor-pointer"
              onClick={() => {
                window.open(
                  "https://play.google.com/store/apps/details?id=com.reparvnewsalesapp",
                  "_blank",
                );
              }}
            >
              Sales Partner
            </p>
            |
            <p
              className="cursor-pointer"
              onClick={() => {
                window.open(
                  "https://play.google.com/store/apps/details?id=com.newreparvterritory_app",
                  "_blank",
                );
              }}
            >
              Territory Partner
            </p>
          </div>

          <h3 className="text-2xl font-bold">Social Link</h3>
          <div className="socialLink flex gap-4 text-2xl">
            <Link
              to="https://www.facebook.com/reparv/"
              className="facebook flex items-center justify-center w-13 h-13 bg-[#ffffff28] rounded-full"
            >
              <FaFacebookF />
            </Link>
            <Link
              to="https://www.linkedin.com/company/105339179"
              className="linkedin flex items-center justify-center w-13 h-13 bg-[#ffffff28] rounded-full"
            >
              <FaLinkedin />
            </Link>
            <Link
              to="https://www.instagram.com/reparv_/"
              className="twitter flex items-center justify-center w-13 h-13 bg-[#ffffff28] rounded-full"
            >
              <FaInstagram />
            </Link>
            <Link
              to="https://www.youtube.com/@reparv"
              className="youtube flex items-center justify-center w-13 h-13 bg-[#ffffff28] rounded-full"
            >
              <FaYoutube />
            </Link>
          </div>
        </div>

        <hr className="w-full h-px bg-[#D1D5DC] border-0 mt-5" />

        <div className="footerBottom w-full text-xs sm:text-lg py-3 leading-6 flex flex-col items-center justify-center gap-4 md:gap-6 tracking-[0.6%] text-white ">
          <span className="flex gap-1 items-center justify-center">
            <FaRegCopyright /> {new Date().getFullYear()} reparv.in All Rights
            Reserved
          </span>
          <div className="flex text-[10px] w-full items-center justify-evenly">
            <Link to="/terms-and-conditions" className="cursor-pointer">
              Terms & Conditions
            </Link>
            <Link to="/privacy-policy" className="cursor-pointer">
              Privacy Policy
            </Link>
            <Link to="/cancellation-policy" className="cursor-pointer">
              Cancellation Policy
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
