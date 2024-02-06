const TitleSection = ({
  title,
  subtitle,
  position = 'center',
  className = '',
  subTitleClassName = 'tw-text-secondary-light',
}) => {
  const titleClasses = `${className} tw-font-bold tw-text-xl md:tw-text-2xl lg:tw-text-3xl tw-text-secondary`;
  const subTitleClasses = `${subTitleClassName} tw-font-normal tw-mt-1 tw-text-md md:tw-text-lg lg:tw-text-lg`;

  return (
    <div className={`tw-w-full ${'tw-text-' + position}`}>
      <h2 className={`${titleClasses}`}>{title}</h2>
      <p className={`${subTitleClasses}`}>{subtitle ? subtitle : null}</p>
    </div>
  );
};

export default TitleSection;
