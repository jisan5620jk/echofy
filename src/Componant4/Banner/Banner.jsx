import { Link } from "react-router-dom";
import { FaArrowRightLong, FaStarOfLife } from "react-icons/fa6";
import heroImg from "/images/hero4-image.png";
import bannerShape from "/images/hero4-shape.png";

const Banner = () => {
  return (
    <section className="bg-[url('/images/hero4-bg.jpg')] bg-cover bg-left lg:bg-center bg-no-repeat h-[600px] md:h-[650px] lg:h-[700px] xl:h-[802px] flex items-center relative">
      <img
        src={bannerShape}
        className="absolute lg:top-10 2xl:top-20 lg:left-10 2xl:left-[5%] animate-rotational lg:block hidden"
      />
      <div className="Container">
        <div className="relative">
          <h5 className="font-AlbertSans text-PrimaryColor-0 font-medium mb-3 flex items-center gap-2">
            <FaStarOfLife /> SOLUTIONS FOR ENVIROMENTAL PROTECTION
          </h5>
          <h1 className="font-AlbertSans font-extrabold text-HeadingColor-0 text-[30px] leading-[38px] sm:text-[56px] sm:leading-[56px] md:text-[66px] md:leading-[80px] xl:text-[74px] xl:leading-[82px] 2xl:text-[85px] 2xl:leading-[92px]">
            Renewable Solar
            <br />
            <span className="flex items-center gap-3 md:gap-16">
              Solutions <img src={heroImg} className="w-4/12 md:w-[inherit]"/>
            </span>
          </h1>
          <p className="font-AlbertSans text-TextColor-0 mt-4">
            Sometimes goods can arrive early when they being brought into the
            solution other times <br className="hidden md:block"/> need a place for can a headquarters have
            enough space your needs.
          </p>
          <div className="mt-11 inline-block">
            <Link to={"/about"}>
              <button className="primary-btn2">
                {`Find Out More`}
                <FaArrowRightLong />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
