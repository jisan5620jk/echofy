/* eslint-disable no-unused-vars */
import { Link, NavLink } from "react-router-dom";
import {
  FaBars,
  FaFacebookF,
  FaLinkedinIn,
  FaPhone,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";
import { BiChevronDown } from "react-icons/bi";
import Logo from "/images/logo.png";
import { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineMailOpen } from "react-icons/hi";

const Navbar2 = () => {
  //sticky

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */

  const isSticky = (e) => {
    const header = document.querySelector(".header-section");
    const scrollTop = window.scrollY;
    scrollTop >= 250
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };

  // modal openar

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav
      className={`w-full transition-all duration-300 bg-transparent relativee text-TextColor-0 z-[99999]`}
    >
      {/* top Navbar */}
      <div className="bg-SecondaryColor-0">
        <div className="Container flex items-center justify-between h-[50px]">
          <div className="flex items-center gap-10">
            <p className="font-AlbertSans text-[15px] text-white sm:flex hidden items-center gap-1">
              <CiLocationOn className="text-xl relative bottom-[2px] text-PrimaryColor-0" />
              102/B New Market, Sandigo-USA
            </p>
            <Link
              to={"/"}
              className="font-AlbertSans text-[15px] text-white md:flex items-center gap-2 hidden"
            >
              <HiOutlineMailOpen size={"16"} className="text-PrimaryColor-0" />
              example@gmail.com
            </Link>
          </div>
          <div className="flex items-center gap-10">
            <div className="lg:flex items-center gap-2 hidden">
              <span className="flex items-center gap-2 text-sm text-PrimaryColor-0">
                <FaPhone />
              </span>
              <Link
                to={"/"}
                className="font-AlbertSans font-medium text-sm text-white"
              >
                +123 (4567) 890
              </Link>
            </div>
            <ul className="flex gap-3 items-center">
              <li>
                <Link
                  to={"/"}
                  className="transition-all duration-500 text-white"
                >
                  <FaFacebookF />
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="transition-all duration-500 text-white"
                >
                  <FaXTwitter />
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="transition-all duration-500 text-white"
                >
                  <FaLinkedinIn />
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="transition-all duration-500 text-white"
                >
                  <FaPinterestP />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* top Navbar */}
      <header data-aos="zoom-in" data-aos-duration="1000">
        <div className="header-section">
          <div className="Container">
            {/* main Navbar */}
            <div className="flex flex-col lg:flex-row items-center justify-between lg:h-[90px] bg-PrimaryColor-0 rounded-b-md lg:-mb-[90px] -mb-[70px] relative z-50 px-7 w-full">
              {/* website Logo */}
              <div>
                <Link to="/">
                  <img
                    src={Logo}
                    className="hidden lg:block w-full brightness-0 invert-[1]"
                  />
                </Link>
              </div>
              {/* small screen size */}
              <div className="w-full lg:hidden flex justify-between h-[70px] items-center py-3">
                <div className="w-28">
                  <Link to="/">
                    <img
                      draggable="false"
                      src={Logo}
                      className="block lg:hidden brightness-0 invert-[1]"
                      alt="constre_website_logo"
                    />
                  </Link>
                </div>
                {/* toggle bar mode. */}
                <button
                  className="lg:hidden block focus:outline-none "
                  onClick={toggleNavbar}
                >
                  {/* modal open and close */}
                  {isOpen ? (
                    <IoMdClose className="w-6 h-6 text-white" />
                  ) : (
                    <FaBars className="w-5 h-5 text-white" />
                  )}
                </button>
              </div>
              {/* All navLink are hear with active */}
              <div className="flex items-center 2xl:gap-7">
                <div className="text-white">
                  <ul
                    className={`${
                      isOpen ? "block" : "hidden"
                    } text-right lg:w-fit ease-in-out flex-1 lg:flex flex flex-col lg:flex-row capitalize text-sm lg:bg-transparent py-3 lg:py-0 font-AlbertSans font-medium sm:text-base text-white transition-all duration-500
                `}
                  >
                    <NavLink
                      to={"/"}
                      className={`${({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "active"
                          : ""} text-white text-left font-AlbertSans font-medium text-[15px] lg:border-b-0 px-5 lg:px-3 xl:px-5 py-2 w-full block transition-all duration-300 group relative`}
                    >
                      <span className="flex items-center">
                        Home
                        <BiChevronDown className="ml-1" />
                      </span>
                      <div
                        className="absolute pt-5 lg:pt-8 z-[1]"
                        data-aos="zoom-in-left"
                        data-aos-duration="1000"
                      >
                        <ul className="shadow-lg hidden group-hover:block rounded-sm text-white w-[220px] text-left transition-all duration-500 text-sm sm:text-base py-4 bg-PrimaryColor-0 ">
                          <div className="px-5 group hover:bg-PrimaryColor-0 ">
                            <li className="hover:ml-3 duration-300">
                              <Link to={"/"} className="py-2 block">
                                Home One
                              </Link>
                            </li>
                          </div>
                          <div className="px-5 group hover:bg-PrimaryColor-0 ">
                            <li className="hover:ml-3 duration-300">
                              <Link to={"/home2"} className="py-2 block">
                                Home Two
                              </Link>
                            </li>
                          </div>
                          <div className="px-5 group hover:bg-PrimaryColor-0 ">
                            <li className="hover:ml-3 duration-300">
                              <Link to={"/home3"} className="py-2 block">
                                Home Three
                              </Link>
                            </li>
                          </div>
                          <div className="px-5 group hover:bg-PrimaryColor-0 ">
                            <li className="hover:ml-3 duration-300">
                              <Link to={"/home4"} className="py-2 block">
                                Home Four
                              </Link>
                            </li>
                          </div>
                          <div className="px-5 group hover:bg-SecondaryColor-0 ">
                            <li className="hover:ml-3 duration-300">
                              <Link to="/home5" className="py-2 block">
                                Home Five
                              </Link>
                            </li>
                          </div>
                        </ul>
                      </div>
                    </NavLink>
                    <NavLink
                      className={`${({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "active"
                          : ""} text-white text-left font-AlbertSans font-medium text-[15px]hover:text-PrimaryColor-0 lg:border-b-0 px-5 lg:px-3 xl:px-5 py-2 w-full block transition-all duration-300 group relative `}
                      to={"/about"}
                    >
                      <span>about</span>
                    </NavLink>
                    <NavLink
                      className={`${({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "active"
                          : ""}text-white text-left font-AlbertSans font-medium text-[15px] lg:border-b-0 px-5 lg:px-3 xl:px-5 py-2 w-full block transition-all duration-300 group relative `}
                      to={"#"}
                    >
                      <span className="flex items-center">
                        Service
                        <BiChevronDown className="ml-1" />
                      </span>
                      <div className="absolute pt-5 lg:pt-8 z-20">
                        <ul className="shadow-lg hidden group-hover:block rounded-sm text-white w-[220px] text-left transition-all duration-500 text-sm sm:text-base py-4 bg-HeadingColor-0 ">
                          <div className="px-5 group hover:bg-PrimaryColor-0 ">
                            <li className="hover:ml-3 duration-300">
                              <Link to={"/service"} className="py-2 block">
                                Service
                              </Link>
                            </li>
                          </div>
                          <div className="px-5 group hover:bg-PrimaryColor-0 ">
                            <li className="hover:ml-3 duration-300">
                              <Link
                                to={"/service_details"}
                                className="py-2 block"
                              >
                                Service Details
                              </Link>
                            </li>
                          </div>
                        </ul>
                      </div>
                    </NavLink>
                    <NavLink
                      className={`${({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "active"
                          : ""} text-white text-left font-AlbertSans font-medium text-[15px] lg:border-b-0 px-5 lg:px-3 xl:px-5 py-2 w-full block transition-all duration-300 group relative `}
                      to={"#"}
                    >
                      <span className="flex items-center">
                        Pages
                        <BiChevronDown className="ml-1" />
                      </span>
                      <div className="absolute pt-5 lg:pt-8 z-20">
                        <ul className="shadow-lg hidden group-hover:block rounded-sm text-white w-[220px] text-left transition-all duration-500 text-sm sm:text-base py-4 bg-HeadingColor-0 ">
                          <div className="px-5 group hover:bg-PrimaryColor-0 ">
                            <li className="hover:ml-3 duration-300">
                              <Link to={"/about"} className="py-2 block">
                                About Us
                              </Link>
                            </li>
                          </div>
                          <div className="px-5 group hover:bg-PrimaryColor-0 ">
                            <li className="hover:ml-3 duration-300">
                              <Link to={"/service"} className="py-2 block">
                                Service
                              </Link>
                            </li>
                          </div>
                          <div className="px-5 group hover:bg-PrimaryColor-0 ">
                            <li className="hover:ml-3 duration-300">
                              <Link
                                to={"/service_details"}
                                className="py-2 block"
                              >
                                Service Details
                              </Link>
                            </li>
                          </div>
                          <div className="px-5 group hover:bg-PrimaryColor-0">
                            <li className="hover:ml-3 duration-300">
                              <Link to="/donation_inner" className="py-2 block">
                                Donations
                              </Link>
                            </li>
                          </div>
                          <div className="px-5 group hover:bg-PrimaryColor-0 ">
                            <li className="hover:ml-3 duration-300">
                              <Link to={"/team_inner"} className="py-2 block">
                                Team Member
                              </Link>
                            </li>
                          </div>
                          <div className="px-5 group hover:bg-PrimaryColor-0 ">
                            <li className="hover:ml-3 duration-300">
                              <Link to={"/project"} className="py-2 block">
                                Projects
                              </Link>
                            </li>
                          </div>
                          <div className="px-5 group hover:bg-PrimaryColor-0 ">
                            <li className="hover:ml-3 duration-300">
                              <Link
                                to={"/project_details"}
                                className="py-2 block"
                              >
                                Project Details
                              </Link>
                            </li>
                          </div>
                          <div className="px-5 group hover:bg-PrimaryColor-0 ">
                            <li className="hover:ml-3 duration-300">
                              <Link
                                to={"/pricing_inner"}
                                className="py-2 block"
                              >
                                Pricing Plan
                              </Link>
                            </li>
                          </div>
                          <div className="px-5 group hover:bg-PrimaryColor-0 ">
                            <li className="hover:ml-3 duration-300">
                              <Link to={"/testimonial"} className="py-2 block">
                                Testimonial
                              </Link>
                            </li>
                          </div>
                          <div className="px-5 group hover:bg-PrimaryColor-0 ">
                            <li className="hover:ml-3 duration-300">
                              <Link to={"/appointment"} className="py-2 block">
                                Appointment
                              </Link>
                            </li>
                          </div>
                          <div className="px-5 group hover:bg-PrimaryColor-0">
                            <li className="hover:ml-3 duration-300">
                              <Link to="/faq_inner" className="py-2 block">
                                Faq
                              </Link>
                            </li>
                          </div>
                        </ul>
                      </div>
                    </NavLink>
                    {/* blog sub menu link */}
                    <NavLink
                      className={`${({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "active"
                          : ""} text-white text-left font-AlbertSans font-medium text-[15px] lg:border-b-0 px-5 lg:px-3 xl:px-5 py-2 w-full block transition-all duration-300 group relative `}
                      to={"#"}
                    >
                      <span className="flex items-center">
                        BLOG
                        <BiChevronDown className="ml-1" />
                      </span>
                      <div className="absolute pt-5 lg:pt-8 z-20">
                        <ul className="shadow-lg hidden group-hover:block rounded-sm text-white w-[220px] text-left transition-all duration-500 text-sm sm:text-base py-4 bg-SecondaryColor-0 ">
                          <div className="px-5 group hover:bg-PrimaryColor-0 ">
                            <li className="hover:ml-3 duration-300">
                              <Link to={"/blog_grid"} className="py-2 block">
                                Blog Grid
                              </Link>
                            </li>
                          </div>
                          <div className="px-5 group hover:bg-PrimaryColor-0 ">
                            <li className="hover:ml-3 duration-300">
                              <Link to={"/blog_list"} className="py-2 block">
                                Blog List
                              </Link>
                            </li>
                          </div>
                          <div className="px-5 group hover:bg-PrimaryColor-0 ">
                            <li className="hover:ml-3 duration-300">
                              <Link to={"/blog_details"} className="py-2 block">
                                Blog Details
                              </Link>
                            </li>
                          </div>
                        </ul>
                      </div>
                    </NavLink>
                    <NavLink
                      className={`${({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "active"
                          : ""} text-white text-left font-AlbertSans font-medium text-[15px] lg:border-b-0 px-5 lg:px-3 xl:px-5 py-2 w-full block transition-all duration-300`}
                      to={"/contact"}
                    >
                      Contact
                    </NavLink>
                  </ul>
                </div>
                <div className="hidden lg:flex items-center gap-7 lg:gap-0 xl:gap-5 2xl:gap-7">
                  <Link to={"/"}>
                    <IoSearch className="text-2xl text-white" />
                  </Link>
                  <Link
                    to={"/appointment"}
                    className="header-btn bg-transparent border !border-white before:bg-white hover:text-PrimaryColor-0"
                  >
                    Get A Quote
                  </Link>
                  <button className="text-white">
                    <TbGridDots size={"36"} className="hidden xl:block" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </nav>
  );
};

export default Navbar2;
