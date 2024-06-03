/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const BlogCard = ({
  blogThumb,
  thumbContent,
  blogDate,
  blogUrl,
  blogTitle,
  blogDesc,
  blogProfileIcon,
  blogProfileTitle,
  btnIcon,
}) => {
  return (
    <div className="group transition-all duration-500 bg-white hover:shadow-cases rounded-md overflow-hidden">
      <div className="relative overflow-hidden before:absolute before:top-0 before:left-1/2 before:w-0 before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 group-hover:before:w-full group-hover:before:left-0 before:z-10 group-hover:before:opacity-0">
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
      <div className="border-x border-b rounded-b-md border-BorderColor2-0 transition-all duration-500 group-hover:border-transparent">
        <div className="px-5 sm:px-7 pt-6">
          <p className="font-AlbertSans text-TextColor-0 pl-[18px] relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:bg-PrimaryColor-0 before:w-2 before:h-2 before:rounded-full">
            {blogDate}
          </p>
          <Link to={blogUrl}>
            <button className="font-AlbertSans text-left font-semibold text-xl sm:text-2xl md:text-xl lg:text-lg xl:text-[22px] 2xl:text-2xl text-HeadingColor-0 transition-all duration-500 group-hover:text-PrimaryColor-0 mt-3 mb-3">
              {blogTitle}
            </button>
          </Link>
          <p className="font-AlbertSans text-TextColor-0 pb-7">{blogDesc}</p>
        </div>
        <div className="flex justify-between items-center border-t border-BorderColor2-0 px-5 sm:px-7 py-4">
          <Link to={blogUrl}>
            <button className=" flex items-center gap-3 font-AlbertSans font-medium text-HeadingColor-0 transition-all duration-500 hover:text-PrimaryColor-0">
              <span className="w-9 h-9 rounded-full bg-PrimaryColor-0 text-white flex items-center justify-center">
                {blogProfileIcon}
              </span>
              {blogProfileTitle}
            </button>
          </Link>
          <Link to={blogUrl}>
            <button className="font-AlbertSans font-medium text-HeadingColor-0 transition-all duration-500 hover:text-PrimaryColor-0">
              {btnIcon}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
