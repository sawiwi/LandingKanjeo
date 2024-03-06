const TitleSection = ({
  title,
  subtitle,
  position = 'center',
  className = '',
  subTitleClassName = 'tw-text-gray-800',
}) => {
  const titleClasses = `${className} tw-font-bold tw-text-3xl  xl:tw-text-4xl tw-text-secondary`;
  const subTitleClasses = `${subTitleClassName} tw-font-normal tw-mt-1 tw-text-md md:tw-text-lg lg:tw-text-lg`;

  return (
    <div className={`tw-w-full ${'tw-text-' + position}`}>
      <h2 className={`${titleClasses}`}>{title}</h2>
      <p className={`${subTitleClasses}`}>{subtitle ? subtitle : null}</p>
    </div>
  );
};

export default TitleSection;
