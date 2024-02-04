import { useLayoutEffect } from 'react';
import Error404 from '../components/404/404';
import Section from '../components/section';
const NotFound = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Section>
      <Error404 />
    </Section>
  );
};

export default NotFound;
