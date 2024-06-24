import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useSwiper } from "swiper/react";

const BannerNavigation = () => {
  const swiper = useSwiper();

  return (
    <div className="flex justify-between w-full absolute px-[10%] top-[80%] md:top-[50%]">
      <button
        className="w-[52px] h-[52px] rounded-full overflow-hidden relative bg-white flex items-center text-xl text-HeadingColor-0 hover:text-white justify-center transition-all duration-500 z-10 after:absolute after:top-[0] after:left-[0] after:bg-PrimaryColor-0 after:w-full after:h-full after:scale-0 after:-z-10 after:transition-all after:duration-500 hover:after:scale-100"
        onClick={() => swiper.slidePrev()}
      >
        <FaArrowLeft />
      </button>
      <button
        className="w-[52px] h-[52px] rounded-full overflow-hidden relative bg-white flex items-center text-xl text-HeadingColor-0 hover:text-white justify-center transition-all duration-500 z-10 after:absolute after:top-[0] after:left-[0] after:bg-PrimaryColor-0 after:w-full after:h-full after:scale-0 after:-z-10 after:transition-all after:duration-500 hover:after:scale-100"
        onClick={() => swiper.slideNext()}
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default BannerNavigation;
