/* eslint-disable no-unused-vars */
import { FaAnglesRight, FaArrowRightLong, FaRegCalendarCheck } from "react-icons/fa6";
import blogThumb from "/images/blog5-thumb1.png";
import blogThumb2 from "/images/blog5-thumb2.png";
import blogThumb3 from "/images/blog5-thumb3.png";
import subTitleShape from "/images/title-shape-2.png";
import BlogCard from "./BlogCard";
import { Link } from "react-router-dom";
import { IoPricetagsOutline } from "react-icons/io5";
import { FiArrowUpRight } from "react-icons/fi";

const blogData = [
  {
    id: 1,
    blogThumb: blogThumb,
    thumbContent: "Environment",
    blogDateIcon: <FaRegCalendarCheck />,
    blogDate: "24 Mar, 2024",
    blogTagIcon: <IoPricetagsOutline />,
    blogTag: "Oil Change",
    blogUrl: "/blog_details",
    blogTitle: "Make A Statement Support Of The Eco Green",
    blogBtn: "Read More",
    blogBtnIcon: <FiArrowUpRight />,
  },
  {
    id: 2,
    blogThumb: blogThumb2,
    thumbContent: "Environment",
    blogDateIcon: <FaRegCalendarCheck />,
    blogDate: "24 Mar, 2024",
    blogTagIcon: <IoPricetagsOutline />,
    blogTag: "Oil Change",
    blogUrl: "/blog_details",
    blogTitle: "Everything Need To Know About Tigers Census",
    blogBtn: "Read More",
    blogBtnIcon: <FiArrowUpRight />,
  },
  {
    id: 3,
    blogThumb: blogThumb3,
    thumbContent: "Environment",
    blogDateIcon: <FaRegCalendarCheck />,
    blogDate: "24 Mar, 2024",
    blogTagIcon: <IoPricetagsOutline />,
    blogTag: "Oil Change",
    blogUrl: "/blog_details",
    blogTitle: "Hedgehogs Need Protection From Poachers!",
    blogBtn: "Read More",
    blogBtnIcon: <FiArrowUpRight />,
  },
];

const Blog = () => {
  return (
    <section className="py-28">
      <div className="Container">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:items-center">
          <div>
            <h5 className="font-AlbertSans font-semibold text-PrimaryColor-0 flex items-center gap-2">
              <img src={subTitleShape} draggable="false" />
              LATEST NEWS
            </h5>
            <h1 className="font-AlbertSans font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[40px] xl:leading-[50px] 2xl:text-[46px] 2xl:leading-[56px] text-HeadingColor-0 mt-[14px] mb-5">
              Get The Best News Stories <br />
              in Your Inbox
            </h1>
          </div>
          <div className="flex lg:justify-end">
            <Link to={"/blog_grid"}>
              <button className="primary-btn3 !bg-transparent !text-PrimaryColor-0 hover:!text-white before:bg-PrimaryColor-0">
                Veiw All Blog
                <FaAnglesRight />
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-[40px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {blogData.map(
              ({
                id,
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
                  <div key={id}>
                    <BlogCard
                      blogThumb={blogThumb}
                      thumbContent={thumbContent}
                      blogDateIcon={blogDateIcon}
                      blogDate={blogDate}
                      blogTagIcon={blogTagIcon}
                      blogTag={blogTag}
                      blogUrl={blogUrl}
                      blogTitle={blogTitle}
                      blogBtn={blogBtn}
                      blogBtnIcon={blogBtnIcon}
                    />
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
