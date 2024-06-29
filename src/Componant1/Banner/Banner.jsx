import { useState } from "react";
import FsLightbox from "fslightbox-react";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaPinterestP, FaXTwitter } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import buttonShape from "/images/button-shape-1.png";
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
          <section className="bg-[url('/images/banner-bg.jpg')] bg-cover bg-left lg:bg-center bg-no-repeat h-[750px] sm:h-[700px] md:h-[750px] lg:h-[760px] xl:h-[960px] flex items-center">
            <div className="Container">
              <div className="pt-36">
                <div className="relative banner-content">
                  <h5 className="font-AlbertSans text-PrimaryColor-0 font-medium">
                    NATURAL ENVIRONMENT
                  </h5>
                  <h1 className="font-AlbertSans font-extrabold text-white text-[30px] sm:text-[56px] md:text-[70px] lg:text-[50px] xl:text-[60px] 2xl:text-[68px]">
                    Be Safe Controls
                  </h1>
                  <h1 className="font-AlbertSans font-extrabold text-white text-[30px] sm:text-[56px] md:text-[70px] lg:text-[50px] xl:text-[60px] 2xl:text-[68px] -mt-3 sm:-mt-5 md:-mt-7 lg:-mt-5">
                    Environment
                  </h1>
                  <p className="font-AlbertSans text-lg text-white mb-10">
                    Professionally optimize interdependent intellectual
                    interoperable <br className="hidden md:block" /> connect
                    best practices. Progressively
                    <br className="hidden sm:block md:hidden" /> fabricate done
                  </p>
                  <div className="flex flex-col sm:flex-row gap-5">
                    <Link to={"/about"}>
                      <button className="primary-btn">
                        {`Let's Talk`}
                        <img src={buttonShape} draggable="false" />
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
                <div></div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="bg-[url('/images/banner-bg2.jpg')] bg-cover bg-left lg:bg-center bg-no-repeat h-[750px] sm:h-[700px] md:h-[750px] lg:h-[760px] xl:h-[960px] flex items-center">
            <div className="Container">
              <div className="pt-36">
                <div className="relative banner-content">
                  <h5 className="font-AlbertSans text-PrimaryColor-0 font-medium">
                    NATURAL ENVIRONMENT
                  </h5>
                  <h1 className="font-AlbertSans font-extrabold text-white text-[30px] sm:text-[56px] md:text-[70px] lg:text-[50px] xl:text-[60px] 2xl:text-[68px]">
                    Be Safe Controls
                  </h1>
                  <h1 className="font-AlbertSans font-extrabold text-white text-[30px] sm:text-[56px] md:text-[70px] lg:text-[50px] xl:text-[60px] 2xl:text-[68px] -mt-3 sm:-mt-5 md:-mt-7 lg:-mt-5">
                    Environment
                  </h1>
                  <p className="font-AlbertSans text-lg text-white mb-10">
                    Professionally optimize interdependent intellectual
                    interoperable <br className="hidden md:block" /> connect
                    best practices. Progressively
                    <br className="hidden sm:block md:hidden" /> fabricate done
                  </p>
                  <div className="flex flex-col sm:flex-row gap-5">
                    <Link to={"/about"}>
                      <button className="primary-btn">
                        {`Let's Talk`}
                        <img src={buttonShape} draggable="false" />
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
                <div></div>
              </div>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
