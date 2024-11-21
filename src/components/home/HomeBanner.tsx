"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { banner } from "@/data/homeData";
import Image from "next/image";
import { useRouter } from "next/navigation";

const HomeBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banner.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + banner.length) % banner.length
    );
  };

  const handleExplore = () => {
    router.push("/");
  };

  useEffect(() => {
    const autoSlide = setInterval(handleNext, 5000);

    return () => clearInterval(autoSlide);
  }, []);

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(to right, #006A4E 0%, #1B4D3E 100%)",
      }}
    >
      {/* AnimatePresence enables exit animations */}
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          className="absolute inset-0"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "98%",
            width: "98%",
            filter: "blur(10px)",
          }}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={banner[currentIndex].imageUrl}
            alt="Banner Image"
            fill
            style={{ objectFit: "cover" }}
            quality={100}
            priority
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full px-8">
        {/* Left Side: Text */}
        <div className="w-full md:w-1/2 text-center md:text-left md:mt-10">
          <motion.h1
            className="text-3xl md:text-5xl font-bold text-white md:mt-10"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {banner[currentIndex].heading}
          </motion.h1>
          <motion.p
            className="text-lg text-white mt-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            {banner[currentIndex].paragraph}
          </motion.p>
          <motion.button
            className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            onClick={handleExplore}
          >
            Explore More
          </motion.button>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Image
              key={currentIndex}
              src={banner[currentIndex].imageUrl}
              alt="Banner Image"
              width={500}
              height={500}
              className="w-full md:w-72"
              priority
            />
          </motion.div>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="absolute top-1/2 left-4 z-20">
        <button
          onClick={handlePrev}
          className="bg-gray-800 text-white p-3 rounded-full"
        >
          <MdKeyboardDoubleArrowLeft />
        </button>
      </div>
      <div className="absolute top-1/2 right-4 z-20">
        <button
          onClick={handleNext}
          className="bg-gray-800 text-white p-3 rounded-full"
        >
          <MdKeyboardDoubleArrowRight />
        </button>
      </div>
    </section>
  );
};

export default HomeBanner;
