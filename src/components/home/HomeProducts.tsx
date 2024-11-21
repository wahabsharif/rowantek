"use client";

import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

import { products } from "@/data/homeData";

// Slider settings
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

function HomeProducts() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="p-4">
            {/* Motion div to apply animation */}
            <motion.div
              className="bg-white/70 dark:bg-gray-950 text-gray-900 dark:text-white drop-shadow-md rounded-lg overflow-hidden relative"
              whileHover={{ scale: 1.05 }} // Zoom in on hover
              transition={{ type: "spring", stiffness: 300 }} // Smooth zoom transition
            >
              <Image
                src={product.imgSrc}
                alt={`Product ${product.id}`}
                className="w-full h-64 object-cover rounded-t-lg relative z-10"
                width={1000}
                height={1000}
              />
              <div className="p-4 relative z-20">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {product.title}
                </h3>
                {/* Description with line-clamp */}
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 line-clamp-4">
                  {product.description}
                </p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700 transition duration-200">
                  Read More
                </button>
              </div>
            </motion.div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HomeProducts;
