/* eslint-disable no-unused-vars */
import subTitleShape from "/images/title-shape-2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import GallaryCard from "./GallaryCard";
import { Link } from "react-router-dom";
import { CiMobile3 } from "react-icons/ci";
import { FaAnglesRight } from "react-icons/fa6";
import thumb from "/images/gallery-1.jpg";
import thumb2 from "/images/gallery-2.jpg";
import thumb3 from "/images/gallery-3.jpg";
import thumb4 from "/images/gallery-4.jpg";
import thumb5 from "/images/gallery-5.jpg";

const GallaryData = [
  {
    id: 1,
    thumb: thumb,
    title: "Animal",
    subTitle: "Amphibians",
  },
  {
    id: 2,
    thumb: thumb2,
    title: "Animal",
    subTitle: "Amphibians",
  },
  {
    id: 3,
    thumb: thumb3,
    title: "Animal",
    subTitle: "Amphibians",
  },
  {
    id: 4,
    thumb: thumb4,
    title: "Animal",
    subTitle: "Amphibians",
  },
  {
    id: 5,
    thumb: thumb5,
    title: "Animal",
    subTitle: "Amphibians",
  },
  {
    id: 6,
    thumb: thumb3,
    title: "Animal",
    subTitle: "Amphibians",
  },
];

const Gallary = () => {
  const settings = {
    loop: true,
    spaceBetween: -1,
    speed: 1000,
    autoplay: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 5,
      },
    },
  };
  return (
    <section className="relative">
      <div className="Container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center">
          <div>
            <h5 className="font-AlbertSans font-semibold text-PrimaryColor-0 flex items-center gap-2">
              <img src={subTitleShape} draggable="false" />
              ZOO PHOTO GALLERY!
            </h5>
            <h1 className="font-AlbertSans font-bold text-xl leading-7 sm:text-[36px] sm:leading-[46px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[38px] xl:leading-[48px] 2xl:text-[46px] 2xl:leading-[56px] text-HeadingColor-0 mt-[14px] mb-3">
              Discover the Animal Kingdom <br />
              Here at Our Zoo
            </h1>
          </div>
          <div className="flex lg:justify-end">
            <Link to={"/contact"}>
              <button className="primary-btn3">
                {`Contact Us`}
                <FaAnglesRight />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-[70px] lg:mt-[50px]">
        <Swiper {...settings}>
          {GallaryData.map(({ id, thumb, title, subTitle }) => {
            return (
              <>
                <SwiperSlide key={id}>
                  <div>
                    <GallaryCard
                      thumb={thumb}
                      title={title}
                      subTitle={subTitle}
                    />
                  </div>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </div>
      <div className="bg-SecondaryColor-0 py-[60px]">
        <div className="Container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-0 md:items-center">
            <div className="border-r border-BorderColor-0">
              <h4 className="font-AlbertSans font-medium xl:text-lg 2xl:text-xl text-white">{`Don't Procrastinate in the Workplace`}</h4>
              <h2 className="font-AlbertSans font-semibold lg:text-[22px] 2xl:text-[26px] text-white mt-3">
                Organize Your Workspace Now
              </h2>
            </div>
            <div className="border-r border-BorderColor-0 text-center flex md:justify-center gap-2 items-center">
              <div className="flex justify-center text-white">
                <CiMobile3 size={"60"} />
              </div>
              <div className="text-left">
                <p className="font-AlbertSans text-white mb-1">Call Any Time</p>
                <Link to={"/"}>
                  <button className="font-AlbertSans font-semibold text-xl text-white">+31 65 792 63 11</button>
                </Link>
              </div>
            </div>
            <div className="flex md:justify-center">
              <Link to={"/contact"}>
                <button className="primary-btn3">
                  {`Contact Us`}
                  <FaAnglesRight />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallary;
