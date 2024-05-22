/* eslint-disable no-unused-vars */
import serviceImg from "/public/images/service-thumb.png";
import serviceImg2 from "/public/images/service-thumb2.png";
import serviceImg3 from "/public/images/service-thumb3.png";
import serviceIcon from "/public/images/service-icon1.png";
import serviceIcon2 from "/public/images/service-icon2.png";
import serviceIcon3 from "/public/images/service-icon3.png";
import serviceShape from "/public/images/service-shape.png";
import subTitleShape from "/public/images/sub-title-shape.png";
import { Swiper, SwiperSlide } from "swiper/react";
import ServiceNavigation from "./ServiceNavigation";
import ServiceCard from "./ServiceCard";
import { GoArrowUpRight } from "react-icons/go";

const ServiceData = [
  {
    id: 1,
    serviceImg: serviceImg,
    serviceIcon: serviceIcon,
    serviceButton: <GoArrowUpRight />,
    serviceTitle: "Tree Plantation",
    serviceDesc:
      "Alternative innovation to ethical network environmental whiteboard",
    serviceShape: serviceShape,
  },
  {
    id: 2,
    serviceImg: serviceImg2,
    serviceIcon: serviceIcon2,
    serviceButton: <GoArrowUpRight />,
    serviceTitle: "Dust Recycling",
    serviceDesc:
      "Alternative innovation to ethical network environmental whiteboard",
    serviceShape: serviceShape,
  },
  {
    id: 3,
    serviceImg: serviceImg3,
    serviceIcon: serviceIcon3,
    serviceButton: <GoArrowUpRight />,
    serviceTitle: "Cleaning Ocean",
    serviceDesc:
      "Alternative innovation to ethical network environmental whiteboard",
    serviceShape: serviceShape,
  },
  {
    id: 4,
    serviceImg: serviceImg,
    serviceIcon: serviceIcon,
    serviceButton: <GoArrowUpRight />,
    serviceTitle: "Tree Plantation",
    serviceDesc:
      "Alternative innovation to ethical network environmental whiteboard",
    serviceShape: serviceShape,
  },
];

const Service = () => {
  const settings = {
    loop: true,
    spaceBetween: 30,
    speed: 1000,
    autoplay: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  };
  return (
    <section className="relative bg-[url('/public/images/service-bg.jpg')] bg-cover bg-center bg-no-repeat pt-28 pb-[120px]">
      <div className="Container">
        <div className="md:-mb-[11.2rem]">
          <h5 className="font-AlbertSans font-medium text-PrimaryColor-0 flex items-center gap-2">
            <img src={subTitleShape} />
            OUR SERVICES
          </h5>
          <h1 className="font-AlbertSans font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[40px] xl:leading-[50px] 2xl:text-[46px] 2xl:leading-[56px] text-HeadingColor-0 mt-5 mb-3 border-b border-BorderColor2-0 pb-9">
            Echofy Provide Environment <br />
            Best Leading Services
          </h1>
        </div>
        <div className="mt-[40px]">
          <Swiper {...settings}>
              {ServiceData.map(
                ({
                  id,
                  serviceImg,
                  serviceIcon,
                  serviceButton,
                  serviceTitle,
                  serviceDesc,
                  serviceShape,
                }) => {
                  return (
                    <>
                      <SwiperSlide key={id}>
                        <div className="pt-[180px]">
                          <ServiceCard
                            serviceImg={serviceImg}
                            serviceIcon={serviceIcon}
                            serviceButton={serviceButton}
                            serviceTitle={serviceTitle}
                            serviceDesc={serviceDesc}
                            serviceShape={serviceShape}
                          />
                        </div>
                      </SwiperSlide>
                    </>
                  );
                }
              )}
            <ServiceNavigation />
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Service;
