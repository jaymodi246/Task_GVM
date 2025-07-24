import React from 'react';
import iPhone from '../assets/iPhone.png';
import ellipses from '../assets/Ellipses.png';

const Header = () => {
  return (
    <header className="bg-white py-16 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between overflow-hidden relative">
      {/* Left Content */}
      <div className="md:w-1/2 text-center md:text-left z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
          Building apps just <br className="hidden md:block" /> got easier
        </h1>
        <p className="text-gray-600 text-base md:text-lg mb-8">
          Aliquam vel platea curabitur sit vestibulum egestas sit id lorem. Aliquet neque, dui sed eget scelerisque. 
          Non at at venenatis tortor amet feugiat ullamcorper in. Odio vulputate cras vel lacinia turpis volutpat 
          adipiscing. Sollicitudin at velit, blandit tempus nunc in.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium text-sm">
            Get Started
          </button>
          <button className="flex items-center gap-2 text-blue-600 hover:underline font-medium text-sm">
            <svg
              className="w-5 h-5 text-blue-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
            </svg>
            Watch Video
          </button>
        </div>
      </div>

      {/* Right Content */}
      <div className="md:w-1/2 flex justify-center items-center relative mt-10 md:mt-0 z-10">
        {/* Background Ellipses */}
         <img
          src={ellipses}
          alt="Ellipses background"
          className="absolute w-[350px] md:w-[450px] -z-10"
        />  
       <img
          src={iPhone}
          alt="iPhone Mockup"
          className="relative w-[200px] md:w-[250px]"
        />
       

        {/* iPhone Image */}
       
      </div>
    </header>
  );
};

export default Header;
