import { Link } from "react-router-dom";
import subTitleShape from "/images/title-shape-2.png";
import { FaAnglesRight } from "react-icons/fa6";

const Donate = () => {
  return (
    <section className="bg-[#e9ebea] py-[120px]">
      <div className="Container">
        <div className="grid grid-cols-3 gap-7">
          <div className="col-span-3 lg:col-span-2 rounded-lg pl-10 md:pl-[74px] pt-28 pb-[120px] bg-[url('/images/donate-thumb-1.png')] bg-no-repeat bg-cover bg-center">
            <h5 className="font-AlbertSans font-semibold text-PrimaryColor-0 flex items-center gap-2">
              <img src={subTitleShape} draggable="false" />
              OUR DONATE
            </h5>
            <h1 className="font-AlbertSans font-bold text-[22px] leading-8 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[40px] xl:leading-[50px] 2xl:text-[46px] 2xl:leading-[56px] text-white mt-[14px] mb-6">
              How Financial Contributions
              <br />
              Drive Impact
            </h1>
            <p className="font-AlbertSans text-TextColor2-0">
              Meh synth Schlitz, tempor duis single-origin coffee ea next level
              in the ethnic <br className="hidden" /> PBR 3 wolf moon beard
              Helvetica. Salvia esse
            </p>
            <ul className="grid grid-cols-2 sm:flex gap-3 my-11">
              <li>
                <button className="font-AlbertSans font-semibold px-3 py-1 overflow-hidden rounded-md text-HeadingColor-0 border-2 transition-all duration-500 border-white hover:text-PrimaryColor-0 hover:border-PrimaryColor-0 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white before:rounded before:transition-all before:duration-500 before:-z-10 hover:before:w-0 hover:before:left-1/2">
                  $100.00
                </button>
              </li>
              <li>
                <button className="font-AlbertSans font-semibold px-3 py-1 overflow-hidden rounded-md text-HeadingColor-0 border-2 transition-all duration-500 border-white hover:text-PrimaryColor-0 hover:border-PrimaryColor-0 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white before:rounded before:transition-all before:duration-500 before:-z-10 hover:before:w-0 hover:before:left-1/2">
                  $200.00
                </button>
              </li>
              <li>
                <button className="font-AlbertSans font-semibold px-3 py-1 overflow-hidden rounded-md text-HeadingColor-0 border-2 transition-all duration-500 border-white hover:text-PrimaryColor-0 hover:border-PrimaryColor-0 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white before:rounded before:transition-all before:duration-500 before:-z-10 hover:before:w-0 hover:before:left-1/2">
                  $300.00
                </button>
              </li>
              <li>
                <button className="font-AlbertSans font-semibold px-3 py-1 overflow-hidden rounded-md text-HeadingColor-0 border-2 transition-all duration-500 border-white hover:text-PrimaryColor-0 hover:border-PrimaryColor-0 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white before:rounded before:transition-all before:duration-500 before:-z-10 hover:before:w-0 hover:before:left-1/2">
                  $400.00
                </button>
              </li>
              <li>
                <button className="font-AlbertSans font-semibold px-3 py-1 overflow-hidden rounded-md text-HeadingColor-0 border-2 transition-all duration-500 border-white hover:text-PrimaryColor-0 hover:border-PrimaryColor-0 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white before:rounded before:transition-all before:duration-500 before:-z-10 hover:before:w-0 hover:before:left-1/2 sm:hidden md:block">
                  $500.00
                </button>
              </li>
            </ul>
            <Link to={"/donation_inner"}>
              <button className="primary-btn3">
                {`Donate Now`}
                <FaAnglesRight />
              </button>
            </Link>
          </div>
          <div className="col-span-3 lg:col-span-1 pl-10 py-28 rounded-lg bg-[url('/images/donate-thumb-2.png')] bg-no-repeat bg-cover bg-center flex items-center">
            <div>
              <h5 className="font-AlbertSans font-medium text-[17px] text-white">
                THE ANIMAL
              </h5>
              <h2 className="font-AlbertSans font-bold text-3xl sm:text-4xl lg:text-3xl xl:text-4xl text-white mt-2 mb-9">
                Donate <br /> Manifesto 2024
              </h2>
              <Link to={"/donation_inner"}>
                <button className="primary-btn3">
                  {`Donate Now`}
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

export default Donate;
