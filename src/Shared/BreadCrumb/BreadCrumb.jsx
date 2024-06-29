/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";

const BreadCrumb = ({
  breadCrumbTitle,
  breadCrumbIcon,
  url,
  breadCrumbLink,
  breadCrumbIcon2,
  breadCrumbContent,
}) => {
  return (
    <div className="bg-[url('/images/breadcrumb-bg.jpg')] bg-no-repeat bg-cover bg-center flex items-center h-[400px] sm:h-[530px] text-center pt-20">
      <div className="Container">
        <h1 className="font-AlbertSans font-extrabold text-4xl sm:text-[46px] text-white capitalize">
          {breadCrumbTitle}
        </h1>
        <ul className="flex flex-col md:flex-row gap-2 sm:gap-4 items-center justify-center mt-8 sm:mt-5">
          <div className="flex gap-2 sm:gap-4 items-center justify-center">
            <li>
              <Link to={"/"}>
                <button className="font-AlbertSans text-white flex items-center gap-2 transition-all duration-500 hover:text-PrimaryColor-0">
                  <IoHome className="text-PrimaryColor-0" />
                  Echofy
                </button>
              </Link>
            </li>
            <li>
              <div className="text-white hidden sm:block">{breadCrumbIcon}</div>
            </li>
            <li>
              <Link to={url}>
                <button className="font-AlbertSans capitalize text-white opacity-70">
                  {breadCrumbLink}
                </button>
              </Link>
            </li>
          </div>
          <li className="hidden md:block">
            <div className="text-white hidden sm:block">{breadCrumbIcon2}</div>
          </li>
          <li>
            <Link to={url}>
              <button className="font-AlbertSans capitalize text-white opacity-70">
                {breadCrumbContent}
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BreadCrumb;
