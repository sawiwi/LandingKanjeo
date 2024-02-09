import { useState } from 'react';

const Accordion = ({ question, answer }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => setIsExpanded(!isExpanded);

  return (
    <div
      id="accordion-color"
      data-accordion="collapse"
      data-active-classes="tw-bg-blue-100 tw-text-blue-600 tw-bg-red-500"
    >
      <h2 id="accordion-color-heading-1 tw-bg-red-500">
        <button
          type="button"
          onClick={toggleAccordion}
          className="tw-flex tw-bg-gray-50 tw-border-b tw-my-2 tw-w-[350px] sm:tw-w-[450px] md:tw-w-[700px] lg:tw-w-[850px] tw-items-center tw-justify-between tw-p-5 tw-font-medium tw-text-left tw-text-secondary-light tw-border tw-border-gray-200 tw-rounded-t-xl focus:tw-ring-4 focus:tw-ring-orange-100 hover:tw-bg-orange-50"
          data-accordion-target="#accordion-color-body-1"
          aria-expanded="true"
          aria-controls="accordion-color-body-1"
        >
          <span>{question}</span>
          <svg
            data-accordion-icon
            className={`tw-w-3 tw-h-3 tw-transition-transform tw-shrink-0 ${
              isExpanded ? 'tw-transform tw-rotate-180' : ''
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
            ? 'tw-w-[350px] sm:tw-w-[550px] md:tw-w-[700px] lg:tw-w-[850px]'
            : 'tw-hidden'
        }`}
        aria-labelledby="accordion-color-heading-1"
      >
        <div className="tw-p-5 tw-border tw-border-b tw-border-gray-200">
          <p className="tw-mb-2 tw-text-secondary-light">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
