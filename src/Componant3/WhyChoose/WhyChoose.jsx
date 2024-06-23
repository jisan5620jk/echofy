import { FaStarOfLife } from "react-icons/fa6";
import WhyChooseImg from "/images/why-choose-thumb.jpg";
import boxImg from "/images/why-choose-icon.png";
import boxImg2 from "/images/why-choose-icon2.png";

const WhyChoose = () => {
  return (
    <section className="pt-[320px] pb-[120px] bg-[url('/images/why-choose-us-bg.jpg')] bg-cover bg-center bg-no-repeat relative">
      <div className="Container">
        <div className="grid grid-cols-1 lg:items-center lg:grid-cols-2 2xl:gap-20">
          <div className="bg-SecondaryColor-0 rounded-t-md">
            <img
              src={WhyChooseImg}
              draggable="false"
              className="w-full lg:w-[inherit] max-w-[inherit] rounded-r-md lg:-ml-[30em] xl:-ml-[25rem] 2xl:-ml-[20rem] mb-10 lg:mb-0"
            />
          </div>
          <div>
            <h5 className="font-AlbertSans font-medium text-PrimaryColor-0 flex items-center gap-2">
              <FaStarOfLife />
              WHY CHOOSE US
            </h5>
            <h1 className="font-AlbertSans font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[40px] xl:leading-[50px] 2xl:text-[46px] 2xl:leading-[56px] text-white mt-2 mb-6">
              Building a Foundation
              <br /> Energy Solutions.
            </h1>
            <p className="font-AlbertSans text-TextColor-0 font-light">
              Sometimes goods can arrive early when they being brought into the
              solution other times items need a place to be stored for short
              goods can arrive desig headquarters have enough space your needs.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-7 mt-12">
              <div>
                <img src={boxImg} draggable="false" />
              </div>
              <div className="flex-1">
                <h5 className="font-AlbertSans font-semibold text-xl text-white">
                  Solar Panel Solutions
                </h5>
                <p className="font-AlbertSans text-TextColor-0 mt-3">
                  Sometimes goods can arrive being brought into the solution so
                  <br className="hidden sm:block lg:hidden 2xl:block" />{" "}
                  headquarters have enough space your needs.target e-business
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-7 mt-12">
              <div>
                <img src={boxImg2} draggable="false" />
              </div>
              <div className="flex-1">
                <h5 className="font-AlbertSans font-semibold text-xl text-white">
                  Solar Panel Solutions
                </h5>
                <p className="font-AlbertSans text-TextColor-0 mt-3">
                  Sometimes goods can arrive being brought into the solution so
                  <br className="hidden sm:block lg:hidden 2xl:block" />{" "}
                  headquarters have enough space your needs.target e-business
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
