import React, { useState } from 'react';

const qnaData = [
  {
    question: "Enim sodales consequat adipiscing facilisis massa venenatis, non lorem lobortis?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet consequat..."
  },
  {
    question: "Venenatis nulla sagittis nunc, lobortis nec sollicitudin neque, dolor?",
    answer: "Donec sed odio dui. Nulla vitae elit libero, a pharetra augue."
  },
  {
    question: "Varius ultricies molestie tellus fermentum, viverra ipsum scelerisque etiam lorem?",
    answer: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    question: "Nulla etiam vitae, at sagittis, nibh ultrices mattis feugiat faucibus?",
    answer: "Aenean lacinia bibendum nulla sed consectetur. Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
  },
  {
    question: "Sagittis consectetur gravida nec turpis eros, id sit et, dictum?",
    answer: "Curabitur blandit tempus porttitor. Maecenas sed diam eget risus varius blandit sit amet non magna."
  }
];

const QnaSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#1e2c3c]">
          Answers to your questions
        </h2>

        <div className="divide-y divide-gray-200">
          {qnaData.map((item, index) => (
            <div key={index}>
              <button
                onClick={() => toggleIndex(index)}
                className="flex justify-between items-center w-full py-4 text-left text-blue-600 font-medium hover:bg-blue-50 px-1 md:px-2 transition"
              >
                <span className="text-base md:text-lg">{item.question}</span>
                <svg
                  className={`w-5 h-5 transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {openIndex === index && (
                <div className="py-2 px-1 md:px-2 text-sm text-gray-600">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QnaSection;
