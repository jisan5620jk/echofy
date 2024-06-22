/* eslint-disable no-unused-vars */
import { FaArrowRightLong, FaStarOfLife } from "react-icons/fa6";
import blogThumb from "/images/blog-1.png";
import blogThumb2 from "/images/blog-2.png";
import blogThumb3 from "/images/blog-3.png";
import BlogCard from "./BlogCard";

const blogData = [
  {
    id: 1,
    blogThumb: blogThumb,
    thumbContent: "home 2024 march",
    blogDate: "Mar 15, 2024",
    blogRelated: "RENEWABOLE / SCIENCE",
    blogUrl: "/blog_details",
    blogTitle: "Solar-Powered Transportation",
    blogDesc:
      "Need place to stored for short goods can arive desig have space your needs brand.",
    blogBtn: "Explore More",
    blogBtnIcon: <FaArrowRightLong />,
  },
  {
    id: 2,
    blogThumb: blogThumb2,
    thumbContent: "home 2024 march",
    blogDate: "Mar 15, 2024",
    blogRelated: "RENEWABOLE / SCIENCE",
    blogUrl: "/blog_details",
    blogTitle: "Pioneering the Future of Power",
    blogDesc:
      "Need place to stored for short goods can arive desig have space your needs brand.",
    blogBtn: "Explore More",
    blogBtnIcon: <FaArrowRightLong />,
  },
  {
    id: 3,
    blogThumb: blogThumb3,
    thumbContent: "home 2024 march",
    blogDate: "Mar 15, 2024",
    blogRelated: "RENEWABOLE / SCIENCE",
    blogUrl: "/blog_details",
    blogTitle: "Solar-Powered Innovations",
    blogDesc:
      "Need place to stored for short goods can arive desig have space your needs brand.",
    blogBtn: "Explore More",
    blogBtnIcon: <FaArrowRightLong />,
  },
];

const Blog = () => {
  return (
    <section className="py-28 bg-[#f3f4f8]">
      <div className="Container">
        <div className="text-center">
          <h5 className="font-AlbertSans font-medium text-PrimaryColor-0 flex items-center gap-2 justify-center">
            <FaStarOfLife />
            LATEST BLOG
            <FaStarOfLife />
          </h5>
          <h1 className="font-AlbertSans font-bold text-xl leading-7 sm:text-[36px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[40px] xl:leading-[50px] 2xl:text-[46px] 2xl:leading-[56px] text-HeadingColor-0 mt-5 mb-3">
            Read The Latest News
          </h1>
        </div>
        <div className="mt-[60px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {blogData.map(
              ({
                id,
                blogThumb,
                thumbContent,
                blogDate,
                blogRelated,
                blogUrl,
                blogTitle,
                blogDesc,
                blogBtn,
                blogBtnIcon,
              }) => {
                return (
                  <div key={id}>
                    <BlogCard
                      blogThumb={blogThumb}
                      thumbContent={thumbContent}
                      blogDate={blogDate}
                      blogRelated={blogRelated}
                      blogUrl={blogUrl}
                      blogTitle={blogTitle}
                      blogDesc={blogDesc}
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
