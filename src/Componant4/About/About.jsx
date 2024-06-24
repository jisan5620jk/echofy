import { FaStarOfLife } from "react-icons/fa6";
import aboutThumb from "/images/about4-thumb.png";
import ProgressBar from "react-animated-progress-bar";

const About = () => {
  return (
    <section className="py-28 bg-white bg-cover bg-center bg-no-repeat">
      <div className="Container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[92px] lg:gap-5 xl:gap-20 2xl:gap-12 items-center">
          <div className="relative z-10">
            <img src={aboutThumb} draggable="false" />
          </div>
          <div>
            <h5 className="font-AlbertSans font-medium text-PrimaryColor-0 flex items-center gap-2">
              <FaStarOfLife />
              COMPANY BENEFITS
            </h5>
            <h1 className="font-AlbertSans font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[40px] xl:leading-[50px] 2xl:text-[46px] 2xl:leading-[56px] text-HeadingColor-0 mt-2 mb-6">
              Solar Energy is a Free
              <br />
              Raw Material.
            </h1>
            <p className="font-AlbertSans text-TextColor-0 font-light">
              Sometimes goods can arrive early when they being brought into the
              solution other times items need a place to be stored for short
              goods can arrive desig headquarters have enough space your needs.
            </p>
            <div className="mt-9">
              <h5 className="font-AlbertSans text-xl font-medium text-HeadingColor-0 pb-3">
                Wind Turbines
              </h5>
              <ProgressBar
                rect
                width="100%"
                height="8px"
                fontColor="#d9d9d7"
                fontSize="16px"
                percentage="80"
                defColor={{
                  excellent: "#001817",
                  good: "blue",
                  fair: "green",
                  poor: "red",
                }}
                rectBorderRadius="0px"
                trackPathColor="#ransparent"
                trackBorderColor="#d5d6d2"
              />
            </div>
            <div className="mt-4">
              <h5 className="font-AlbertSans text-xl font-medium text-HeadingColor-0 pb-3">
                Hybrid Energy
              </h5>
              <ProgressBar
                rect
                width="100%"
                height="8px"
                fontColor="#fff"
                fontSize="16px"
                percentage="95"
                defColor={{
                  excellent: "#efad4d",
                  good: "blue",
                  fair: "green",
                  poor: "red",
                }}
                rectBorderRadius="0px"
                trackPathColor="#ransparent"
                trackBorderColor="#d5d6d2"
              />
            </div>
            <div className="mt-4">
              <h5 className="font-AlbertSans text-xl font-medium text-HeadingColor-0 pb-3">
                Solar Energy
              </h5>
              <ProgressBar
                rect
                width="100%"
                height="8px"
                fontColor="#fff"
                fontSize="16px"
                percentage="70"
                defColor={{
                  excellent: "#79b900",
                  good: "blue",
                  fair: "green",
                  poor: "red",
                }}
                rectBorderRadius="0px"
                trackPathColor="#ransparent"
                trackBorderColor="#d5d6d2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
