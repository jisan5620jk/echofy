/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const BlogCard = ({
  blogThumb,
  thumbContent,
  blogRelated,
  blogUrl,
  blogTitle,
  blogDesc,
  blogBtn,
  blogBtnIcon,
}) => {
  return (
    <div className="group bg-white rounded-md mb-6 lg:mb-0">
      <div className="relative overflow-hidden rounded-t-md z-10 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0 after:transition-all after:duration-500 after:bg-gradient-to-t after:from-PrimaryColor-0 after:to-transparent group-hover:after:h-5/6">
        <img
          src={blogThumb}
          className="transition-all duration-500 scale-100 group-hover:scale-110 w-full"
        />
        <div className="transition-all duration-500 absolute top-0 -left-full group-hover:left-0">
          <h6 className="font-AlbertSans uppercase text-[15px] text-center inline-block overflow-hidden rounded-ee-[30px] px-7 py-[10px] text-white group-hover:text-white bg-PrimaryColor-0">
            {thumbContent}
          </h6>
        </div>
      </div>
      <div className="px-5 sm:px-7 pb-12 pt-7 relative">
        <p className="font-AlbertSans font-light text-PrimaryColor-0 relative">
          {blogRelated}
        </p>
        <Link to={blogUrl}>
          <button className="font-AlbertSans text-left font-bold text-xl sm:text-2xl lg:text-xl 2xl:text-2xl text-HeadingColor-0 transition-all duration-500 hover:text-PrimaryColor-0 mt-[6px] mb-3">
            {blogTitle}
          </button>
        </Link>
        <p className="font-AlbertSans text-TextColor-0">{blogDesc}</p>
        <Link
          to={blogUrl}
          className="absolute -bottom-[25px] left-1/2 -translate-x-1/2"
        >
          <button className="font-AlbertSans rounded-full font-medium bg-PrimaryColor-0 text-white flex items-center justify-center transition-all duration-500 w-[50px] group-hover:w-[176px] h-[50px] gap-2 overflow-hidden">
            <span className="opacity-0 capitalize transition-all duration-500 group-hover:opacity-100 -ml-[100px] group-hover:ml-0">
              {blogBtn}
            </span>
            <span>{blogBtnIcon}</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
