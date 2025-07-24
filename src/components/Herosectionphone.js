import React from 'react';
import Image1 from '../assets/phone.png'; // Ensure the path is correct

const HeroSectionphone = () => {
  return (
    <section
      className="py-12 px-4 md:px-8"
      style={{ backgroundColor: 'rgba(241, 245, 249, 1)' }} // Set exact RGBA
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1e2c3c] mb-6">
            Start now and get the <br /> best services
          </h1>
          <p className="text-gray-600 mb-6">
            Ac urna elementum purus vulputate tincidunt. Quam maecenas feugiat
            congue orci, eget tellus pellentesque aliquet. Felis fringilla morbi dui ac
            consequat risus pharetra odio pulvinar. Id pellentesque in tortor nec nulla
            cras sapien. Adipiscing nisi tellus quisque aliquet sit risus elementum
            scelerisque.
          </p>
          <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-md shadow hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>

        {/* Right Image Block */}
        <div className="relative w-full max-w-sm flex justify-center items-center">
          <div className="relative">
            <div className="flex justify-center md:justify-start">
              <img
                src={Image1}
                alt="Floating"
                className="w-[200px] h-[140px] sm:w-[220px] sm:h-[150px] object-cover "
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSectionphone;
