"use client";
import React from 'react';
import styles from './ThemeCoreSection.module.scss';
import { motion } from "framer-motion";

const Features = ( { title, spanText, description}) => {
  return (
    <div className={styles.container}>
        <div className="text-center mb-12">
        <span className="text-red-500 font-bold mb-4 bg-[#FFEDED] p-2 pl-4 pr-4 text-sm rounded-2xl">
            {spanText}
          </span>
          <h2 className="text-4xl  max-w-4xl capitalize mx-auto font-bold mb-4 mt-4 text-black">{title}</h2>
          <p className="text-[#51515A] max-w-2xl mx-auto">{description}</p>
        </div>

      <div className={styles.grid}>
        {/* Shop Builder Card - Large left column */}
        <div className={`${styles.card} ${styles['shop-builder']}`}>
        <img className='mb-6' src="/images/themecore/logo.svg" alt="Shop Builder icon" />
          <h3 className='card-title text-black font-medium'>Most Powerful <span className='font-bold'>ShopBuilder</span> WooCommerce Plugin</h3>
          <p className='mb-6 text-[#51515A]'>Enhance Elementor’s functionality with ShopBuilder’s  
          <span className='font-bold text-black text-base ml-2'>100+ widgets and 18+ modules</span> and design WooCommerce 
          stores that attract customers!</p>
          <img width={455} src="/images/themecore/1.png" alt="Shop Builder Demo" />
        </div>

        {/* Elementor Card */}
        <div className={`${styles.card} ${styles.elementor}`}>
          <h3 className='card-title text-black font-medium'><span className='font-bold'>Drag & Drop Elementor</span> Page Builder</h3>
          <img width={409} className='relative bottom-[-20px]' src="/images/themecore/2.png" alt="Elementor Demo" />
        </div>

        {/* Install Card */}
        <div className={`${styles.card} ${styles.install}`}>
          <h3 className='card-title text-black font-medium'>Effortlessly <span className='font-bold'>install starter</span> websites with just <span className='font-bold'>one click.</span></h3>
          <img width={340} className='relative bottom-[-3px]' src="/images/themecore/3.png" alt="One Click Install" />
        </div>

        {/* Speed Card */}
        <div className={`${styles.card} ${styles.speed}`}>
          <h3 className='card-title text-black font-medium'>Optimized <br /><span className='font-bold'>For Fast Loading</span></h3>
          <div className={styles.speedMeter}>
            <motion.img
              className="absolute right-[0px] top-[70px]"
              src="/images/themecore/logo4.svg"
              alt="Rocket"
              width={120}
              height={120}
              initial={{ y: 0 }} // Start at its position
              animate={{
                y: [-10, 0, -10], // Small up and down movement (floating effect)
                rotate: [0, 2, -2, 0], // Slight tilt for realism
              }}
              transition={{
                y: { repeat: Infinity, repeatType: "reverse", duration: 1.5, ease: "easeInOut" },
                rotate: { repeat: Infinity, repeatType: "mirror", duration: 0.5 },
              }}
            />
          <img width={255}  src="/images/themecore/4.png" alt="Elementor Demo" />
          </div>
        </div>

        <div className={`${styles.card} ${styles.responsive}`}>
          <h3 className='card-title text-black font-bold'>Fully Responsive Design</h3>
          <p>Mobile-Responsive WordPress Themes</p>
          <img width={255} className='relative left-[50px]'  src="/images/themecore/5.png" alt="Elementor Demo" />
        </div>

        {/* Header Footer Card - Tall left column */}
        <div className={`${styles.card} ${styles['header-footer']}`}>
          <h3 className='card-title text-black font-bold'>Multiple Header  <br />& Footer Style</h3>
          <div className={styles['header-variants']}>
            <img width={390} height={300} src="/images/themecore/6.png" alt="Header Style 1" />
          </div>
        </div>
        
        <div className={`${styles.card} ${styles['header-footerr']}`}>
          <h3 className='card-title text-black font-medium pt-6 pl-8'>A Powerful Theme <br />
       <span className='font-bold '>   Options Customizer</span></h3>
          <p className='mb-10 pl-8 text-black'>Customize Font, Color & many more things </p>
          <div className={styles["header-variants"]}>
            {/* Rotating Logo */}
            <motion.img
              className="absolute right-[20px] top-[130px] rounded-full"
              src="/images/themecore/logo3.svg"
              alt="Rotating Logo"
              width={100} // Adjust size as needed
              height={100}
              animate={{ rotate: 360 }} // Full rotation
              transition={{ repeat: Infinity, duration: 5, ease: "linear" }} // Infinite loop
            />

            {/* Static Image */}
            <img className='relative' width={470} src="/images/themecore/7.png" alt="Header Style 1" />
          </div>

        </div>
        {/* Widgets Card - Wide middle section */}
        <div className={`${styles.card} ${styles.widgets}`}>
        <h3 className="card-title text-black font-bold pl-8">30+ Elementor Widgets</h3>
        <p className='pl-8 mb-6'>Discover A Vast Collection Of 30+ Design Elements To Build Your Dream Website.</p>

        <div className={styles['marquee-container']}>
          {/* Top Row - Left to Right */}
          <div className={`${styles['widget-tags']} ${styles['marquee-left-to-right']}`}>
            <span>Heading</span>
            <span>Content Slider</span>
            <span>Button Style</span>
            <span>Mouse </span>
          </div>

          {/* Middle Row - Right to Left */}
          <div className={`${styles['widget-tags']} ${styles['marquee-right-to-left']}`}>
            <span>Contact info</span>
            <span>ajax search</span>
            <span>Mouse allax</span>
            <span>Mouse </span>
          </div>

          {/* Bottom Row - Right to Left */}
          <div className={`${styles['widget-tags']} ${styles['marquee-left-to-right']}`}>
            <span>Mouse Parallax</span>
            <span>Footer</span>
            <span>Info Box</span>
            <span>Mouse </span>
          </div>
    </div>
  </div>




        {/* Updates Card - Wide bottom section */}
        <div className={`${styles.card} ${styles.updates}`}>
          <div className={styles['update-content']}>
            <div>
            <img className='relative left-[-26px]' src="/images/themecore/logo2.svg" alt="Header Style 1" />
              <h3 className='card-title text-black font-bold'>Free Lifetime Updates</h3>
              <p>Enjoy Lifetime Reliable Updates With Innovative Features, Performance Improvements, And Issue Resolutions.</p>
            </div>
          </div>
        </div>
        
        
      </div>
    </div>
  );
};

export default Features;