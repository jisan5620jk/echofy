/* eslint-disable react/prop-types */

const FeatureCard = ({featureShape, featureIcon, featureTitle, featureDesc }) => {
  return (
    <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row lg:items-start xl:items-center sm:items-center gap-7 overflow-hidden bg-[#f7f7f7] px-9 py-8 rounded relative z-10 before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-1 before:bg-PrimaryColor-0 before:transition-all before:duration-500 hover:before:left-0 hover:before:w-full">
      <img src={featureShape} draggable className="absolute bottom-0 right-0 -z-10"/>
      <div>
        <img src={featureIcon} />
      </div>
      <div className="flex-1">
        <h5 className="font-AlbertSans font-semibold text-xl text-HeadingColor-0">
          {featureTitle}
        </h5>
        <p className="font-AlbertSans text-TextColor-0">{featureDesc}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
