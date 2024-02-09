import { useLayoutEffect } from 'react';
import Accordion from '../components/accordion';
import '../assets/css/components/scroll-bar/scroll-bar.css';

const Faq = () => {
  const faqData = [
    {
      id: 1,
      title: 'Sobre administrar mi cartera ',
      questions: [
        {
          id: 1,
          question: 'Como solicitar un plan 1?',
          answer: 'Para solicitar un plan...',
        },
        {
          id: 2,
          question: 'Como solicitar un plan 2?',
          answer: 'Para solicitar un plan...',
        },
        {
          id: 3,
          question: 'Como solicitar un plan 1?',
          answer: 'Para solicitar un plan...',
        },
        {
          id: 4,
          question: 'Como solicitar un plan 2?',
          answer: 'Para solicitar un plan...',
        },
        {
          id: 5,
          question: 'Como solicitar un plan 1?',
          answer: 'Para solicitar un plan...',
        },
        {
          id: 6,
          question: 'Como solicitar un plan 2?',
          answer: 'Para solicitar un plan...',
        },
      ],
    },
    {
      id: 2,
      title: 'Sobre sistema canje en YoKanjeo',
      questions: [
        {
          id: 1,
          question: 'Como solicitar un plan 3?',
          answer: 'Para solicitar un plan...',
        },
        {
          id: 2,
          question: 'Como solicitar un plan 4?',
          answer: 'Para solicitar un plan...',
        },
        {
          id: 3,
          question: 'Como solicitar un plan 4?',
          answer: 'Para solicitar un plan...',
        },
        {
          id: 4,
          question: 'Como solicitar un plan 4?',
          answer: 'Para solicitar un plan...',
        },
      ],
    },
    {
      id: 3,
      title: 'Sobre los servicios externos',
      questions: [
        {
          id: 1,
          question: 'Como solicitar un plan 3?',
          answer: 'Para solicitar un plan...',
        },
        {
          id: 2,
          question: 'Como solicitar un plan 4?',
          answer: 'Para solicitar un plan...',
        },
        {
          id: 3,
          question: 'Como solicitar un plan 4?',
          answer: 'Para solicitar un plan...',
        },
        {
          id: 4,
          question: 'Como solicitar un plan 4?',
          answer: 'Para solicitar un plan...',
        },
      ],
    },
  ];

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="tw-container tw-mt-[120px] md:tw-mt-[140px] tw-w-full tw-flex-col tw-mx-auto tw-h-screen tw-max-h-screen tw-flex tw-justify-center tw-items-center">
      {faqData.map((item) => (
        <>
          <h2 key={item.id} className="tw-text-xl md:tw-text-2xl tw-text-secondary">
            {item.title}
          </h2>
        <div
          
          className="tw-my-5 tw-h-[600px] tw-overflow-y-scroll scrollbar"
        >
          {item.questions.map((q) => (
            <Accordion key={q.id} question={q.question} answer={q.answer} />
          ))}
        </div></>

      ))}
    </div>
  );
};

export default Faq;
