/* eslint-disable no-unused-vars */
import donateImg from "/images/donate-img.jpg";
import donateImg2 from "/images/donate-img2.jpg";
import donateImg3 from "/images/donate-img3.jpg";
import donateImg4 from "/images/donation-4.png";
import donateImg5 from "/images/donation-5.png";
import donateImg6 from "/images/donation-6.png";
import subTitleShape from "/images/sub-title-shape.png";
import DonationInnerCard from "./DonationInnerCard";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import { FaArrowRightLong } from "react-icons/fa6";

const DonationData = [
  {
    id: 1,
    donateImg: donateImg,
    donateUrl: "/donation_inner",
    imgButton: "Donate Now",
    donateTitle: "Fund Raising For Tree Plantation - 2024",
    donateDesc:
      "Cultivate worldwide tailers through nature professionally engineer high",
    donatePercent: "85",
    percentTitle: "Raised :",
    percentNumber: "$780.00",
    percentTitle2: "Gaol :",
    percentNumber2: "$1000.00",
  },
  {
    id: 2,
    donateImg: donateImg2,
    donateUrl: "/donation_inner",
    imgButton: "Donate Now",
    donateTitle: "Fund Raising For Forest Recycling & Repair",
    donateDesc:
      "Cultivate worldwide tailers through nature professionally engineer high",
    donatePercent: "80",
    percentTitle: "Raised :",
    percentNumber: "$700.00",
    percentTitle2: "Gaol :",
    percentNumber2: "$1000.00",
  },
  {
    id: 3,
    donateImg: donateImg3,
    donateUrl: "/donation_inner",
    imgButton: "Donate Now",
    donateTitle: "Environmental Dust Cleaning & Recycling",
    donateDesc:
      "Cultivate worldwide tailers through nature professionally engineer high",
    donatePercent: "90",
    percentTitle: "Raised :",
    percentNumber: "$880.00",
    percentTitle2: "Gaol :",
    percentNumber2: "$1000.00",
  },
  {
    id: 4,
    donateImg: donateImg4,
    donateUrl: "/donation_inner",
    imgButton: "Donate Now",
    donateTitle: "Fund Raising For Renewable Energy Poor Peaples",
    donateDesc:
      "Cultivate worldwide tailers through nature professionally engineer high",
    donatePercent: "85",
    percentTitle: "Raised :",
    percentNumber: "$780.00",
    percentTitle2: "Gaol :",
    percentNumber2: "$1000.00",
  },
  {
    id: 5,
    donateImg: donateImg5,
    donateUrl: "/donation_inner",
    imgButton: "Donate Now",
    donateTitle: "Donations for Plant Seedlings Orphan Peoples",
    donateDesc:
      "Cultivate worldwide tailers through nature professionally engineer high",
    donatePercent: "85",
    percentTitle: "Raised :",
    percentNumber: "$780.00",
    percentTitle2: "Gaol :",
    percentNumber2: "$1000.00",
  },
  {
    id: 6,
    donateImg: donateImg6,
    donateUrl: "/donation_inner",
    imgButton: "Donate Now",
    donateTitle: "Fund Raising For Tree Plantation - 2024",
    donateDesc:
      "Cultivate worldwide tailers through nature professionally engineer high",
    donatePercent: "85",
    percentTitle: "Raised :",
    percentNumber: "$780.00",
    percentTitle2: "Gaol :",
    percentNumber2: "$1000.00",
  },
];

const DonationInner = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"Contact Us"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={"Contact Us"}
      />
      <section className="service relative pt-28 pb-[120px] bg-[#f5f8ed] z-10">
        <div className="Container">
          <div className="text-center">
            <h5 className="font-AlbertSans font-medium text-PrimaryColor-0 flex items-center gap-2 justify-center">
              <img src={subTitleShape} draggable="false" />
              DONATIONS
            </h5>
            <h1 className="font-AlbertSans font-bold text-xl leading-6 sm:text-[38px] sm:leading-[48px] md:text-[40px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[40px] xl:leading-[50px] 2xl:text-[46px] 2xl:leading-[56px] text-HeadingColor-0 mt-5 mb-3">
              For Savings Environments <br />
              Donation Money
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-[60px]">
            {DonationData.map(
              ({
                id,
                donateImg,
                imgButton,
                donateUrl,
                donateDesc,
                donateTitle,
                donatePercent,
                percentTitle,
                percentNumber,
                percentTitle2,
                percentNumber2,
              }) => {
                return (
                  <>
                    <div key={id}>
                      <DonationInnerCard
                        donateImg={donateImg}
                        imgbutton={imgButton}
                        donateUrl={donateUrl}
                        donateTitle={donateTitle}
                        donateDesc={donateDesc}
                        donatePercent={donatePercent}
                        percentTitle={percentTitle}
                        percentNumber={percentNumber}
                        percentTitle2={percentTitle2}
                        percentNumber2={percentNumber2}
                      />
                    </div>
                  </>
                );
              }
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default DonationInner;
