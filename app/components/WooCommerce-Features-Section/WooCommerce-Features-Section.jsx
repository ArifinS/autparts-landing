"use client";
import React from "react";
import '../../Data/FeaturesData';
import './FeatureCard.scss';

const FeaturesSection = ({ features ,  title, spanText, description}) => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
        <span className="text-red-500 font-bold mb-4 bg-[#FFEDED] p-2 pl-4 pr-4 text-sm rounded-2xl">
            {spanText}
          </span>
          <h2 className="text-4xl  max-w-4xl capitalize mx-auto font-bold mb-4 mt-4 text-black">{title}</h2>
          <p className="text-[#51515A] max-w-2xl mx-auto">{description}</p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="feature-card bg-white max-h-64 overflow-hidden rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
                  <h3 className="font-bold text-lg text-center mb-6 text-black">{feature.title}</h3>
              <div className="h-40 rounded-lg mb-4  flex items-center justify-center">
                <img
                  src={feature.image}
                  alt={feature.title}
                  width={feature.imageWidth}
                  height={feature.imageHeight}
                  className="auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button
            className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors"
            aria-label="Explore More Features"
          >
            Many More Features
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
