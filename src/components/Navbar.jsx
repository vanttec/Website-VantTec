import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";


const Navbar = ({ background, backgroundStyle }) => {
  const location = useLocation();
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [mobileCommunityOpen, setMobileCommunityOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const computedBgClass = scrolled
    ? "bg-[#B8CDE9]/20 backdrop-blur-md border-white/10 px-6"
    : "bg-[#B8CDE9]/10 backdrop-blur-sm border-white/5 px-6";

  const bgClass = background ?? computedBgClass;

  return (
    <nav
      className={`flex items-center py-3 fixed top-4 left-4 right-4 sm:left-8 sm:right-8 lg:left-12 lg:right-12 z-20 rounded-[30px] border transition-all duration-300 ${bgClass}`}
      style={backgroundStyle}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="h-14 w-auto object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            VantTEC
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${active === nav.title ? "text-white" : "text-white/70"} hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              {location.pathname === "/" ? (
                <ScrollLink to={nav.id} smooth={true} duration={500} offset={-70}>
                  {nav.title}
                </ScrollLink>
              ) : (
                <Link to={`/#${nav.id}`}>{nav.title}</Link>
              )}
            </li>
          ))}

          <li
            className={`${active === "Community" ? "text-white" : "text-white/70"} hover:text-white text-[18px] font-medium cursor-pointer flex items-center relative group`}
            onClick={() => setActive("Community")}
          >
            <div className="flex items-center">Community</div>
            <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all flex-col absolute top-full right-0 mt-2 min-w-[150px] bg-primary rounded-md shadow-lg z-50 p-2">
              <Link
                to="/cima"
                className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-white/10 rounded"
                onClick={() => setActive("Community")}
              >
                CIMA
              </Link>
              <Link
                to="/smalc"
                className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-white/10 rounded"
                onClick={() => setActive("Community")}
              >
                SMALC
              </Link>
            </div>
          </li>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-white/70"}`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  {location.pathname === "/" ? (
                    <ScrollLink to={nav.id} smooth={true} duration={500} offset={-70}>
                      {nav.title}
                    </ScrollLink>
                  ) : (
                    <Link to={`/#${nav.id}`}>{nav.title}</Link>
                  )}
                </li>
              ))}

              <li className={`font-poppins font-medium text-[16px] ${active === "Community" || location.pathname.startsWith("/cima") ? "text-white" : "text-white/70"}`}>
                <button
                  type="button"
                  className="w-full text-left flex items-center justify-between px-0 py-1"
                  onClick={() => {
                    setMobileCommunityOpen((v) => !v);
                    setActive("Community");
                  }}
                  aria-expanded={mobileCommunityOpen}
                >
                  <span className="block">Community</span>
                  <svg
                    className={`w-4 h-4 ml-2 transform transition-transform ${mobileCommunityOpen ? "rotate-180" : "rotate-0"}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div className={`${mobileCommunityOpen ? "flex" : "hidden"} flex-col mt-2 ml-2 space-y-1`}>
                  <Link
                    to="/cima"
                    className="block w-full text-sm text-white hover:bg-white/10 rounded px-3 py-2"
                    onClick={() => {
                      setToggle(false);
                      setMobileCommunityOpen(false);
                      setActive("Community");
                    }}
                  >
                    CIMA
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;