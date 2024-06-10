/* eslint-disable react/prop-types */
const TestimonialCard = ({
  testiImg,
  testiRatingIcon,
  testiName,
  testiDesignation,
  testiDesc,
  testiShape,
}) => {
  return (
    <div className="px-5 sm:px-10 lg:px-4 xl:px-10 pt-12 bg-[#f5f8ed] relative bg-SecondaryColor-0 group rounded-xl z-10 overflow-hidden before:absolute before:top-0 before:left-1/2 before:w-0 before:h-full before:bg-PrimaryColor-0 before:-z-10 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0">
      <div className="flex flex-col md:flex-row gap-8 lg:gap-4 xl:gap-8">
        <div>
          <img src={testiImg} />
        </div>
        <div className="flex-1">
          <ul className="flex gap-[6px] items-center pb-6">
            <li className="w-[18px] h-[18px] rounded bg-PrimaryColor-0 text-white flex justify-center items-center transition-all duration-500 group-hover:bg-white group-hover:text-PrimaryColor-0">
              {testiRatingIcon}
            </li>
            <li className="w-[18px] h-[18px] rounded bg-PrimaryColor-0 text-white flex justify-center items-center transition-all duration-500 group-hover:bg-white group-hover:text-PrimaryColor-0">
              {testiRatingIcon}
            </li>
            <li className="w-[18px] h-[18px] rounded bg-PrimaryColor-0 text-white flex justify-center items-center transition-all duration-500 group-hover:bg-white group-hover:text-PrimaryColor-0">
              {testiRatingIcon}
            </li>
            <li className="w-[18px] h-[18px] rounded bg-PrimaryColor-0 text-white flex justify-center items-center transition-all duration-500 group-hover:bg-white group-hover:text-PrimaryColor-0">
              {testiRatingIcon}
            </li>
            <li className="w-[18px] h-[18px] rounded bg-PrimaryColor-0 text-white flex justify-center items-center transition-all duration-500 group-hover:bg-white group-hover:text-PrimaryColor-0">
              {testiRatingIcon}
            </li>
          </ul>
          <p className="font-AlbertSans text-lg text-TextColor-0 transition-all duration-500 group-hover:text-white">
            {testiDesc}
          </p>
          <h5 className="font-AlbertSans font-semibold text-HeadingColor-0 transition-all duration-500 group-hover:text-white text-2xl mt-7 mb-[6px]">
            {testiName}
          </h5>
          <p className="font-AlbertSans text-TextColor-0 transition-all duration-500 group-hover:text-white pb-12">
            {testiDesignation}
          </p>
        </div>
      </div>
      <div className="absolute bottom-10 lg:bottom-12 xl:bottom-16 right-10 transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1]">
        <img src={testiShape} />
      </div>
    </div>
  );
};

export default TestimonialCard;
