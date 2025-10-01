import { Link } from "react-router-dom";
import { icons } from "../Utils/icons";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { PATH } from "../Utils/constants";
import { useEffect, useState } from "react";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    setShowButton(winScroll > 400);
  };

  const toggleModal = () => setIsOpen(!isOpen);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
   <footer className="lg:border-t-0 border-t relative bg-[#000] text-white">
  <div className="max-w-full mx-auto lg:px-10 py-10 p-2">
    {/* 4x4 Grid Layout */}
    <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-2 gap-10">
      {/* WHAT WE DO */}
      <div>
        <h4 className="uppercase font-bold text-lg sm:mb-2 mb-2">
          <Link to={PATH.home} className="font-bold">What We Do</Link>
        </h4>
        <ul className="sub-menu-footer">
          <li className="capitalize text-base mb-1">
            <Link to={PATH.advisory}>Advisory</Link>
          </li>
          <li className="capitalize text-base mb-1">
            <Link to={PATH.dataEngineering}>Data Engineering</Link>
          </li>
          <li className="capitalize text-base mb-1">
            <Link to={PATH.TechServices}>Tech Services</Link>
          </li>
        </ul>
      </div>

      {/* Advisory */}
      <div>
        <h4 className="uppercase font-bold text-lg sm:mb-2 mb-2">
          <Link className="font-bold" to={PATH.advisory}>
            Advisory
          </Link>
        </h4>
        <ul className="sub-menu-footer">
          <li className="capitalize text-base mb-1">
            <Link to={PATH.Aireadiness}>AI Readiness</Link>
          </li>
          <li className="capitalize text-base mb-1">
            <Link to={PATH.AdvisoryData}>Data</Link>
          </li>
          <li className="capitalize text-base mb-1">
            <Link to={PATH.AdvisoryCustomerExperience}>Customer Experience</Link>
          </li>
          <li className="capitalize text-base mb-1">
            <Link to={PATH.AdvisoryUserExperience}>User Experience</Link>
          </li>
        </ul>
      </div>

      {/* Data Engineering */}
      <div>
        <h4 className="uppercase font-bold text-lg sm:mb-2 mb-2">
          <Link className="font-bold" to={PATH.dataEngineering}>
            Data Engineering
          </Link>
        </h4>
        <ul className="sub-menu-footer">
          <li className="capitalize text-base mb-1">
            <Link to={PATH.DataUnification}>Data Unification</Link>
          </li>
          <li className="capitalize text-base mb-1">
            <Link to={PATH.DataModernization}>Data Modernization</Link>
          </li>
          <li className="capitalize text-base mb-1">
            <Link to={PATH.DataforAI}>Data for AI</Link>
          </li>
          <li className="capitalize text-base mb-1">
            <Link to={PATH.DatatoInsights}>Data to Insights</Link>
          </li>
        </ul>
      </div>

      {/* Company */}
      <div>
        <h4 className="uppercase font-bold text-lg sm:mb-2 mb-2">Company</h4>
        <ul className="sub-menu-footer">
          <li className="capitalize text-base mb-1">
            <Link to={PATH.aboutus}>About NeuIQ</Link>
          </li>
          <li className="capitalize text-base mb-1">
            <Link to={PATH.NewsRoom}>Newsroom</Link>
          </li>
        </ul>
      </div>

      {/* Partnerships */}
      <div>
        <h4 className="uppercase font-bold text-lg sm:mb-2 mb-2">Partnerships</h4>
        <ul className="sub-menu-footer">
          <li className="capitalize text-base mb-1">
            <Link to={PATH.QualtricsXmService}>Qualtrics</Link>
          </li>
        </ul>
      </div>

      {/* Careers */}
      <div>
        <h4 className="uppercase font-bold text-lg sm:mb-2 mb-2">
          <Link to={PATH.Careers} className="font-bold">Careers</Link>
        </h4>
        <ul className="sub-menu-footer">
          <li className="text-base">
            <a href="mailto:joinus@neuiq.ai" className="text-[#a5a5a5] hover:underline">
              joinus@neuiq.ai
            </a>
          </li>
        </ul>
      </div>

      {/* Contact Us */}
     <div>
  <h4 className="uppercase font-bold text-lg sm:mb-2 mb-2">
    <Link to="/contactus" className="font-bold">CONTACT US</Link>
  </h4>

  <div className="mb-2">
    <a href="mailto:info@neuiq.ai" className="text-base text-[#a5a5a5] hover:underline">
      info@neuiq.ai
    </a>
  </div>

  <div className="mb-2">
    <a href="tel:+12246164024" className="text-base text-[#a5a5a5] hover:underline">
      +1 224-616-4024
    </a>
  </div>

  <div className="flex items-center gap-2 text-3xl mt-2">
    <Link to="https://www.instagram.com/lifeatneuiq/" target="_blank">
      <FaInstagram />
    </Link>
    <Link to="https://www.linkedin.com/company/neuiqai/" target="_blank">
      <FaLinkedin />
    </Link>
  </div>
</div>


      {/* Certification */}
      <div>
        <h4 className="uppercase font-bold text-lg md:whitespace-nowrap">
          Certification & Affiliations
        </h4>
        <div className="sm:size-16 size-14 mt-2">
          <img src={icons.isoCertificate} alt="isoCertificate" />
        </div>
      </div>
    </div>
  </div>

  {/* Bottom Footer */}
  <div className="bottom-footer border-t border-white">
    <div className="max-w-full mx-auto flex flex-col sm:flex-row justify-between items-center px-4 py-4 text-sm">
      {/* Left Links */}
      <div className="flex flex-wrap gap-4 mb-2 sm:mb-0">
        <Link to="/privacy-policy" className="hover:underline text-[#a5a5a5]">Privacy Policy</Link>
        <Link to="/cookie-policy" className="hover:underline text-[#a5a5a5]">Cookie Policy</Link>
        <Link to="/terms-and-conditions" className="hover:underline text-[#a5a5a5]">GDPR Policy</Link>
      </div>

      {/* Right - Copyright */}
      <div className="text-xs text-center sm:text-right text-[#a5a5a5]">
        © 2025 NeuIQ. All Rights Reserved
      </div>
    </div>
  </div>

  {/* Scroll to Top Button */}
  {showButton && (
    <div
      onClick={() => window.scrollTo(0, 0)}
      className="fixed bottom-10 right-6 w-9 h-9 rounded-md cursor-pointer z-10"
      style={{
        background: "#00CACF",
      }}>
      <img src={icons.chevronup} alt="chevron" />
    </div>
  )}
</footer>

  );
};

export default Footer;
