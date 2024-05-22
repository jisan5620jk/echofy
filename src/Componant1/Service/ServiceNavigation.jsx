import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { useSwiper } from "swiper/react";

const TestimonialNavigation = () => {
  const swiper = useSwiper();

  return (
    <div className="absolute top-0 md:right-0 z-10 flex gap-3">
      <button
        className="w-[56px] h-[56px] rounded-full overflow-hidden relative bg-PrimaryColor-0 flex items-center text-lg text-white justify-center transition-all duration-500 hover:text-PrimaryColor-0 z-10 after:absolute after:top-[0] after:left-[0] after:bg-[#f1f8e6] after:w-full after:h-full after:scale-0 after:-z-10 after:transition-all after:duration-500 hover:after:scale-100"
        onClick={() => swiper.slideNext()}
      >
        <FaArrowLeftLong />
      </button>
      <button
        className="w-[56px] h-[56px] rounded-full overflow-hidden relative bg-[#f1f8e6] flex items-center text-lg text-PrimaryColor-0 justify-center transition-all duration-500 hover:text-white z-10 after:absolute after:top-[0] after:left-[0] after:bg-PrimaryColor-0 after:w-full after:h-full after:scale-0 after:-z-10 after:transition-all after:duration-500 hover:after:scale-100"
        onClick={() => swiper.slidePrev()}
      >
        <FaArrowRightLong />
      </button>
    </div>
  );
};

export default TestimonialNavigation;
