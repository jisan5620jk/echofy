/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const TeamCard = ({
  teamThumb,
  socialIcon,
  socialIcon2,
  socialIcon3,
  teamTitle,
  teamDesc,
}) => {
  return (
    <div className="group overflow-hidden rounded-md">
      <div className="relative z-10 overflow-hidden after:absolute after:bottom-0 after:left-0 after:w-full after:h-0 after:transition-all after:duration-500 after:bg-gradient-to-t after:from-PrimaryColor-0 after:to-transparent group-hover:after:h-5/6">
        <img src={teamThumb} draggable="false" className="w-full" />
        <ul className="flex gap-3 absolute z-10 -bottom-1/4 left-1/2 -translate-x-1/2 transition-all duration-500 group-hover:bottom-6">
          <li>
            <Link to={"/"}>
              <button className="w-[40px] h-[40px] flex justify-center items-center rounded-full overflow-hidden relative bg-SecondaryColor-0 border border-white border-dashed hover:border-solid text-white transition-all duration-500 hover:text-PrimaryColor-0 text-sm z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                {socialIcon}
              </button>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <button className="w-[40px] h-[40px] flex justify-center items-center rounded-full overflow-hidden relative bg-SecondaryColor-0 border border-white border-dashed hover:border-solid text-white transition-all duration-500 hover:text-PrimaryColor-0 text-sm z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                {socialIcon2}
              </button>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <button className="w-[40px] h-[40px] flex justify-center items-center rounded-full overflow-hidden relative bg-SecondaryColor-0 border border-white border-dashed hover:border-solid text-white transition-all duration-500 hover:text-PrimaryColor-0 text-sm z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                {socialIcon3}
              </button>
            </Link>
          </li>
        </ul>
      </div>
      <div className="bg-[#f5f8ed] text-center pt-[22px] pb-[26px] relative before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-1 before:bg-PrimaryColor-0 before:transition-all before:duration-500 group-hover:before:w-full group-hover:before:left-0">
        <h5 className="font-AlbertSans font-bold text-[22px] text-HeadingColor-0">
          {teamTitle}
        </h5>
        <p className="font-AlbertSans text-TextColor-0">{teamDesc}</p>
      </div>
    </div>
  );
};

export default TeamCard;
