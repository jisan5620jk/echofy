import { FaArrowRightLong, FaStarOfLife } from "react-icons/fa6";
import aboutThumb from "/images/about-thumb.png";
import aboutItem from "/images/about-item.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="py-28 bg-white bg-cover bg-center bg-no-repeat">
      <div className="Container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[92px] lg:gap-5 xl:gap-20 2xl:gap-28 items-center">
          <div className="relative z-10">
            <img src={aboutThumb} draggable="false" />
          </div>
          <div>
            <h5 className="font-AlbertSans font-medium text-PrimaryColor-0 flex items-center gap-2">
              <FaStarOfLife />
              GET TO KNOW US
            </h5>
            <h1 className="font-AlbertSans font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[40px] xl:leading-[50px] 2xl:text-[46px] 2xl:leading-[56px] text-HeadingColor-0 mt-2 mb-6">
              Innovative Renewable
              <br /> Energy Solutions.
            </h1>
            <p className="font-AlbertSans text-TextColor-0 font-light">
              Sometimes goods can arrive early when they being brought into the
              solution other times items need a place to be stored for short
              goods can arrive desig headquarters have enough space your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 sm:items-center mt-12 mb-[60px]">
              <div>
                <img src={aboutItem} draggable="false" />
              </div>
              <ul>
                <li className="font-AlbertSans font-medium text-HeadingColor-0 pl-5 relative before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:w-[10px] before:h-[10px] before:bg-PrimaryColor-0">
                  Solar energy also has some limitations
                </li>
                <li className="font-AlbertSans font-medium text-HeadingColor-0 pl-5 relative before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:w-[10px] before:h-[10px] before:bg-PrimaryColor-0 my-5 lg:my-2 2xl:my-5">
                  Reliability and performance
                </li>
                <li className="font-AlbertSans font-medium text-HeadingColor-0 pl-5 relative before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:w-[10px] before:h-[10px] before:bg-PrimaryColor-0">
                  Every day fresh and quality products
                </li>
              </ul>
            </div>
            <Link to={"/about"}>
              <button className="primary-btn2">
                About Echofy
                <FaArrowRightLong size={"20"} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
