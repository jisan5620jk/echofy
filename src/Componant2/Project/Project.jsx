/* eslint-disable no-unused-vars */
import projectThumb from "/images/project-thumb.jpg";
import projectThumb2 from "/images/project-thumb2.jpg";
import projectThumb3 from "/images/project-thumb3.jpg";
import projectThumb4 from "/images/project-thumb4.jpg";
import projectShape from "/images/project-shape.png";
import projectContentShape from "/images/project-content-shape.png";
import { Swiper, SwiperSlide } from "swiper/react";
import subTitleShape from "/images/sub-title-shape.png";
import "swiper/css";
import ProjectCard from "./ProjectCard";
import { GoArrowUpRight } from "react-icons/go";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const ProjectData = [
  {
    id: 1,
    projectThumb: projectThumb,
    projectSubTitle: "Climate",
    projectTitle: "Cleaning Forest",
    buttonUrl: "/project_details",
    projectButton: <GoArrowUpRight />,
    projectContentShape: projectContentShape,
    projectShape: projectShape,
  },
  {
    id: 2,
    projectThumb: projectThumb2,
    projectSubTitle: "Environment",
    projectTitle: "Tree Plantation",
    buttonUrl: "/project_details",
    projectButton: <GoArrowUpRight />,
    projectContentShape: projectContentShape,
    projectShape: projectShape,
  },
  {
    id: 3,
    projectThumb: projectThumb3,
    projectSubTitle: "Recycling",
    projectTitle: "Plastic Recycling",
    buttonUrl: "/project_details",
    projectButton: <GoArrowUpRight />,
    projectContentShape: projectContentShape,
    projectShape: projectShape,
  },
  {
    id: 4,
    projectThumb: projectThumb4,
    projectSubTitle: "Climate",
    projectTitle: "Cleaning Forest",
    buttonUrl: "/project_details",
    projectButton: <GoArrowUpRight />,
    projectContentShape: projectContentShape,
    projectShape: projectShape,
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
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + ' pagination-bullet"></span>';
    },
  };
  return (
    <section className="project bg-[url('/images/Project-bg.png')] bg-cover bg-center bg-no-repeat py-28 project">
      <div className="text-center">
        <h5 className="font-AlbertSans font-medium text-PrimaryColor-0 flex items-center justify-center gap-2">
          <img src={subTitleShape} draggable="false" />
          OUR PROJECTS
        </h5>
        <h1 className="font-AlbertSans font-bold text-xl leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[40px] xl:leading-[50px] 2xl:text-[46px] 2xl:leading-[56px] text-HeadingColor-0 mt-5 mb-3">
          Finished the Latest Leading <br />
          Environmental Works
        </h1>
      </div>
      <div className="mt-[46px]">
        <Swiper {...settings} pagination={pagination} modules={[Pagination]}>
          <div>
            {ProjectData.map(
              ({
                id,
                projectThumb,
                projectShape,
                projectContentShape,
                projectSubTitle,
                projectTitle,
                buttonUrl,
                projectButton,
                buttonIcon,
              }) => {
                return (
                  <SwiperSlide key={id}>
                    <div className="pb-[100px]">
                      <ProjectCard
                        projectThumb={projectThumb}
                        projectContentShape={projectContentShape}
                        projectShape={projectShape}
                        projectSubTitle={projectSubTitle}
                        projectTitle={projectTitle}
                        buttonUrl={buttonUrl}
                        projectButton={projectButton}
                        buttonIcon={buttonIcon}
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

export default Project;
