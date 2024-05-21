import aboutThumb from "/public/images/about.png";
import aboutAward from "/public/images/about-award.png";
import aboutIcon from "/public/images/about-icon.png";
import aboutIcon2 from "/public/images/about-icon2.png";
import buttonShape from "/public/images/button-shape-1.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="py-[120px]">
      <div className="Container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[92px] lg:gap-5 xl:gap-24 items-center">
          <div className="relative">
            <img src={aboutThumb} />
            <img
              src={aboutAward}
              className="absolute -bottom-6 left-0 animate-movebtn"
            />
          </div>
          <div className="relative">
            <h5 className="font-AlbertSans font-medium text-PrimaryColor-0">
              ABOUT ECHOFY
            </h5>
            <h1 className="font-AlbertSans font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[35px] xl:leading-[45px] 2xl:text-[44px] 2xl:leading-[54px] text-HeadingColor-0 mt-3 mb-3">
              Environmental Sustainable <br />
              Forever Green Future
            </h1>
            <div className="flex gap-6">
              <div>
                <img src={aboutIcon} />
              </div>
              <div className="flex-1">
                <h5 className="font-AlbertSans font-semibold text-2xl text-HeadingColor-0">Economic Benifits</h5>
                <p className="font-AlbertSans text-TextColor-0">
                  Alternative innovation after ethical to network environmental
                  whiteboard transparent growth natural done.
                </p>
              </div>
            </div>
            <Link to={"/about"}>
              <button className="primary-btn">
                {`More About`}
                <img src={buttonShape} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
