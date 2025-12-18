import { Link } from "react-router-dom";
import reparvLogo from "../../assets/newFooterlogo.png";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0D1321] text-white pt-14 pb-10">
      <div className="max-w-[1350px] mx-auto px-6 md:px-8">
        
        {/* TOP FOOTER ROW */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          
          {/* LOGO + DESCRIPTION */}
          <div className="space-y-5">
            <img
              src={reparvLogo}
              alt="Reparv Logo"
              className="w-[140px] md:w-[160px]"
            />

            <p className="text-sm leading-6 text-white/70">
              Empowering businesses with innovative  
              <br /> solutions  
              <br /> and insights.
            </p>
          </div>
<div
  className="
    md:col-span-3
    grid
    grid-cols-2       /* mobile: 2 columns */
    sm:grid-cols-2    /* tablet: 2 columns */
    md:grid-cols-3    /* laptop: 3 columns */
    lg:grid-cols-3    /* large desktop: 3 columns */
    gap-8
  "
>


          {/* COMPANY */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white text-lg">Company</h3>
            <ul className="flex flex-col gap-3 text-white/70 text-sm">
              <li><Link to="https://www.reparv.in/about-us">About Us</Link></li>
             
              <li><Link to="https://www.reparv.in/properties">Properties</Link></li>
              <li><Link to="https://www.reparv.in/blogs">Blog</Link></li>
            </ul>
          </div>

          {/* RESOURCES */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white text-lg">Resources</h3>
            <ul className="flex flex-col gap-3 text-white/70 text-sm">
              <li><Link to="/">Documentation</Link></li>
              <li><Link to="/">Help Center</Link></li>
              <li><Link to="/">Community</Link></li>
              <li><Link to="https://www.reparv.in/contact-us">Contact Us</Link></li>
            </ul>
          </div>

          {/* LEGAL */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white text-lg">Legal</h3>
            <ul className="flex flex-col gap-3 text-white/70 text-sm">
              <li><Link to="https://partners.reparv.in/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="https://partners.reparv.in/terms-and-conditions">Terms of Service</Link></li>
              <li><Link to="https://partners.reparv.in/cancellation-policy">Cancellation Policy</Link></li>
              <li><Link to="/disclaimer">Disclaimer</Link></li>
            </ul>
          </div>
</div>
        </div>

        {/* BOTTOM ROW */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 gap-5">
          <p className="text-white/60 text-sm">
            © 2025 Reparv. All rights reserved.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/reparv/" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 cursor-pointer">
              <FaFacebookF className="text-white text-sm" />
            </a>
            <a href="https://www.linkedin.com/company/105339179" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 cursor-pointer">
              <FaLinkedinIn className="text-white text-sm" />
            </a>
            <a href="https://www.instagram.com/reparv.official/" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 cursor-pointer">
              <FaInstagram className="text-white text-sm" />
            </a>
            <a href="https://www.youtube.com/@reparv" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 cursor-pointer">
              <FaYoutube className="text-white text-sm" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
