import { useState } from "react";
import FsLightbox from "fslightbox-react";
import { Link } from "react-router-dom";
import {
  FaArrowRightLong,
  FaLinkedinIn,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import buttonShape from "/public/images/button-shape-1.png";
import bannerImg from "/public/images/banner-img.png";
import { LiaPlayCircleSolid } from "react-icons/lia";
import "./banner.css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Banner = () => {
  const [toggler, setToggler] = useState(false);
  const settings = {
    loop: true,
    speed: 2000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    duration: 3000,
  };
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + ' pagination-bullet"></span>';
    },
  };
  return (
    <div className="relative">
      <Swiper {...settings} pagination={pagination} modules={[Pagination]}>
        <SwiperSlide>
          <section className="bg-[url('/public/images/banner-bg.jpg')] bg-cover bg-center bg-no-repeat h-[960px] flex items-center">
            <div className="Container">
              <div className="grid lg:grid-cols-2 items-center pt-36">
                <div className="relative banner-content">
                  <h5 className="font-AlbertSans text-PrimaryColor-0 font-medium">
                    NATURAL ENVIRONMENT
                  </h5>
                  <h1 className="font-AlbertSans font-extrabold text-white text-[68px] 2xl:text-[76px]">
                    Be Safe Controls
                  </h1>
                  <h1 className="font-AlbertSans font-extrabold text-white text-[68px] 2xl:text-[76px] -mt-7 2xl:-mt-8">
                    Environment
                  </h1>
                  <p className="font-AlbertSans text-lg text-white mb-10">
                    Professionally optimize interdependent intellectual
                    interoperable connect best practices. Progressively
                    fabricate done
                  </p>
                  <div className="flex gap-5">
                    <Link to={"/about"}>
                      <button className="primary-btn">
                        {`Let's Talk`}
                        <img src={buttonShape} />
                      </button>
                    </Link>
                    <div className="text-lg font-AlbertSans font-medium text-white flex items-center gap-4">
                      <button className="h-[58px] w-[58px] rounded-full bg-[#355250] flex justify-center items-center relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#355250] before:opacity-50 before:-z-10 before:rounded-full before:animate-ping">
                        <LiaPlayCircleSolid
                          size={"34"}
                          className="text-PrimaryColor-0"
                          onClick={() => setToggler(!toggler)}
                        />
                      </button>
                      Watch Video
                    </div>
                    <FsLightbox
                      toggler={toggler}
                      sources={[
                        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                      ]}
                    />
                  </div>
                  <div className="banner-share flex gap-[100px] items-center -rotate-90 absolute top-full -translate-y-1/2 -left-[40%]">
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
                  <img src={bannerImg} />
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="bg-[url('/public/images/banner-bg.jpg')] bg-cover bg-center bg-no-repeat h-[960px] flex items-center">
            <div className="Container">
              <div className="relative">
                <h5 className="font-AlbertSans text-lg text-PrimaryColor-0 font-medium">
                  BEST echofy AGENCY
                </h5>
                <h1 className="font-AlbertSans font-bold text-white text-[34px] leading-[44px] sm:text-6xl sm:leading-[70px] lg:text-[58px] 2xl:text-[60px] 2xl:leading-[70px] mt-6 mb-12">
                  Enjoy The Quality Full
                  <br />
                  Cleaning Services
                  <br />
                  And Stay Safe
                </h1>
                <Link to={"/about"}>
                  <button className="primary-btn2">
                    Get Started Now
                    <FaArrowRightLong size={"20"} />
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
