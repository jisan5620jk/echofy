import CountUp from "react-countup";
import teamIcon from "/images/team-1.png";
import teamIcon2 from "/images/team-1.png";

const Rating = () => {
  return (
    <div className="bg-[linear-gradient(180deg,_rgba(245,248,237,1)_50%,_rgba(255,255,255,1)_50%)]">
      <div className="Container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center bg-[url('/images/rating-bg.jpg')] bg-cover bg-no-repeat bg-center rounded-md px-5 sm:px-[60px] py-11">
          <h1 className="font-AlbertSans font-bold text-[20px] leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[40px] xl:leading-[50px] 2xl:text-[46px] 2xl:leading-[56px] text-white mt-5 mb-3">
            We Provide Environment <br />
            Leading Services
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-0">
            <div className="flex items-center gap-3 sm:gap-7 lg:gap-4 xl:gap-7">
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
            <div className="flex items-center gap-3 sm:gap-7 lg:gap-4 xl:gap-7">
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
