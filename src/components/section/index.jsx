const Section = ({ className, children, id }) => {
  const classes =
    'relative px-4 sm:px-8 md:px-10 lg:px-20 xl:px-56 py-16 lg:py-12 xl:py-8 my-16 lg:my-8 xl:my-6';

  return <section id={id} className={`${classes} ${className}`}>{children}</section>;
};

export default Section;
