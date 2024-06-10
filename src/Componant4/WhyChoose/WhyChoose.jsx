import { FaStarOfLife } from "react-icons/fa6";
import icon from "/images/choose-us-icon.png";
import icon2 from "/images/choose-us-icon2.png";
import icon3 from "/images/choose-us-icon3.png";
import mainShape from "/images/hero4-shape.png";

const WhyChoose = () => {
  return (
    <section className="py-[120px] bg-[url('/images/why-choose-bg.png')] bg-cover bg-right lg:bg-center bg-no-repeat relative">
      <img
        src={mainShape}
        draggable="false"
        className="absolute top-24 left-1/3 animate-rotational hidden lg:block"
      />
      <div className="Container">
        <div className="grid grid-cols-1 lg:items-center lg:grid-cols-2">
          <div></div>
          <div>
            <h5 className="font-AlbertSans font-medium text-PrimaryColor-0 flex items-center gap-2">
              <FaStarOfLife />
              WHY CHOOSE US
            </h5>
            <h1 className="font-AlbertSans font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[40px] xl:leading-[50px] 2xl:text-[46px] 2xl:leading-[56px] text-HeadingColor-0 mt-2 mb-6">
              Building a Foundation
              <br />
              of Reliability.
            </h1>
            <p className="font-AlbertSans text-TextColor-0 font-light">
              Sometimes goods can arrive early when they being brought into the
              solution other times items need a place to be stored for short
              goods arrive desig our vision has emerged as a promising source of
              renewable clean and echof headquarters have enough space your
              needs.
            </p>
            <div className="bg-white flex justify-around pt-[48px] pb-10 rounded-md mt-12">
              <div className="text-center">
                <img src={icon} draggable="false" className="m-auto" />
                <h5 className="font-AlbertSans text-HeadingColor-0 font-medium sm:text-lg mt-[14px]">
                  Our Mission
                </h5>
              </div>
              <div className="text-center">
                <img src={icon2} draggable="false" className="m-auto" />
                <h5 className="font-AlbertSans text-HeadingColor-0 font-medium sm:text-lg mt-[14px]">
                  Our Vission
                </h5>
              </div>
              <div className="text-center">
                <img src={icon3} draggable="false" className="m-auto" />
                <h5 className="font-AlbertSans text-HeadingColor-0 font-medium sm:text-lg mt-[14px]">
                  Philosophy
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
