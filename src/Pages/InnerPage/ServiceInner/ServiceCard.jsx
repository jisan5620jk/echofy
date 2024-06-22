/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ServiceCard = ({
  serviceImg,
  serviceIcon,
  serviceButton,
  serviceUrl,
  serviceButton2,
  serviceTitle,
  serviceDesc,
  serviceShape,
}) => {
  return (
    <div className="rounded-xl bg-white group relative z-10 overflow-hidden before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 before:bg-SecondaryColor-0 before:-z-10 before:transition-all before:duration-500 hover:before:h-full hover:before:top-0">
      <div className="overflow-hidden relative z-10 rounded-t-lg before:absolute before:top-0 before:left-1/2 before:w-0 before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 group-hover:before:w-full group-hover:before:left-0 group-hover:before:opacity-0">
        <img src={serviceImg} draggable="false" className="!w-full" />
      </div>
      <div className="px-[30px]">
        <div className="-mt-10 relative z-10 mb-5">
          <img src={serviceIcon} draggable="false" />
        </div>
        <Link to={"/"}>
          <button className="font-AlbertSans font-semibold text-[26px] pb-[10px] text-HeadingColor-0 transition-all duration-500 group-hover:text-white relative before:absolute before:bottom-0 before:left-0 before:w-8 before:h-[2px] before:bg-PrimaryColor-0">
            {serviceTitle}
          </button>
        </Link>
        <p className="font-AlbertSans text-TextColor-0 pt-6 pb-6">
          {serviceDesc}
        </p>
        <div className="flex justify-between items-center border-t border-BorderColor2-0 py-4">
          <Link to={serviceUrl}>
            <button className="font-AlbertSans text-HeadingColor-0 font-medium border-b border-BorderColor2-0 transition-all duration-500 group-hover:border-BorderColor-0 group-hover:text-white">
              {serviceButton2}
            </button>
          </Link>
          <Link to={serviceUrl}>
            <button className="w-[46px] h-[46px] rounded-full bg-white border border-BorderColor2-0 text-PrimaryColor-0 text-2xl flex justify-center items-center transition-all duration-500 relative z-10 before:absolute before:-z-10 before:w-full before:h-full before:bg-PrimaryColor-0 before:rounded-full before:transition-all before:duration-500 before:scale-0 group-hover:text-white group-hover:before:scale-100">
              {serviceButton}
            </button>
          </Link>
        </div>
      </div>
      <img
        src={serviceShape}
        draggable="false"
        className="absolute -z-10 rotate-90 -bottom-28 -right-28 transition-all duration-500 group-hover:-bottom-[14px] group-hover:-right-2"
      />
    </div>
  );
};

export default ServiceCard;
