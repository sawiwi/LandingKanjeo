const Section = ({ className, children, id }) => {
  const classes =
    'tw-relative tw-px-4 sm:tw-px-8 md:tw-px-10 lg:tw-px-20 xl:tw-px-56 tw-py-16 lg:tw-py-12 xl:tw-py-8 tw-my-16 lg:tw-my-8 xl:tw-my-6';

  return <section id={id} className={`${classes} ${className}`}>{children}</section>;
};

export default Section;
