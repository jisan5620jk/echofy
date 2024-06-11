import aboutThumb from "/images/about-1.png";
import aboutThumb2 from "/images/about-2.png";
import subTitleShape from "/images/sub-title-shape.png";
import aboutIcon from "/images/about2-icon.png";
import aboutIcon2 from "/images/about2-icon2.png";
import { Link } from "react-router-dom";
import buttonShape from "/images/button-shape-1.png";
import aboutShape from "/images/about2-shape.png";
import aboutShape2 from "/images/testi-shape-3.png";
import { useState } from "react";
import FsLightbox from "fslightbox-react";
import { CiPlay1 } from "react-icons/ci";

const About = () => {
    const [toggler, setToggler] = useState(false);

  return (
    <section className="py-[120px] bg-[url('/images/about-bg.png')] bg-cover bg-center bg-no-repeat relative overflow-hidden">
      <img
        src={aboutShape}
        draggable="false"
        className="absolute -bottom-52 -right-20"
      />
      <img
        src={aboutShape2}
        draggable="false"
        className="absolute top-32 right-20 animate-zoomInOut hidden 2xl:block"
      />
      
      <FsLightbox
        toggler={toggler}
        sources={[
          "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        ]}
      />
      <div className="Container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[92px] lg:gap-5 xl:gap-20 items-center">
          <div className="relative z-10">
            <img src={aboutThumb} draggable="false" />
            <img
              src={aboutThumb2}
              draggable="false"
              className="absolute bottom-0 right-0 hidden sm:block"
            />
            <div className="absolute top-20 right-[60px] lg:right-[30px] xl:-right-[30px] 2xl:right-[60px] hidden sm:block">
        <button
          className="h-[88px] w-[88px] rounded-full border-4 border-white text-2xl text-white bg-PrimaryColor-0 flex justify-center items-center relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-HeadingColor-0 before:opacity-50 before:-z-10 before:rounded-full before:animate-ping after:absolute after:-top-[20px] after:-left-[20px] after:w-[120px] after:h-[120px] after:bg-transparent after:border-2 after:border-dashed after:border-PrimaryColor-0 after:opacity-50 after:-z-10 after:rounded-full after:animate-rotational"
          onClick={() => setToggler(!toggler)}
        >
          <CiPlay1 />
        </button>
      </div>
          </div>
          <div>
            <h5 className="font-AlbertSans font-medium text-PrimaryColor-0 flex items-center gap-2">
              <img src={subTitleShape} draggable="false" />
              ABOUT ECHOFY
            </h5>
            <h1 className="font-AlbertSans font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[40px] xl:leading-[50px] 2xl:text-[46px] 2xl:leading-[56px] text-HeadingColor-0 mt-5 mb-3">
              Protecting Environment <br />
              For Green Future
            </h1>
            <p className="font-AlbertSans text-TextColor-0 font-light">
              {`Assertively reinvent front-end deliverables via to sustainable
              products. Credibly an expanded array of vortals for open-source
              internal or "organic" sources main negotiate professional supply
              chains via inexpensive`}
            </p>
            <div className="grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-1 2xl:grid-cols-2 gap-7 mt-7 border-t border-BorderColor2-0 pt-8 border-b pb-8 mb-10">
              <div className="flex gap-6">
                <div className="bg-[#ebf5da] w-[65px] h-[65px] rounded flex items-center justify-center">
                  <img src={aboutIcon} draggable="false" />
                </div>
                <div className="flex-1">
                  <h5 className="font-AlbertSans font-semibold text-[22px] text-HeadingColor-0 -mt-2">
                    Dust Recycling
                  </h5>
                  <p className="font-AlbertSans text-TextColor-0 text-[17px] pt-2">
                    Alternative innovation the environmental
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="bg-[#ebf5da] w-[65px] h-[65px] rounded flex items-center justify-center">
                  <img src={aboutIcon2} draggable="false" />
                </div>
                <div className="flex-1">
                  <h5 className="font-AlbertSans font-semibold text-[22px] text-HeadingColor-0 -mt-2">
                    Safe Environment
                  </h5>
                  <p className="font-AlbertSans text-TextColor-0 text-[17px] pt-2">
                    Alternative innovation the environmental
                  </p>
                </div>
              </div>
            </div>
            <Link to={"/about"}>
              <button className="primary-btn">
                {`More About`}
                <img src={buttonShape} draggable="false" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
