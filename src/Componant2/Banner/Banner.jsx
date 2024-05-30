import { Link } from "react-router-dom";
import { FaLinkedinIn, FaPinterestP, FaXTwitter } from "react-icons/fa6";
import "swiper/css";
import buttonShape from "/public/images/button-shape-1.png";
import bannerImg from "/public/images/banner-img.png";

const Banner = () => {
  return (
    <section className="bg-[url('/public/images/banner-bg.jpg')] bg-cover bg-center bg-no-repeat h-[1000px] sm:h-[1200px] md:h-[1350px] lg:h-[960px] xl:h-[960px] flex items-center">
      <div className="Container">
        <div className="grid lg:grid-cols-2 items-center pt-36 gap-16 lg:gap-0">
          <div className="relative banner-content">
            <h5 className="font-AlbertSans text-PrimaryColor-0 font-medium">
              NATURAL ENVIRONMENT
            </h5>
            <h1 className="font-AlbertSans font-extrabold text-white text-[30px] sm:text-[56px] md:text-[70px] lg:text-[50px] xl:text-[60px] 2xl:text-[68px]">
              Be Safe Controls
            </h1>
            <h1 className="font-AlbertSans font-extrabold text-white text-[30px] sm:text-[56px] md:text-[70px] lg:text-[50px] xl:text-[60px] 2xl:text-[68px] -mt-4 sm:-mt-4 md:-mt-6 lg:-mt-7">
              Environment
            </h1>
            <p className="font-AlbertSans text-lg text-white mb-10">
              Professionally optimize interdependent intellectual interoperable
              connect best practices. Progressively fabricate done
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link to={"/about"}>
                <button className="primary-btn">
                  {`Let's Talk`}
                  <img src={buttonShape} draggable="false" />
                </button>
              </Link>
            </div>
            <div className="banner-share hidden md:flex gap-[100px] items-center -rotate-90 absolute top-full -translate-y-1/2 md:-left-[23%] lg:-left-[35%] xl:-left-[32%] 2xl:-left-[50%]">
              <h5 className="font-AlbertSans text-white relative before:absolute before:top-1/2 before:-right-[82px] before:w-16 before:h-[1px] before:bg-[#657977]">
                FOLLOW US
              </h5>
              <ul className="flex gap-7 items-center">
                <li>
                  <Link
                    to={"/"}
                    className="rotate-45 transition-all duration-500 text-white hover:text-PrimaryColor-0"
                  >
                    <FaLinkedinIn />
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/"}
                    className="rotate-45 transition-all duration-500 text-white hover:text-PrimaryColor-0"
                  >
                    <FaXTwitter />
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/"}
                    className="rotate-45 transition-all duration-500 text-white hover:text-PrimaryColor-0"
                  >
                    <FaPinterestP />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="banner-thumb">
            <img src={bannerImg} draggable="false" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
