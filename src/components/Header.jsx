import { useEffect, useRef, useState } from "react";
import { FaCaretDown, FaBars } from "react-icons/fa";
import { menu } from "../Utils/data";
import { Link } from "react-router-dom";
import { PATH } from "../Utils/constants";
import { icons } from "../Utils/icons";
import { motion } from "framer-motion";

const Header = ({ defaultBlack = false }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null); // for sublinks on mobile
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
    setOpenSubDropdown(null); // reset sub when changing parent
  };

  const toggleSubDropdown = (submenu) => {
    setOpenSubDropdown(openSubDropdown === submenu ? null : submenu);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
        setOpenDropdown(null);
        setOpenSubDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`site-header lg:border-b-0 sticky top-0 w-full z-50 text-white transition-all duration-300 ${isScrolled
          ? "bg-black/50 backdrop-blur-md shadow-md py-2"
          : defaultBlack
            ? "bg-black py-4"
            : "bg-transparent py-4"
        }`}
    >
      <motion.nav
        className="flex items-center justify-between max-w-full mx-auto lg:px-10 px-4 lg:py-2 py-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Logo */}
        <Link to={PATH.home}>
          <img
            alt="NeuIQ logo"
            className="md:h-16 md:w-auto h-10 w-auto object-contain"
            src={icons.newiq_logo_white}
          />
        </Link>

        {/* Desktop menu */}
        <div className="hidden lg:flex items-center xl:space-x-12 space-x-9">
          {menu.map(({ label, links, path }, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setOpenDropdown(label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {links ? (
                <>
                  <Link
                    to={path}
                    className="flex items-center justify-between text-center text-lg uppercase"
                  >
                    {label} <FaCaretDown className="ml-2" />
                  </Link>

                  {openDropdown === label && (
                    <div className="absolute left-0 mt-0 min-w-44 bg-white border rounded-md shadow-lg text-black">
                      {links.map(({ name, path, sublinks }, i) => (
                        <div key={i} className="relative group">
                          <Link
                            to={path}
                            className="block px-4 py-3 hover:font-bold transition-all duration-100 hover:bg-slate-100 whitespace-nowrap"
                          >
                            {name}
                          </Link>

                          {sublinks && (
                            <div className="absolute top-0 left-full min-w-52 bg-white border rounded-md shadow-lg text-black hidden group-hover:block z-50">
                              {sublinks.map((sublink, j) => (
                                <Link
                                  key={j}
                                  to={sublink.path}
                                  className="block px-4 py-3 hover:font-bold hover:bg-slate-100 whitespace-nowrap"
                                >
                                  {sublink.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link className="inline-block text-lg uppercase" to={path}>
                  {label}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Mobile hamburger */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            className="lg:hidden px-4 py-2 border rounded-md"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <FaBars />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t p-2 absolute top-full left-0 w-full z-50 text-black">
          {menu.map(({ label, links, path }, index) => (
            <div key={index} className="mb-2">
              {links ? (
                <>
                  <div className="flex items-center justify-between px-4 py-2 border rounded-md">
                    {/* Main link stays clickable */}
                    <Link
                      to={path}
                      className="flex-1 text-left"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {label}
                    </Link>

                    {/* Arrow toggler */}
                    <button
                      className="ml-2"
                      onClick={() => toggleDropdown(label)}
                    >
                      <FaCaretDown
                        className={`transition-transform duration-200 ${openDropdown === label ? "rotate-180" : ""
                          }`}
                      />
                    </button>
                  </div>

                  {openDropdown === label && (
                    <div className="mt-2 bg-gray-100 rounded-md">
                      {links.map(({ name, path, sublinks }, i) => (
                        <div key={i}>
                          {sublinks ? (
                            <>
                              <div className="flex items-center justify-between px-6 py-2">
                                {/* Make parent clickable */}
                                <Link
                                  to={path}
                                  className="flex-1 text-left"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {name}
                                </Link>

                                <button
                                  className="ml-2"
                                  onClick={() => toggleSubDropdown(name)}
                                >
                                  <FaCaretDown
                                    className={`transition-transform duration-200 ${openSubDropdown === name ? "rotate-180" : ""
                                      }`}
                                  />
                                </button>
                              </div>

                              {openSubDropdown === name && (
                                <div className="bg-gray-200">
                                  {sublinks.map((sublink, j) => (
                                    <Link
                                      key={j}
                                      className="block px-8 py-2"
                                      to={sublink.path}
                                      onClick={() => {
                                        setMobileMenuOpen(false);
                                        setOpenDropdown(null);
                                        setOpenSubDropdown(null);
                                      }}
                                    >
                                      {sublink.name}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </>
                          ) : (
                            <Link
                              to={path}
                              className="block px-6 py-2"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {name}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  className="block px-4 py-2 border rounded-md"
                  to={path}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </Link>
              )}

            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
