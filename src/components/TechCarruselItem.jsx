import React from "react";
import { motion } from "framer-motion";

const TechCarruselItem = ({ images, from, to }) => {
  return (
    <div className="relative flex overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent z-10" />
      <motion.div
        initial={{ x: from }}
        animate={{ x: to }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {images.map((image, index) => (
          <img
            className="h-16 w-28 pr-4 grayscale transition-all duration-500 hover:grayscale-0"
            src={image}
            alt={`Carrusel item ${index}`}
            key={index}
          />
        ))}
      </motion.div>

      <motion.div
        initial={{ x: from }}
        animate={{ x: to }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {images.map((image, index) => (
          <img
            className="h-16 w-28 pr-4 grayscale transition-all duration-500 hover:grayscale-0"
            src={image}
            alt={`Carrusel item ${index}`}
            key={index}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default TechCarruselItem;
