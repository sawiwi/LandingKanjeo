import { useState } from 'react';

const Accordion = ({ question, answer }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => setIsExpanded(!isExpanded);

  return (
    <div
      id="accordion-color"
      data-accordion="collapse"
      data-active-classes="bg-blue-100 text-blue-600 bg-red-500"
    >
      <h2 id="accordion-color-heading-1 bg-red-500">
        <button
          type="button"
          onClick={toggleAccordion}
          className="flex bg-gray-50 border-b my-2 w-[350px] sm:w-[450px] md:w-[700px] lg:w-[850px] items-center justify-between p-5 font-medium text-left text-secondary-light border border-gray-200 rounded-t-xl focus:ring-4 focus:ring-orange-100 hover:bg-orange-50"
          data-accordion-target="#accordion-color-body-1"
          aria-expanded="true"
          aria-controls="accordion-color-body-1"
        >
          <span>{question}</span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 transition-transform shrink-0 ${
              isExpanded ? 'transform rotate-180' : ''
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-color-body-1"
        className={`${
          isExpanded
            ? 'w-[350px] sm:w-[550px] md:w-[700px] lg:w-[850px]'
            : 'hidden'
        }`}
        aria-labelledby="accordion-color-heading-1"
      >
        <div className="p-5 border border-b border-gray-200">
          <p className="mb-2 text-secondary-light">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
