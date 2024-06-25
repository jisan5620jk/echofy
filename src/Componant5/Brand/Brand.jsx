import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import brandThumb from "/images/brand-1.png";
import brandThumb2 from "/images/brand-2.png";
import brandThumb3 from "/images/brand-3.png";
import brandThumb4 from "/images/brand-4.png";
import brandThumb5 from "/images/brand-5.png";
import brandShape from "/images/brand-shape.png";

const Brand = () => {
  const settings = {
    loop: true,
    spaceBetween: 30,
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
      1400: {
        slidesPerView: 5,
      },
    },
  };
  return (
    <div className="bg-[#f5f8ed]">
      <div className="Container relative z-10">
        <div className="pt-[80px] pb-[72px] px-10 rounded-md bg-[url('/images/brand-bg.jpg')] bg-no-repeat bg-center bg-cover text-center relative">
          <img
            src={brandShape}
            draggable="false"
            className="absolute -z-10 -top-[50px] -right-[60px] animate-dance2"
          />
          <h4 className="text-center text-lg sm:text-2xl text-white font-AlbertSans font-semibold inline-block relative before:absolute before:top-1/2 before:-translate-y-1/2 before:-left-12 before:h-[1px] before:w-10 before:bg-white after:absolute after:top-1/2 after:-translate-y-1/2 after:-right-12 after:h-[1px] after:w-10 after:bg-white mb-14">
            All over the world 100,000+ Customers
          </h4>
          <Swiper {...settings}>
            <SwiperSlide>
              <div>
                <img src={brandThumb} draggable="false" className="m-auto" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={brandThumb2} draggable="false" className="m-auto" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={brandThumb3} draggable="false" className="m-auto" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={brandThumb4} draggable="false" className="m-auto" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={brandThumb5} draggable="false" className="m-auto" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={brandThumb} draggable="false" className="m-auto" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Brand;
