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

  // computed background class (default behavior)
  const computedBgClass = scrolled ? "bg-primary" : "bg-transparent";
  // allow consumer to override background via `background` (class string) or `backgroundStyle` (inline style)
  const bgClass = background ?? computedBgClass;

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${bgClass}`}
      style={backgroundStyle}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-15 h-10 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            VantTEC &nbsp;
            <span className="sm:block hidden"> | Navigating the future</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              {location.pathname === "/" ? (
                <ScrollLink
                  to={nav.id}
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  {nav.title}
                </ScrollLink>
              ) : (
                <Link to={`/#${nav.id}`}>{nav.title}</Link> // Redirect to home with the section hash
              )}
            </li>
          ))}

          {/* dropdown */}
          <li
            className={`${active === "Community"
                ? "text-white"
                : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer flex items-center relative group`}
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
            className={`${!toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"
                    }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  {location.pathname === "/" ? (
                    <ScrollLink
                      to={nav.id}
                      smooth={true}
                      duration={500}
                      offset={-70}
                    >
                      {nav.title}
                    </ScrollLink>
                  ) : (
                    <Link to={`/#${nav.id}`}>{nav.title}</Link>
                  )}
                </li>
              ))}

              {/* Community link (mobile) */}
              <li
                className={`font-poppins font-medium cursor-pointer text-[16px] ${active === "Community" || location.pathname.startsWith("/cima")
                    ? "text-white"
                    : "text-secondary"
                  }`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive("Community");
                }}
              >
                <Link to="/smalc" className="block w-full">Community</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
