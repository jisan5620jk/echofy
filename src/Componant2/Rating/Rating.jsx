import CountUp from "react-countup";
import teamIcon from "/public/images/team-1.png";
import teamIcon2 from "/public/images/team-1.png";

const Rating = () => {
  return (
    <div className="bg-[#f5f8ed]">
      <div className="Container relative z-10">
        <div className="grid grid-cols-2 items-center bg-[url('/public/images/rating-bg.jpg')] bg-cover bg-no-repeat bg-cener rounded-md px-[60px] py-11">
          <h1 className="font-AlbertSans font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[40px] xl:leading-[50px] 2xl:text-[46px] 2xl:leading-[56px] text-white mt-5 mb-3">
            We Provide Environment <br />
            Leading Services
          </h1>
          <div className="grid grid-cols-2">
            <div className="flex items-center gap-7">
              <div>
                <img src={teamIcon} draggable="false" className="m-auto" />
              </div>
              <div>
                <CountUp
                  start={-11}
                  end="100"
                  suffix="+"
                  className="font-AlbertSans text-[46px] text-white font-bold"
                />
                <p className="font-AlbertSans text-white text-xl lg:text-lg 2xl:text-xl -mt-1">
                  Team Member
                </p>
              </div>
            </div>
            <div className="flex items-center gap-7">
              <div>
                <img src={teamIcon2} draggable="false" className="m-auto" />
              </div>
              <div>
                <CountUp
                  start={-3}
                  end="4"
                  suffix=".7"
                  className="font-AlbertSans text-[46px] text-white font-bold"
                />
                <p className="font-AlbertSans text-white text-xl lg:text-lg 2xl:text-xl -mt-1">
                  Avg. Ratings
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;
