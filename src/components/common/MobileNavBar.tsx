"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { navBarData } from "@/data/navBarData";
import ThemeToggle from "./ThemeToggle";
import LogoLight from "@/assets/logos/LogoLight.png";
import LogoDark from "@/assets/logos/LogoDark.png";
import { IoIosArrowDropupCircle } from "react-icons/io";
import Link from "next/link";

const MobileNavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openParents, setOpenParents] = useState<Record<number, boolean>>({});
  const [isMounted, setIsMounted] = useState(false);

  // Set mounted to true when the component is mounted on the client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleNav = () => setIsOpen(!isOpen);

  const toggleParent = (id: number) => {
    setOpenParents((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Avoid rendering until mounted on client to prevent hydration mismatch
  if (!isMounted) {
    return null; // Or a loading spinner, etc.
  }

  return (
    <div className="fixed top-2 left-0 w-full justify-between items-center py-1 px-4 rounded-xl backdrop-blur-md bg-white/70 dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300 drop-shadow-md z-50 md:hidden">
      <div className="flex justify-between items-center">
        {/* Left-side toggle button */}
        <button className="text-xl focus:outline-none" onClick={toggleNav}>
          ☰
        </button>

        {/* Center logo */}
        <Link href="/">
          <div className="hidden dark:block">
            <Image src={LogoDark} alt="Logo Dark" className="w-14" priority />
          </div>
          <div className="block dark:hidden">
            <Image src={LogoLight} alt="Logo Light" className="w-14" priority />
          </div>
        </Link>

        {/* Right-side buttons */}
        <div className="flex space-x-4">
          <ThemeToggle />
        </div>
      </div>

      {/* Animated navigation drawer */}
      <motion.div
        className="fixed inset-0 h-screen w-screen rounded-xl backdrop-blur-md bg-white/70 dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300 z-40"
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
        transition={{ duration: 0.7 }}
      >
        <button
          className="absolute top-3 right-5 font-bold text-xl"
          onClick={toggleNav}
        >
          ✕
        </button>

        {/* Drawer Content with Scroller */}
        <div className="mt-10 h-full overflow-y-auto p-4">
          <ul className="space-y-4">
            {navBarData.map((item) => (
              <li key={item.id}>
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleParent(item.id)}
                >
                  <Link href={item.link} className="block text-lg">
                    {item.label}
                  </Link>
                  {item.children && (
                    <motion.div
                      animate={{
                        rotate: openParents[item.id] ? 180 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <IoIosArrowDropupCircle size={24} />
                    </motion.div>
                  )}
                </div>

                {item.children && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: openParents[item.id] ? 1 : 0,
                      height: openParents[item.id] ? "auto" : 0,
                    }}
                    transition={{ duration: 0.4 }}
                    className="mt-2 pl-4 space-y-3 overflow-hidden"
                  >
                    {item.children.map((child) => (
                      <li key={child.id}>
                        <Link href={child.link} className="block text-sm">
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default MobileNavBar;
