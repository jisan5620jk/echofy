import aboutThumb from "/images/about5-thumb.png";
import aboutShape from "/images/about5-shape.png";
import subTitleShape from "/images/title-shape-2.png";
import { Link } from "react-router-dom";
import { FaAnglesRight, FaPhoneVolume } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import icon from "/images/about5-icon.png"

const About = () => {
  return (
    <section className="py-[120px] relative">
      <img
        src={aboutShape}
        draggable="false"
        className="absolute top-1/2 left-0 -translate-y-1/2 hidden 2xl:block"
      />
      <div className="Container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] lg:gap-8 xl:gap-[60px] 2xl:gap-0 items-center">
          <div className="relative inline-block">
            <img src={aboutThumb} draggable="false" />
            <div className="text-center border-[8px] border-PrimaryColor-0 rounded-md bg-white w-[218px] h-[228px] flex justify-center items-center flex-col absolute bottom-0 right-0 md:right-[132px] lg:right-0 2xl:right-[76px]">
              <div>
                <img src={icon} draggable="false" className="m-auto"/>
              </div>
              <h5 className="font-AlbertSans font-medium text-lg text-HeadingColor-0 mt-[18px] mb-[6px]">Place of Animals</h5>
              <p className="font-AlbertSans font-medium text-PrimaryColor-0 mb-5">8:30AM - 6:00PM</p>
              <Link to={"/"}>
                <button className="font-AlbertSans font-medium text-HeadingColor-0 text-[15px] flex gap-2 items-center">
                  View Map
                  <IoIosSend size={"20"} className="text-PrimaryColor-0"/>
                </button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <h5 className="font-AlbertSans font-semibold text-PrimaryColor-0 flex items-center gap-2">
              <img src={subTitleShape} draggable="false" />
              ABOUT COMPANY
            </h5>
            <h1 className="font-AlbertSans font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[40px] xl:leading-[50px] 2xl:text-[46px] 2xl:leading-[56px] text-HeadingColor-0 mt-[14px] mb-3">
              A Peek into Animal Housing <br />
              And The Carefull
            </h1>
            <p className="font-AlbertSans text-TextColor-0 font-light">
              Corporate strategy frameworks to provide a robust synopsis high
              level overviews. Iterative approaches to data foster to
              collaboorative in thinking to empowerment Welcome the corporate
              strategy.
            </p>
            <h4 className="font-AlbertSans font-bold text-[22px] text-HeadingColor-0 mt-6 mb-7">
              Important Tree Planting Considerations
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-2
             xl:grid-cols-2 gap-y-7">
              <li className="relative pl-7 font-semibold text-[17px] before:absolute before:w-2 before:h-2 before:rounded-full before:bg-PrimaryColor-0 before:top-1/2 before:-translate-y-1/2 before:left-[5px] after:absolute after:w-[18px] after:h-[18px] after:rounded-full after:bg-transparent after:border after:border-PrimaryColor-0 after:top-1/2 after:-translate-y-1/2 after:left-0">
                Education
              </li>
              <li className="relative pl-7 font-semibold text-[17px] before:absolute before:w-2 before:h-2 before:rounded-full before:bg-PrimaryColor-0 before:top-1/2 before:-translate-y-1/2 before:left-[5px] after:absolute after:w-[18px] after:h-[18px] after:rounded-full after:bg-transparent after:border after:border-PrimaryColor-0 after:top-1/2 after:-translate-y-1/2 after:left-0">
                Public Awareness
              </li>
              <li className="relative pl-7 font-semibold text-[17px] before:absolute before:w-2 before:h-2 before:rounded-full before:bg-PrimaryColor-0 before:top-1/2 before:-translate-y-1/2 before:left-[5px] after:absolute after:w-[18px] after:h-[18px] after:rounded-full after:bg-transparent after:border after:border-PrimaryColor-0 after:top-1/2 after:-translate-y-1/2 after:left-0">
                Animal Welfare
              </li>
              <li className="relative pl-7 font-semibold text-[17px] before:absolute before:w-2 before:h-2 before:rounded-full before:bg-PrimaryColor-0 before:top-1/2 before:-translate-y-1/2 before:left-[5px] after:absolute after:w-[18px] after:h-[18px] after:rounded-full after:bg-transparent after:border after:border-PrimaryColor-0 after:top-1/2 after:-translate-y-1/2 after:left-0">
                Animal Research
              </li>
              <li className="relative pl-7 font-semibold text-[17px] before:absolute before:w-2 before:h-2 before:rounded-full before:bg-PrimaryColor-0 before:top-1/2 before:-translate-y-1/2 before:left-[5px] after:absolute after:w-[18px] after:h-[18px] after:rounded-full after:bg-transparent after:border after:border-PrimaryColor-0 after:top-1/2 after:-translate-y-1/2 after:left-0">
                Conservation
              </li>
              <li className="relative pl-7 font-semibold text-[17px] before:absolute before:w-2 before:h-2 before:rounded-full before:bg-PrimaryColor-0 before:top-1/2 before:-translate-y-1/2 before:left-[5px] after:absolute after:w-[18px] after:h-[18px] after:rounded-full after:bg-transparent after:border after:border-PrimaryColor-0 after:top-1/2 after:-translate-y-1/2 after:left-0">
                Recreation
              </li>
            </ul>
            <p className="font-AlbertSans text-TextColor-0 font-light mt-9 mb-[52px]">
              Corporate strategy frameworks to provide a robust synopsis high
              level overviews. Welcome the corporate strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 sm:items-center">
              <Link to={"/about"}>
                <button className="primary-btn3 !bg-transparent !text-PrimaryColor-0 hover:!text-white before:bg-PrimaryColor-0">
                  {`Learn More`}
                  <FaAnglesRight />
                </button>
              </Link>
              <div className="flex gap-4">
                <div className="w-[50px] h-[50px] rounded-full border border-PrimaryColor-0 flex items-center justify-center text-PrimaryColor-0">
                  <FaPhoneVolume size={"16"} />
                </div>
                <div>
                  <p className="font-AlbertSans text-TextColor-0 font-light">
                    Call Any Time
                  </p>
                  <button className="font-AlbertSans font-semibold text-lg text-HeadingColor-0 transition-all duration-500 hover:text-PrimaryColor-0">
                    +31 65 792 63 11
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
