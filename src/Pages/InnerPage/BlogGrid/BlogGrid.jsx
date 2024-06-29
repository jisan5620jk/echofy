/* eslint-disable no-unused-vars */
import { FaAngleRight, FaArrowRightLong } from "react-icons/fa6";
import blogThumb from "/images/blog-list.png";
import blogThumb2 from "/images/blog-list2.png";
import blogThumb3 from "/images/blog-list3.png";
import blogThumb4 from "/images/blog-list4.jpg";
import blogThumb5 from "/images/blog-list5.jpg";
import blogThumb6 from "/images/blog-list6.jpg";
import blogThumb7 from "/images/blog-thumb1.jpg";
import blogThumb8 from "/images/blog-thumb2.jpg";
import blogThumb9 from "/images/blog-thumb3.jpg";
import BlogCard from "./BlogCard";
import { Link } from "react-router-dom";
import subTitleShape from "/images/sub-title-shape.png";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";

const blogData = [
  {
    id: 1,
    blogThumb: blogThumb,
    thumbContent: "Energy",
    blogUrl: "/blog_details",
    blogTitle: "Newest Cleaning Tools for House 2024",
    blogDesc:
      "Competently repurpose forward benefits conveniently target e-business",
    btnContent: "Read More",
    btnIcon: <FaArrowRightLong />,
  },
  {
    id: 2,
    blogThumb: blogThumb2,
    thumbContent: "Ecology",
    blogUrl: "/blog_details",
    blogTitle: "10 Most Popular Cleaning Tips for House",
    blogDesc:
      "Competently repurpose forward benefits conveniently target e-business",
    btnContent: "Read More",
    btnIcon: <FaArrowRightLong />,
  },
  {
    id: 3,
    blogThumb: blogThumb3,
    thumbContent: "Environment",
    blogUrl: "/blog_details",
    blogTitle: "Ocean Cleaning Use New Equipment",
    blogDesc:
      "Competently repurpose forward benefits conveniently target e-business",
    btnContent: "Read More",
    btnIcon: <FaArrowRightLong />,
  },
  {
    id: 4,
    blogThumb: blogThumb4,
    thumbContent: "Energy",
    blogUrl: "/blog_details",
    blogTitle: "Regular cleaning your dream House",
    blogDesc:
      "Competently repurpose forward benefits conveniently target e-business",
    btnContent: "Read More",
    btnIcon: <FaArrowRightLong />,
  },
  {
    id: 5,
    blogThumb: blogThumb5,
    thumbContent: "Ecology",
    blogUrl: "/blog_details",
    blogTitle: "Carpet Cleaning Use New Equipment",
    blogDesc:
      "Competently repurpose forward benefits conveniently target e-business",
    btnContent: "Read More",
    btnIcon: <FaArrowRightLong />,
  },
  {
    id: 6,
    blogThumb: blogThumb6,
    thumbContent: "Environment",
    blogUrl: "/blog_details",
    blogTitle: "Proper Cleaning Use New Equipment",
    blogDesc:
      "Competently repurpose forward benefits conveniently target e-business",
    btnContent: "Read More",
    btnIcon: <FaArrowRightLong />,
  },
  {
    id: 7,
    blogThumb: blogThumb7,
    thumbContent: "Energy",
    blogUrl: "/blog_details",
    blogTitle: "Window Cleaning Use New Equipment",
    blogDesc:
      "Competently repurpose forward benefits conveniently target e-business",
    btnContent: "Read More",
    btnIcon: <FaArrowRightLong />,
  },
  {
    id: 8,
    blogThumb: blogThumb8,
    thumbContent: "Ecology",
    blogUrl: "/blog_details",
    blogTitle: "Ocean Cleaning Use New Equipment",
    blogDesc:
      "Competently repurpose forward benefits conveniently target e-business",
    btnContent: "Read More",
    btnIcon: <FaArrowRightLong />,
  },
  {
    id: 9,
    blogThumb: blogThumb9,
    thumbContent: "Environment",
    blogUrl: "/blog_details",
    blogTitle: "Door Cleaning Use New Equipment",
    blogDesc:
      "Competently repurpose forward benefits conveniently target e-business",
    btnContent: "Read More",
    btnIcon: <FaArrowRightLong />,
  },
];

const BlogGrid = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"Blog Grid"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={"Blog"}
        breadCrumbIcon2={<FaArrowRightLong />}
        breadCrumbContent={"Blog Grid"}
      />
      <section className="pt-28">
        <div className="Container">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:items-center">
            <div>
              <div>
                <h5 className="font-AlbertSans font-medium text-PrimaryColor-0 flex items-center gap-2">
                  <img src={subTitleShape} draggable="false" />
                  LATEST BLOG
                </h5>
                <h1 className="font-AlbertSans font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[40px] xl:leading-[50px] 2xl:text-[46px] 2xl:leading-[56px] text-HeadingColor-0 mt-5 mb-3">
                  Learn about our Latest <br /> News from Blog
                </h1>
              </div>
            </div>
            <div className="flex lg:justify-end">
              <Link to={"/blog_details"}>
                <button className="primary-btn">
                  Veiw All Blog
                  <FaArrowRightLong size={"20"} />
                </button>
              </Link>
            </div>
          </div>
          <div className="mt-[60px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {blogData.map(
                ({
                  id,
                  blogThumb,
                  thumbContent,
                  blogUrl,
                  blogTitle,
                  blogDesc,
                  btnContent,
                  btnIcon,
                }) => {
                  return (
                    <div key={id}>
                      <BlogCard
                        blogThumb={blogThumb}
                        thumbContent={thumbContent}
                        blogUrl={blogUrl}
                        blogTitle={blogTitle}
                        blogDesc={blogDesc}
                        btnContent={btnContent}
                        btnIcon={btnIcon}
                      />
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </section>
      <div>
        <ul className="flex items-center gap-2 justify-center pb-[120px] pt-[80px]">
          <li>
            <button className="h-[50px] w-[50px] font-AlbertSans rounded-full border-BorderColor2-0 border bg-white flex justify-center items-center text-HeadingColor-0 transition-all duration-500 hover:text-white overflow-hidden relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
              01
            </button>
          </li>
          <li>
            <button className="h-[50px] w-[50px] font-AlbertSans rounded-full border-BorderColor2-0 border bg-white flex justify-center items-center text-HeadingColor-0 transition-all duration-500 hover:text-white overflow-hidden relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
              02
            </button>
          </li>
          <li>
            <button className="h-[50px] w-[50px] font-AlbertSans rounded-full border-BorderColor2-0 border bg-white flex justify-center items-center text-HeadingColor-0 transition-all duration-500 hover:text-white overflow-hidden relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
              03
            </button>
          </li>
          <li>
            <button className="h-[50px] w-[50px] font-AlbertSans rounded-full border-BorderColor2-0 border bg-white flex justify-center items-center text-HeadingColor-0 transition-all duration-500 hover:text-white overflow-hidden relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
              <FaAngleRight />
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default BlogGrid;
