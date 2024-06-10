/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ServiceCard = ({
  serviceThumb,
  serviceIcon,
  serviceTitle,
  serviceUrl,
  serviceDesc,
  serviceBtn,
  serviceBtnIcon,
}) => {
  return (
    <div className="shadow-shade rounded-md bg-white text-center p-6 group relative z-10 before:absolute before:top-0 before:right-0 before:-z-10 before:w-0 before:h-full before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:rounded-md hover:before:w-full hover:before:left-0 pr-7 mb-6 lg:mb-0 sm:mr-8 md:mr-0">
      <div className="relative">
        <img src={serviceThumb} draggable="false" className="w-full" />
        <div className="absolute right-0 bottom-0">
          <div className="w-[85px] h-[85px] rounded-t-md rounded-l-md bg-white relative flex justify-center items-center z-10 overflow-hidden before:absolute before:top-0 before:right-0 before:w-[2px] before:-z-10 before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 group-hover:before:w-full">
            <img
              src={serviceIcon}
              draggable="false"
              className="brightness-100 invert-0 group-hover:brightness-0 group-hover:invert-[1] transition-all duration-500 "
            />
          </div>
        </div>
      </div>
      <div>
        <h5 className="font-AlbertSans font-bold text-HeadingColor-0 text-xl sm:text-[22px] lg:text-lg xl:text-[22px] transition-all duration-500 group-hover:text-white pt-7 pb-3">
          {serviceTitle}
        </h5>
        <p className="font-AlbertSans text-TextColor-0 mb-8">{serviceDesc}</p>
        <Link
          to={serviceUrl}
          className="absolute -bottom-[25px] left-1/2 -translate-x-1/2"
        >
          <button className="font-AlbertSans rounded-full font-medium bg-PrimaryColor-0 text-white flex items-center justify-center transition-all duration-500 w-[50px] group-hover:w-[176px] h-[50px] gap-2 overflow-hidden">
            <span className="opacity-0 transition-all duration-500 group-hover:opacity-100 -ml-[90px] group-hover:ml-0">
              {serviceBtn}
            </span>
            <span>{serviceBtnIcon}</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
