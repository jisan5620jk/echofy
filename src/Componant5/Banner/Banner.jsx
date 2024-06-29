import { useState } from "react";
import FsLightbox from "fslightbox-react";
import { Link } from "react-router-dom";
import { FaAnglesRight, FaLocationDot } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./banner.css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { IoIosSend, IoMdPlay } from "react-icons/io";

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
    <div className="relative z-10 banner5">
      <Swiper {...settings} pagination={pagination} modules={[Pagination]}>
        <SwiperSlide>
          <section className="bg-[url('/images/hero-bg-1.jpg')] bg-cover bg-left lg:bg-center bg-no-repeat h-[750px] sm:h-[730px] md:h-[750px] lg:h-[950px] xl:h-[950px] flex items-center relative">
            <div className="Container">
              <div className="flex items-center pt-36 gap-16 lg:gap-0">
                <div className="relative banner-content">
                  <h5 className="font-AlbertSans text-PrimaryColor-0 text-[22px] font-medium bg-[#030804] inline-block px-[22px] py-1 border border-BorderColor4-0 rounded-md mb-1">
                    Project Our Animal
                  </h5>
                  <h1 className="font-AlbertSans font-extrabold text-white text-[30px] sm:text-[56px] md:text-[70px] lg:text-[50px] xl:text-[60px]">
                    Small Effort Make
                  </h1>
                  <h1 className="font-AlbertSans font-extrabold text-white text-[30px] sm:text-[56px] md:text-[70px] lg:text-[50px] xl:text-[60px] -mt-3 sm:-mt-4 md:-mt-6 lg:-mt-5">
                    Big Change
                  </h1>
                  <p className="font-AlbertSans text-lg text-TextColor2-0 mt-3 mb-11">
                    Animals World accreditation standards. Members are proactive
                    in <br className="hidden md:block" /> both undertaking and
                    applying animal
                  </p>
                  <div>
                    <Link to={"/about"}>
                      <button className="primary-btn3">
                        {`Discover With Us`}
                        <FaAnglesRight />
                      </button>
                    </Link>
                  </div>
                  <div className="banner-contact hidden xl:flex gap-[100px] items-center -rotate-90 absolute top-full -translate-y-1/2 md:-left-[23%] lg:-left-[35%] xl:-left-[55%] 2xl:-left-[80%]">
                    <ul className="flex items-center gap-[34px]">
                      <li>
                        <Link
                          to={"/"}
                          className="flex gap-2 font-AlbertSans text-TextColor2-0 text-[17px] items-center"
                        >
                          <IoIosSend
                            size={"22"}
                            className="text-PrimaryColor-0"
                          />
                          info@example.com
                        </Link>
                      </li>
                      <li>
                        <p className="flex gap-2 font-AlbertSans text-TextColor2-0 text-[17px] items-center pl-8 border-l border-BorderColor-0">
                          <FaLocationDot
                            size={"18"}
                            className="text-PrimaryColor-0"
                          />
                          27 Division St, Sans fransisco , USA
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="relative -bottom-[9.1rem] bg-[url('/images/video-bg.png')] bg-no-repeat bg-cover bg-center rounded-md 2xl:inline-block hidden">
                <div className="flex items-center justify-center gap-[80px] py-[85px] px-[130px]">
                  <h4 className="text-lg font-AlbertSans font-medium text-white">
                    Live Cam
                  </h4>
                  <button className="h-[50px] w-[50px] rounded-full bg-PrimaryColor-0 flex justify-center items-center relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:opacity-50 before:-z-10 before:rounded-full before:animate-ping">
                    <IoMdPlay
                      size={"22"}
                      className="text-white"
                      onClick={() => setToggler(!toggler)}
                    />
                  </button>
                </div>
                <FsLightbox
                  toggler={toggler}
                  sources={[
                    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                  ]}
                />
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="bg-[url('/images/hero-bg-2.jpg')] bg-cover bg-left lg:bg-center bg-no-repeat h-[750px] sm:h-[730px] md:h-[750px] lg:h-[950px] xl:h-[950px] flex items-center relative">
            <div className="Container">
              <div className="flex items-center pt-36 gap-16 lg:gap-0">
                <div className="relative banner-content">
                  <h5 className="font-AlbertSans text-PrimaryColor-0 text-[22px] font-medium bg-[#030804] inline-block px-[22px] py-1 border border-BorderColor4-0 rounded-md mb-1">
                    Project Our Animal
                  </h5>
                  <h1 className="font-AlbertSans font-extrabold text-white text-[30px] sm:text-[56px] md:text-[70px] lg:text-[50px] xl:text-[60px]">
                    Small Effort Make
                  </h1>
                  <h1 className="font-AlbertSans font-extrabold text-white text-[30px] sm:text-[56px] md:text-[70px] lg:text-[50px] xl:text-[60px] -mt-3 sm:-mt-4 md:-mt-6 lg:-mt-5">
                    Big Change
                  </h1>
                  <p className="font-AlbertSans text-lg text-TextColor2-0 mt-3 mb-11">
                    Animals World accreditation standards. Members are proactive
                    in <br className="hidden md:block" /> both undertaking and
                    applying animal
                  </p>
                  <div>
                    <Link to={"/about"}>
                      <button className="primary-btn3">
                        {`Discover With Us`}
                        <FaAnglesRight />
                      </button>
                    </Link>
                  </div>
                  <div className="banner-contact hidden xl:flex gap-[100px] items-center -rotate-90 absolute top-full -translate-y-1/2 md:-left-[23%] lg:-left-[35%] xl:-left-[55%] 2xl:-left-[80%]">
                    <ul className="flex items-center gap-[34px]">
                      <li>
                        <Link
                          to={"/"}
                          className="flex gap-2 font-AlbertSans text-TextColor2-0 text-[17px] items-center"
                        >
                          <IoIosSend
                            size={"22"}
                            className="text-PrimaryColor-0"
                          />
                          info@example.com
                        </Link>
                      </li>
                      <li>
                        <p className="flex gap-2 font-AlbertSans text-TextColor2-0 text-[17px] items-center pl-8 border-l border-BorderColor-0">
                          <FaLocationDot
                            size={"18"}
                            className="text-PrimaryColor-0"
                          />
                          27 Division St, Sans fransisco , USA
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="relative -bottom-[9.1rem] bg-[url('/images/video-bg.png')] bg-no-repeat bg-cover bg-center rounded-md 2xl:inline-block hidden">
                <div className="flex items-center justify-center gap-[80px] py-[85px] px-[130px]">
                  <h4 className="text-lg font-AlbertSans font-medium text-white">
                    Live Cam
                  </h4>
                  <button className="h-[50px] w-[50px] rounded-full bg-PrimaryColor-0 flex justify-center items-center relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:opacity-50 before:-z-10 before:rounded-full before:animate-ping">
                    <IoMdPlay
                      size={"22"}
                      className="text-white"
                      onClick={() => setToggler(!toggler)}
                    />
                  </button>
                </div>
                <FsLightbox
                  toggler={toggler}
                  sources={[
                    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                  ]}
                />
              </div>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
