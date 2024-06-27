import { Link } from "react-router-dom";
import footerLogo from "/images/logo.png";
import footerShape3 from "/images/footer-shape.png";
import footerLine from "/images/footer-line.png";
import post1 from "/images/gallery-1.jpg";
import post2 from "/images/gallery-2.jpg";
import post3 from "/images/gallery-3.jpg";
import post4 from "/images/gallery-4.jpg";
import post5 from "/images/footer-gallery-5.png";
import post6 from "/images/gallery-5.jpg";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";

const Footer4 = () => {
  return (
    <footer className="bg-HeadingColor-0 relative z-10 overflow-hidden">
      <img
        src={footerLine}
        draggable="false"
        className="absolute -z-10 right-0 -bottom-20 opacity-70"
      />
      <img
        src={footerShape3}
        draggable="false"
        className="absolute -z-10 top-0 left-0 animate-dance2"
      />
      <div className="Container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8  lg:grid-cols-4 items-center py-[56px] border-b border-BorderColor-0">
          <div>
            <Link to={"/"}>
              <img src={footerLogo} draggable={false} />
            </Link>
          </div>
          <div className="flex gap-4">
            <div className="w-[50px] h-[50px] rounded-full bg-[#14292a] flex items-center justify-center text-white">
              <FaPhoneAlt size={"16"} />
            </div>
            <div>
              <p className="font-AlbertSans text-TextColor2-0 pb-1">
                Call Any Time
              </p>
              <button className="font-AlbertSans font-semibold text-lg lg:text-sm xl:text-lg text-white transition-all duration-500 hover:text-PrimaryColor-0">
                +1 (800) 123 456 789
              </button>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-[50px] h-[50px] rounded-full bg-[#14292a] flex items-center justify-center text-white">
              <HiOutlineMail size={"24"} />
            </div>
            <div>
              <p className="font-AlbertSans text-TextColor2-0 pb-1">
                Email Us Here
              </p>
              <button className="font-AlbertSans font-semibold text-lg lg:text-sm xl:text-lg text-white transition-all duration-500 hover:text-PrimaryColor-0">
                support@echfy.com
              </button>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-[50px] h-[50px] rounded-full bg-[#14292a] flex items-center justify-center text-white">
              <MdLocationOn size={"24"} />
            </div>
            <div>
              <p className="font-AlbertSans text-TextColor2-0 pb-1">
                Office Address
              </p>
              <button className="font-AlbertSans font-semibold text-lg lg:text-sm xl:text-lg text-white transition-all duration-500 hover:text-PrimaryColor-0">
                197 kalifornia, USA
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-5 lg:gap-0 mt-24">
          <div className="col-span-12 md:col-span-6 lg:col-span-4 xl:mr-10 2xl:mr-16">
            <h4 className="font-AlbertSans text-2xl text-white font-semibold pb-5">
              About Company
            </h4>
            <p className="font-AlbertSans text-white opacity-70 mt-10 mb-9">
              Sometimes goods can arrive early when creative designed place to
              stored for design space you make to very easy and quickly.
            </p>
            <ul className="flex gap-3">
              <li>
                <button className="w-9 h-9 rounded-full bg-[#0b2f21] flex items-center justify-center text-white overflow-hidden transition-all duration-500 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                  <FaFacebookF />
                </button>
              </li>
              <li>
                <button className="w-9 h-9 rounded-full bg-[#0b2f21] flex items-center justify-center text-white overflow-hidden transition-all duration-500 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                  <FaXTwitter />
                </button>
              </li>
              <li>
                <button className="w-9 h-9 rounded-full bg-[#0b2f21] flex items-center justify-center text-white overflow-hidden transition-all duration-500 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                  <FaLinkedinIn />
                </button>
              </li>
              <li>
                <button className="w-9 h-9 rounded-full bg-[#0b2f21] flex items-center justify-center text-white overflow-hidden transition-all duration-500 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                  <FaPinterestP />
                </button>
              </li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-2">
            <h4 className="font-AlbertSans text-2xl text-white font-semibold mb-[38px]">
              Explore
            </h4>
            <ul>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center gap-2 font-AlbertSans text-white transition-all duration-500 relative before:absolute before:bottom-0 before:right-0 before:w-0 before:h-[1px] before:bg-PrimaryColor-0 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-PrimaryColor-0 mb-[18px]">
                    About Us
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center gap-2 font-AlbertSans text-white transition-all duration-500 relative before:absolute before:bottom-0 before:right-0 before:w-0 before:h-[1px] before:bg-PrimaryColor-0 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-PrimaryColor-0 mb-[18px]">
                    Safari Booking
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center gap-2 font-AlbertSans text-white transition-all duration-500 relative before:absolute before:bottom-0 before:right-0 before:w-0 before:h-[1px] before:bg-PrimaryColor-0 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-PrimaryColor-0 mb-[18px]">
                    Tour Packages
                  </button>
                </Link>
              </li>{" "}
              <li>
                <Link to={"/"}>
                  <button className="flex items-center gap-2 font-AlbertSans text-white transition-all duration-500 relative before:absolute before:bottom-0 before:right-0 before:w-0 before:h-[1px] before:bg-PrimaryColor-0 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-PrimaryColor-0 mb-[18px]">
                    National Park Map
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center gap-2 font-AlbertSans text-white transition-all duration-500 relative before:absolute before:bottom-0 before:right-0 before:w-0 before:h-[1px] before:bg-PrimaryColor-0 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-PrimaryColor-0 mb-[18px]">
                    Contact Us
                  </button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <h4 className="font-AlbertSans text-2xl text-white font-semibold mb-[38px]">
              Useful Links
            </h4>
            <ul>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center gap-2 font-AlbertSans text-white transition-all duration-500 relative before:absolute before:bottom-0 before:right-0 before:w-0 before:h-[1px] before:bg-PrimaryColor-0 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-PrimaryColor-0 mb-[18px]">
                    Crocodile Exhibit
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center gap-2 font-AlbertSans text-white transition-all duration-500 relative before:absolute before:bottom-0 before:right-0 before:w-0 before:h-[1px] before:bg-PrimaryColor-0 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-PrimaryColor-0 mb-[18px]">
                    Fact And Figures
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center gap-2 font-AlbertSans text-white transition-all duration-500 relative before:absolute before:bottom-0 before:right-0 before:w-0 before:h-[1px] before:bg-PrimaryColor-0 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-PrimaryColor-0 mb-[18px]">
                    Herbivores Safari
                  </button>
                </Link>
              </li>{" "}
              <li>
                <Link to={"/"}>
                  <button className="flex items-center gap-2 font-AlbertSans text-white transition-all duration-500 relative before:absolute before:bottom-0 before:right-0 before:w-0 before:h-[1px] before:bg-PrimaryColor-0 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-PrimaryColor-0 mb-[18px]">
                    National Zoo Map
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center gap-2 font-AlbertSans text-white transition-all duration-500 relative before:absolute before:bottom-0 before:right-0 before:w-0 before:h-[1px] before:bg-PrimaryColor-0 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:text-PrimaryColor-0 mb-[18px]">
                    Summer Festival
                  </button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <h4 className="font-AlbertSans text-2xl text-white font-semibold mb-11">
              Recent Post
            </h4>
            <ul className="grid grid-cols-3 gap-2">
              <li>
                <Link to={"/"}>
                  <img src={post1} draggable={false} className="w-full rounded" />
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <img src={post2} draggable={false} className="w-full rounded" />
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <img src={post3} draggable={false} className="w-full rounded" />
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <img src={post4} draggable={false} className="w-full rounded" />
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <img src={post5} draggable={false} className="w-full h-full rounded" />
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <img src={post6} draggable={false} className="w-full rounded" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-left py-6 bg-[#031f20] mt-24">
        <div className="Container flex flex-col gap-5 md:flex-row md:gap-0 justify-between">
          <p className="font-AlbertSans text-TextColor2-0">
            © Copyright 2024 By{" "}
            <Link to={"/"} className="text-PrimaryColor-0 !opacity-100">
              Dream It
            </Link>{" "}
            Solution.
          </p>
          <div>
            <ul className="flex gap-7">
              <li>
                <Link to={"/"}>
                  <button className="font-AlbertSans text-white opacity-60 transition-all duration-500 hover:opacity-100">
                    Privacy & Policy
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="font-AlbertSans text-white opacity-60 transition-all duration-500 hover:opacity-100">
                    Supports
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer4;
