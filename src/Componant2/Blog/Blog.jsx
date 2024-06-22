/* eslint-disable no-unused-vars */
import { FaArrowRightLong } from "react-icons/fa6";
import blogThumb from "/images/blog-thumb1.jpg";
import blogThumb2 from "/images/blog-thumb2.jpg";
import blogThumb3 from "/images/blog-thumb3.jpg";
import subTitleShape from "/images/sub-title-shape.png";
import buttonShape from "/images/button-shape-1.png";
import BlogCard from "./BlogCard";
import { Link } from "react-router-dom";

const blogData = [
  {
    id: 1,
    blogThumb: blogThumb,
    thumbContent: "Environment",
    blogDate: "24 Mar, 2024",
    blogUrl: "/blog_details",
    blogTitle: "Top 10 Recycling tips for Environment",
    blogDesc:
      "Competently cultivate worldwide to e-tailers professionally engineer high",
    blogProfileIcon: "J",
    blogProfileTitle: "John D. Alexon",
    btnIcon: <FaArrowRightLong />,
  },
  {
    id: 2,
    blogThumb: blogThumb2,
    thumbContent: "Environment",
    blogDate: "24 Mar, 2024",
    blogUrl: "/blog_details",
    blogTitle: "How Every Individual Can Make a Difference",
    blogDesc:
      "Competently cultivate worldwide to e-tailers professionally engineer high",
    blogProfileIcon: "A",
    blogProfileTitle: "Anjelina Watson",
    btnIcon: <FaArrowRightLong />,
  },
  {
    id: 3,
    blogThumb: blogThumb3,
    thumbContent: "Environment",
    blogDate: "24 Mar, 2024",
    blogUrl: "/blog_details",
    blogTitle: "Innovations in Renewable Energy Technology",
    blogDesc:
      "Competently cultivate worldwide to e-tailers professionally engineer high",
    blogProfileIcon: "D",
    blogProfileTitle: "David Watson",
    btnIcon: <FaArrowRightLong />,
  },
];

const Blog = () => {
  return (
    <section className="py-28">
      <div className="Container">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:items-center">
          <div>
            <h5 className="font-AlbertSans font-medium text-PrimaryColor-0 flex items-center gap-2">
              <img src={subTitleShape} draggable="false" />
              LATEST BLOG
            </h5>
            <h1 className="font-AlbertSans font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[40px] xl:leading-[50px] 2xl:text-[46px] 2xl:leading-[56px] text-HeadingColor-0 mt-5 mb-3">
              Building a Greener Future <br />
              Together Forever
            </h1>
          </div>
          <div className="flex lg:justify-end">
            <Link to={"/blogGrid"}>
              <button className="primary-btn">
                Veiw All Blog
                <img src={buttonShape} draggable="false" />
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
                blogDate,
                blogUrl,
                blogTitle,
                blogDesc,
                blogProfileIcon,
                blogProfileTitle,
                btnIcon,
              }) => {
                return (
                  <div key={id}>
                    <BlogCard
                      blogThumb={blogThumb}
                      thumbContent={thumbContent}
                      blogDate={blogDate}
                      blogUrl={blogUrl}
                      blogTitle={blogTitle}
                      blogDesc={blogDesc}
                      blogProfileIcon={blogProfileIcon}
                      blogProfileTitle={blogProfileTitle}
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
  );
};

export default Blog;
