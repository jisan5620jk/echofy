/* eslint-disable react/prop-types */
const TestimonialCard = ({
  testiImg,
  testiRatingIcon,
  testiName,
  testIcon,
  testiDesignation,
  testiDesc,
}) => {
  return (
    <div className="relative rounded-md after:absolute after:top-[6px] after:rounded-md after:-left-0 after:rounded-es after:w-[99%] after:h-0 after:bg-PrimaryColor-0 after:-z-10 group after:transition-all after:duration-500 hover:after:h-full pl-[6px] hover:shadow-cases transition-all duration-500">
      <div className="px-4 sm:px-10 pt-8 pb-9 relative bg-[#002526] group rounded-md z-10 overflow-hidden before:absolute before:top-0 before:left-1/2 before:w-0 before:h-full before:bg-SecondaryColor-0 before:-z-10 before:rounded-md before:transition-all before:duration-500 hover:before:w-full group-hover:before:left-0 transition-all duration-500">
        <div className="flex flex-col lg:items-center lg:flex-row gap-[18px] lg:gap-4 xl:gap-[18px] pb-8">
          <div>
            <img src={testiImg} draggable="false" />
          </div>
          <div className="flex-1">
            <h5 className="font-AlbertSans font-semibold text-white text-[22px] mb-[6px]">
              {testiName}
            </h5>
            <p className="font-AlbertSans text-TextColor-0 transition-all duration-500 group-hover:text-white">
              <span className="text-[10px] text-PrimaryColor-0">
                {testIcon}
              </span>
              {testiDesignation}
            </p>
          </div>
        </div>
        <ul className="absolute top-8 right-4 sm:top-10 sm:right-10 lg:right-3 xl:right-10 rounded-full flex gap-2 py-3 bg-HeadingColor-0 transition-all duration-500 group-hover:bg-PrimaryColor-0 px-4 sm:px-[30px] lg:px-4 xl:px-[30px] justify-center items-center">
          <li className="text-white">{testiRatingIcon}</li>
          <li className="text-white">{testiRatingIcon}</li>
          <li className="text-white">{testiRatingIcon}</li>
          <li className="text-white">{testiRatingIcon}</li>
          <li className="text-white">{testiRatingIcon}</li>
        </ul>
        <p className="font-AlbertSans italic text-TextColor-0 transition-all duration-500 group-hover:text-white">
          {testiDesc}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
