/* eslint-disable no-unused-vars */
import { FaArrowRight, FaArrowRightLong, FaLocationDot } from "react-icons/fa6";
import ProjectThumb from "/public/images/project-img.png";
import ProjectThumb2 from "/public/images/project-img2.png";
import ProjectThumb3 from "/public/images/project-img3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import subTitleShape from "/public/images/sub-title-shape.png";
import "swiper/css";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";

const ProjectData = [
  {
    id: 1,
    ProjectThumb: ProjectThumb,
    thumbTitle: "Cleaning",
    ProjectLocateIcon: <FaLocationDot />,
    ProjectLocation: "Sandigo, USA",
    ProjectTitle: "House Floor Cleaning",
    ProjectUrl: "/projectDetails",
    ProjectIcon: <FaArrowRight />,
  },
  {
    id: 2,
    ProjectThumb: ProjectThumb2,
    thumbTitle: "Cleaning",
    ProjectLocateIcon: <FaLocationDot />,
    ProjectLocation: "Sandigo, USA",
    ProjectTitle: "House Floor Cleaning",
    ProjectUrl: "/projectDetails",
    ProjectIcon: <FaArrowRight />,
  },
  {
    id: 3,
    ProjectThumb: ProjectThumb3,
    thumbTitle: "Cleaning",
    ProjectLocateIcon: <FaLocationDot />,
    ProjectLocation: "Sandigo, USA",
    ProjectTitle: "House Floor Cleaning",
    ProjectUrl: "/projectDetails",
    ProjectIcon: <FaArrowRight />,
  },
  {
    id: 4,
    ProjectThumb: ProjectThumb,
    thumbTitle: "Cleaning",
    ProjectLocateIcon: <FaLocationDot />,
    ProjectLocation: "Sandigo, USA",
    ProjectTitle: "House Floor Cleaning",
    ProjectUrl: "/projectDetails",
    ProjectIcon: <FaArrowRight />,
  },
];

const Project = () => {
  const settings = {
    loop: true,
    spaceBetween: 30,
    speed: 1000,
    centeredSlides: true,
    initialSlide: 1,
    autoplay: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
      },
    },
  };
  return (
    <section className="bg-[url('/public/images/Project-bg.png')] bg-cover bg-center bg-no-repeat py-28 Project">
      <div className="Container">
        <div className="md:-mb-[11.2rem]">
          <h5 className="font-AlbertSans font-medium text-PrimaryColor-0 flex items-center gap-2">
            <img src={subTitleShape} draggable="false" />
            OUR SERVICES
          </h5>
          <h1 className="font-AlbertSans font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[40px] xl:leading-[50px] 2xl:text-[46px] 2xl:leading-[56px] text-HeadingColor-0 mt-5 mb-3 border-b border-BorderColor2-0 pb-9">
            Echofy Provide Environment <br />
            Best Leading Services
          </h1>
        </div>
        <div className="mt-[60px]">
          <Swiper {...settings}>
            <div>
              {ProjectData.map(
                ({
                  id,
                  ProjectThumb,
                  thumbTitle,
                  ProjectLocateIcon,
                  ProjectLocation,
                  ProjectUrl,
                  ProjectTitle,
                  ProjectIcon,
                }) => {
                  return (
                    <SwiperSlide key={id}>
                      <div className="pt-[180px]">
                        <ProjectCard
                          ProjectThumb={ProjectThumb}
                          thumbTitle={thumbTitle}
                          ProjectLocateIcon={ProjectLocateIcon}
                          ProjectLocation={ProjectLocation}
                          ProjectUrl={ProjectUrl}
                          ProjectTitle={ProjectTitle}
                          ProjectIcon={ProjectIcon}
                        />
                      </div>
                    </SwiperSlide>
                  );
                }
              )}
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Project;
