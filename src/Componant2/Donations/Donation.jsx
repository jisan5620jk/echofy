/* eslint-disable no-unused-vars */
import donateImg from "/images/donate-img.jpg";
import donateImg2 from "/images/donate-img2.jpg";
import donateImg3 from "/images/donate-img3.jpg";
import subTitleShape from "/images/sub-title-shape.png";
import serviceMainShape1 from "/images/testi-shape-1.png";
import serviceMainShape2 from "/images/testi-shape-2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import DonationsCard from "./DonationsCard";

const DonationData = [
  {
    id: 1,
    donateImg: donateImg,
    donateUrl: "/donation_inner",
    imgButton: "Donate Now",
    donateTitle: "Fund Raising For Tree Plantation - 2024",
    donateDesc:
      "Cultivate worldwide tailers through nature professionally engineer high",
    donatePercent: "85",
    percentTitle: "Raised :",
    percentNumber: "$780.00",
    percentTitle2: "Gaol :",
    percentNumber2: "$1000.00",
  },
  {
    id: 2,
    donateImg: donateImg2,
    donateUrl: "/donation_inner",
    imgButton: "Donate Now",
    donateTitle: "Fund Raising For Forest Recycling & Repair",
    donateDesc:
      "Cultivate worldwide tailers through nature professionally engineer high",
    donatePercent: "80",
    percentTitle: "Raised :",
    percentNumber: "$700.00",
    percentTitle2: "Gaol :",
    percentNumber2: "$1000.00",
  },
  {
    id: 3,
    donateImg: donateImg3,
    donateUrl: "/donation_inner",
    imgButton: "Donate Now",
    donateTitle: "Environmental Dust Cleaning & Recycling",
    donateDesc:
      "Cultivate worldwide tailers through nature professionally engineer high",
    donatePercent: "90",
    percentTitle: "Raised :",
    percentNumber: "$880.00",
    percentTitle2: "Gaol :",
    percentNumber2: "$1000.00",
  },
  {
    id: 4,
    donateImg: donateImg,
    donateUrl: "/donation_inner",
    imgButton: "Donate Now",
    donateTitle: "Fund Raising For Tree Plantation - 2024",
    donateDesc:
      "Cultivate worldwide tailers through nature professionally engineer high",
    donatePercent: "85",
    percentTitle: "Raised :",
    percentNumber: "$780.00",
    percentTitle2: "Gaol :",
    percentNumber2: "$1000.00",
  },
];

const Donation = () => {
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
    <section className="service relative pt-28 pb-[120px] bg-[#f5f8ed] z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-1/2 before:bg-[url('/images/service2-bg.jpg')] before:-z-10 before:bg-cover before:bg-center before:bg-no-repeat">
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
            DONATIONS
          </h5>
          <h1 className="font-AlbertSans font-bold text-xl leading-6 sm:text-[38px] sm:leading-[48px] md:text-[40px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[40px] xl:leading-[50px] 2xl:text-[46px] 2xl:leading-[56px] text-white mt-5 mb-3 pb-9">
            For Savings Environments <br />
            Donation Money
          </h1>
        </div>
        <div className="mt-[40px]">
          <Swiper {...settings} pagination={pagination} modules={[Pagination]}>
            {DonationData.map(
              ({
                id,
                donateImg,
                imgButton,
                donateDesc,
                donateUrl,
                donateTitle,
                donatePercent,
                percentTitle,
                percentNumber,
                percentTitle2,
                percentNumber2,
              }) => {
                return (
                  <>
                    <SwiperSlide key={id}>
                      <div className="pb-[100px]">
                        <DonationsCard
                          donateImg={donateImg}
                          imgbutton={imgButton}
                          donateUrl={donateUrl}
                          donateTitle={donateTitle}
                          donateDesc={donateDesc}
                          donatePercent={donatePercent}
                          percentTitle={percentTitle}
                          percentNumber={percentNumber}
                          percentTitle2={percentTitle2}
                          percentNumber2={percentNumber2}
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

export default Donation;
