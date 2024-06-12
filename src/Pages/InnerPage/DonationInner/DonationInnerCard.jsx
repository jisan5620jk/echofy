/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import ProgressBar from "react-animated-progress-bar";

const DonationInnerCard = ({
  donateImg,
  imgbutton,
  donateTitle,
  donateDesc,
  donatePercent,
  percentTitle,
  percentNumber,
  percentTitle2,
  percentNumber2,
}) => {
  return (
    <div className="inline-block group">
      <div className="relative z-10 overflow-hidden rounded-t-md">
        <img
          src={donateImg}
          className="w-full transition-all duration-500 group-hover:blur-[2px]"
        />
        <Link to={"/"}>
          <button className="absolute inline-block text-left top-full left-1/2 -translate-x-1/2 group-hover:top-1/2 group-hover:-translate-y-1/2 font-AlbertSans rounded-full bg-PrimaryColor-0 text-white transition-all duration-500 px-6 sm:px-[30px] lg:px-[15px] xl:px-[30px] py-[14px]">
            {imgbutton}
          </button>
        </Link>
      </div>
      <div className="px-[30px] pb-8 pt-6 bg-white">
        <Link to={"/"}>
          <button className="font-AlbertSans font-semibold text-left text-xl sm:text-2xl lg:text-xl 2xl:text-2xl pb-4 text-HeadingColor-0 transition-all duration-500 group-hover:text-PrimaryColor-0">
            {donateTitle}
          </button>
        </Link>
        <p className="font-AlbertSans text-TextColor-0">{donateDesc}</p>
        <div className="mt-10">
          <ProgressBar
            rect
            width="100%"
            height="10px"
            fontColor="#fff"
            fontSize="17px"
            leading="10px"
            margin="0px"
            rectBorderRadius="10px"
            fontWeight="600"
            percentage={donatePercent}
            defColor={{
              excellent: "#79b900",
              good: "#79b900",
              fair: "green",
              poor: "red",
            }}
            trackPathColor="#e1efcb"
            trackBorderColor="transparent"
          />
        </div>
        <div className="flex justify-between mt-4">
          <h6 className="font-AlbertSans text-TextColor-0">
            {percentTitle}
            <span className="text-HeadingColor-0">
              {" "}
              {percentNumber}
            </span>
          </h6>
          <h6 className="font-AlbertSans text-TextColor-0">
            {percentTitle2}
            <span className="text-HeadingColor-0">
              {" "}
              {percentNumber2}
            </span>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default DonationInnerCard;
