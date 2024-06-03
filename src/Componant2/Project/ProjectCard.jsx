/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ProjectCard = ({
  projectThumb,
  projectSubTitle,
  projectShape,
  projectContentShape,
  projectTitle,
  buttonUrl,
  projectButton,
}) => {
  return (
    <div className="relative z-10 group rounded-md overflow-hidden">
      <div className="overflow-hidden relative z-10 before:absolute before:top-0 before:left-1/2 before:w-0 before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 group-hover:before:w-full group-hover:before:left-0 group-hover:before:opacity-0">
        <img src={projectThumb} draggable="false" className="w-full" />
        <img
          src={projectShape}
          draggable="false"
          className="absolute -top-80 -right-80 animate-rotate transition-all duration-500 group-hover:-top-[180px] group-hover:-right-[190px]"
        />
        <div className="project-content flex justify-between items-center absolute -bottom-full transition-all duration-500 left-0 2xl:left-7 2xl:w-8/12 -mt-[42px] bg-[#f5f8ed] rounded-t-md overflow-hidden px-4 md:px-8 z-10 border-b-[5px] border-PrimaryColor-0">
          <div>
            <img
              src={projectContentShape}
              draggable="false"
              className="absolute bottom-0 right-10 animate-dance2 -z-10 opacity-0 transition-all
           duration-500 group-hover:opacity-100"
            />
            <h6 className="font-AlbertSans font-medium text-TextColor-0 pt-[30px]">
              {projectSubTitle}
            </h6>
            <h5 className="font-AlbertSans font-semibold text-HeadingColor-0 text-[26px] lg:text-2xl xl:text-[26px]pt-1 pb-6">
              {projectTitle}
            </h5>
          </div>
          <div>
            <Link to={buttonUrl}>
              <button className="w-[46px] h-[46px] rounded-full bg-PrimaryColor-0 text-white text-2xl flex justify-center items-center">
                {projectButton}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
