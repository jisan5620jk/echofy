import aboutThumb from "/public/images/about.png";
import aboutAward from "/public/images/about-award.png";
import aboutIcon from "/public/images/about-icon.png";
import aboutIcon2 from "/public/images/about-icon2.png";
import aboutShape from "/public/images/about-shape.png";
import buttonShape from "/public/images/button-shape-1.png";
import subTitleShape from "/public/images/sub-title-shape.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="py-[120px] bg-[url('/public/images/about-bg.jpg')] bg-no-repeat bg-center bg-cover">
      <div className="Container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[92px] lg:gap-5 xl:gap-24 items-center">
          <div className="relative">
            <img src={aboutThumb} draggable="false" />
            <img
              src={aboutAward}
              draggable="false"
              className="absolute bottom-10 left-0 animate-movebtn"
            />
          </div>
          <div className="relative">
            <h5 className="font-AlbertSans font-medium text-PrimaryColor-0 flex items-center gap-2">
              <img src={subTitleShape} draggable="false" />
              ABOUT ECHOFY
            </h5>
            <h1 className="font-AlbertSans font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[40px] xl:leading-[50px] 2xl:text-[46px] 2xl:leading-[56px] text-HeadingColor-0 mt-5 mb-3">
              Environmental Sustainable <br />
              Forever Green Future
            </h1>
            <div className="flex gap-6 mt-12">
              <div>
                <img src={aboutIcon} draggable="false" />
              </div>
              <div className="flex-1">
                <h5 className="font-AlbertSans font-semibold text-2xl text-HeadingColor-0 -mt-2">
                  Economic Benifits
                </h5>
                <p className="font-AlbertSans text-TextColor-0 pt-3">
                  Alternative innovation after ethical to network environmental
                  whiteboard transparent growth natural done.
                </p>
              </div>
            </div>
            <div className="flex gap-6 mt-9 pb-9 mb-10 border-b border-BorderColor2-0">
              <div>
                <img src={aboutIcon2} draggable="false" />
              </div>
              <div className="flex-1">
                <h5 className="font-AlbertSans font-semibold text-2xl text-HeadingColor-0 -mt-2">
                  Safe Environment
                </h5>
                <p className="font-AlbertSans text-TextColor-0 pt-3">
                  Alternative innovation after ethical to network environmental
                  whiteboard transparent growth natural done.
                </p>
              </div>
            </div>
            <Link to={"/about"}>
              <button className="primary-btn">
                {`More About`}
                <img src={buttonShape} draggable="false" />
              </button>
            </Link>
            <img
              src={aboutShape}
              draggable="false"
              className="absolute -bottom-0 left-1/2 animate-dance3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
