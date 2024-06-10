/* eslint-disable no-unused-vars */
import testiImg from "/images/testi-profile.png";
import testiImg2 from "/images/testi-profile2.png";
import thumbShape from "/images/testimonial-circle.png";
import testiShape from "/images/envato.png";
import testiShape2 from "/images/amazon.png";
import testiMainShape from "/images/testi2-shape.png";
import { Swiper, SwiperSlide } from "swiper/react";
import subTitleShape from "/images/sub-title-shape.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Thumbs } from "swiper/modules";
import { MdOutlineStarPurple500 } from "react-icons/md";
import TestimonialCard from "./TestimonialCard";

const testiData = [
  {
    id: 1,
    testiImg: testiImg,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: "Anjelina Watson",
    testiDesignation: "Web Developer",
    testiDesc: `Appropriately administrate proactive value with to
                niche markets. Dramatically target market position
                idea after high quality best practice. Dramatically 
                synergize open source service`,
    testiShape: testiShape,
  },
  {
    id: 2,
    testiImg: testiImg2,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: "Jhon D. Alexon",
    testiDesignation: "UI/UX Designer",
    testiDesc: `Appropriately administrate proactive value with to
                niche markets. Dramatically target market position
                idea after high quality best practice. Dramatically 
                synergize open source service`,
    testiShape: testiShape2,
  },
  {
    id: 3,
    testiImg: testiImg,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: "Anjelina Watson",
    testiDesignation: "Web Developer",
    testiDesc: `Appropriately administrate proactive value with to
                niche markets. Dramatically target market position
                idea after high quality best practice. Dramatically 
                synergize open source service`,
    testiShape: testiShape,
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
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 1,
      },
      1400: {
        slidesPerView: 1,
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
    <section className="py-28 bg-[url('/images/testimonial-bg2.jpg')] bg-no-repeat bg-cover bg-right lg:bg-center relative z-10 overflow-hidden testimonial">
      <img
        src={testiMainShape}
        draggable="false"
        className="absolute -z-10 top-0 right-0 animate-dance2 hidden md:block"
      />
      <div className="Container">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div>
            <img
              src={thumbShape}
              className="-ml-[18rem] 2xl:-ml-[16rem] !w-[inherit] animate-rotational hidden lg:block"
            />
          </div>
          <div>
            <div>
              <h5 className="font-AlbertSans font-medium text-PrimaryColor-0 flex items-center gap-2">
                <img src={subTitleShape} draggable="false" />
                TESTIMONIALS
              </h5>
              <h1 className="font-AlbertSans font-bold text-xl leading-7 sm:text-[36px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[40px] xl:leading-[50px] 2xl:text-[46px] 2xl:leading-[56px] text-HeadingColor-0 mt-5 mb-3">
                Clients Best Feedback About
                <br />
                Echofy Provission
              </h1>
            </div>
            <div className="mt-[46px]">
              <Swiper
                {...settings}
                pagination={pagination}
                modules={[Pagination]}
              >
                <div>
                  {testiData.map(
                    ({
                      id,
                      testiImg,
                      testiRatingIcon,
                      testiName,
                      testiDesignation,
                      testiDesc,
                      testiShape,
                    }) => {
                      return (
                        <SwiperSlide key={id}>
                          <div className="pb-[80px] pt-3">
                            <TestimonialCard
                              testiImg={testiImg}
                              testiRatingIcon={testiRatingIcon}
                              testiName={testiName}
                              testiDesignation={testiDesignation}
                              testiDesc={testiDesc}
                              testiShape={testiShape}
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
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
