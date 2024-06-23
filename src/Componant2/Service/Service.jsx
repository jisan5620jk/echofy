/* eslint-disable no-unused-vars */
import serviceImg from "/images/service2-thumb.jpg";
import serviceImg2 from "/images/service2-thumb2.jpg";
import serviceImg3 from "/images/service2-thumb3.jpg";
import serviceIcon from "/images/service2-icon.png";
import serviceIcon2 from "/images/service2-icon2.png";
import serviceIcon3 from "/images/service2-icon3.png";
import serviceShape from "/images/service-shape.png";
import subTitleShape from "/images/sub-title-shape.png";
import serviceMainShape1 from "/images/testi-shape-1.png";
import serviceMainShape2 from "/images/testi-shape-2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import ServiceCard from "./ServiceCard";
import { GoArrowUpRight } from "react-icons/go";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const ServiceData = [
  {
    id: 1,
    serviceImg: serviceImg,
    serviceIcon: serviceIcon,
    serviceUrl: "/service_details",
    serviceButton: <GoArrowUpRight />,
    serviceButton2: "Discover More",
    serviceTitle: "Tree Plantation",
    serviceDesc:
      "Alternative innovation to ethical network environmental whiteboard",
    serviceShape: serviceShape,
  },
  {
    id: 2,
    serviceImg: serviceImg2,
    serviceIcon: serviceIcon2,
    serviceUrl: "/service_details",
    serviceButton: <GoArrowUpRight />,
    serviceButton2: "Discover More",
    serviceTitle: "Dust Recycling",
    serviceDesc:
      "Alternative innovation to ethical network environmental whiteboard",
    serviceShape: serviceShape,
  },
  {
    id: 3,
    serviceImg: serviceImg3,
    serviceIcon: serviceIcon3,
    serviceUrl: "/service_details",
    serviceButton: <GoArrowUpRight />,
    serviceButton2: "Discover More",
    serviceTitle: "Cleaning Ocean",
    serviceDesc:
      "Alternative innovation to ethical network environmental whiteboard",
    serviceShape: serviceShape,
  },
  {
    id: 4,
    serviceImg: serviceImg,
    serviceIcon: serviceIcon,
    serviceUrl: "/service_details",
    serviceButton: <GoArrowUpRight />,
    serviceButton2: "Discover More",
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
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + ' pagination-bullet"></span>';
    },
  };
  return (
    <section className="service relative pt-28 pb-[120px] bg-[#f5f8ed] z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-1/2 2xl:before:h-[54.8%] before:bg-[url('/images/service2-bg.jpg')] before:-z-10 before:bg-cover before:bg-center before:bg-no-repeat">
      <img
        src={serviceMainShape1}
        draggable="false"
        className="absolute top-32 left-20 animate-dance2 hidden lg:block"
      />
      <img
        src={serviceMainShape2}
        draggable="false"
        className="absolute top-32 right-20 animate-movebtn hidden lg:block"
      />
      <div className="Container">
        <div className="text-center">
          <h5 className="font-AlbertSans font-medium text-PrimaryColor-0 flex items-center gap-2 justify-center">
            <img src={subTitleShape} draggable="false" />
            OUR SERVICES
          </h5>
          <h1 className="font-AlbertSans font-bold text-xl leading-6 sm:text-[38px] sm:leading-[48px] md:text-[40px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[40px] xl:leading-[50px] 2xl:text-[46px] 2xl:leading-[56px] text-white mt-5 mb-3 pb-9">
            Echofy Provide Environment <br />
            Best Leading Services
          </h1>
        </div>
        <div className="mt-[40px]">
          <Swiper {...settings} pagination={pagination} modules={[Pagination]}>
            {ServiceData.map(
              ({
                id,
                serviceImg,
                serviceIcon,
                serviceUrl,
                serviceButton,
                serviceButton2,
                serviceTitle,
                serviceDesc,
                serviceShape,
              }) => {
                return (
                  <>
                    <SwiperSlide key={id}>
                      <div className="pb-[100px]">
                        <ServiceCard
                          serviceImg={serviceImg}
                          serviceIcon={serviceIcon}
                          serviceUrl={serviceUrl}
                          serviceButton={serviceButton}
                          serviceButton2={serviceButton2}
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
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Service;
