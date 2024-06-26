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
    <div className="group mx-[15px]">
      <div className="shadow-shade pl-5 pr-5 sm:pl-10 lg:pl-10 xl:pl-[66px] pt-8 bg-white relative rounded-md z-10 before:absolute before:top-0 before:rounded-md before:left-1/2 before:w-0 before:h-full before:bg-PrimaryColor-0 before:-z-10 before:transition-all before:duration-500 after:absolute after:-bottom-[42px] after:left-0 after:shadow-cases after:w-[42px] after:h-42px] after:border-t-white after:border-b-[#fbfbfb] after:border-r-transparent after:border-l-white after:border-[21px] after:bg-transparent group-hover:before:w-full group-hover:before:left-0">
        <p className="font-AlbertSans text-xl italic text-TextColor-0 transition-all duration-500 group-hover:text-white relative before:absolute before:-left-[38px] before:top-2 before:w-[2px] before:h-[90px] before:bg-PrimaryColor-0 before:transition-all before:duration-500 after:absolute after:-left-[28px] after:top-2 after:w-[2px] after:h-[50px] after:bg-PrimaryColor-0 after:transition-all after:duration-500 group-hover:before:bg-white group-hover:after:bg-white">
          {testiDesc}
        </p>
        <ul className="flex gap-1 items-center pb-10 mt-4">
          <li className="text-orange-400 transition-all duration-500 group-hover:text-white text-xl">
            {testiRatingIcon}
          </li>
          <li className="text-orange-400 transition-all duration-500 group-hover:text-white text-xl">
            {testiRatingIcon}
          </li>
          <li className="text-orange-400 transition-all duration-500 group-hover:text-white text-xl">
            {testiRatingIcon}
          </li>
          <li className="text-orange-400 transition-all duration-500 group-hover:text-white text-xl">
            {testiRatingIcon}
          </li>
          <li className="text-orange-400 transition-all duration-500 group-hover:text-white text-xl">
            {testiRatingIcon}
          </li>
        </ul>
        <div className="absolute bottom-6 right-8 transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1]">
          <img src={testiShape} />
        </div>
      </div>
      <div className="flex items-center gap-5 pl-10 pt-6">
        <div>
          <img src={testiImg} />
        </div>
        <div>
          <p className="font-AlbertSans text-TextColor-0">
            {testiDesignation}
          </p>
          <h5 className="font-AlbertSans font-semibold text-HeadingColor-0 text-lg mt-1">
            {testiName}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
