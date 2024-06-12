/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const BlogCard = ({
  blogThumb,
  thumbContent,
  blogUrl,
  blogTitle,
  blogDesc,
  btnContent,
  btnIcon,
}) => {
  return (
    <div className="bg-[#f3f4f8] group transition-all duration-500 hover:bg-white hover:shadow-cases rounded-md">
      <div className="relative overflow-hidden rounded-md">
        <img
          src={blogThumb}
          className="transition-all duration-500 scale-100 group-hover:scale-110 w-full"
        />
        <div className="absolute left-4 top-5">
          <h6 className="font-AlbertSans text-sm uppercase text-center inline-block overflow-hidden rounded px-4 py-[8px] text-white transition-all duration-500 group-hover:text-white bg-PrimaryColor-0 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:-z-10 before:scale-0 group-hover:before:scale-100">
            {thumbContent}
          </h6>
        </div>
      </div>
      <div className="px-5 sm:px-7 pb-7">
        <Link to={blogUrl}>
          <button className="font-AlbertSans text-left font-semibold text-xl sm:text-[22px] lg:text-xl xl:text-[22px] text-HeadingColor-0 mt-7 mb-3">
            {blogTitle}
          </button>
        </Link>
        <p className="font-AlbertSans font-light text-TextColor-0 pb-8">
          {blogDesc}
        </p>
        <Link to={blogUrl}>
          <button className="primary-btn2 !rounded !px-7 !py-3">
            {btnContent}
            {btnIcon}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
