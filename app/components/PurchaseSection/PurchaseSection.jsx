import React from "react";
import Marquee from "react-fast-marquee";

const SectionWithMarquee = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gray-900 text-white py-10 px-5 md:px-20 overflow-hidden">
      {/* Left Side: Content */}
      <div className="w-full md:w-1/2 md:pr-10">
        <h1 className="text-4xl font-bold mb-5">
          Build High-Converting WooCommerce Sites With AutParts
        </h1>
        <ul className="list-none space-y-3">
          <li className="flex items-center">
            <span className="mr-3 text-xl">✅</span>
            <span>Drag and Drop Editor</span>
          </li>
          <li className="flex items-center">
            <span className="mr-3 text-xl">✅</span>
            <span>No Code Required</span>
          </li>
          <li className="flex items-center">
            <span className="mr-3 text-xl">✅</span>
            <span>Easy To Customize</span>
          </li>
        </ul>
        <button className="mt-8 bg-red-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-700 transition-all">
          Purchase Now
        </button>
      </div>

      {/* Right Side: Marquee Slider */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0">
        <Marquee gradient={false} speed={50} direction="up" className="rounded-lg overflow-hidden h-96">
          <img
            src="/images/Purchase/11.png" // Replace with your image path
            alt="Marquee Image"
            className="w-full h-auto object-cover"
          />
        </Marquee>
      </div>
    </div>
  );
};

export default SectionWithMarquee;