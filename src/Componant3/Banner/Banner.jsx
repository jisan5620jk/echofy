import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./banner.css";
import "swiper/css/pagination";
import { FaArrowRightLong } from "react-icons/fa6";
import BannerNavigation from "./BannerNavigation";

const Banner = () => {
  const settings = {
    loop: true,
    speed: 2000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    duration: 3000,
  };
  return (
    <div className="relative">
      <Swiper {...settings}>
        <SwiperSlide>
          <section className="bg-[url('/public/images/hero2-bg.png')] bg-cover bg-center bg-no-repeat h-[1000px] sm:h-[1200px] md:h-[1350px] lg:h-[960px] xl:h-[952px] flex items-center">
            <div className="Container">
              <div className="relative banner-content text-center pt-[47px]">
                <h5 className="font-AlbertSans text-white font-medium mb-8">
                  SOLUTIONS FOR ENVIROMENTAL PROTECTION
                </h5>
                <h1 className="font-AlbertSans font-extrabold text-white text-[30px] sm:text-[56px] sm:leading-[56px] md:text-[66px] md:leading-[80px] xl:text-[76px] xl:leading-[90px]">
                  YOUR JOURNEY TO SOLAR
                </h1>
                <h1 className="font-AlbertSans font-extrabold text-white text-[30px] sm:text-[56px] sm:leading-[56px] md:text-[66px] md:leading-[80px] xl:text-[76px] xl:leading-[90px] -mt-4 sm:-mt-4 md:-mt-6 lg:mt-2">
                  EMPOWERMENT
                </h1>
                <div className="flex justify-center m-auto mt-6">
                  <Link to={"/about"}>
                    <button className="primary-btn2">
                      {`Find Out More`}
                      <FaArrowRightLong />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="bg-[url('/public/images/hero2-bg.png')] bg-cover bg-center bg-no-repeat h-[1000px] sm:h-[1200px] md:h-[1350px] lg:h-[960px] xl:h-[952px] flex items-center">
            <div className="Container">
              <div className="relative banner-content text-center pt-[47px]">
                <h5 className="font-AlbertSans text-white font-medium mb-8">
                  SOLUTIONS FOR ENVIROMENTAL PROTECTION
                </h5>
                <h1 className="font-AlbertSans font-extrabold text-white text-[30px] sm:text-[56px] sm:leading-[56px] md:text-[66px] md:leading-[80px] xl:text-[76px] xl:leading-[90px]">
                  YOUR JOURNEY TO SOLAR
                </h1>
                <h1 className="font-AlbertSans font-extrabold text-white text-[30px] sm:text-[56px] sm:leading-[56px] md:text-[66px] md:leading-[80px] xl:text-[76px] xl:leading-[90px] -mt-4 sm:-mt-4 md:-mt-6 lg:mt-2">
                  EMPOWERMENT
                </h1>
                <div className="flex justify-center m-auto mt-6">
                  <Link to={"/about"}>
                    <button className="primary-btn2">
                      {`Let's Talk`}
                      <FaArrowRightLong />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <BannerNavigation />
      </Swiper>
    </div>
  );
};

export default Banner;
