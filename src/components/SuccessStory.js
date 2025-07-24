import React from 'react';
import personImage from '../assets/Col (1).png'; // Make sure the path is correct

const SuccessStories = () => {
  return (
    <section className="py-10 px-4 md:px-8" style={{ backgroundColor: 'rgba(241, 245, 249, 1)' }}>
        {/* <section
      className="py-12 px-4 md:px-8"
      style={{ backgroundColor: 'rgba(241, 245, 249, 1)' }} // Set exact RGBA
    ></section> */}
      <div className="max-w-6xl mx-auto relative flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">

        {/* Left Arrow */}
        <button className="absolute left-2 top-1/2 -translate-y-1/2 text-[#49576d] hover:text-blue-600 transition md:-left-10 z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 md:w-8 md:h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Image Section */}
        <div className="relative">
          <img
            src={personImage}
            alt="Person"
            className="w-[240px] sm:w-[280px] md:w-[340px] rounded-xl "
          />
          <div className="absolute top-3 right-3 w-[90px] h-[70px] sm:w-[110px] sm:h-[80px] border-2 border-dashed border-red-400 bg-white rounded-md shadow p-1">
            {/* Optional overlay */}
          </div>
        </div>

        {/* Text Section */}
        <div className="max-w-xl text-left px-2">
          <h3 className="text-sm uppercase tracking-wider font-semibold text-[#7c8ba1] mb-3">
            Success Stories
          </h3>
          <p className="text-[#1e2c3c] text-base sm:text-lg leading-relaxed mb-4">
            <span className="text-yellow-500 text-2xl font-bold">“</span>
            Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis phasellus ut. At vel erat ultricies commodo. Neque suspendisse a habitasse commodo.
            <span className="text-red-500 text-2xl font-bold">”</span>
          </p>
          <p className="text-[#1e2c3c] font-semibold text-sm">Marie Poirot,</p>
          <p className="text-[#1e2c3c] text-sm font-bold">Bigapp</p>

          {/* Dots */}
          <div className="flex items-center space-x-2 mt-6">
            <div className="w-4 h-1.5 bg-blue-600 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          </div>
        </div>

        {/* Right Arrow */}
        <button className="absolute right-2 top-1/2 -translate-y-1/2 text-[#49576d] hover:text-blue-600 transition md:-right-10 z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 md:w-8 md:h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
      </div>
    </section>
  );
};

export default SuccessStories;
