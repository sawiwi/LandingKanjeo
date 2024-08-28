const TitleSection = ({
  title,
  subtitle,
  position = 'center',
  className = '',
  subTitleClassName = 'text-gray-800',
}) => {
  const titleClasses = `${className} font-bold text-3xl  xl:text-4xl text-secondary`;
  const subTitleClasses = `${subTitleClassName} font-normal mt-1 text-md md:text-lg lg:text-lg`;

  return (
    <div className={`w-full ${'text-' + position}`}>
      <h2 className={`${titleClasses}`}>{title}</h2>
      <p className={`${subTitleClasses}`}>{subtitle ? subtitle : null}</p>
    </div>
  );
};

export default TitleSection;
