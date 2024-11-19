// NavBar.tsx
import React from "react";
import { navBarData } from "@/data/navBarData";
import Image from "next/image";
import LogoLight from "@/assets/logos/LogoLight.png";
import LogoDark from "@/assets/logos/LogoDark.png";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

const NavBar: React.FC = () => {
  return (
    <nav className="hidden md:flex justify-between items-center py-1 px-5 rounded-xl backdrop-blur-md bg-white/70 dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300 drop-shadow-md">
      {/* Left Side: Logo and Menu Items */}
      <div className="flex items-center space-x-8">
        {/* Logo */}
        <div className="navbar-left">
          <div className="hidden dark:block">
            <Image src={LogoDark} alt="Logo Dark" className="w-24" />
          </div>
          <div className="block dark:hidden">
            <Image src={LogoLight} alt="Logo Light" className="w-24" />
          </div>
        </div>

        {/* Menu Items */}
        <div className="flex space-x-6">
          {navBarData.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="text-lg hover:text-blue-500 dark:hover:text-blue-300 transition-colors duration-200"
            >
              {item.label}
            </Link>
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
