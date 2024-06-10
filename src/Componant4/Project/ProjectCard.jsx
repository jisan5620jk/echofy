/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const projectCard = ({
  projectThumb,
  shape,
  projectSubTitle,
  projectTitle,
  projectUrl,
  projectIcon,
}) => {
  return (
    <div className="relative z-10">
      <img src={projectThumb} />
      <div className="project-content3 absolute left-0 -bottom-full transition-all duration-500 w-9/12 bg-PrimaryColor-0">
        <div className="transition-all duration-500 pt-6 pl-4 lg:pl-10 2xl:pl-[48px] pb-8 2xl:pb-11 relative z-10 before:absolute before:-top-2 before:left-2 before:rounded-es before:w-full before:h-full before:bg-white before:-z-10">
          <img src={shape} draggable="false" className="absolute top-5 right-5 animate-zoomInOut"/>
          <p className="text-PrimaryColor-0 font-AlbertSans">
            {projectSubTitle}
          </p>
          <Link to={projectUrl}>
            <button className="font-AlbertSans font-semibold text-xl sm:text-2xl lg:text-[19px] xl:text-2xl text-HeadingColor-0 mt-2 text-left">
              {projectTitle}
            </button>
          </Link>
          <Link to={projectUrl} className="absolute -top-[35px] -right-[35px]">
            <button className="w-[70px] h-[70px] rounded-e text-3xl flex items-center justify-center text-white bg-PrimaryColor-0 relative before:absolute before:-top-1 before:left-1 before:rounded-e before:w-full before:h-full before:bg-white before:-z-10">
              {projectIcon}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default projectCard;
