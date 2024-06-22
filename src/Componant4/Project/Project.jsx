/* eslint-disable no-unused-vars */
import {
  FaArrowRight,
  FaArrowRightLong,
  FaLocationDot,
  FaStarOfLife,
} from "react-icons/fa6";
import projectThumb from "/images/project-1.png";
import projectThumb2 from "/images/project-2.png";
import projectThumb3 from "/images/project-3.png";
import shape from "/images/project-content-shape2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    id: 1,
    projectThumb: projectThumb,
    shape: shape,
    projectSubTitle: "RENEWABLE POWER",
    projectTitle: "Solar Power Project",
    projectUrl: "/project_details",
    projectIcon: <FaArrowRight />,
  },
  {
    id: 2,
    projectThumb: projectThumb2,
    shape: shape,
    projectSubTitle: "RENEWABLE POWER",
    projectTitle: "Solar Power Project",
    projectUrl: "/project_details",
    projectIcon: <FaArrowRight />,
  },
  {
    id: 3,
    projectThumb: projectThumb3,
    shape: shape,
    projectSubTitle: "RENEWABLE POWER",
    projectTitle: "Solar Power Project",
    projectUrl: "/project_details",
    projectIcon: <FaArrowRight />,
  },
  {
    id: 4,
    projectThumb: projectThumb3,
    shape: shape,
    projectSubTitle: "RENEWABLE POWER",
    projectTitle: "Solar Power Project",
    projectUrl: "/project_details",
    projectIcon: <FaArrowRight />,
  },
];

const project = () => {
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
    <section className="py-28 project3 relative">
      <div className="Container">
        <div className="text-center">
          <h5 className="font-AlbertSans font-medium text-PrimaryColor-0 flex justify-center items-center gap-2">
            <FaStarOfLife />
            LATEST PROJECT
            <FaStarOfLife />
          </h5>
          <h1 className="font-AlbertSans font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[40px] xl:leading-[50px] 2xl:text-[46px] 2xl:leading-[56px] text-HeadingColor-0 mt-2 mb-6">
            Latest Successful Project
          </h1>
        </div>
      </div>
      <div className="mt-[60px]">
        <Swiper {...settings}>
          <div>
            {projectData.map(
              ({
                id,
                projectThumb,
                shape,
                projectSubTitle,
                projectUrl,
                projectTitle,
                projectIcon,
              }) => {
                return (
                  <SwiperSlide key={id}>
                    <div>
                      <ProjectCard
                        projectThumb={projectThumb}
                        shape={shape}
                        projectSubTitle={projectSubTitle}
                        projectUrl={projectUrl}
                        projectTitle={projectTitle}
                        projectIcon={projectIcon}
                      />
                    </div>
                  </SwiperSlide>
                );
              }
            )}
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default project;
