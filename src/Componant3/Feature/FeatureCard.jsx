/* eslint-disable react/prop-types */

const FeatureCard = ({featureShape, featureIcon, featureTitle, featureDesc }) => {
  return (
    <div className="group flex flex-col sm:flex-row lg:flex-col xl:flex-row lg:items-start xl:items-center sm:items-center gap-5 overflow-hidden bg-[#f7f7f7] px-[30px] lg:px-6 xl:px-[30px] py-8 rounded relative z-10 before:absolute before:bottom-0 before:right-0 before:w-0 before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:-z-10 hover:before:left-0 hover:before:w-full">
      <img
        src={featureShape}
        draggable="false"
        className="absolute bottom-0 right-0 -z-10"
      />
      <div className="w-[76px] h-[76px] rounded-full flex justify-center items-center overflow-hidden bg-PrimaryColor-0 relative z-10 before:absolute before:bottom-0 before:right-0 before:w-full before:h-full before:bg-white before:scale-0 before:transition-all before:duration-500 before:-z-10 group-hover:before:scale-100">
        <img
          src={featureIcon}
          className="brightness-0 invert-[1] transition-all duration-500 group-hover:brightness-1 group-hover:invert-[inherit]"
        />
      </div>
      <div className="flex-1">
        <h5 className="font-AlbertSans font-semibold text-xl md:text-lg lg:text-xl text-HeadingColor-0 transition-all duration-500 group-hover:text-white">
          {featureTitle}
        </h5>
        <p className="font-AlbertSans text-TextColor-0 transition-all duration-500 group-hover:text-white mt-[6px]">
          {featureDesc}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
