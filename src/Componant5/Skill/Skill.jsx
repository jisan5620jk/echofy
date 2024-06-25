import subTitleShape from "/images/sub-title-shape.png";
import skillThumb from "/images/skill-thumb.png";
import skillMainShape from "/images/skill-main-shape.png";
import skillShape from "/images/skill-shape.png";
import skillShape2 from "/images/skill-shape2.png";
import { GiCheckMark } from "react-icons/gi";
import ProgressBar from "react-animated-progress-bar";

const Skill = () => {
  return (
    <section className="py-[120px] bg-[#f5f8ed] relative overflow-hidden z-10">
      <img
        src={skillMainShape}
        draggable="false"
        className="absolute -z-10 top-0 left-0 animate-dance2 hidden xl:block"
      />
      <div className="Container">
        <div className="grid grid-cols-1 gap-10 lg:gap-0 lg:grid-cols-2 lg:items-center">
          <div>
            <h5 className="font-AlbertSans font-medium text-PrimaryColor-0 flex items-center gap-2">
              <img src={subTitleShape} draggable="false" />
              OUR SKILLS
            </h5>
            <h1 className="font-AlbertSans font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[40px] xl:leading-[50px] 2xl:text-[46px] 2xl:leading-[56px] text-HeadingColor-0 mt-5 mb-3">
              Getting A Greener Future <br />
              Safe Environment
            </h1>
            <p className="font-AlbertSans text-TextColor-0 pt-1">
              Competently cultivate worldwide e-tailers through
              principle-centered value professionally engineer high-payoff
              deliverables without exceptional processes. Rapidiously network
              cost effective vortals
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-8 pt-8 pb-8">
              <div className="group px-7 lg:px-4 2xl:px-7 py-5 relative z-10 bg-white rounded-md overflow-hidden before:absolute before:top-0 before:right-0 before:w-0 before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 hover:before:left-0 hover:before:w-full flex items-center gap-[18px]">
                <div className="w-10 h-10 rounded-full bg-PrimaryColor-0 relative z-10 before:absolute before:top-0 before:left-0 before:rounded-full before:w-full before:h-full before:bg-white before:transition-all before:duration-500 before:-z-10 before:scale-0 group-hover:before:scale-100 flex justify-center items-center text-white transition-all duration-500 group-hover:text-PrimaryColor-0">
                  <GiCheckMark size={"20"} />
                </div>
                <p className="flex-1 font-AlbertSans font-medium text-xl text-HeadingColor-0 transition-all duration-500 group-hover:text-white">
                  Safe Environment
                </p>
              </div>
              <div className="group px-7 lg:px-4 2xl:px-7 py-5 relative z-10 bg-white rounded-md overflow-hidden before:absolute before:top-0 before:right-0 before:w-0 before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 hover:before:left-0 hover:before:w-full flex items-center gap-[18px]">
                <div className="w-10 h-10 rounded-full bg-PrimaryColor-0 relative z-10 before:absolute before:top-0 before:left-0 before:rounded-full before:w-full before:h-full before:bg-white before:transition-all before:duration-500 before:-z-10 before:scale-0 group-hover:before:scale-100 flex justify-center items-center text-white transition-all duration-500 group-hover:text-PrimaryColor-0">
                  <GiCheckMark size={"20"} />
                </div>
                <p className="flex-1 font-AlbertSans font-medium text-xl text-HeadingColor-0 transition-all duration-500 group-hover:text-white">
                  Dirty Recycling
                </p>
              </div>
            </div>
            <div>
              <h6 className="font-AlbertSans font-medium text-lg text-HeadingColor-0 pb-3">
                Recycling
              </h6>
              <ProgressBar
                rect
                width="100%"
                height="10px"
                fontColor="#001818"
                fontSize="17px"
                leading="10px"
                margin="0px"
                rectBorderRadius="6px"
                fontWeight="600"
                percentage="90"
                defColor={{
                  excellent: "#79b900",
                  good: "#79b900",
                  fair: "green",
                  poor: "red",
                }}
                trackPathColor="#001818"
                trackBorderColor="transparent"
                trackPathBorderRadius="10px"
              />
            </div>
            <div className="skill2 mt-6">
              <h6 className="font-AlbertSans font-medium text-lg text-HeadingColor-0 pb-3">
                Ocean Cleaning
              </h6>
              <ProgressBar
                rect
                width="100%"
                height="10px"
                fontColor="#001818"
                fontSize="17px"
                leading="10px"
                margin="0px"
                rectBorderRadius="6px"
                fontWeight="600"
                percentage="80"
                defColor={{
                  excellent: "#79b900",
                  good: "#79b900",
                  fair: "green",
                  poor: "red",
                }}
                trackPathColor="#001818"
                trackBorderColor="transparent"
                trackPathBorderRadius="10px"
              />
            </div>
          </div>
          <div className="relative z-10">
            <img src={skillThumb} draggable="false" className="md:ml-16" />
            <img
              src={skillShape}
              draggable="false"
              className="absolute top-0 left-10 animate-movebtn hidden sm:block"
            />
            <img
              src={skillShape2}
              draggable="false"
              className="absolute -z-10 bottom-0 right-0 animate-dance2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
