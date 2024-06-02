import { Link } from "react-router-dom";

const DonationsCard = () => {
    return (
      <div className="inline-block bg-white">
        <div className="relative border-b-[5px] border-SecondaryColor-0 inline-block">
          <img src={donateImg2} className="w-[600px]" />
          <h6 className="font-Manrope font-medium text-white bg-SecondaryColor-0 px-5 py-2 rounded-se-2xl inline-block absolute -bottom-1 left-0">
            Educations
          </h6>
        </div>
        <div className="shadow-cases px-8 pb-9 pt-4">
          <Link to={"/blogDetails"}>
            <button className="text-left font-Manrope font-bold text-[19px] sm:text-[22px] lg:text-lg xl:text-[22px] text-HeadingColor-0 transition-all duration-500 hover:text-SecondaryColor-0">
              Give a good education orphan childreen
            </button>
          </Link>
          <h6 className="flex gap-2 items-center mt-5 mb-7">
            <span className="text-SecondaryColor-0 text-lg">
              <BsAlarmFill />
            </span>
            150 Days Remaining
          </h6>
          <div className="bg-[#fff2ed] rounded-md px-5 pt-9 pb-4">
            <div className="px-[6px] py-1 rounded-2xl">
              <ProgressBar
                rect
                width="100%"
                height="6px"
                fontColor="#fff"
                fontSize="17px"
                leading="10px"
                margin="0px"
                rectBorderRadius="10px"
                fontWeight="600"
                percentage="70.1"
                defColor={{
                  excellent: "#53c99f",
                  good: "#53c99f",
                  fair: "green",
                  poor: "red",
                }}
                trackPathColor="#e8e9e9"
                trackBorderColor="transparent"
              />
            </div>
            <div className="flex justify-between mt-4">
              <h6 className="font-Manrope text-TextColor-0 text-sm">
                Achived :
                <span className="text-HeadingColor-0 font-semibold text-[15px]">
                  {" "}
                  $50,000
                </span>
              </h6>
              <h6 className="font-Manrope text-TextColor-0 text-sm">
                Goal :
                <span className="text-HeadingColor-0 font-semibold text-[15px]">
                  {" "}
                  $90,000
                </span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    );
};

export default DonationsCard;