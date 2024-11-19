"use client";

import { FaMoon } from "react-icons/fa";
import { LuSunMedium } from "react-icons/lu";

import { useState, useEffect } from "react";

const ThemeToggle = () => {
  // Theme state (light or dark)
  const [theme, setTheme] = useState("light");

  // Toggle between light and dark mode
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  // Check and apply saved theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-xl focus:outline-none bg-gray-200 dark:bg-gray-700"
    >
      {theme === "light" ? <LuSunMedium size={24} /> : <FaMoon size={24} />}
    </button>
  );
};

export default ThemeToggle;
