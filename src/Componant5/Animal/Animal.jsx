import { FaPlus } from "react-icons/fa6";
import animalIcon from "/images/animal-icon1.png";
import animalIcon2 from "/images/animal-icon-2.png";
import animalIcon3 from "/images/animal-icon-3.png";
import animalIcon4 from "/images/animal-icon-4.png";
import animalIcon5 from "/images/animal-icon-5.png";
import animalIcon6 from "/images/animal-icon-6.png";


const Animal = () => {
  return (
    <section className="relative pt-[160px] pb-[120px] bg-[#f5f5f5] bg-cover bg-no-repeat bg-center">
      <div className="Container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-7 items-center">
          <div className="rounded-md overflow-hidden bg-[#e6e7e9] text-center relative group pt-10 pb-8 before:absolute before:left-0 before:top-0 before:w-full before:h-0 before:bg-[url('/images/animal-5.png')] before:bg-no-repeat before:bg-cover before:bg-center before:transition-all before:duration-500 hover:before:h-full">
            <div className="w-[80px] h-[80px] bg-white flex justify-center items-center rounded-full m-auto">
              <img src={animalIcon} />
            </div>
            <h4 className="font-AlbertSans font-semibold text-[22px] text-HeadingColor-0 mt-3">
              Giraffes
            </h4>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 transition-all duration-500 group-hover:scale-100">
              <button className="h-[45px] w-[45px] rounded-md bg-PrimaryColor-0 flex justify-center items-center relative z-10 m-auto">
                <span className="text-white">
                  <FaPlus />
                </span>
              </button>
            </div>
          </div>
          <div className="rounded-md overflow-hidden bg-[#e6e7e9] text-center relative group pt-10 pb-8 before:absolute before:left-0 before:top-0 before:w-full before:h-0 before:bg-[url('/images/animal-2.png')] before:bg-no-repeat before:bg-cover before:bg-center before:transition-all before:duration-500 hover:before:h-full">
            <div className="w-[80px] h-[80px] bg-white flex justify-center items-center rounded-full m-auto">
              <img src={animalIcon2} />
            </div>
            <h4 className="font-AlbertSans font-semibold text-[22px] text-HeadingColor-0 mt-3">
              Tiger
            </h4>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 transition-all duration-500 group-hover:scale-100">
              <button className="h-[45px] w-[45px] rounded-md bg-PrimaryColor-0 flex justify-center items-center relative z-10 m-auto">
                <span className="text-white">
                  <FaPlus />
                </span>
              </button>
            </div>
          </div>
          <div className="rounded-md overflow-hidden bg-[#e6e7e9] text-center relative group pt-10 pb-8 before:absolute before:left-0 before:top-0 before:w-full before:h-0 before:bg-[url('/images/animal-3.png')] before:bg-no-repeat before:bg-cover before:bg-center before:transition-all before:duration-500 hover:before:h-full">
            <div className="w-[80px] h-[80px] bg-white flex justify-center items-center rounded-full m-auto">
              <img src={animalIcon3} />
            </div>
            <h4 className="font-AlbertSans font-semibold text-[22px] text-HeadingColor-0 mt-3">
              Lion
            </h4>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 transition-all duration-500 group-hover:scale-100">
              <button className="h-[45px] w-[45px] rounded-md bg-PrimaryColor-0 flex justify-center items-center relative z-10 m-auto">
                <span className="text-white">
                  <FaPlus />
                </span>
              </button>
            </div>
          </div>
          <div className="rounded-md overflow-hidden bg-[#e6e7e9] text-center relative group pt-10 pb-8 before:absolute before:left-0 before:top-0 before:w-full before:h-0 before:bg-[url('/images/animal-4.png')] before:bg-no-repeat before:bg-cover before:bg-center before:transition-all before:duration-500 hover:before:h-full">
            <div className="w-[80px] h-[80px] bg-white flex justify-center items-center rounded-full m-auto">
              <img src={animalIcon4} />
            </div>
            <h4 className="font-AlbertSans font-semibold text-[22px] text-HeadingColor-0 mt-3">
              Elephent
            </h4>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 transition-all duration-500 group-hover:scale-100">
              <button className="h-[45px] w-[45px] rounded-md bg-PrimaryColor-0 flex justify-center items-center relative z-10 m-auto">
                <span className="text-white">
                  <FaPlus />
                </span>
              </button>
            </div>
          </div>
          <div className="rounded-md overflow-hidden bg-[#e6e7e9] text-center relative group pt-10 pb-8 before:absolute before:left-0 before:top-0 before:w-full before:h-0 before:bg-[url('/images/animal-1.png')] before:bg-no-repeat before:bg-cover before:bg-center before:transition-all before:duration-500 hover:before:h-full">
            <div className="w-[80px] h-[80px] bg-white flex justify-center items-center rounded-full m-auto">
              <img src={animalIcon5} />
            </div>
            <h4 className="font-AlbertSans font-semibold text-[22px] text-HeadingColor-0 mt-3">
              Zebra
            </h4>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 transition-all duration-500 group-hover:scale-100">
              <button className="h-[45px] w-[45px] rounded-md bg-PrimaryColor-0 flex justify-center items-center relative z-10 m-auto">
                <span className="text-white">
                  <FaPlus />
                </span>
              </button>
            </div>
          </div>
          <div className="rounded-md overflow-hidden bg-[#e6e7e9] text-center relative group pt-10 pb-8 before:absolute before:left-0 before:top-0 before:w-full before:h-0 before:bg-[url('/images/animal-6.png')] before:bg-no-repeat before:bg-cover before:bg-center before:transition-all before:duration-500 hover:before:h-full">
            <div className="w-[80px] h-[80px] bg-white flex justify-center items-center rounded-full m-auto">
              <img src={animalIcon6} />
            </div>
            <h4 className="font-AlbertSans font-semibold text-[22px] text-HeadingColor-0 mt-3">
              Monkey
            </h4>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 transition-all duration-500 group-hover:scale-100">
              <button className="h-[45px] w-[45px] rounded-md bg-PrimaryColor-0 flex justify-center items-center relative z-10 m-auto">
                <span className="text-white">
                  <FaPlus />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Animal;
