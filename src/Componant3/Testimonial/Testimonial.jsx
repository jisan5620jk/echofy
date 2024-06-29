/* eslint-disable no-unused-vars */
import testiImg from "/images/testi-author-1.png";
import testiImg2 from "/images/testi-author-2.png";
import testiImg3 from "/images/testi-author-3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import TestimonialCard from "./TestimonialCard";
import { FaCircle, FaStarOfLife } from "react-icons/fa6";
import { IoStar } from "react-icons/io5";

const testiData = [
  {
    id: 1,
    testiImg: testiImg,
    testiRatingIcon: <IoStar />,
    testiName: "David Miller",
    testIcon: <FaCircle />,
    testiDesignation: "Web Developer",
    testiDesc: `Sometimes goods can arrive early when clients
                being brought into the solution creative design
                need place to stored for short goods can arrive
                desig have space your needs.`,
  },
  {
    id: 2,
    testiImg: testiImg2,
    testiRatingIcon: <IoStar />,
    testiName: "Jhon D. Alexon",
    testIcon: <FaCircle />,
    testiDesignation: "UI/UX Designer",
    testiDesc: `Sometimes goods can arrive early when clients
                being brought into the solution creative design
                need place to stored for short goods can arrive
                desig have space your needs.`,
  },
  {
    id: 3,
    testiImg: testiImg3,
    testIcon: <FaCircle />,
    testiRatingIcon: <IoStar />,
    testiName: "Al-Amin Islam",
    testiDesignation: "Web Developer",
    testiDesc: `Sometimes goods can arrive early when clients
                being brought into the solution creative design
                need place to stored for short goods can arrive
                desig have space your needs.`,
  },
  {
    id: 4,
    testiImg: testiImg,
    testIcon: <FaCircle />,
    testiRatingIcon: <IoStar />,
    testiName: "David Miller",
    testiDesignation: "Web Developer",
    testiDesc: `Sometimes goods can arrive early when clients
                being brought into the solution creative design
                need place to stored for short goods can arrive
                desig have space your needs.`,
  },
];

const Testimonial = () => {
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
      1400: {
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
    <section className="py-28 bg-white relative z-10 overflow-hidden testimonial">
      <div className="Container">
        <div className="text-center">
          <h5 className="font-AlbertSans font-medium text-PrimaryColor-0 flex items-center gap-2 justify-center">
            <FaStarOfLife />
            TESTIMONIALS
            <FaStarOfLife />
          </h5>
          <h1 className="font-AlbertSans font-bold text-xl leading-7 sm:text-[36px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[40px] xl:leading-[50px] 2xl:text-[46px] 2xl:leading-[56px] text-HeadingColor-0 mt-5 mb-3">
            What Our Clinets Says
          </h1>
        </div>
        <div className="mt-[46px]">
          <Swiper {...settings} pagination={pagination} modules={[Pagination]}>
            <div>
              {testiData.map(
                ({
                  id,
                  testiImg,
                  testiRatingIcon,
                  testiName,
                  testiDesignation,
                  testiDesc,
                }) => {
                  return (
                    <SwiperSlide key={id}>
                      <div className="pb-12 md:pb-[80px] pt-3">
                        <TestimonialCard
                          testiImg={testiImg}
                          testiRatingIcon={testiRatingIcon}
                          testiName={testiName}
                          testiDesignation={testiDesignation}
                          testiDesc={testiDesc}
                        />
                      </div>
                    </SwiperSlide>
                  );
                }
              )}
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
