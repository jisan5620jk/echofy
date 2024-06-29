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
    <div className="px-5 sm:px-[30px] lg:px-4 xl:px-[30px] pt-10 bg-[#f5f8ed] relative group rounded-md z-10 overflow-hidden before:absolute before:top-0 before:left-1/2 before:w-0 before:h-full before:bg-SecondaryColor-0 before:-z-10 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 transition-all duration-500 hover:shadow-cases mb-7 lg:mb-0">
      <p className="font-AlbertSans text-base sm:text-lg md:text-base xl:text-lg text-TextColor-0 transition-all duration-500 group-hover:text-white">
        {testiDesc}
      </p>
      <div className="flex flex-col sm:flex-row sm:items-center gap-[18px] lg:gap-4 xl:gap-[18px] mt-6 pb-12">
        <div>
          <img src={testiImg} draggable="false" />
        </div>
        <div className="flex-1">
          <h5 className="font-AlbertSans font-semibold text-HeadingColor-0 transition-all duration-500 group-hover:text-white text-2xl mb-[6px]">
            {testiName}
          </h5>
          <p className="font-AlbertSans text-TextColor-0 transition-all duration-500 group-hover:text-white">
            <span className="text-[10px] text-PrimaryColor-0">{testIcon}</span>
            {testiDesignation}
          </p>
        </div>
      </div>
      <ul className="absolute bottom-0 right-0 rounded-ss-[30px] flex gap-2 py-[14px] bg-transparent transition-all duration-500 group-hover:bg-PrimaryColor-0 px-[30px] justify-center items-center">
        <li className="text-amber-400 flex transition-all duration-500 group-hover:text-white">
          {testiRatingIcon}
        </li>
        <li className="text-amber-400 flex transition-all duration-500 group-hover:text-white">
          {testiRatingIcon}
        </li>
        <li className="text-amber-400 flex transition-all duration-500 group-hover:text-white">
          {testiRatingIcon}
        </li>
        <li className="text-amber-400 flex transition-all duration-500 group-hover:text-white">
          {testiRatingIcon}
        </li>
        <li className="text-amber-400 flex transition-all duration-500 group-hover:text-white">
          {testiRatingIcon}
        </li>
      </ul>
    </div>
  );
};

export default TestimonialCard;
