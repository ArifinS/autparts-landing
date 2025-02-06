"use client";

import Image from "next/image";
import './innerpage.scss';

export default function MarqueeShowcase() {
  const images = [
    "/images/inner-pages/1.png",
    "/images/inner-pages/2.png",
    "/images/inner-pages/3.png",
    "/images/inner-pages/4.png",
    "/images/inner-pages/5.png",
    "/images/inner-pages/6.png",
    "/images/inner-pages/7.png",
    "/images/inner-pages/8.png",
    "/images/inner-pages/8.png",
  ];

  return (
    <section className="innerpage-section relative min-h-screen w-full overflow-hidden  py-40">
      {/* Center Content */}
      <div className="center-content">
        <span className="sub-title bg-gradient-to-r from-red-700 to-red-500">in-built Inner Pages</span>
        <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          Choose From Many Stunning <br /> Inner Pages, Ready To Use
        </h2>
        <button className="button-inner-page px-7 py-3 bg-gradient-to-r from-red-700 to-red-500 hover:bg-red-700 text-white font-medium rounded-lg transition-colors text-md">
          Explore Demos
        </button>
      </div>

      {/* Marquee Container */}
      <div className="marquee-container">
        {/* Left Column */}
        <div className="marquee-column">
          <div className="animate-marquee-up">
            {images.map((src, index) => (
              <div key={`left-${index}`} className="mb-4">
                <Image
                  src={src || "/placeholder.svg"}
                  alt="Inner page preview"
                  width={600}
                  height={500}
                  className="mb-10"
                />
              </div>
            ))}
            {/* Duplicate images for seamless looping */}
            {images.map((src, index) => (
              <div key={`left-duplicate-${index}`} className="mb-4">
                <Image
                  src={src || "/placeholder.svg"}
                  alt="Inner page preview"
                  width={600}
                  height={500}
                  className="mb-10"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Middle Column */}
        <div className="marquee-column">
          <div className="animate-marquee-down">
            {images.map((src, index) => (
              <div key={`middle-${index}`} className="mb-4">
                <Image
                  src={src || "/placeholder.svg"}
                  alt="Inner page preview"
                  width={600}
                  height={450}
                  className="mb-10"
                />
              </div>
            ))}
            {/* Duplicate images for seamless looping */}
            {images.map((src, index) => (
              <div key={`middle-duplicate-${index}`} className="mb-4">
                <Image
                  src={src || "/placeholder.svg"}
                  alt="Inner page preview"
                  width={600}
                  height={450}
                  className="mb-10"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="marquee-column">
          <div className="animate-marquee-up">
            {images.map((src, index) => (
              <div key={`right-${index}`} className="mb-4">
                <Image
                  src={src || "/placeholder.svg"}
                  alt="Inner page preview"
                  width={600}
                  height={500}
                  className="mb-10"
                />
              </div>
            ))}
            {/* Duplicate images for seamless looping */}
            {images.map((src, index) => (
              <div key={`right-duplicate-${index}`} className="mb-4">
                <Image
                  src={src || "/placeholder.svg"}
                  alt="Inner page preview"
                  width={600}
                  height={500}
                  className="mb-10"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}