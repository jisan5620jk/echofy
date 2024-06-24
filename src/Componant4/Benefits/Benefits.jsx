import { FaStarOfLife } from "react-icons/fa6";
import ProgressBar from "react-animated-progress-bar";

const Benefits = () => {
  return (
    <section className="benefits pt-[120px] lg:pt-[160px] 2xl:pt-[240px] pb-[120px] bg-[url('/images/benefits-bg.png')] bg-cover bg-no-repeat bg-left 2xl:bg-center">
      <div className="Container">
        <div className="grid grid-cols-2">
          <div>
            <h5 className="font-AlbertSans font-medium text-PrimaryColor-0 flex items-center gap-2">
              <FaStarOfLife />
              COMPANY BENEFITS
            </h5>
            <h1 className="font-AlbertSans font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[40px] xl:leading-[50px] 2xl:text-[46px] 2xl:leading-[56px] text-white mt-2 mb-6">
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
              <h5 className="font-AlbertSans text-xl font-medium text-white pb-3">
                Wind Turbines
              </h5>
              <ProgressBar
                rect
                width="100%"
                height="8px"
                fontColor="#fff"
                fontSize="16px"
                percentage="80"
                defColor={{
                  excellent: "#fff",
                  good: "blue",
                  fair: "green",
                  poor: "red",
                }}
                rectBorderRadius="0px"
                trackPathColor="#ransparent"
                trackBorderColor="#fff"
              />
            </div>
            <div className="mt-4">
              <h5 className="font-AlbertSans text-xl font-medium text-white pb-3">
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
                trackBorderColor="#fff"
              />
            </div>
            <div className="mt-4">
              <h5 className="font-AlbertSans text-xl font-medium text-white pb-3">
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
                trackBorderColor="#fff"
              />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
