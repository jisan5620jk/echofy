/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const TeamCard = ({
  teamThumb,
  socialIcon,
  socialIcon2,
  socialIcon3,
  socialIcon4,
  teamTitle,
  teamDesc,
}) => {
  return (
    <div className="group">
      <div className="relative z-10 overflow-hidden before:absolute before:bottom-0 before:left-0 before:bg-[#f5f8ed] before:w-full before:h-1/2 before:rounded-t-md before:-z-10">
        <img src={teamThumb} className="lg:w-full xl:w-[inherit] m-auto" />
      </div>
      <div className="bg-[#f5f8ed] text-center pt-[26px] pb-10 rounded-b-md relative before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[5px] before:bg-PrimaryColor-0 before:rounded-md before:transition-all before:duration-500 group-hover:before:w-full group-hover:before:left-0">
        <h5 className="font-AlbertSans font-semibold text-[26px] text-HeadingColor-0 pb-2">
          {teamTitle}
        </h5>
        <p className="font-AlbertSans text-PrimaryColor-0 font-medium">
          {teamDesc}
        </p>
        <ul className="flex gap-3 justify-center mt-7">
          <li>
            <Link to={"/"}>
              <button className="w-[35px] h-[35px] flex justify-center items-center rounded-full overflow-hidden relative bg-transparent border border-BorderColor2-0 text-TextColor-0 text-sm transition-all duration-500 hover:text-white z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                {socialIcon}
              </button>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <button className="w-[35px] h-[35px] flex justify-center items-center rounded-full overflow-hidden relative bg-transparent border border-BorderColor2-0 text-TextColor-0 text-sm transition-all duration-500 hover:text-white z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                {socialIcon2}
              </button>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <button className="w-[35px] h-[35px] flex justify-center items-center rounded-full overflow-hidden relative bg-transparent border border-BorderColor2-0 text-TextColor-0 text-sm transition-all duration-500 hover:text-white z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                {socialIcon3}
              </button>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <button className="w-[35px] h-[35px] flex justify-center items-center rounded-full overflow-hidden relative bg-transparent border border-BorderColor2-0 text-TextColor-0 text-sm transition-all duration-500 hover:text-white z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                {socialIcon4}
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TeamCard;
