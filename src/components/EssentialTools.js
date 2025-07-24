import React from 'react';
import phoneMockup from '../assets/Col.png'; // ✅ adjust path as needed

const EssentialToolsPage = () => {
  return (
    <div className="bg-white w-full px-6 py-16 space-y-16">
      {/* SECTION 1: Header */}
      <div className="max-w-5xl mx-auto text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          All the essential tools
        </h2>
        <p className="text-gray-600 text-base max-w-2xl mx-auto">
          Odio vulputate cras vel lacinia turpis volutpat adipiscing. Sollicitudin at velit, blandit tempus nunc in.
        </p>
      </div>

      {/* SECTION 2: Image + Text */}
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
        {/* Phone Image */}
        <div className="flex justify-center w-full lg:w-1/2">
          <img
            src={phoneMockup}
            alt="Phone UI"
            className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-[400px]"
          />
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-left space-y-8">
          {/* Main Block */}
          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="font-semibold text-gray-900 mb-1">Sem augue tempus</h3>
            <p className="text-gray-600 text-sm">
              Venenatis blandit habitasse nunc, sapien enim elit in. Arcu, pharetra, et cursus sit senectus in blandit.
              Aliquet enim fermentum non semper nibh ut neque. Pellentesque ut tincidunt vitae arcu bibendum malesuada
              lorem sapien volutpat.
            </p>
          </div>

          {/* Item 1 */}
          <div className="flex items-start">
            <div className="h-4 w-[2px] bg-blue-200 mr-3 mt-1 rounded-full"></div>
            <p className="font-semibold text-sm text-gray-900">Habitant integer interdum a</p>
          </div>

          {/* Item 2 */}
          <div className="flex items-start">
            <div className="h-4 w-[2px] bg-blue-200 mr-3 mt-1 rounded-full"></div>
            <p className="font-semibold text-sm text-gray-900">Tempus natoque id</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EssentialToolsPage;
