"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Download, RefreshCw, Layout } from 'lucide-react';
import './Hero.scss'

const HeroSection = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const features = [
    {
      icon: <Layout className="w-8 h-8" />,
      title: "High Quality Pre-Built Demos",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "No Coding Skills Required",
    },
    {
      icon: <Download className="w-8 h-8" />,
      title: "One Click Demo Import",
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "Consistent and Dependable Updates",
    }
  ];

  return (
    <div className="hero-section bg-gray-900 min-h-screen text-white pt-40">
      <div className="container mx-auto px-4 py-16 hero-content">
        <motion.div 
          className="text-center"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <img
            src="/images/Hero/icon.svg"
            alt="Car Parts Theme Demo"
            className="rounded-lg shadow-2xl"
            />
            <p className="text-xl font-bold text-gray-300"><span className='font-normal'>Build by</span> Power Elite Author</p>
          </div>
          
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4 text-white "
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            All in All Car & Vehicle Parts
            <br />
            WooCommerce Theme
          </motion.h1>
          
          <motion.p 
            className="text-[#A5A5AC] max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Autoparts is the ultimate choice for your new website. Your search ends here—get your 
            copy today and join thousands of satisfied customers!
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, stagger: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-center text-start p-6 rounded-lg justify-center gap-4"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="mb-4 text-gray-300 rounded-full border border-gray-500 p-4">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-[16px] text-[#DFDFDF]">{feature.title}</h3>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="relative hero-image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <img
            src="/images/Hero/heroscreen.png"
            alt="Car Parts Theme Demo"
            className="rounded-lg shadow-2xl image "
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;