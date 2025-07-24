import React from 'react';

const features = [
  {
    title: 'Fermentum amet',
    description:
      'Pellentesque quis tincidunt sit sed. Tortor massa sed habitant dignissim senectus purus. Consectetur integer id in et pulvinar interdum id.',
    color: 'red',
    border: 'border-red-400',
    bg: 'bg-red-500',
  },
  {
    title: 'Dignissim quam',
    description:
      'Quam sed neque vitae viverra purus venenatis ac non. Eget sed nunc, amet, nibh nulla. Morbi sed risus ullamcorper diam, elit ut non.',
    color: 'yellow',
    border: 'border-yellow-400',
    bg: 'bg-yellow-500',
  },
  {
    title: 'Risus morbi',
    description:
      'Euismod sed pellentesque ut elementum. Accumsan gravida turpis ac at. Ullamcorper vitae non est elit odio at augue consequat.',
    color: 'blue',
    border: 'border-blue-400',
    bg: 'bg-blue-600',
  },
];

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className={`rounded-full p-6 border-4 ${feature.border} ${feature.bg} text-white`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 8v10a2 2 0 002 2h12a2 2 0 002-2V8m-18 0l1.5-4h13L20 8"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-sm text-gray-600 max-w-xs">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
