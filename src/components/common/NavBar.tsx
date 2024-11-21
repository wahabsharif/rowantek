"use client";
import React, { useState, useEffect } from "react";
import { navBarData } from "@/data/navBarData";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import LogoLight from "@/assets/logos/LogoLight.png";
import LogoDark from "@/assets/logos/LogoDark.png";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

const NavBar: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <nav
      className={`${
        isClient ? "md:flex" : "hidden"
      } justify-between items-center py-1 px-5 transition-all duration-500 ease-in-out ${
        scrolling ? "w-[90%] rounded-full" : "w-full rounded-lg"
      } backdrop-blur-md hidden md:flex mx-auto bg-white/70 dark:bg-gray-950 text-gray-900 dark:text-white drop-shadow-md fixed top-2 left-1/2 transform -translate-x-1/2 z-50 max-w-screen-xl`}
    >
      {/* Left Side: Logo and Menu Items */}
      <div className="flex items-center space-x-8">
        <div className="navbar-left">
          <div className="hidden dark:block">
            <Image src={LogoDark} alt="Logo Dark" className="w-24" />
          </div>
          <div className="block dark:hidden">
            <Image src={LogoLight} alt="Logo Light" className="w-24" />
          </div>
        </div>

        <div className="relative flex space-x-6">
          {navBarData.map((item) => (
            <div
              key={item.id}
              className="relative group"
              onMouseEnter={() => {
                setHoveredItem(item.id);
                setOpenDropdown(item.children ? item.id : null);
              }}
              onMouseLeave={() => {
                setHoveredItem(null);
                setOpenDropdown(null);
              }}
            >
              <Link
                href={item.link}
                className="relative text-lg hover:text-blue-500 dark:hover:text-blue-300 transition-colors duration-200"
              >
                {item.label}
              </Link>

              {hoveredItem === item.id && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-[-3px] left-0 right-0 h-[2px] bg-blue-500 dark:bg-blue-300"
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  exit={{ opacity: 0, scaleX: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                />
              )}

              {item.children && (
                <AnimatePresence>
                  {openDropdown === item.id && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={dropdownVariants}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 w-80 backdrop-blur-md bg-white/70 dark:bg-gray-950 text-gray-900 dark:text-white drop-shadow-md rounded-md p-2 space-y-4"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.id}
                          href={child.link}
                          className="block text-md hover:text-blue-500 dark:hover:text-blue-300 transition-colors duration-200"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right Side: Buttons and Theme Toggle */}
      <div className="flex items-center space-x-4">
        <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-500 transition duration-200">
          Button 1
        </button>
        <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-500 transition duration-200">
          Button 2
        </button>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default NavBar;
