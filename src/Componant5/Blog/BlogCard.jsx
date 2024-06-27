/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const BlogCard = ({
  blogThumb,
  thumbContent,
  blogDateIcon,
  blogDate,
  blogTagIcon,
  blogTag,
  blogUrl,
  blogTitle,
  blogBtn,
  blogBtnIcon,
}) => {
  return (
    <div className="group transition-all duration-500 bg-white rounded-md">
      <div className="relative rounded-md overflow-hidden before:absolute before:top-0 before:left-1/2 before:w-0 before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 group-hover:before:w-full group-hover:before:left-0 before:z-10 group-hover:before:opacity-0">
        <img
          src={blogThumb}
          className="transition-all duration-500 scale-100 group-hover:scale-110 w-full"
        />
        <div className="absolute -left-1/2 transition-all duration-500 group-hover:left-5 top-5">
          <h6 className="font-AlbertSans text-white text-center inline-block overflow-hidden rounded-full px-5 py-2 transition-all duration-500 group-hover:text-white bg-PrimaryColor-0">
            {thumbContent}
          </h6>
        </div>
      </div>
      <div className="rounded-md mx-5 relative z-20 -mt-[50px] flex justify-center bg-white transition-all duration-500 px-5 sm:px-8 lg:px-5 2xl:px-8 pt-7 pb-10 shadow-cases">
        <div>
          <div className="flex flex-col sm:flex-row md:flex-col xl:flex-row md:gap-4 xl:gap-0 gap-4 sm:gap-0 justify-between mb-2">
            <p className="font-AlbertSans text-TextColor-0 flex gap-2 items-center leading-[15px]">
              <span className="text-PrimaryColor-0">{blogDateIcon}</span>
              {blogDate}
            </p>
            <p className="font-AlbertSans text-TextColor-0 flex gap-2 items-center leading-[15px]">
              <span className="text-PrimaryColor-0">{blogTagIcon}</span>
              {blogTag}
            </p>
          </div>
          <Link to={blogUrl}>
            <button className="font-AlbertSans text-left font-semibold text-lg sm:text-[22px] md:text-lg lg:text-base xl:text-xl 2xl:text-[22px] text-HeadingColor-0 transition-all duration-500 group-hover:text-PrimaryColor-0 mt-3 mb-8">
              {blogTitle}
            </button>
          </Link>
          <Link to={blogUrl}>
            <button className="header-btn !rounded-md !flex gap-2 items-center group-hover:before:w-full group-hover:before:left-0">
              {blogBtn}
              {blogBtnIcon}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
