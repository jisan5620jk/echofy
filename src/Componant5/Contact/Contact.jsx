import { Link } from "react-router-dom";
import subTitleShape from "/images/title-shape-2.png";
import { FaAnglesRight } from "react-icons/fa6";
import { useState } from "react";
import FsLightbox from "fslightbox-react";
import { IoMdPlay } from "react-icons/io";

const Contact = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <section className="bg-[url('/images/animal-video-bg.jpg')] bg-no-repeat bg-cover bg-center py-28">
      <div className="Container">
        <div className="grid grid-cols-1 gap-12 lg:gap-0 lg:grid-cols-2 items-center">
          <div>
            <h5 className="font-AlbertSans font-semibold text-PrimaryColor-0 flex items-center gap-2">
              <img src={subTitleShape} draggable="false" />
              ANIMAL WILDEST ZOO
            </h5>
            <h1 className="font-AlbertSans font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[40px] xl:leading-[50px] 2xl:text-[46px] 2xl:leading-[56px] text-white mt-[14px] mb-11">
              Animals Our Zoo Rudderfish <br />
              Finned Pike–Razorfish
            </h1>
            <Link to={"/contact"}>
              <button className="primary-btn3 !bg-transparent !text-PrimaryColor-0 hover:!text-white before:bg-PrimaryColor-0">
                {`Contact Us`}
                <FaAnglesRight />
              </button>
            </Link>
          </div>
          <div className="flex justify-center">
            <button className="h-[66px] w-[66px] rounded-full bg-PrimaryColor-0 flex justify-center items-center relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:opacity-50 before:-z-10 before:rounded-full before:animate-ping">
              <IoMdPlay
                size={"30"}
                className="text-white"
                onClick={() => setToggler(!toggler)}
              />
            </button>
            <FsLightbox
              toggler={toggler}
              sources={[
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
