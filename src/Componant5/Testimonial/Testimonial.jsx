/* eslint-disable no-unused-vars */
import testiImg from "/images/testi-author-1-1.png";
import testiImg2 from "/images/testi-author-2-1.png";
import testiShape from "/images/testi-quote-6.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { MdOutlineStarPurple500 } from "react-icons/md";
import TestimonialCard from "./TestimonialCard";
import subTitleShape from "/images/title-shape-2.png";

const testiData = [
  {
    id: 1,
    testiImg: testiImg,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: "Jhon D. Alexon",
    testiDesignation: "Zoo Visitors",
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
    testiName: "Anjelina Watson",
    testiDesignation: "Tourist",
    testiDesc: `Appropriately administrate proactive value with to
                niche markets. Dramatically target market position
                idea after high quality best practice. Dramatically 
                synergize open source service`,
    testiShape: testiShape,
  },
  {
    id: 3,
    testiImg: testiImg,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: "Jhon D. Alexon",
    testiDesignation: "Zoo Visitors",
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
    spaceBetween: 0,
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
        slidesPerView: 2,
      },
      1400: {
        slidesPerView: 2,
      },
    },
  };
  return (
    <section className="py-28 overflow-hidden bg-[#fbfbfb]">
      <div className="Container">
        <div className="text-center">
          <h5 className="font-AlbertSans font-semibold text-PrimaryColor-0 flex items-center justify-center gap-2">
            <img src={subTitleShape} draggable="false" />
            TESTIMINIAL
          </h5>
          <h1 className="font-AlbertSans font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[40px] xl:leading-[50px] 2xl:text-[46px] 2xl:leading-[56px] text-HeadingColor-0 mt-[14px] mb-3">
            Zoo Impressions & Reviews
          </h1>
        </div>
        <div className="mt-[46px]">
          <Swiper {...settings}>
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
                      <div className="pt-5 pb-2">
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
    </section>
  );
};

export default Testimonial;
