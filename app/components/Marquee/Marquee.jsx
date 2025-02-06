export default function MarqueeSlider() {
    return (
      <div className="bg-red-600 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {/* Marquee Content */}
          <div className="flex space-x-8">
            <p className="text-white text-sm md:text-base uppercase flex items-center">
              Auto Parts WooCommerce Theme
            </p>
            <span className="text-white text-xl">✶</span>
            <p className="text-white text-sm md:text-base uppercase flex items-center">
              Build with Drag & Drop Elementor Page Builder
            </p>
            <span className="text-white text-xl">✶</span>
            <p className="text-white text-sm md:text-base uppercase flex items-center">
              Qualified Auto Parts
            </p>
            <span className="text-white text-xl">✶</span>
            <p className="text-white text-sm md:text-base uppercase flex items-center">
              Flexible Theme Options
            </p>
            <span className="text-white text-xl">✶</span>
            <p className="text-white text-sm md:text-base uppercase flex items-center">
              Premium Features Included
            </p>
            <span className="text-white text-xl">✶</span>
            <p className="text-white text-sm md:text-base uppercase flex items-center">
              Modern Design Layouts
            </p>
          </div>
  
          {/* Duplicate Content for Continuous Scroll */}
          <div className="flex space-x-8">
            <p className="text-white text-sm md:text-base uppercase flex items-center">
              Auto Parts WooCommerce Theme
            </p>
            <span className="text-white text-xl">✶</span>
            <p className="text-white text-sm md:text-base uppercase flex items-center">
              Build with Drag & Drop Elementor Page Builder
            </p>
            <span className="text-white text-xl">✶</span>
            <p className="text-white text-sm md:text-base uppercase flex items-center">
              Qualified Auto Parts
            </p>
            <span className="text-white text-xl">✶</span>
            <p className="text-white text-sm md:text-base uppercase flex items-center">
              Flexible Theme Options
            </p>
            <span className="text-white text-xl">✶</span>
            <p className="text-white text-sm md:text-base uppercase flex items-center">
              Premium Features Included
            </p>
            <span className="text-white text-xl">✶</span>
            <p className="text-white text-sm md:text-base uppercase flex items-center">
              Modern Design Layouts
            </p>
          </div>
        </div>
      </div>
    );
  }
  