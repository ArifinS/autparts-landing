"use client";
import React from "react";
import { motion } from "framer-motion";
import { CircleCheckBig } from "lucide-react";
import "./pre-build.scss";

const PreBuiltHomes = ({ title, spanText, description }) => {
  const homes = [
    { id: "home-01", image: "/images/Pre-build/5.png", title: "Home-01" },
    { id: "home-02", image: "/images/Pre-build/1.png", title: "Home-02" },
    { id: "home-03", image: "/images/Pre-build/2.png", title: "Home-03" },
    { id: "home-04", image: "/images/Pre-build/3.png", title: "Home-04" },
    { id: "home-05", image: "/images/Pre-build/4.png", title: "Home-05" },
  ];

  const features = [
    { icon: <CircleCheckBig className="w-5 h-5" />, text: "Drag and Drop Editor" },
    { icon: <CircleCheckBig className="w-5 h-5" />, text: "No Code Required" },
    { icon: <CircleCheckBig className="w-5 h-5" />, text: "Easy To Customize" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="Pre-build-section bg-white py-16 px-4 sm:px-6 lg:px-8 pt-40 pb-40">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <span className="text-red-500 font-bold mb-4 bg-[#FFEDED] p-2 pl-4 pr-4 text-sm rounded-2xl">
            {spanText}
          </span>
          <h2 className="text-4xl font-bold mb-4 mt-4 text-black">{title}</h2>
          <p className="text-[#51515A] max-w-2xl mx-auto">{description}</p>

          <div className="flex flex-wrap justify-center gap-8 mt-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="text-red-500">{feature.icon}</div>
                <span className="text-gray-800 font-bold text-lg">{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Homes Grid Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {homes.map((home) => (
            <motion.div
              key={home.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className=""
            >
              <div className="relative prebuild-bg overflow-hidden rounded-lg p-9">
                <img
                  src={home.image}
                  alt={home.title}
                  className="w-full h-auto transform transition-transform duration-300"
                />
              </div>
              <h3 className="text-start mt-4 text-lg font-bold text-black">
                {home.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PreBuiltHomes;
