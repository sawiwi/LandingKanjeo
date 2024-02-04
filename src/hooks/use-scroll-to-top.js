import { useState, useEffect } from 'react';

export const useScrollToTop = () => {
  const [stick, setStick] = useState(false);

  const onClickHandler = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  useEffect(() => {
    const scrollHandler = () => {
      const scrollPos = window.pageYOffset;
      scrollPos > 300 ? setStick(true) : setStick(false);
    };
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [stick]);

  return { stick, onClickHandler };
};
