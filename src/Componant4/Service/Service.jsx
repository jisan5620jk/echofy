/* eslint-disable no-unused-vars */
import { FaArrowRightLong, FaStarOfLife } from "react-icons/fa6";
import serviceThumb from "/images/services-1.jpg";
import serviceThumb2 from "/images/services-2.jpg";
import serviceThumb3 from "/images/services-3.jpg";
import serviceThumb4 from "/images/services-4.jpg";
import serviceIcon from "/images/service-icon4.png";
import serviceIcon2 from "/images/service-icon5.png";
import serviceIcon3 from "/images/service-icon6.png";
import serviceIcon4 from "/images/service-icon7.png";
import ServiceCard from "./ServiceCard";

const serviceData = [
  {
    id: 1,
    serviceIcon: serviceIcon,
    serviceThumb: serviceThumb,
    serviceTitle: `Resort Cleaning`,
    serviceDesc:
      "Sometims goods can arrive early when ses need a place  short goods can arrive solarihave space your needs.",
    serviceUrl: "/service_details",
    serviceBtn: `Read More`,
    serviceBtnIcon: <FaArrowRightLong />,
  },
  {
    id: 2,
    serviceIcon: serviceIcon2,
    serviceThumb: serviceThumb2,
    serviceTitle: `Window Cleaning`,
    serviceDesc:
      "Sometims goods can arrive early when ses need a place  short goods can arrive solarihave space your needs.",
    serviceUrl: "/service_details",
    serviceBtn: `Read More`,
    serviceBtnIcon: <FaArrowRightLong />,
  },
  {
    id: 3,
    serviceIcon: serviceIcon3,
    serviceThumb: serviceThumb3,
    serviceTitle: `Forest Cleaning`,
    serviceDesc:
      "Sometims goods can arrive early when ses need a place  short goods can arrive solarihave space your needs.",
    serviceUrl: "/service_details",
    serviceBtn: `Read More`,
    serviceBtnIcon: <FaArrowRightLong />,
  },
  {
    id: 4,
    serviceIcon: serviceIcon4,
    serviceThumb: serviceThumb4,
    serviceTitle: `Garden Cleaning`,
    serviceDesc:
      "Sometims goods can arrive early when ses need a place  short goods can arrive solarihave space your needs.",
    serviceUrl: "/service_details",
    serviceBtn: `Read More`,
    serviceBtnIcon: <FaArrowRightLong />,
  },
];

const Service = () => {
  return (
    <section className="pt-28 pb-[95px] relative bg-[#f5f8ed]">
      <div className="Container">
        <div className="grid grid-cols-1 lg:items-center lg:grid-cols-2 gap-1 mb-9">
          <div>
            <h5 className="font-AlbertSans font-medium text-PrimaryColor-0 flex items-center gap-2">
              <FaStarOfLife />
              ECHOFY SERVICES
            </h5>
            <h1 className="font-AlbertSans font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[40px] xl:leading-[50px] 2xl:text-[46px] 2xl:leading-[56px] text-HeadingColor-0 mt-2 mb-6">
              Pioneering Sustainable
              <br /> Energy Services.
            </h1>
          </div>
          <div>
            <p className="font-AlbertSans text-TextColor-0 font-light">
              Sometimes goods can arrive early when they being brought into the
              solution other times items need a place to be stored for short
              goods can arrive desig headquarters have enough space your needs.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:items-center lg:grid-cols-4 gap-7 xl:ml-[45px] 2xl:ml-[19.5rem]">
        {serviceData.map(
          ({
            id,
            serviceThumb,
            serviceIcon,
            serviceTitle,
            serviceDesc,
            serviceUrl,
            serviceBtn,
            serviceBtnIcon,
          }) => {
            return (
              <div key={id}>
                <ServiceCard
                  serviceThumb={serviceThumb}
                  serviceIcon={serviceIcon}
                  serviceTitle={serviceTitle}
                  serviceDesc={serviceDesc}
                  serviceUrl={serviceUrl}
                  serviceBtn={serviceBtn}
                  serviceBtnIcon={serviceBtnIcon}
                />
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Service;
