const Section = ({ className, children }) => {
  const classes =
    'tw-relative tw-px-4 sm:tw-px-8 md:tw-px-10 lg:tw-px-20 xl:tw-px-56 tw-py-16 tw-my-16';

  return <div className={`${classes} ${className}`}>{children}</div>;
};

export default Section;
