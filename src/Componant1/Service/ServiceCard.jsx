/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ServiceCard = ({
  serviceImg,
  serviceIcon,
  serviceUrl,
  serviceButton,
  serviceTitle,
  serviceDesc,
  serviceShape,
}) => {
  return (
    <div className="p-6 rounded-lg bg-[#f5f8ed] group relative z-10 overflow-hidden before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 before:bg-SecondaryColor-0 before:-z-10 before:transition-all before:duration-500 hover:before:h-full hover:before:top-0">
      <div className="overflow-hidden relative z-10 before:absolute before:top-0 before:left-1/2 before:w-0 before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 group-hover:before:w-full group-hover:before:left-0 group-hover:before:opacity-0">
        <img src={serviceImg} draggable="false" className="w-full"/>
      </div>
      <div className="flex justify-between items-center mt-8 mb-6">
        <div>
          <img src={serviceIcon} draggable="false" />
        </div>
        <Link to={serviceUrl}>
          <button className="w-[50px] h-[50px] rounded-full bg-white text-PrimaryColor-0 text-2xl flex justify-center items-center transition-all duration-500 relative z-10 before:absolute before:-z-10 before:w-full before:h-full before:bg-PrimaryColor-0 before:rounded-full before:transition-all before:duration-500 before:scale-0 group-hover:text-white group-hover:before:scale-100">
            {serviceButton}
          </button>
        </Link>
      </div>
      <Link to={serviceUrl}>
        <button className="font-AlbertSans font-semibold text-[26px] pb-[10px] text-HeadingColor-0 transition-all duration-500 group-hover:text-white relative before:absolute before:bottom-0 before:left-0 before:w-8 before:h-[2px] before:bg-PrimaryColor-0">{serviceTitle}</button>
      </Link>
      <p className="font-AlbertSans text-TextColor-0 pt-6 pb-[10px">{serviceDesc}</p>
      <img
        src={serviceShape} draggable="false"
        className="absolute -z-10 rotate-90 -bottom-28 -right-28 transition-all duration-500 group-hover:-bottom-[14px] group-hover:-right-2"
      />
    </div>
  );
};

export default ServiceCard;
